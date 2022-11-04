// 1. Make a POST API with URL query, Body & Header Properites.
var express = require('express');
var bodyParser = require('body-parser');
app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post('/', function(req,res){
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;

    res.send(`Your firstName: ${firstName}. Your lastName: ${lastName}`);
});

app.post('/user', function(req, res){
    let name = req.body.name;
    let age = req.body.age;
    let country = req.body.country;

    res.send(`Your name ${name}. Your age ${age}. and your counrty ${country}.`);
})

app.post('/home', function(req, res){
    let userName = req.header('userName');
    let password = req.header('password');

    res.send(`Your userName: ${userName}. Your password ${password}`)
})

app.listen(PORT, ()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})



// 2. Make a file upload Api support PNG, JPG file only
// var express = require('express');
// var multer = require('multer');
// var app = express();

// var port = 3001;

// //file upload
// var storage = multer.diskStorage({
//     destination: function (req, file, callback) {
//         callback(null, './uploads')
//     },
//     filename: function (req, file, callback) {
//       var name = Date.now() + '-' + file.originalname
//       callback(null, name)
//     }
//   })
  

// var upload = multer({ storage: storage }).single("image");


// app.get('/register', (req, res)=>{
//     res.status(200).sendFile(__dirname + '/index.html');
// })

// app.post('/register', (req, res)=>{
//     res.status(200);
//     upload(req, res, (error)=>{

//         if(error){
//             res.send("<h1>file upload fail</h1>");
//         }else{
//         res.send("<h1> file upload success </h1>");
//         }

//     })
// })

// app.get('/test',(req,res)=>{
//     res.status(200).send('testing api');
// })

// app.listen(port,()=>{
//     console.log(`server is running at http://localhost:${port}`);
// })


//3. Make a file Download API , that can download file form application directory
// var express = require('express');
// app = express();
// var port = 3002;

// app.get('/download', function(req, res){

//     res.download("./uploads/mern.png")
// })

// app.listen(port, function(){
//     console.log(`server is running at http://localhost:${port}`);
// })