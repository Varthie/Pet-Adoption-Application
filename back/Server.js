const express=require("express")
const mysql=require("mysql")
const cors=require("cors")
const multer = require('multer');
const path = require('path');
const app=express()
app.use(cors());
app.use(express.json());
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'a130'
    
})
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');  // Folder to store files
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)); // File name and extension
    }
  });
  
  const upload = multer({ storage: storage });
  app.use('/uploads', express.static('uploads'));
  // Route to handle file upload
  app.post('/upload', upload.single('file'), (req, res) => {
    try {
        console.log(req.file.filename)
      res.send({
        message: req.file.filename, //'File uploaded successfully',
        file: req.file,  // File information
      });
    } catch (error) {
      res.status(500).send({ message: 'Failed to upload file', error });
    }
  });
app.post('/petSave',(req,res)=>{
    const sql="insert into pet(cat,breed,we,he,age,color,cost,img,st)values(?)";
    const values=[
        req.body.cat,
        req.body.breed,
        req.body.we,
        req.body.he,
        req.body.age,
        req.body.color,
        req.body.cost,
        req.body.img1,
        req.body.st,
        
    ]
    console.log(values)
    db.query(sql,[values],(err,data)=>{
        if(err){
            return res.json("Error.."+err)
        }
        return res.json("Save Successfully")
    })


})

app.get("/petDisplay",(req,res)=>{
  const sql="Select * from pet"
  db.query(sql,(err,data)=>{
      if(err){
          return res.json("Error:-->"+err)
      }
      return res.json(data)
  })
})
app.get("/checkId/:id",(req,res)=>{
  const sql="Select * from pet where id=?"
  const id=req.params.id;
  db.query(sql,[id],(err,data)=>{
      if(err){
          return res.json("Error:-->"+err)
      }
      return res.json(data)
  })
})
app.get("/petAvailable",(req,res)=>{
  const sql="Select * from pet where st='Available'"
  db.query(sql,(err,data)=>{
      if(err){
          return res.json("Error:-->"+err)
      }
      return res.json(data)
  })
})
app.get("/saleList",(req,res)=>{
  const sql="Select * from buy"
  db.query(sql,(err,data)=>{
      if(err){
          return res.json("Error:-->"+err)
      }
      return res.json(data)
  })
})
app.get("/userList",(req,res)=>{
  const sql="Select * from register"
  db.query(sql,(err,data)=>{
      if(err){
          return res.json("Error:-->"+err)
      }
      return res.json(data)
  })
})
app.delete("/petDelete/:id",(req,res)=>{
  const sql="delete from pet where id=?"
  const id=req.params.id;
  db.query(sql,[id],(err,data)=>{
      if(err)
      {
          return res.json({message:"Error:---->"+err})
      }
      return res.json("Data Deleted successfully")
  })
})
app.delete("/userDelete/:id",(req,res)=>{
  const sql="delete from register where id=?"
  const id=req.params.id;
  db.query(sql,[id],(err,data)=>{
      if(err)
      {
          return res.json({message:"Error:---->"+err})
      }
      return res.json("Data Deleted successfully")
  })
})
// User Side
app.post('/SignUp',(req,res)=>{
  const sql="insert into register(name,email,cno,uname,pass1)values(?)";
  const values=[
      req.body.name,
      
      req.body.email,
      req.body.cNo,
      req.body.uname,
      req.body.psword
  ]
  db.query(sql,[values],(err,data)=>{
      if(err){
          return res.json("Error.."+err)
      }
      return res.json("Save Successfully")
  })


})
app.post('/UserLogin',(req,res)=>{
  const sql="select * from register where uname='"+req.body.uname+"' and pass1='"+ req.body.psword+"'";
  const values=[
      req.body.uname,
      req.body.psword
  ]
  console.log(sql)

  db.query(sql,(err,data)=>{
      if(err){
          return res.json("Error:"+err)
      }
      if(data.length>0)
      return res.json(data)
  else{
      return res.json("Failed")
  }
  })
})
app.post('/buyPet',(req,res)=>{
  const sql="insert into buy(cat,breed,we,he,age,color,cost,img,uid)values(?)";
  const values=[
      req.body.cat,
      req.body.breed,
      req.body.we,
      req.body.he,
      req.body.age,
      req.body.color,
      req.body.cost,
      req.body.img,
      req.body.uid,
      
  ]
  console.log(values)
  db.query(sql,[values],(err,data)=>{
      if(err){
          return res.json("Error.."+err)
      }
      const sql1="update pet set st='Not Available' where id="+req.body.pid
      console.log(sql1)
      db.query(sql1,(err,data)=>{
        
        if(err){
          console.log("Error")
          return res.json("Error.."+err)
        
      }
      else{
        console.log("OK")
        return "pet Purchase Successfully"
      }
      
      })
      return res.json("pet Purchase Successfully")
  })


})
app.get("/purchaseList/:id",(req,res)=>{
  const sql="Select * from buy where uid=?"
  const id=req.params.id;
  db.query(sql,[id],(err,data)=>{
      if(err){
          return res.json("Error:-->"+err)
      }
      return res.json(data)
  })
})
app.listen(5000,()=>
    {
         console.log("Listening..")
    })