class Pet { //class is keyword, then name of class (can't start with a number and can't be reserved word)
petSound; //rather than inheriting, have as seperate sub-classes, owned by a class, rather than inherit
petFeeding;

constructor(species) {
this.species = species;
}
speak () { //defining a method, within body of class definition, but can't be inside constructor, just at the same level
return "No words"; //has to return something
    }
}

class Cat extends Pet { //sub-class that inherits class Pet
constructor(props) {
super("cat"); //always refers to parent class
this.props = props;
}

clickHandler = parameter => { return parameter+this.props.name;
//console.log(`My name is ${this.props.name}` );
//console.log(this);
}

speak() {
this.clickHandler();
return `${super.speak()}. Meow, I am a ${this.species}`;
//return `Meow, I am a ${this.species}`; //over-writes class Pet
    }
}

function makePetSpeak(pet) {
console.log(pet.speak());
}

var myPet = new Pet(); //creating a pet
makePetSpeak(myPet);
//console.log(myPet.speak()); //prints out "No words" to console

var myCat = new Cat({name:"Luna Lovegood"}); //have to declare the string as an object
makePetSpeak(myCat);
//console.log(myCat.speak());

var newFunc = myCat.clickHandler;
console.log(newFunc("My name is "));