
const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors());

const RightSideCourseNav = require('./data/RightSideCourseNav.json')


app.get('/',(req, res) => {
    res.send('Course API Running');

});

app.get('/course-categories',(req, res)  =>{
    res.send(RightSideCourseNav);
})


app.listen(port, ()=>{
    console.log('eteach-academy server running on port', port);
})