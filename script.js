// Task 1
let name = prompt("Введите ваше имя");
let surname = prompt("Введите вашу фамилию");
let age = prompt("Введите ваш возраст");
let mood = prompt("Введите цвет вашего настроения");

let user = {
	name,
	surname,
	age,
	mood,
};

let div = document.createElement("div");
let p;

div.className = "container";
for (let key in user) {
	p = document.createElement("p");
	p.className = "block";
	p.append(user[key]);
	div.append(p);
}

document.body.append(div);
// Task 2
let whatIntoBody = {};

whatIntoBody.div = document.body.querySelectorAll("div").length;
whatIntoBody.p = document.body.querySelectorAll("p").length;
whatIntoBody.classes = [div.className, p.className];

console.log(whatIntoBody);