function Human (first, last, age, id) {
	this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.id = id;
} // here Human is closed


Human.prototype.badge = function () {
	return `${this.id[0]}_${this.firstName}`; 
}

var Student = new Human ('Murthy', 'MCV', 29, 'Student');

console.log (Student.badge());