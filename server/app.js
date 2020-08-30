const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('./EmployeeModel');

const app = express();
app.use(bodyParser.json());
const Employee = mongoose.model("Employee");
const URI = "mongodb+srv://abdullah:abdullah123@cluster0.nu9ss.mongodb.net/ReactNative?retryWrites=true&w=majority";

mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on("connected",()=>{
    console.log("Connected Successfully!");
})

mongoose.connection.on("error",(err)=>{
    console.log("Error!", err);
})

app.get('/',(req,res)=>{
    Employee.find({}).then(data=>{
        res.send(data)
    }).catch(err=>{
        console.log(err);
    })
})

app.post("/send", (req, res)=>{
    const employee = new Employee({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        position: req.body.position,
        salary: req.body.salary,
        picture: req.body.picture

    });
    employee.save().then((data=>{
        console.log(data);
        res.send("Success!");
    }))
    .catch(err=>{
        console.log(err);
    })
})

app.post('/delete', (req,res)=>{
    Employee.findByIdAndDelete(req.body.id)
    .then((data)=>{
        console.log(data);
        res.send("Deleted!");
    }).catch(err=>{
        console.log(err);
    })
})

app.post('/update',(req,res)=>{
    Employee.findByIdAndUpdate(req.body.id, {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        position: req.body.position,
        salary: req.body.salary,
        picture: req.body.picture
    }).then(data=>{
        console.log(data);
        res.send("Updated!");
    }).catch(err=>{
        console.log(err);
    })
})

app.listen(3000,()=>{
    console.log("Listening at port 3000");
})