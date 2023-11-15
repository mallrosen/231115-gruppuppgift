import "./../scss/style.scss";
import { Animals } from "./models/Animals";

const a1 = new Animals("Hund ", "Pluto ", 11);
const a2 = new Animals("Katt ", "Boris ", 1);
const a3 = new Animals("Kanin ", "Skutt ", 2);

const animalList = [a1, a2, a3]
const ul = document.createElement("ul");
document.body.appendChild(ul)

for (let i = 0; i < animalList.length; i++) {
  const li = document.createElement("li");
  ul.appendChild(li);
  li.innerHTML = animalList[i].art + animalList[i].name + animalList[i].age ;
  li.className = "animalsLi";
}

ul.className = "animalsUl";



class Bilar {
  brand;
  speed;
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }
}

const app = document.getElementById("app");
const div = document.createElement("div");

const bilar = new Bilar("volvo", "320km/h");
const bilar2 = new Bilar("mercedes", "500km/h");
const vroom = [bilar, bilar2];
for (let i = 0; i < vroom.length; i++) {
  const paragraph = document.createElement("p");
  const paragraph2 = document.createElement("p");

  paragraph.innerHTML = vroom[i].brand;
  paragraph2.innerHTML = vroom[i].speed;

  paragraph.className = "paragraph1";
  paragraph2.className = "paragraph2";

  div.appendChild(paragraph);
  div.appendChild(paragraph2);
}

document.body.appendChild(div);
