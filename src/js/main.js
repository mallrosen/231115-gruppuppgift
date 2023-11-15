import './../scss/style.scss'

class Products{
    name;
    brand;
    price;
    constructor(name,brand,price){
        this.name = name;
        this.brand = brand;
        this.price = price;
    }
}

 const mobile = new Products("Mobil","Iphone",7000);
 const computer = new Products("Dator","Mac",21000);
 const headphones = new Products("Hörlurar","Bose",2000);

 let productsList = [mobile,computer,headphones];

 for (let i=0; i<productsList.length; i++){
    const ul = document.createElement("ul");
    const li = document.createElement("li");

    li.innerHTML = productsList[i].name;
    ul.appendChild(li);
 }

 document.body.appendChild(ul);
