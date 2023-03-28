import needle from "needle";
//search data
const data={
    age:44
}
//create a new 
const addData={
    stdnum:'111010008',
    fname:'Megan',
    lname: 'Cruz',
    age: 25
}
//perform read and creation of data
needle.post('http://localhost:3000/add-students',{
    stdnum: addData.stdnum,
    fname: addData.fname,
    lname:addData.lname,
    age:addData.age
},(req,res)=>{
    console.log(res.body);
})
needle.post('http://localhost:3000/find-students-post',{
    age:data.age
},(req,res)=>{
    console.log(res.body);
})