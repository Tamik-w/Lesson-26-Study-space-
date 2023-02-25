"use strict";

function UserType(name){
    for(let i=0; i<name.length; i++){
        this[i] = name[i];
        if(i + 1 == name.length){
            Object.defineProperty(this, 'length', {
                enumerable: true,
                writable: false,
                configurable: true,
                value: i + 1
            });
        }
    }
}

const admins = new UserType(['Mike', 'Bob', 'Nikola']);
admins.join = Array.prototype.join;
console.log(admins.join(', '));