const express = require ('express') ;
const app = express() ;
const valitime = require ('./pages/middlewere') ;


const Port = 4000
app.use(valitime) ;

app.get ('/' , (req , res) =>{

    res.sendFile(__dirname + '/pages/Home.html')
})

app.get ('/Services' , (req , res) =>{

    res.sendFile(__dirname + '/pages/Services.html')
})


app.get ('/Contact' , (req , res) =>{

    res.sendFile(__dirname + '/pages/Contact.html')
})

app.get ('/pages/style.css' , (req , res) =>{

    res.sendFile(__dirname + '/pages/style.css')
})


app.listen(Port , () =>
console.log(`The server is runing on Port ${Port}`) ) 
