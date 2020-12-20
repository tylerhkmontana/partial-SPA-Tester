const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('pages/portfolios', { title: 'Portfolios' })
})

module.exports = router