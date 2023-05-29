"use strict";

const WELCOME_MESSAGE = `Hello World!`;

const output = document.querySelector("#js-output");
// const output = document.getElementById("js-output");
// klasa = ., ID = #, tag = div
output.innerHTML = WELCOME_MESSAGE;
const elements = document.querySelectorAll("li");

elements[0].innerHTML = "Element pierwszy";

// ------------------------------------- WŁAŚCIWOŚĆ textContent -------------------------------------

const firstElement = document.querySelector(".first-element");
firstElement.textContent = "Pierwszy element";

// ------------------------------------- WŁAŚCIWOŚĆ classList -------------------------------------

firstElement.classList.contains("first-element"); // true / false
firstElement.classList.add("element", "a"); //dodaje klasę
firstElement.classList.remove("element"); //usuwa klasę
firstElement.classList.toggle("activ"); // jeżeli nie ma klasy to ją dodaje, jeżeli jest - usuwa
firstElement.classList.replace("activ", "active"); //zastępuję pierwszą klasę drugą
firstElement.classList.toggle("active"); // włącznik - wyłącznik - jeżeli nie ma klasy to ją dodaje, jeżeli jest - usuwa
console.log(firstElement.classList); // zwraca (pseudo)tablicę klas

// ------------------------------------- WŁAŚCIWOŚĆ style -------------------------------------

//zalecane jest raczej używanie poprzez klasy. Tu raczej do dodawania stylów dynamicznych, na przykład podczas animacji.

const secondElement = document.querySelector(".sec-el");
secondElement.textContent = "Drugi element";
secondElement.style.backgroundColor = "teal"; //właściwości do camelCase
secondElement.style.fontSize = "30px";
secondElement.style.textAlign = "center";
console.log(secondElement.style);

// ------------------------------------- ATRYBUTY -------------------------------------

console.log(firstElement.attributes); // zwraca obiekt(mapę) atrybutów
firstElement.hasAttribute("name"); // true/false
console.log(firstElement.getAttribute("id")); // first-element-id
firstElement.setAttribute("id", "element-1"); //ustawia atrybut, ale jeżeli już taki jest, to zastępuje nową zawartością

// ------------------------------------- ATRYBUTY data- / dataset -------------------------------------

//Umożliwia dodanie dowolnego atrybutu do tagu i uzyskanie jego wartości
//W HTMLu ustawiamy go data-nasza_nazwa - właściwość przeznaczona do JS. Atrybut nie jest brany pod uwagę przez przeglądarkę.

const saveBtn = document.querySelector('button[data-action="save"]');
console.log(saveBtn.dataset.action); //save
const closeBtn = document.querySelector('button[data-action="close"]');
console.log(closeBtn.dataset.action); //close

const dishes = document.querySelectorAll(".dishes > li");
console.log(dishes);
dishes.forEach((dish) => console.log(dish.dataset.id)); //printuje listę wszystkich id (data-id) po kolei

// ------------------------------------- TWORZENIE I USUWANIE ELEMENTÓW -------------------------------------

document.createElement("tagName");

// -------------- Tworzenie (jeszcze nie dodanie) --------------

const heading = document.createElement("h2");
heading.textContent = "Heading h2";
console.log(heading);

const image = document.createElement("img");
image.src = "https://placeimg.com/640/480/nature";
image.alt = "Nature";
console.log(image);

const input = document.createElement("input");
input.type = "text";

// -------------- Dodanie elementów na stronę --------------

// element.append(image); //dodaje elementy pod wszystkimi dziećmi elementu
// prepend; //przed dziećmi
// after / before; //po/przed elementem

const list = document.querySelector(".usernames");

//Dodawanie na końcu listy
const lastItem = document.createElement("li");
lastItem.textContent = "Poly";
list.append(lastItem);

//Dodawanie na początku listy
const firstItem = document.createElement("li");
firstItem.textContent = "Ajax";
list.prepend(firstItem);

//Dodawanie przed i po liście
list.before(heading);

list.after(image);

// Jeżeli wstawiany element znajduje się już w DOM, to jest usuwany ze starego miejsca i dodawany do nowego. Wynika to z zasady, że jeden i ten sam element nie może znajdować się jednocześnie w dwóch miejscach.

// -------------- Usuwanie elementów  --------------

lastItem.remove();

// ------------------------------------- WŁAŚCIWOŚĆ innerHTML -------------------------------------
const greet = "Hello!";
const listWrapper = document.querySelector("#list-wrapper");
console.log(listWrapper.innerHTML);
listWrapper.innerHTML = `
<div>
<p>Lorem ipsum ${greet}</p>
</div>
`;

//MODYFIKACJA "POPULAR TECH"

const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
const listTech = document.querySelector(".list-tech");

const markup = technologies
  .map((technology) => `<li class="list-item">${technology}</li>`)
  .join("");

console.log(markup);

listTech.innerHTML = markup;

// jeżeli chcemy coś dodać zamiast = piszemy +=

listTech.innerHTML += `<li class="list-item">Java</li>`;

// ------------------------------------- METODA insertAdjacentHTML -------------------------------------

//przed elementem, przed jego dziećmi, po jego dzieciach, po elemencie

listTech.insertAdjacentHTML("beforebegin", '<li class="list-item">C#</li>');
listTech.insertAdjacentHTML("afterbegin", '<li class="list-item">C++</li>');
listTech.insertAdjacentHTML("beforeend", '<li class="list-item">Python</li>');
listTech.insertAdjacentHTML("afterend", '<li class="list-item">C</li>');
