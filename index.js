// const http =  require("http");

// const dataHandle = (req , res)=>{
//     res.write("<h1>Server Started again.....</h1>");
//     res.end();
// };


// const proxy = http.createServer(dataHandle).listen(4600);
const colors = require('colors');

console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass
