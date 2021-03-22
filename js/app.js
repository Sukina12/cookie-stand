'use eslint';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let workHours=['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let render = function(){
  const container = document.getElementById('Location-profiles');
  const articleEl = document.createElement('article');
  container.appendChild(articleEl);

  const tableEl = document.createElement ('table');
  articleEl.appendChild(tableEl);

  const headerRowEl = document.createElement('tr');
  tableEl.appendChild(headerRowEl);

  const th1El = document.createElement ('th');
  headerRowEl.appendChild(th1El);

  for (let i=0; i<workHours.length; i++){
    const th2El = document.createElement('th');
    headerRowEl.appendChild(th2El);
    th2El.textContent=workHours[i];
  }
  const th3El = document.createElement('th');
  headerRowEl.appendChild(th3El);
  th3El.textContent = 'Daily Location Total';

};
render();

function Locations (name,minNumOfCust,maxNumOfCust,averageNumOfCookies){
  this.name=name;
  this.minNumOfCust=minNumOfCust;
  this.maxNumOfCust=maxNumOfCust;
  this.averageNumOfCookies=averageNumOfCookies;
  this.numOfCust =[];
  this.numberOfCookies=[];
  this.total=0;
}
Locations.prototype.getNumOfCust = function(){
  for (let x = 0; x < 14; x++) {
    let cusNum = getRandomNumber(this.minNumOfCust, this.maxNumOfCust);
    this.numOfCust.push(cusNum);
  }
};
Locations.prototype.getNumOfCookies = function(){
  for (let i = 0; i < 14; i++) {
    let cookiesNum = Math.floor(this.numOfCust[i] * this.averageNumOfCookies);
    this.numberOfCookies.push(cookiesNum);
    this.total = this.total + cookiesNum;
  }
};
Locations.prototype.render = function () {
  const container = document.getElementById('Location-profiles');
  const articleEl = document.createElement('article');
  container.appendChild(articleEl);
  const tableEl = document.createElement ('table');
  articleEl.appendChild(tableEl);
  const tableDataRow = document.createElement('tr');
  tableEl.appendChild(tableDataRow);
  


  
};


const seatle = new Locations ('Seatle',23,65,6.3);
const tokyo = new Locations ('Tokyo',3,24,1.2);
const dubai = new Locations ('Dubai',11,38,3.7);
const paris = new Locations ('Paris',20,38,2.3);
const Lima = new Locations ('Lima',2,16,4.6);

seatle.getNumOfCust();
seatle.getNumOfCookies();
console.log (seatle);

tokyo.getNumOfCust();
tokyo.getNumOfCookies();
console.log (tokyo);

dubai.getNumOfCust();
dubai.getNumOfCookies();
console.log (dubai);

paris.getNumOfCust();
paris.getNumOfCookies();
console.log (paris);

Lima.getNumOfCust();
Lima.getNumOfCookies();
console.log (Lima);



// // First Location
// const Seatle = {
//   name: 'Seatle',
//   minNumOfCust: 23,
//   maxNumOfCust: 65,
//   averageNumOfCookies: 6.3,
//   numOfCust: [],
//     numberOfCookies: [],
//     workHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//     total: 0,

//     getNumOfCust: function() {
//         for (let x = 0; x < 14; x++) {
//             let cusNum = getRandomNumber(this.minNumOfCust, this.maxNumOfCust);
//             this.numOfCust.push(cusNum);
//         }
//     },
//     getNumOfCookies: function() {
//         for (let i = 0; i < 14; i++) {
//             let cookiesNum = Math.floor(this.numOfCust[i] * this.averageNumOfCookies);
//             this.numberOfCookies.push(cookiesNum);
//             this.total = this.total + cookiesNum;
//         }
//     },
//     render: function() {
//         const container = document.getElementById('Location-profiles');
//         const articleEl = document.createElement('article');
//         container.appendChild(articleEl);
//         const h2El = document.createElement('h2');
//         articleEl.appendChild(h2El);
//         h2El.textContent = this.name;
//         const ulEl = document.createElement('ul');
//         articleEl.appendChild(ulEl);
//         for (let i = 0; i < 14; i++) {
//             const liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${this.workHours[i]} : ${this.numberOfCookies[i]} cookkies`;
//         }
//         const liEl = document.createElement('li');
//         ulEl.appendChild(liEl);
//         liEl.textContent = `Total : ${this.total} cookies`;
//     }

// };
// Seatle.getNumOfCust();
// Seatle.getNumOfCookies();
// Seatle.render();
// console.log(Seatle);

// // Seconde Location
// const Tokyo = {
//     name: 'Tokyo',
//     minNumOfCust: 3,
//     maxNumOfCust: 24,
//     averageNumOfCookies: 1.2,
//     numOfCust: [],
//     numberOfCookies: [],
//     workHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//     total: 0,

//     getNumOfCust: function() {
//         for (let x = 0; x < 14; x++) {
//             let cusNum = getRandomNumber(this.minNumOfCust, this.maxNumOfCust);
//             this.numOfCust.push(cusNum);
//         }
//     },
//     getNumOfCookies: function() {
//         for (let i = 0; i < 14; i++) {
//             let cookiesNum = Math.floor(this.numOfCust[i] * this.averageNumOfCookies);
//             this.numberOfCookies.push(cookiesNum);
//             this.total = this.total + cookiesNum;
//         }
//     },
//     render: function() {
//         const container = document.getElementById('Location-profiles');
//         const articleEl = document.createElement('article');
//         container.appendChild(articleEl);
//         const h2El = document.createElement('h2');
//         articleEl.appendChild(h2El);
//         h2El.textContent = this.name;
//         const ulEl = document.createElement('ul');
//         articleEl.appendChild(ulEl);
//         for (let i = 0; i < 14; i++) {
//             const liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${this.workHours[i]} : ${this.numberOfCookies[i]} cookkies`;
//         }
//         const liEl = document.createElement('li');
//         ulEl.appendChild(liEl);
//         liEl.textContent = `Total : ${this.total} cookies`;
//     }

// };
// Tokyo.getNumOfCust();
// Tokyo.getNumOfCookies();
// Tokyo.render();
// console.log(Tokyo);


// // Third Location
// const Dubai = {
//     name: 'Dubai',
//     minNumOfCust: 11,
//     maxNumOfCust: 38,
//     averageNumOfCookies: 3.7,
//     numOfCust: [],
//     numberOfCookies: [],
//     workHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//     total: 0,

//     getNumOfCust: function() {
//         for (let x = 0; x < 14; x++) {
//             let cusNum = getRandomNumber(this.minNumOfCust, this.maxNumOfCust);
//             this.numOfCust.push(cusNum);
//         }
//     },
//     getNumOfCookies: function() {
//         for (let i = 0; i < 14; i++) {
//             let cookiesNum = Math.floor(this.numOfCust[i] * this.averageNumOfCookies);
//             this.numberOfCookies.push(cookiesNum);
//             this.total = this.total + cookiesNum;
//         }
//     },
//     render: function() {
//         const container = document.getElementById('Location-profiles');
//         const articleEl = document.createElement('article');
//         container.appendChild(articleEl);
//         const h2El = document.createElement('h2');
//         articleEl.appendChild(h2El);
//         h2El.textContent = this.name;
//         const ulEl = document.createElement('ul');
//         articleEl.appendChild(ulEl);
//         for (let i = 0; i < 14; i++) {
//             const liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${this.workHours[i]} : ${this.numberOfCookies[i]} cookkies`;
//         }
//         const liEl = document.createElement('li');
//         ulEl.appendChild(liEl);
//         liEl.textContent = `Total : ${this.total} cookies`;
//     }

// };
// Dubai.getNumOfCust();
// Dubai.getNumOfCookies();
// Dubai.render();
// console.log(Dubai);

// // Fourth Location
// const Paris = {
//     name: 'Paris',
//     minNumOfCust: 20,
//     maxNumOfCust: 38,
//     averageNumOfCookies: 2.3,
//     numOfCust: [],
//     numberOfCookies: [],
//     workHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//     total: 0,

//     getNumOfCust: function() {
//         for (let x = 0; x < 14; x++) {
//             let cusNum = getRandomNumber(this.minNumOfCust, this.maxNumOfCust);
//             this.numOfCust.push(cusNum);
//         }
//     },
//     getNumOfCookies: function() {
//         for (let i = 0; i < 14; i++) {
//             let cookiesNum = Math.floor(this.numOfCust[i] * this.averageNumOfCookies);
//             this.numberOfCookies.push(cookiesNum);
//             this.total = this.total + cookiesNum;
//         }
//     },
//     render: function() {
//         const container = document.getElementById('Location-profiles');
//         const articleEl = document.createElement('article');
//         container.appendChild(articleEl);
//         const h2El = document.createElement('h2');
//         articleEl.appendChild(h2El);
//         h2El.textContent = this.name;
//         const ulEl = document.createElement('ul');
//         articleEl.appendChild(ulEl);
//         for (let i = 0; i < 14; i++) {
//             const liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${this.workHours[i]} : ${this.numberOfCookies[i]} cookkies`;
//         }
//         const liEl = document.createElement('li');
//         ulEl.appendChild(liEl);
//         liEl.textContent = `Total : ${this.total} cookies`;
//     }

// };
// Paris.getNumOfCust();
// Paris.getNumOfCookies();
// Paris.render();
// console.log(Paris);


// // Fifth Location
// const Lima = {
//     name: 'Lima',
//     minNumOfCust: 2,
//     maxNumOfCust: 16,
//     averageNumOfCookies: 4.6,
//     numOfCust: [],
//     numberOfCookies: [],
//     workHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//     total: 0,

//     getNumOfCust: function() {
//         for (let x = 0; x < 14; x++) {
//             let cusNum = getRandomNumber(this.minNumOfCust, this.maxNumOfCust);
//             this.numOfCust.push(cusNum);
//         }
//     },
//     getNumOfCookies: function() {
//         for (let i = 0; i < 14; i++) {
//             let cookiesNum = Math.floor(this.numOfCust[i] * this.averageNumOfCookies);
//             this.numberOfCookies.push(cookiesNum);
//             this.total = this.total + cookiesNum;
//         }
//     },
//     render: function() {
//         const container = document.getElementById('Location-profiles');
//         const articleEl = document.createElement('article');
//         container.appendChild(articleEl);
//         const h2El = document.createElement('h2');
//         articleEl.appendChild(h2El);
//         h2El.textContent = this.name;
//         const ulEl = document.createElement('ul');
//         articleEl.appendChild(ulEl);
//         for (let i = 0; i < 14; i++) {
//             const liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${this.workHours[i]} : ${this.numberOfCookies[i]} cookkies`;
//         }
//         const liEl = document.createElement('li');
//         ulEl.appendChild(liEl);
//         liEl.textContent = `Total : ${this.total} cookies`;
//     }

// };
// Lima.getNumOfCust();
// Lima.getNumOfCookies();
// Lima.render();
// console.log(Lima);
