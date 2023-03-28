//install express and needle
import express from 'express';
import router from './router.js';
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// const Student = mongoose.model('students',{
//     stdnum: String,
//     fname: String,
//     lname: String,
//     age: Number,
// })
console.log("Server now running on port 3000");
app.listen(3000);
router(app);