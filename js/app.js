'use eslint';

let workHours=['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
let locations=[];

const container = document.getElementById('Location-profiles');
const tableEl = document.createElement ('table');
container.appendChild(tableEl);

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



// Constructer Function:

function Locations (name,minNumOfCust,maxNumOfCust,averageNumOfCookies){
  this.name=name;
  this.minNumOfCust=minNumOfCust;
  this.maxNumOfCust=maxNumOfCust;
  this.averageNumOfCookies=averageNumOfCookies;
  this.numOfCust =[];
  this.numberOfCookies=[];
  this.total=0;
  locations.push(this);
}

// Prototype Method:
Locations.prototype.getNumOfCust = function(){
  for (let x = 0; x < workHours.length; x++) {
    let cusNum = getRandomNumber(this.minNumOfCust, this.maxNumOfCust);
    this.numOfCust.push(cusNum);
  }
};
Locations.prototype.getNumOfCookies = function(){
  for (let i = 0; i < workHours.length; i++) {
    let cookiesNum = Math.floor(this.numOfCust[i] * this.averageNumOfCookies);
    this.numberOfCookies.push(cookiesNum);
    this.total = this.total + cookiesNum;
  }
};
Locations.prototype.render = function () {
  const tableDataRow = document.createElement('tr');
  tableEl.appendChild(tableDataRow);

  const tdEl = document.createElement ('td');
  tableDataRow.appendChild(tdEl);
  tdEl.textContent = this.name;

  for (let i = 0; i<workHours.length; i++){
    const td1El = document.createElement ('td');
    tableDataRow.appendChild(td1El);
    td1El.textContent = this.numberOfCookies[i];
  }
  const td2El = document.createElement ('td');
  tableDataRow.appendChild(td2El);
  td2El.textContent = this.total;
};

// Table Header Function:
let tableHeader = function(){
  const headerRowEl = document.createElement('tr');
  tableEl.appendChild(headerRowEl);

  const th1El = document.createElement ('th');
  headerRowEl.appendChild(th1El);
  th1El.textContent = 'Locations Name';

  for (let i=0; i<workHours.length; i++){
    const th2El = document.createElement('th');
    headerRowEl.appendChild(th2El);
    th2El.textContent=workHours[i];
  }
  const th3El = document.createElement('th');
  headerRowEl.appendChild(th3El);
  th3El.textContent = 'Daily Location Total';
};
// Table Footer Function:
let tableFooter = function(){
  const footerRowEl = document.createElement('tr');
  tableEl.appendChild(footerRowEl);

  const th1El = document.createElement ('th');
  footerRowEl.appendChild(th1El);
  th1El.textContent = 'Totals';

  for (let i=0; i<workHours.length; i++){
    let totalCookies=0;
    for(let j=0; j<locations.length; j++){
      totalCookies=totalCookies+locations[j].numberOfCookies[i];
    }
    const th2El = document.createElement('th');
    footerRowEl.appendChild(th2El);
    th2El.textContent=totalCookies;
  }
  const th3El = document.createElement ('th');
  footerRowEl.appendChild(th3El);
  let sumTotal=0;
  for(let y=0; y<locations.length; y++)
  {
    sumTotal=sumTotal+locations[y].total;
  }
  th3El.textContent =sumTotal;
};
const seatle = new Locations ('Seatle',23,65,6.3);
const tokyo = new Locations ('Tokyo',3,24,1.2);
const dubai = new Locations ('Dubai',11,38,3.7);
const paris = new Locations ('Paris',20,38,2.3);
const Lima = new Locations ('Lima',2,16,4.6);

tableHeader();
for (let x=0; x<locations.length; x++)
{
  locations[x].getNumOfCust();
  locations[x].getNumOfCookies();
  locations[x].render();
}
tableFooter();

let myForm=document.getElementById('locationForm');
myForm.addEventListener('submit',addNewCenter);
function addNewCenter (event){
  event.preventDefault();
  let locationName = event.target.name.value;
  let minNumOfCustomer = event.target.minNumOfCust.value;
  let maxNumOfCustomer = event.target.maxNumOfCust.value;
  let avgCookies = event.target.avgNumOfCookies.value;

  const newLocation = new Locations (locationName,minNumOfCustomer,maxNumOfCustomer,avgCookies);
  newLocation.getNumOfCust();
  newLocation.getNumOfCookies();
  let lastRow=(tableEl.rows.length)-1;
  tableEl.deleteRow(lastRow);
  newLocation.render();
  tableFooter();
}





