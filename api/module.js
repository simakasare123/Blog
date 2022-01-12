const { query } = require('express');
const dbConn  = require('./db.config');

// const Employee = function(employee){
//     first_name     =   employee.first_name;
//     last_name      =   employee.last_name;
//     email          =   employee.email;
//     phone          =   employee.phone;
// }

const adduser = (req,res) =>{
    console.log("i am");
    res.send("yes");
}

const userlist =(req,res) =>{
    dbConn.query('SELECT * FROM employees ', (err, results)=>{
        if (err) throw err ;
        res.status(200).json(results);
    });
        

}

module.exports = {
    adduser , userlist
}