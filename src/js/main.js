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

