'use strict';

//console.log('hello world');


//Global variables
let time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let allStore = [];
let totalArr = [];
let grandTotal = 0;


// Constructor Function with inputs Name, min ,max, and average cookies per customer

function Cookiestand(locationName, minHourCust, maxHourCust, avgCookiesCust) {
  this.name = locationName;
  this.minHourCust = minHourCust;
  this.maxHourCust = maxHourCust;
  this.avgCookiesCust = avgCookiesCust;
  allStore.push(this);
}

Cookiestand.prototype.getCust = function () {
  //console.log(this.name);
  this.cookiePerHour = 0;
  this.iLoveCookies = [];
  this.total = 0;
  this.cookiePerHour = (getRandomCustomer(this.minHourCust, this.maxHourCust)) * this.avgCookiesCust;
  //console.log(this.cookiePerHour);

  // for loop to store values for each time slot and stores as an integer
  for (let i = 0; i < time.length; i++) {
    this.iLoveCookies[i] = parseInt((getRandomCustomer(this.minHourCust, this.maxHourCust)) * this.avgCookiesCust);
  }
  //console.log(this.iLoveCookies);

  //console.log(Number(Math.round(this.time)));

  // for loop to calculate total cookies bought
  for (let p = 0; p < time.length; p++) {
    this.total += this.iLoveCookies[p];
  }

  //console.log(Math.round(this.total));
  //return (this.iLoveCookies)
}




// Create new instance for each city
let seattle = new Cookiestand('seattle', 23, 65, 6.3);
let tokyo = new Cookiestand('tokyo', 3, 24, 1.2);
let dubai = new Cookiestand('dubai', 11, 38, 3.7);
let paris = new Cookiestand('paris', 20, 38, 2.3);
let lima = new Cookiestand('lima', 2, 16, 4.6);




//Random Number Generator for Customers each hour (helper function)
function getRandomCustomer(min, max) {
  //min will be set for each location
  //max will be set for each loaction
  return Math.floor(Math.random() * (max - min + 1) + min);
}


// Render Header 
function renderHeader() {

  let table = document.getElementById('sales-table');


  let tr = document.createElement('tr');
  //tr.textContent = 'hello';
  table.appendChild(tr);

  let th = document.createElement('th');
  th.textContent = 'Hours';

  tr.appendChild(th);

  for (let i = 0; i < time.length; i++) {
    let td = document.createElement('th');
    td.textContent = time[i];
    //console.log(th.textContent);

    tr.appendChild(td);
  }

  let tf = document.createElement('tf')
  tf.textContent = 'Daily Location Total';
  tr.appendChild(tf);

}



Cookiestand.prototype.render = function () {

  let table = document.getElementById('sales-table');

  let tr = document.createElement('tr');
  //tr.textContent = `${this.name}`;
  table.appendChild(tr);

  let thead = document.createElement('thead');
  thead.textContent = `${this.name}`;
  tr.appendChild(thead);


  for (let i = 0; i < time.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.iLoveCookies[i];
    //console.log(td.textContent);

    tr.appendChild(td);
  }

  let tf = document.createElement('tf')
  tf.textContent = `${this.total}`;
  tr.appendChild(tf);
}


//Render Footer

function renderFooter() {
  
  addition();

  let table = document.getElementById('sales-table');


  let tfoot = document.createElement('tfoot');

  table.appendChild(tfoot);

  let tr = document.createElement('tr');
  //tr.textContent = 'hello';
  tfoot.appendChild(tr);

  let th = document.createElement('th');
  th.textContent = 'Total';

  tr.appendChild(th);

  for (let i = 0; i < time.length; i++) {
    let td = document.createElement('th');
    td.textContent = totalArr[i];
    //console.log(th.textContent);

    tr.appendChild(td);
  }

  let tf = document.createElement('tf');
  tf.textContent = grandTotal;
  tr.appendChild(tf);

}




renderHeader();
seattle.getCust();
seattle.render();
tokyo.getCust();
tokyo.render();
dubai.getCust();
dubai.render();
paris.getCust();
paris.render();
lima.getCust();
lima.render();
renderFooter();


// totalArr.push(seattle.iLoveCookies);
// totalArr.push(tokyo.iLoveCookies);


// console.table(totalArr)

// let final = [];



// console.log(final);



// Step 1: Grab element we want to listen too
const storeForm = document.getElementById('add-store');


// Step 3: write out our callback function/event handler

function handleSubmit(event) {
  event.preventDefault();
  //console.log('hello');

  let name = event.target.name.value;
  //console.log(name)
  let min = +event.target.min.value;
  //console.log(min)
  let max = +event.target.max.value;
  //console.log(max)
  let avg = +event.target.avg.value;
  //console.log(avg)

  let newStore = new Cookiestand(name, min, max, avg);
  newStore.getCust();

  //console.log(newStore.iLoveCookies)
  
  document.getElementById('tfoot').remove();

  newStore.render();
  renderFooter();

}


// Step 2: Add event listener to the element we want to listen to
storeForm.addEventListener('submit', handleSubmit);


function addition() {
  totalArr = [];
  grandTotal = 0;
  //console.log(final)
  for (let i = 0; i < time.length; i++) {
    let hourTotal = 0;

    for (let j = 0; j < allStore.length; j++) {
      hourTotal += allStore[j].iLoveCookies[i];
      //final.push(total);
    }
    grandTotal += hourTotal;
    totalArr.push(hourTotal);
  }

}





