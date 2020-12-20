const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('pages/pricing', { title: 'Pricing' })
})

module.exports = router