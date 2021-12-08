'use strict';

//console.log('hello world');

let time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// SEATTLE cookie store

function Cookiestand(locationName, minHourCust, maxHourCust, avgCookiesCust) {
  this.name = locationName;
  this.minHourCust = minHourCust;
  this.maxHourCust = maxHourCust;
  this.avgCookiesCust = avgCookiesCust;
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
  console.log(this.iLoveCookies);

  //console.log(Number(Math.round(this.time)));

  // for loop to calculate total cookies bought
  for (let p = 0; p < time.length; p++) {
    this.total += this.iLoveCookies[p];
  }

  console.log(Math.round(this.total));
  //return (this.iLoveCookies)
}


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


