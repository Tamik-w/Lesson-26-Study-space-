"use strict";

function User(name, age){
    this.hame = name;
    this.age = age;
}

const user_1 = new User('Mike', 18);
const user_2 = new user_1.constructor('Bob', 25);

console.log(user_1, user_2)