const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require ('bcryptjs');
const jwt = require('jsonwebtoken');

const cors = require('cors')
router.use(cors())
//list users
router.get('/list',async (req,res) => {
   
     const resultat = await User.find()
     
    return res.send(resultat);
    
    });
// register user
router.post('/register',async (req,res)=>{

 const mailexist = await User.findOne({mail: req.body.mail})
 if(mailexist) return res.status(200).send('mail exists !!');
const salt = await bcrypt.genSalt(10);
const hashPassword = await bcrypt.hash(req.body.password, salt);

 const user = new User({
     name: req.body.name,
     password :hashPassword,
     mail : req.body.mail,
 });
try{
const savedUser = await user.save();
res.send('user created');

}catch(err){
    res.status(400).send(err);
}

});
//get name 
router.post('/data', async (req,res) => {

    const user = await User.findOne({mail: req.body.mail})
    
 
   res.send(user);
    

    
    });




//login
router.post('/login', async (req,res) => {

const user = await User.findOne({mail: req.body.mail})
if(!user) return res.status(200).send('mail doesnt exist');
  

const validPass = await bcrypt.compare(req.body.password, user.password);
if(!validPass) return res.send('invalid password');
if(validPass) return res.send('Connected');

// login token

/* const token = jwt.sign({id: user._id}, process.env.TOKEN_SECRET );
res.header('auth-token',token).send(token); */





});



module.exports = router ;