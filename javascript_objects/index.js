/* Objects */

/* Literal Object */
const person = {
  name: "Juan",
  profesion: "Full Stack Developer",
  age: 500
};

console.log(person);

/* Object Contructor */
function Task(name, priority) {
  this.name = name;
  this.priority = priority;
}

Task.prototype.showInformationTask = function(task, priority) {
  return `The task ${this.task} have a priority of ${this.priority}`;
};

const taskOne = new Task("Learn JavaScript & React", "High");

console.log(taskOne);
