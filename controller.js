import mongoose from "mongoose";
await mongoose.connect("mongodb://127.0.0.1:27017/ICS",
{
    useNewUrlParser: true,
    useUnifiedTopology:true,
}
)
const homepage = (req,res) => {
    res.send('Welcome to the homepage');
}
// const addData={
//     stdnum:'111010008',
//     fname:'Megan',
//     lname: 'Cruz',
//     age: 25
// }
const findStudents = async (req,res)=>{ //didnt work
    res.send(await Student.find({}));
}
const findStudentsPost = async(req,res)=>{ //(2)
    res.send(await Student.find({age: req.body}))
}
//save for adding of students
const addStudentPost = async (req,res)=>{
    try{
        const student = new Student({
            stdnum:req.body.stdnum,
            fname:req.body.fname,
            lname:req.body.lname,
            age:req.body.age,
        });
        const result = await student.save();
        res.send(result);
    }
    catch(err){
        res.status(500).send(err.message);
    }
}
export {homepage,findStudents,findStudentsPost, addStudentPost};