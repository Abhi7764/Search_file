// const fs=require("fs");
// const stat=fs.statSync("./hello.txt");//file
// //!const stat=fs.statSync("love"); //dir

// if(stat.isDirectory()){
//     console.log("dir");
// }
// else{
//     console.log("file");
// }

const fs=require("fs");
let arr=[];
function Search(path){
    const data=fs.readdirSync(path);
    data.forEach((item)=>{
        const stat=fs.statSync(path+"/"+item);
        if(stat.isDirectory()){
            arr.push(path+"/"+item);
            Search(path+"/"+item);
        }
        else{
            arr.push(path+"/"+item);  
        }
    })
    return arr;
}
const res=Search(".");
//console.log(res);

fs.writeFile("./hello.txt",JSON.stringify(res),(err)=>{
    if(err){
        console.log("Error to write");
    }
});
fs.readFile("./hello.txt","utf8",(err,data)=>{
    if(!err){
        console.log(data);
    }
})