import mongoose from "mongoose";

await mongoose.connect('mongodb://127.0.0.1:27017/ICS',
{useNewUrlParser: true, useUnifiedTopology:true});

const Student = mongoose.model('students',{
    stdnum: String,
    fname: String,
    lname: String,
    age: Number,
})
const newStudent = new Student({
    stdnum:'123456789',
    fname:"Juan",
    lname:"Dela Cruz",
    age:20,
})

// let data = await Student.find({age:17})
// let data = await newStudent.save();

//update data
// let updateStudent = await Student.findOne({stdnum:"123456789"});
// updateStudent.age=25
// let data = await updateStudent.save();

// let updateStudent = await Student.updateMany(
//     {age:17},
//     {$set: {fname:"John"}}

// )
let data = await Student.deleteMany({age: {$gt: 17,$lte: 20}});


// console.log(updateStudent);
// console.log(data)
process.exit();