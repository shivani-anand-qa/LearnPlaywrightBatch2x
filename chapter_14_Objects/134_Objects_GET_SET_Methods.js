//Older way of using classes and objects in JS - not going to use it


const user = {
    firstName: "Shivani",
    lastName: "Anand",
    get fullName() {
        return this.firstName + this.lastName;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    },
}
//.this means current value


console.log(user.fullName);//ShivaniAnand
user.fullName = "Jacky Chan";
console.log(user.fullName);//JackyChan




//New way - by using a proper class - will be used in future
/*
class User{
  firstName,
  lastName,
  fullName(){


  }
}
  */
