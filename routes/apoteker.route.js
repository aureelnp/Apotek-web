/** panggil express */
const express = require(`express`)

/** buat object `app` */
const app = express()

/** minta izin untuk membaca data yang dikirimkan melalui form */
app.use(express.urlencoded({ extended: true }))

//panggil controller customer
const apotekerController = require(`../controllers/apoteker.controller`)

/** load authorization from middleware */
const authorization = require(`../middleware/authorization`)

/** define route untuk access data customer */
app.get(`/`, authorization.cekUser, apotekerController.showDataApoteker)

/** define route untuk nampilin form-customer */
app.get(`/add`, authorization.cekUser, apotekerController.showTambahApoteker)

/** define route untuk memproses tambah data customer */
app.post(`/add`, authorization.cekUser, apotekerController.prosesTambahData)

/** define route untuk nampilin form customer dgn data yg akan diubah */
app.get(`/edit/:id`, authorization.cekUser, apotekerController.showEditApoteker)

/** define route untuk memproses perubahan data */
app.post(`/edit/:id`, authorization.cekUser, apotekerController.prosesUbahData)

/** create route for process delete customer */
app.get("/delete/:id",authorization.cekUser,  apotekerController.processDelete)
/** :id -> name of paramter URL */

/** export object app */
module.exports = app

