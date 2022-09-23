// var country = {
//     population : 3000000,
//     name :"Uganda",
//     size : 15000,
//     climate: "Tropical"
// }


// this key word is used to indenfy the properties of a class / object.//
function country( name, population, president, size, climate){
    this. name = name; 
    this. population = population;
    this. president = president;
    this. size = size;
    this. climate = climate;
}

// line 20 to 21 we have initiatied the instantiated object //

let uganda = new country( "uganda",2900000,"sam",28090,"Tropical");
let kenya = new country("kenya",6200000,"Ruto",30000,"Tropical");

// the word new is called a constructor //

function sam(){

};

// another way to define the function above would be as below using a flat arrow

let sam = () => {

}

let baby= (name, weight, gender, yob) => {
this. babyName = name;
this. babyWeight = weight;
this. babyGender = gender;
this. babyYob = yob;
}

let father = baby.this.Father = "Osman"; 

// define seven classes with at least 5 parameters using the < this> keyword and with at least 3 instances using the <new> keyword. //

