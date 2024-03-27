// server Set up 

// const http =  require("http");

// const dataHandle = (req , res)=>{
//     res.write("<h1>Server Started again.....</h1>");
//     res.end();
// };


// const proxy = http.createServer(dataHandle).listen(4600);
// const colors = require('colors');

// console.log('hello'.green); // outputs green text
// console.log('i like cake and pies'.underline.red) // outputs red underlined text
// console.log('inverse the color'.inverse); // inverses the color
// console.log('OMG Rainbows!'.rainbow); // rainbow
// console.log('Run the trap'.trap); // Drops the bass

// server setup 
                                     
// const  http = require('http');       // create http server 
// const data = require('./data');
//                                     //create a server object:
// http.createServer(function (req, res) {
//     res.writeHead(404 );
//   res.write(JSON.stringify(data)); //write a response to the client
//   res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080



// file manage system 
// const fs = require('fs');
// const input = process.argv;
// if (input[2]=="add"){
//     fs.writeFileSync(input[3], input[4]);
// }else if(input[2]== "remove"){
//     fs.unlinkSync(input[3]);

// }else{
//     console.log("invalid entry")
// }

// console.log(input);



const fs =  require('fs');
const path = require('path');
const dirpath = path.join(__dirname,'curd');
const filepath = `${dirpath}/apple.txt`;

// create file 
// fs.writeFileSync(filepath, "this is simple text file ");

//read file 
// fs.readFile(filepath,'utf8',(err,item)=>{
//     console.log(item);
// } )

// update file 
// fs.appendFile(filepath, " and the file name mention  in the folder ", (err)=>{
//     if(!err){
//         console.log(" file is updated")
//     }
// })

//rename file 
// fs.rename(filepath,`${dirpath}/fruit.txt`, (err)=>{ if(!err){
//     console.log("file name is updated ");
// }})
 
// write code for delete file fruit.txt file
//  fs.unlink(`${dirpath}/fruit.txt`, (err)=>{ if(!err){
//     console.log("file is deleted ");
// }})




// promise function in node js node js is asynchronus 
 let a =10;
  const myprommise =  new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30);

    },2000)
  })

  myprommise.then((data)=>{
    console.log(a+data);
  })