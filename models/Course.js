const mongoose = require('mongoose');
const slugify = require('slugify');

mongoose.set('strictQuery', false);
const Schema = mongoose.Schema;

const CourseShema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  slug: {
    type:String,
    unique: true,
  },
  category:{ // Course ve Category modeli arasında ilişki kuruyoruz.
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category", // referans verdiğim model'in ismi
  }
});

CourseShema.pre('validate',function(next){
  this.slug = slugify(this.name,{
    lower:true,
    strict:true,
  });
  next();
})


const Course = mongoose.model('Course',CourseShema);

module.exports = Course;


