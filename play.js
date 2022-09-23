function Car(name, model, chasisNo, NumOfSeats) {
	this.name = name;
	this.model = model;
	this.chasisNo = chasisNo;
	this.NumOfSeats = NumOfSeats;
}

let car1 = new Car("Subaru", "2010", "iixi", 6);
let car2 = new Car("BMW", "2022", "MMXII", 7);

// New Example

function Book(name, author, year) {
	// this.name is parameter, name is parameter value
	// Key word "this" is used to define the properties of a class.

	this.name = name; //name is the value, author is value too, year is value too but respective places.ie.
	this.author = author; // author here is value. author can be anything eg Albert
	this.year = year;
	this.publisher = "OzzyMan"; // this ensures that every instance of this class has the same publisher
}

let book1 = new Book("Guardians of the Galaxy", "Marvel", "2017");
let book2 = new Book("Hitch Hicker", "Zaphod Beeblebrox", "1908");

// console.log(book1);
// console.log(" ");
// console.log(book1.author); // to specify an output value, syntax = "object.parameter"
// console.log(book1.year);
// console.log(book1.publisher);

// console.log(book2);
// console.log(" ");
// console.log(book2.author);
// console.log(book2.year);
// console.log(book2.publisher);

// Another Example

function Shoe(name, color, label) {
	this.name = name;
	this.color = color;
	this.label = label;
}

// one instance of Shoe
let firstShoe = new Shoe("Open", "Black", "Bata");

// Another instance of shoe
let anotherShoe = new Shoe("Canvas", "White", "Balenciaga");

// console.log(firstShoe.label);
// console.log(anotherShoe.label);

// console.log("Shoe type: " + anotherShoe.label, "Shoe color: " + anotherShoe.color);

// Start playing around with the defining classes.
// 1. Remember to use capital letter for class name i.e "function Class"
// 2. "this" is key-word for defining parameter of the class i.e. "this.parameter"
// 3. "new" is a key-word for instatiating a class object  ie. "let object= new Class"

// return marks end of execution

function add() {
	var a = 2;
	var b = 4;
	return " value : " + Number(a + b); // this marks the end
	var c = 2;
	var d = 5;
	console.log("value 2: " + c + d); //this line will not be reached
}

console.log(add());
