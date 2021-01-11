//Get All Bootcamps
//route GET /api/v1/bootcamps
//access Public
exports.getBootcamps = (req, res, next) => {
  res
  .status(200)
  .json({ success: true, msg: 'Show all Bootcamps' })
}

//Get Bootcamp
//route GET /api/v1/bootcamps/:id
//access Public
exports.getBootcamp = (req, res, next) => {
  res
  .status(200)
  .json({ success: true, msg: 'Show bootcamp ${req.params.id}' })
}

//Create new Bootcamp
//route POST /api/v1/bootcamps/:id
//access Private
exports.createBootcamp = (req, res, next) => {
  res
  .status(200)
  .json({ success: true, msg: 'Create Bootcamp' })
}

//Update Bootcamp
//route PUT /api/v1/bootcamps/:id
//access Public
exports.updateBootcamp = (req, res, next) => {
  res
  .status(200)
  .json({ success: true, msg: 'Update Bootcamp ${req.params.id}' })
}

//Delete Bootcamp
//route DELETE /api/v1/bootcamps/:id
//access Public
exports.deleteBootcamp = (req, res, next) => {
  res
  .status(200)
  .json({ success: true, msg: 'Delete Bootcamp ${req.params.id}' })
}