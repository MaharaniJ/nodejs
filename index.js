//Packages
//1.Inbuilt package
//2.Custom package
//3.Third Party Package

const os = require("os");
const path = require('path');
const fs = require('fs')

// fs.mkdir("myfolder",function(err,path){   //create folder
//     if(err)throw err;
//     console.log(path)
//     // fs.writeFile("./myfolder/message.txt","Hello World",'utf-8',function(){
//     //     if(err) throw err;
//     //     //if hard drive is full 
//     //     //this file is not exist
//     //     console.log("File Created");
//     // });//Error First callback

// })
// fs.readFile('./myfolder/message.txt','utf-8',function(err,data){
// if(err) throw err;
// console.log(data)
// })

fs.readdir('./myfolder',function(err,file){    //it list all the files in this folder
    if(err) throw err;
    console.log(file)
})

// console.log(os.platform());
// console.log(os.platform());
// console.log(os.release());
// console.log(os.uptime());
// console.log(os.cpus())
// console.log(os.cpus().length);
// console.log(path.basename('/foo/bar.asdf/quux.html'))