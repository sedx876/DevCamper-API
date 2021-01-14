const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/async')
const Course = require('../models/Course')
const Bootcamp = require('../models/Bootcamp')

// @desc      Get courses
// @route     GET /api/v1/courses
// @route     GET /api/v1/bootcamps/:bootcampId/courses
// @access    Public
exports.getCourses = asyncHandler(async (req, res, next) => {
  let query 
  if(req.params.bootcampId){
    query = Course.find({ bootcamp: req.params.bootcampId })
  }else{
    query = Course.find().populate('bootcamp')
  }
  const courses = await query 
  res.status(200).json({
    success: true,
    count: courses.length,
    data: courses
  })
})

// @desc      Get single course
// @route     GET /api/v1/courses/:id
// @access    Public

// @desc      Add course
// @route     POST /api/v1/bootcamps/:bootcampId/courses
// @access    Private

// @desc      Update course
// @route     PUT /api/v1/courses/:id
// @access    Private

// @desc      Delete course
// @route     DELETE /api/v1/courses/:id
// @access    Private