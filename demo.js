'use strict';
(function() {
    //creating object using constructor function
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isAdult = function() { return this.age > 21; }

        Object.defineProperty(this, 'fullName', {
            get: function() {
                return this.firstName + ' ' + this.lastName
            },
            set: function(fullName) {
                var nameParts = fullName.split(' ');
                this.firstName = nameParts[0];
                this.lastName = nameParts[1];
            },
            enumerable: true
        });
    }

    let arpit = new Person('Arpit', 'Bhardwaj', 29);
    let sofia = new Person('Sofia', 'Cooper', 17);

    display(arpit.isAdult());
    display(sofia.isAdult());

    //using Object obejct to define properties
    /*let person = {
        name: {
            first: 'Jim',
            last: 'Cooper'
        },
        age: 29
    };

    Object.defineProperty(person, 'fullName', {
        get: function() {
            return this.name.first + ' ' + this.name.last;
        },
        set: function(value) {
            var nameParts = value.split(' ');
            this.name.first = nameParts[0];
            this.name.last = nameParts[1];
        }

    });

    person.fullName = 'Fred Jones';

    display(person.fullName);

    display(person.name.first);
    display(person.name.last);*/

    function Student(firstName, lastName, age) {
        Person.call(this, firstName, lastName, age);
        this._enrolledCourses = [];

        this.enroll = function(courseId) {
            this._enrolledCourses.push(courseId);
        };

        this.getCourses = function() {
            return this.fullName + "'s enrolled courses are: " +
                this._enrolledCourses.join(', ');
        };
    }
    Student.prototype = Object.create(Person.prototype);
    Student.prototype.constructor = Student;

    Student.fromPerson = function(person) {
        return new Student(person.firstName, person.lastName, person.age);
    }


    let jim = new Student('Jim', 'Cooper', 29);
    jim.enroll('CS205');
    jim.enroll('MA101');
    jim.enroll('PS101');

    display(jim.getCourses());
})();