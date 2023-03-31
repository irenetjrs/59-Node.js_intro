import fs from 'fs';

const users = [
   {name: 'Mike', age: 25},
   {name: 'Bob', age: 32},
   {name: 'Nikola', age: 17},
]

fs.writeFile('./data.json', JSON.stringify(users, null, 2), err =>{
   if(err){
      console.log('Error');
   }else{
      console.log('Done');
   }
})