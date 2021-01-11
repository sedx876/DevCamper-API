const logger = (req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
    .bgMagenta
  )
  next()
}

module.exports = logger 