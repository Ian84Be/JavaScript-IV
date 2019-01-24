class Person {
    constructor(att) {
        this.name = att.name;
        this.age = att.age;
        this.location = att.location;
        this.gender = att.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(att) {
        super(att);
        this.specialty = att.specialty;
        this.favLanguage = att.favLanguage;
        this.catchPhrase = att.catchPhrase;
    }
    demo(subject) {
        console.log(`${this.name} says: Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(att) {
        super(att);
        this.previousBackground = att.previousBackground;
        this.className = att.className;
        this.favSubjects = att.favSubjects;
    }
    listSubjects() {
        for (let e in this.favSubjects) {
            console.log(this.favSubjects[e]);
        }
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(att) {
        super(att);
        this.gradClassName = att.gradClassName;
        this.favInstructor = att.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const pebbles = new Student({
    name: 'Pebbles',
    location: 'Bedrock',
    age: 1,
    gender: 'female',
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: `Goo Goo babyTalk`,
    className: `WEB17`,
    favSubjects: ['Html', 'CSS', 'JavaScript'],
  });

  const steve = new ProjectManager({
    name: 'Steve',
    location: 'THE place to BE',
    age: 27,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Good Times',
    catchPhrase: `You know what it is!`,
    gradClassName: 'CS1',
    favInstructor: 'Josh Knell',
  });

  fred.demo('farts');
  fred.grade(pebbles, 'farts');
  pebbles.listSubjects();
  pebbles.PRAssignment('farts');
  pebbles.sprintChallenge('farts');
  steve.standUp('WEB17');
  steve.debugsCode(pebbles,'farts');
  steve.speak();
