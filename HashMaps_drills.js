const HashMap = require('./HashMap');

function main() {
    let lotr = new HashMap();

    lotr.MAX_LOAD_RATIO = 0.5;
    lotr.SIZE_RATIO = 3;

    lotr.set('Hobbit', 'Bilbo');
    lotr.set('Hobbit', 'Frodo');
    lotr.set('Wizard', 'Gandalf');
    lotr.set('Human', 'Aragorn');
    lotr.set('Elf', 'Legolas');
    lotr.set('Maiar', 'The Necromancer');
    lotr.set('Maiar', 'Sauron');
    lotr.set('RingBearer', 'Gollum');
    lotr.set('LadyOfLight', 'Galadriel');
    lotr.set('HalfElven', 'Arwen');
    lotr.set('Ent', 'Treebeard');

    console.log(lotr);

    console.log(lotr.get('Maiar'));
    console.log(lotr.get('Hobbit'));
}
main();

const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
}

WhatDoesThisDo();

function deleteDuplicates(string) {
    let returnStr = '';
    let hash = new HashMap();

    for (let i = 0; i < string.length; i++) {
        try {
            hash.get(string[i]);
        } catch (err) {
            hash.set(string[i], string[i]);
            returnStr += string[i];
        }
    }

    return returnStr;
}
const testStr1 = 'google';
const testStr2 = 'google all that you think can think of';

console.log(deleteDuplicates(testStr1));
console.log(deleteDuplicates(testStr2));

function isPalindrome(str) {
    let count = 0;
    let hash = new HashMap();

    for (let i = 0; i < str.length; i++) {
        try {
            if (hash.get(str[i])) {
                count++;
            }
        } catch (err) {
            hash.set(str[i], str[i]);
        }
    }

    if (Math.floor(str.length / 2) === count) {
        return true;
    }

    return false;
}

console.log(isPalindrome('acecarr'));
console.log(isPalindrome('north'));