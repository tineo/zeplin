const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const PORT = process.env.PORT || 5000

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/albus.html',function(req,res){
  res.sendFile(path.join(__dirname+'/albus.html'));
});

router.get('/ayuda.html',function(req,res){
  res.sendFile(path.join(__dirname+'/ayuda.html'));
});


router.get('/blog.html',function(req,res){
    res.sendFile(path.join(__dirname+'/blog.html'));
  });

  
router.get('/blogpost.html',function(req,res){
    res.sendFile(path.join(__dirname+'/blogpost.html'));
  });

  
  router.get('/exchange.html',function(req,res){
    res.sendFile(path.join(__dirname+'/exchange.html'));
  });
  
  router.get('/nosotros.html',function(req,res){
      res.sendFile(path.join(__dirname+'/nosotros.html'));
    });
  
//add the router

app.use('/static', express.static(__dirname + '/static'));
app.use('/', router);

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

