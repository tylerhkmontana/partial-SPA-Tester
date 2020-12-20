const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')


app.use(expressLayouts)
app.set('view engine', 'ejs')
app.set("layout extractStyles", true)

app.use(express.static('public'))

app.use('/', require('./routes/index.router.js'))

app.use('/about', require('./routes/about.router.js'))

app.use('/pricing', require('./routes/pricing.router.js'))

app.use('/portfolios', require('./routes/portfolios.router.js'))

// app.use('*', async (req, res) => {
//   res.redirect('/')
// })

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server running on port ${port}`))