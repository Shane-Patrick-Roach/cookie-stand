'use strict';

//console.log('hello world');

// SEATTLE cookie store

let seattle = {
  name: 'Seattle',
  minHourCust: 23,
  maxHourCust: 65,
  avgCookiesCust: 6.3,
  time: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  iLoveCookies: [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  cookiePerHour: 0,
  total: 0,

  //Method 
  getCust: function() {
    //console.log(this.name);
    this.cookiePerHour = (getRandomCustomer(this.minHourCust,this.maxHourCust)) * this.avgCookiesCust;
    //console.log(this.cookiePerHour);
    // for loop to store values for each time slot and stores as an integer
    for (let i = 0; i < this.iLoveCookies.length; i++) {
      this.iLoveCookies[i]= parseInt((getRandomCustomer(this.minHourCust,this.maxHourCust)) * this.avgCookiesCust);
    }
    console.log(this.iLoveCookies);

    //convert object to number
    //parseInt(this.time[1]);
    

    //console.log(Number(Math.round(this.time)));

    // for loop to calculate total cookies bought
    for (let p = 0; p < this.iLoveCookies.length; p++) {
      this.total = this.total + this.iLoveCookies[p];
      
    }
    console.log(Math.round(this.total));
  }

  

}
seattle.getCust();


//Random Number Generator for Customers each hour (helper function)

function getRandomCustomer(min,max){
  //min will be set for each location
  //max will be set for each loaction
  return Math.floor(Math.random() * (max - min + 1) + min);
}




//adding an element to the dom, 3 steps

//step 1: create element
//step 2: give content
//step 3: append it to the DOM



seattle.render = function () {

  let seattlelist = document.getElementById('seattle');
  
  for (let i = 0; i < seattle.iLoveCookies.length; i++){
    let li = document.createElement('Li');
    
    li.textContent = `${(seattle.time[i])}: ${(seattle.iLoveCookies)[i]} cookies`;
    console.log(li.textContent)
    
    seattlelist.appendChild(li);
  }
  //console.log(seattle.total)

  let toT = document.createElement('Li');
  toT.textContent = `Total: ${seattle.total} cookies`;

  seattlelist.appendChild(toT);

}
seattle.render();






// TOKYO

let tokyo = {
  name: 'Tokyo',
  minHourCust: 3,
  maxHourCust: 24,
  avgCookiesCust: 1.2,
  time: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  iLoveCookies: [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  cookiePerHour: 0,
  total: 0,

  //Method 
  getCust: function() {
    //console.log(this.name);
    this.cookiePerHour = (getRandomCustomer(this.minHourCust,this.maxHourCust)) * this.avgCookiesCust;
    //console.log(this.cookiePerHour);
    // for loop to store values for each time slot and stores as an integer
    for (let i = 0; i < this.iLoveCookies.length; i++) {
      this.iLoveCookies[i]= parseInt((getRandomCustomer(this.minHourCust,this.maxHourCust)) * this.avgCookiesCust);
    }
    console.log(this.iLoveCookies);

    //convert object to number
    //parseInt(this.time[1]);
    

    //console.log(Number(Math.round(this.time)));

    // for loop to calculate total cookies bought
    for (let p = 0; p < this.iLoveCookies.length; p++) {
      this.total = this.total + this.iLoveCookies[p];
      
    }
    console.log(Math.round(this.total));
  }

  

}
tokyo.getCust();

tokyo.render = function () {

  let tokyolist = document.getElementById('tokyo');
  
  for (let i = 0; i < tokyo.iLoveCookies.length; i++){
    let li = document.createElement('Li');
    
    li.textContent = `${(tokyo.time[i])}: ${(tokyo.iLoveCookies)[i]} cookies`;
    console.log(li.textContent)
    
    tokyolist.appendChild(li);
  }
  //console.log(seattle.total)

  let toT = document.createElement('Li');
  toT.textContent = `Total: ${tokyo.total} cookies`;

  tokyolist.appendChild(toT);

}
tokyo.render();





// DUBAI

let dubai = {
  name: 'dubai',
  minHourCust: 11,
  maxHourCust: 38,
  avgCookiesCust: 3.7,
  time: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  iLoveCookies: [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  cookiePerHour: 0,
  total: 0,

  //Method 
  getCust: function() {
    //console.log(this.name);
    this.cookiePerHour = (getRandomCustomer(this.minHourCust,this.maxHourCust)) * this.avgCookiesCust;
    //console.log(this.cookiePerHour);
    // for loop to store values for each time slot and stores as an integer
    for (let i = 0; i < this.iLoveCookies.length; i++) {
      this.iLoveCookies[i]= parseInt((getRandomCustomer(this.minHourCust,this.maxHourCust)) * this.avgCookiesCust);
    }
    console.log(this.iLoveCookies);

    //convert object to number
    //parseInt(this.time[1]);
    

    //console.log(Number(Math.round(this.time)));

    // for loop to calculate total cookies bought
    for (let p = 0; p < this.iLoveCookies.length; p++) {
      this.total = this.total + this.iLoveCookies[p];
      
    }
    console.log(Math.round(this.total));
  }

  

}
dubai.getCust();

dubai.render = function () {

  let dubailist = document.getElementById('dubai');
  
  for (let i = 0; i < dubai.iLoveCookies.length; i++){
    let li = document.createElement('Li');
    
    li.textContent = `${(dubai.time[i])}: ${(dubai.iLoveCookies)[i]} cookies`;
    console.log(li.textContent)
    
    dubailist.appendChild(li);
  }
  //console.log(seattle.total)

  let toT = document.createElement('Li');
  toT.textContent = `Total: ${dubai.total} cookies`;

  dubailist.appendChild(toT);

}
dubai.render();





// PARIS

let paris = {
  name: 'Paris',
  minHourCust: 20,
  maxHourCust: 38,
  avgCookiesCust: 2.3,
  time: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  iLoveCookies: [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  cookiePerHour: 0,
  total: 0,

  //Method 
  getCust: function() {
    //console.log(this.name);
    this.cookiePerHour = (getRandomCustomer(this.minHourCust,this.maxHourCust)) * this.avgCookiesCust;
    //console.log(this.cookiePerHour);
    // for loop to store values for each time slot and stores as an integer
    for (let i = 0; i < this.iLoveCookies.length; i++) {
      this.iLoveCookies[i]= parseInt((getRandomCustomer(this.minHourCust,this.maxHourCust)) * this.avgCookiesCust);
    }
    console.log(this.iLoveCookies);

    //convert object to number
    //parseInt(this.time[1]);
    

    //console.log(Number(Math.round(this.time)));

    // for loop to calculate total cookies bought
    for (let p = 0; p < this.iLoveCookies.length; p++) {
      this.total = this.total + this.iLoveCookies[p];
      
    }
    console.log(Math.round(this.total));
  }

  

}
paris.getCust();

paris.render = function () {

  let parislist = document.getElementById('paris');
  
  for (let i = 0; i < paris.iLoveCookies.length; i++){
    let li = document.createElement('Li');
    
    li.textContent = `${(paris.time[i])}: ${(paris.iLoveCookies)[i]} cookies`;
    console.log(li.textContent)
    
    parislist.appendChild(li);
  }
  //console.log(paris.total)

  let toT = document.createElement('Li');
  toT.textContent = `Total: ${paris.total} cookies`;

  parislist.appendChild(toT);

}
paris.render();



// LIMA

let lima = {
  name: 'Lima',
  minHourCust: 2,
  maxHourCust: 16,
  avgCookiesCust: 4.6,
  time: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  iLoveCookies: [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  cookiePerHour: 0,
  total: 0,

  //Method 
  getCust: function() {
    //console.log(this.name);
    this.cookiePerHour = (getRandomCustomer(this.minHourCust,this.maxHourCust)) * this.avgCookiesCust;
    //console.log(this.cookiePerHour);
    // for loop to store values for each time slot and stores as an integer
    for (let i = 0; i < this.iLoveCookies.length; i++) {
      this.iLoveCookies[i]= parseInt((getRandomCustomer(this.minHourCust,this.maxHourCust)) * this.avgCookiesCust);
    }
    console.log(this.iLoveCookies);

    //convert object to number
    //parseInt(this.time[1]);
    

    //console.log(Number(Math.round(this.time)));

    // for loop to calculate total cookies bought
    for (let p = 0; p < this.iLoveCookies.length; p++) {
      this.total = this.total + this.iLoveCookies[p];
      
    }
    console.log(Math.round(this.total));
  }

  

}
lima.getCust();

lima.render = function () {

  let limalist = document.getElementById('lima');
  
  for (let i = 0; i < lima.iLoveCookies.length; i++){
    let li = document.createElement('Li');
    
    li.textContent = `${(lima.time[i])}: ${(lima.iLoveCookies)[i]} cookies`;
    console.log(li.textContent)
    
    limalist.appendChild(li);
  }
  //console.log(lima.total)

  let toT = document.createElement('Li');
  toT.textContent = `Total: ${lima.total} cookies`;

  limalist.appendChild(toT);

}
lima.render();
