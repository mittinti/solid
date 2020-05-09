function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};

Person.prototype.greeting = function() {
  alert('Hi! I\'m ' + this.name.first + '.');
};

function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);
  this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);


Object.defineProperty(Teacher.prototype, 'constructor', { 
	value: Teacher, 
	enumerable: false, // so that it does not appear in 'for in' loop
	writable: true 
});

var a = new Teacher ('Murthy', 'M C V R', 30, 'Male', 'Love', 'Maths');

// all it does is the greeting() method which is defined in Person should be accessible on the Teacher Object.
// From MDN https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance
