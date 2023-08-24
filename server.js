/** load library express */
const express = require(`express`)

/** instance "app" object */
const app = express()

/** define port for the server */
const PORT = `8000`

/** set view engine to ejs */
app.set(`view engine`, `ejs`)

/** load library express-session */
const session = require(`express-session`)

/** load routes */
app.use(session({
    secret: `I Love Javascript`,
    resave: false,
    saveUninitialized: false
}))

const obat = require(`./routes/obat.route`)
const customer = require(`./routes/customer.route`)
const apoteker = require(`./routes/apoteker.route`)
const auth = require(`./routes/auth.route`)
const transaksi = require(`./routes/transaksi.route`)
const cart = require(`./routes/cart.route`)

/** define prefix for route obat */
app.use(`/obat`, obat)

/** define prefix for route customer */
app.use(`/pelanggan`, customer)

/** define prefix for route apoteker */
app.use(`/pekerja`, apoteker)

/** define prefix auth */
app.use(`/auth`, auth)

/** define prefix for transaksi */
app.use(`/transaksi`, transaksi)

/** define prefix cart */
app.use(`/cart`, cart)

/** running web server based on defined PORT */
app.listen(PORT, () => {
    console.log(`Server Apotek is running on port ${PORT}`);
})

