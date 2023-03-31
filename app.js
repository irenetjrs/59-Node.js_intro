import fs from 'fs';
import os from "os";

// // fs version

// const {promises} = fs;
// const users = [
//    {name: 'Mike', age: 25},
//    {name: 'Bob', age: 32},
//    {name: 'Nikola', age: 17},
// ]

// fs.writeFileSync('./data.json', JSON.stringify(users, null, 2), err =>{
//    if(err){
//       console.log('Error');
//    }else{
//       console.log('Done');
//    }
// })

// const newData = [
//    {name: 'Anna', age: 24},
//    {name: 'Tom', age: 52},
// ]

// const fileData = JSON.parse(fs.readFileSync('./data.json'))
// fileData.push(newData)

// fs.writeFileSync('./data.json', JSON.stringify(fileData, null, 2));
// console.log('HD' + os.homedir());

// fs.stat('./data.json', function(err, stat) {
//    if (err == null) {
//       console.log('File exists');
//    } else if (err.code === 'ENOENT') {
//    } else {
//       console.log('Some other error: ', err.code);
//    }
//    });

// promises version

const {promises} = fs;
const users = [
   {name: 'Mike', age: 25},
   {name: 'Bob', age: 32},
   {name: 'Nikola', age: 17},
]

async function addData() {
try{
   await promises.writeFile('./data.json', JSON.stringify(users, null, 2), err =>{
})}catch{
   if(err){
      console.log('Error');
   }else{
      console.log('Done');
   }
}}
addData();

console.log('HD' + os.homedir());

async function updateData() {
try {
   await promises.writeFile('./data.json', JSON.stringify(users, null, 2))
   console.log('Done');

   const newData = [
      {name: 'Anna', age: 24},
      {name: 'Tom', age: 52},
   ]
      const fileContent = await promises.readFile('./data.json', 'utf-8');
      const fileData = JSON.parse(fileContent);
   fileData.push(newData)
   
   await promises.writeFile('./data.json', JSON.stringify(fileData, null, 2));
   
   await promises.stat('./data.json')
   
   }catch(e) {
      if (err === null) {
            console.log('File exists');
         } else if (err.code === 'ENOENT') {
         } else {
            console.log('Some other error: ', err.code);
         }
      }
}
updateData();   

