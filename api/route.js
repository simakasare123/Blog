const express = require('express');
const router = express.Router();
// use controller data below
const controller = require('./controller');

// create url for controller below

//router.get('/add',controller.adduser);

router.get('/',(req,res) => {
    res.send("hello");
});

router.get('/post' ,(req ,res) =>{
    res.send('post page');

});

router.get('/post/:id' ,(req ,res) =>{
    console.log(req.params.id);
    res.send(`post page id ${req.params.id} `);

});
router.get('/blog/:fs-:ls', (req,res) =>{
    console.log(req.params);
    res.send(`blog page  ${req.params.fs}  ${req.params.ls}`);

});

module.exports = router;

