function Person(first, last, age, id) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.badge = function () {
	  if (id === 'Student') {
		  return `${id[0]}_${this.firstName}`;
	  }
	  if (id === 'Teacher') {
		  return `${id[0]}_${this.firstName}`;
	  }
	  if (id === 'Employee') {
		  return `${id[0]}_${this.firstName}`;
	  }
  }; // here person is not closed
}

var Student = new Person ('Murthy', 'MCV', 29, 'Teacher');
console.log (Student.badge());