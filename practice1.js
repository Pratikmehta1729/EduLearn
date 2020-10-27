
// How to make object in js
let obj1 = {
    // fields
      name:"value",
      num: 123,
    //methods
      foo: function(){}
      
    }

// iterate Object keys
Object.keys(obj1).forEach((key) => { 
    console.log(key ," : ",obj1[key])
})

//Array in js
var arr1 = [1,2,3,4,"hello"];
for(var i=0; i<arr1.length; i++)
{
  console.log(arr1[i]);
}


