var array = ["Apple", "Banana", "Peach", "Pumpkin", "Tomato", "Mango", "Guava"],
removeFromIndex = [0,4]; 
console.log('before');   
console.log(array);   
console.log('====================');   
for (var i = removeFromIndex.length -1; i >= 0; i--)
    array.splice(removeFromIndex[i],1);
console.log('after');
    console.log(array);