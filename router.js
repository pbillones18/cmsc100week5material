import {homepage, findStudents, findStudentsPost, addStudentPost} from './controller.js';

const router = (app)=>{
    app.get('/', homepage);
    app.get('/find-students', findStudents);
    app.post('/find-students-post',findStudentsPost);
    app.post('/add-students',addStudentPost);
}

export default router;