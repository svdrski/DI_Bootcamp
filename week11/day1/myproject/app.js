//console.log("Hello suka")
const fs = require('fs')

fs.stat('menu.txt', (err) =>{
    err ? console.log(err) : console.log('eeeeee')
})
//fs.rename ('info2.txt', 'kaka.txt', (err)=>{
//    err ? console.error(err): console.log('zaebis')
//})
//fs.readdir(".", (err, files) => {
//    console.log(files);
//});

//
//fs.mkdir('img', (err)=>{
//    err ? console.error(err): console.log("good")
//})

//fs.copyFile('info.txt', 'info2.txt', (err) =>{
//    err ? console.error(err) : console.log('Copied')
//})



//fs.readdir ('./', (err, files) =>{
//    if(err){
//        console.error(err)
//        return
//    }
//    console.log('files', files)
//})



//fs.unlink('test.txt', function (err) {
//    console.log('complete')
//})






//const newText = 'Caesar salad'
//
//fs.appendFile('menu.txt', newText + '\n', (err, data) => {
//    if (err) {
//        console.error(err)
//        return
//    } 
//})
//
//fs.readFile('menu.txt', 'utf-8', (err,data) =>{
//    if(err) {
//        console.error(err)
//        return
//    }
//    
//    console.log(data)
//})
//
//console.log("-----Restaurant Menu---------", '\n',);


//const newContent = 'House salad'

//fs.writeFile('menu.txt', newContent, (err)=>{
//    if (err){
//        console.log(err)
//        return
//    } else  {
//        console.log('Write complete')
//    }
//})
//
//fs.readFile('menu.txt', 'utf-8', (err, data) =>{
//    if (err){
//        console.error(err)
//        return
//    }
//    console.log(data)
//})
//console.log("-----Restaurant Menu---------", '\n',);
//
//




//const fs = require("fs").promises
//const start = async () => {
//    const data = await  fs.readFile('info.txt', 'utf-8')
//    console.log(data)
//}
//
//start()




//const data = fs.readFileSync('info.txt', "utf-8")
//console.log(data)

//const info = fs.readFile('info.txt', 'utf-8', (err, data)=>{
//    console.log(data)
//})
//console.log("The file has been read");
//
//console.log("-----Restaurant Menu---------", '\n',);
//
//fs.readFile('menu.txt', 'utf-8', (err, data)=>{
//    if(err) {
//        console.error(err)
//        return
//    }
//    console.log(data)
//})



//const path = require('path')
//
//products_path = "./products.js"
//product_file = path.basename(products_path)
//
//console.log(product_file)
//
//data_folder = "./data"
//data_file = "data.js"
//
//const full_path = path.join(data_folder, data_file)
//console.log(full_path)
//
//const abs_path = path.resolve(__dirname,"data", "data.js")
//console.log(abs_path)
