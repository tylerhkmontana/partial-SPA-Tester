const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('pages/index', { title: 'Home' })
})

module.exports = router