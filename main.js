/*======================Functions #1=======================*/

function add(x, y) {
    return x + y;
}

console.log(add(10, 20));

/*======================Functions #2=======================*/

function list() {
    const fruits = ["apple", "pear", "banana", "strawberry"];
    const fruitList = fruits.length;

    for (i= 0; i < fruitList; i++) {
        console.log(fruits[i]);
    }
}

list();

/*======================Functions #3=======================*/

const isIt = (a) => {
        if (a % 2 === 0) {  
            console.log("its true");
        }
    
        else {     
            console.log("its not true");
        }
    }

isIt(5);

/*======================Classes #1=======================*/

class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

const fullName = new Person("John", "Doe");

console.log(fullName);

/*======================Classes #2=======================*/

class Cats {
    constructor(breeds, id, url, width, height) {
        this.breeds = breeds;
        this.id = id;
        this.url = url;
        this.width = width;
        this.height = height;
    }
}


function getCatPics() {
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(response => response.json())
    .then(url => console.log(url));

    const theCats = new Cats();
}