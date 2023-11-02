const fs=require("fs");
// console.log(fs);
let arrayBuffer=[];
function search(path){
    fs.readdir(path,(err,files)=>{
        if(!err){
            files.forEach((item)=>{
                //console.log(path+"./"+item);
                arrayBuffer.push(path+"./"+item)
                search(path+"./"+item);
            })
            console.log(arrayBuffer);
        }
    })
}
search(".");

