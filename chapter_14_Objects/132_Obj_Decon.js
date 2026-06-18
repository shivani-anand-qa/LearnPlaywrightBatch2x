const user = { name1: "John", age: 30, city: "NYC" };


//Object Desconstruction - we can take name and age out of the user
const { name1, age } = user;
console.log(name1); //John
console.log(age); //30


// Rename variables
const { name1: userName, age: userAge } = user;
console.log(userName); //John
console.log(userAge);// 30


// Default values
const { country = "USA" } = user;
console.log(country); //USA
//if country exists in the user, give me that value, else it will give default USA as value. But it will not be added to the user


//object1 inside the object2 and inside3 and inside object 4
const data = {
    user:
    {
        name: "John",
        address:
        {
            city: "NYC"
        }
    }
};


const { user: { address: { city } } } = data;
console.log(data); //{ user: { name: 'John', address: { city: 'NYC' } } }
console.log(data.user.address.city); //NYC
console.log(data.user); //{ name: 'John', address: { city: 'NYC' } }