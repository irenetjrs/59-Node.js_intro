import fs from 'fs';
import os from "os";

// const {promises} = fs;
const users = [
   {name: 'Mike', age: 25},
   {name: 'Bob', age: 32},
   {name: 'Nikola', age: 17},
]

fs.writeFileSync('./data.json', JSON.stringify(users, null, 2), err =>{
   if(err){
      console.log('Error');
   }else{
      console.log('Done');
   }
})

const newData = [
   {name: 'Anna', age: 24},
   {name: 'Tom', age: 52},
]

const fileData = JSON.parse(fs.readFileSync('./data.json'))
fileData.push(newData)

fs.writeFileSync('./data.json', JSON.stringify(fileData, null, 2));
// console.log('HD' + os.homedir());