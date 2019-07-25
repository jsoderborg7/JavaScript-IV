// CODE here for your Lambda Classes
class Person {
  constructor(attributes){
this.newName= attributes.name,
this.newAge= attributes.age,
this.newLocation= attributes.location
  }
 speak(){
   console.log(`Hello, my name is ${this.newName}, I am from ${this.newLocation}.`);
 } 
}

class Instructor extends Person {
  constructor(instructorAttributes){
    super(instructorAttributes);
    this.newSpecialty= instructorAttributes.specialty,
    this.newFavLanguage= instructorAttributes.favLanguage,
    this.newCatchPhrase= instructorAttributes.catchPhrase
  }
  demo(subject){
    console.log(`Today we are learning about ${subject}.`);
  }
  grade(student, subject){
    console.log(`${student} receives a perfect score on ${subject}.`);
  }
}

class Student extends Person {
  constructor(studentAttributes){
    super(studentAttributes);
    this.newPreviousBackground= studentAttributes.previousBackground,
    this.newClassName= studentAttributes.className,
    this.newFavSubjects= studentAttributes.favSubjects
  }
  listsSubjects(){
      console.log(`${this.newName}'s favorite subjects are ${this.newFavSubjects}`);
    }
   PRAssignment(subject){
    console.log(`${this.newName} has submitted a PR for ${subject}.`);
  }
  sprintChallenge(subject){
    console.log(`${this.newName} has begun sprint challenge on ${subject}.`);
  }
}

class ProjectManager extends Instructor{
  constructor(PMAttributes){
    super(PMAttributes);
    this.newGradClassName= PMAttributes.gradClassName,
    this.newFavInstructor= PMAttributes.favInstructor
  }
  standUp(channel){
    console.log(`${this.newName} announces to ${channel}, @channel stand up time!`);
  }
  debugsCode(student, subject){
    console.log(`${this.newName} debugs ${student}'s code on ${subject}`);
  }
}

const momoko = new Person ({
  name: "Momoko",
  age: 32,
  location: "Tokyo"
});
momoko.speak();
console.log(momoko);

const johann = new Person ({
  name: "Johann",
  age: 46,
  location: "Berlin"
});
johann.speak();

const amy = new Instructor ({
  name: "Amy",
  age: 36,
  location: "Tazmania",
  specialty: "CSS",
  favLanguage: "JavaScript",
  catchPhrase: "I've wrestled crocodiles and dingos simultaneously"
});
console.log(amy);
amy.speak();
amy.demo('Javascript');
amy.grade('Kate', 'Responsiveness');

const josh = new Instructor ({
  name: "Josh",
  age: 27,
  location: "Colorado",
  specialty: "FrontEnd",
  favLanguage: "HTML",
  catchPhrase: "Catch you outside guys!"
});
console.log(josh);
josh.speak();
josh.demo('React');
josh.grade('Sam', 'flexbox');

const sam = new Student ({
  name: "Sam",
  age: 23,
  location: "San Diego",
  previousBackground: "Retail",
  className: "Web22",
  favSubjects: ['HTML', 'CSS', 'JavaScript']
});
console.log(sam);
sam.speak();
sam.listsSubjects();
sam.PRAssignment('CSS');
sam.sprintChallenge('HTML');

const kate = new Student ({
  name: "Kate",
  age: 42,
  location: "Maine",
  previousBackground: "Nursing",
  className: "Web14",
  favSubjects: ['CSS', 'Python', 'React']
});
console.log(kate);
kate.speak();
kate.listsSubjects();
kate.PRAssignment('JavaScript');
kate.sprintChallenge('JavaScript');

const remy = new ProjectManager ({
  name: "Remy",
  age: 48,
  location: "Toronto",
  specialty: "Debugging",
  favLanguage: "Python",
  catchPhrase: "Debugging is the best!",
  gradClassName: "Web8",
  favInstructor: "Carrie"
});
console.log(remy);
remy.speak();
remy.demo('Data Science');
remy.grade('Sam', 'UX');
remy.standUp('RemyWeb22');
remy.debugsCode('Kate', 'constructor function');

const juha = new ProjectManager ({
  name: "Juha",
  age: 22,
  location: "Finland",
  specialty: "UX/UI",
  favLanguage: "React",
  catchPhrase: "I make this look good!",
  gradClassName: "Web11",
  favInstructor: "Jamie"
});
console.log(juha);
juha.speak();
juha.demo('binding types');
juha.grade('Kate', 'constructor functions');
juha.standUp('JuhaWeb22');
juha.debugsCode('Sam', 'prototypes');