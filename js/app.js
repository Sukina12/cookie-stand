'use eslint';

function getRandomNumber (min,max) {
  return Math.floor(Math.random()*(max - min + 1) + min);
}


// First Location
const Seatle={
  name: 'Seatle',
  minNumOfCust: 23,
  maxNumOfCust: 65,
  averageNumOfCookies: 6.3,
  numOfCust : [],
  numberOfCookies: [],
  workHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  total: 0,

  getNumOfCust : function (){
    for (let x=0; x<14; x++)
    {
      let cusNum=getRandomNumber(this.minNumOfCust,this.maxNumOfCust);
      this.numOfCust.push(cusNum);
    }
  },
  getNumOfCookies : function (){
    for (let i=0; i<14; i++)
    {
      let cookiesNum = Math.floor(this.numOfCust[i] * this.averageNumOfCookies);
      this.numberOfCookies.push(cookiesNum);
      this.total=this.total+ cookiesNum;
    }
  },
  render : function (){
    const container = document.getElementById('Location-profiles');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement ('h2');
    articleEl.appendChild(h2El);
    h2El.textContent=this.name;
    const ulEl = document.createElement ('ul');
    articleEl.appendChild(ulEl);
    for (let i=0; i<14 ; i++)
    {
      const liEl=document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent =`${this.workHours[i]} : ${this.numberOfCookies[i]} cookkies`;
    }
    const liEl=document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total : ${this.total} cookies`;
  }

};
Seatle.getNumOfCust ();
Seatle.getNumOfCookies();
Seatle.render();
console.log(Seatle);

// Seconde Location
const Tokyo={
  name: 'Tokyo',
  minNumOfCust: 3,
  maxNumOfCust: 24,
  averageNumOfCookies: 1.2,
  numOfCust : [],
  numberOfCookies: [],
  workHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  total: 0,

  getNumOfCust : function (){
    for (let x=0; x<14; x++){
      let cusNum=getRandomNumber(this.minNumOfCust,this.maxNumOfCust);
      this.numOfCust.push(cusNum);
    }
  },
  getNumOfCookies : function (){
    for (let i=0; i<14; i++)
    {
      let cookiesNum = Math.floor(this.numOfCust[i] * this.averageNumOfCookies);
      this.numberOfCookies.push(cookiesNum);
      this.total=this.total+ cookiesNum;
    }
  },
  render : function (){
    const container = document.getElementById('Location-profiles');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement ('h2');
    articleEl.appendChild(h2El);
    h2El.textContent=this.name;
    const ulEl = document.createElement ('ul');
    articleEl.appendChild(ulEl);
    for (let i=0; i<14 ; i++)
    {
      const liEl=document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent =`${this.workHours[i]} : ${this.numberOfCookies[i]} cookkies`;
    }
    const liEl=document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total : ${this.total} cookies`;
  }

};
Tokyo.getNumOfCust ();
Tokyo.getNumOfCookies();
Tokyo.render();
console.log(Tokyo);


// Third Location
const Dubai={
  name: 'Dubai',
  minNumOfCust: 11,
  maxNumOfCust: 38,
  averageNumOfCookies: 3.7,
  numOfCust : [],
  numberOfCookies: [],
  workHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  total: 0,

  getNumOfCust : function (){
    for (let x=0; x<14; x++)
    {
      let cusNum=getRandomNumber(this.minNumOfCust,this.maxNumOfCust);
      this.numOfCust.push(cusNum);
    }
  },
  getNumOfCookies : function (){
    for (let i=0; i<14; i++)
    {
      let cookiesNum = Math.floor(this.numOfCust[i] * this.averageNumOfCookies);
      this.numberOfCookies.push(cookiesNum);
      this.total=this.total+ cookiesNum;
    }
  },
  render : function (){
    const container = document.getElementById('Location-profiles');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement ('h2');
    articleEl.appendChild(h2El);
    h2El.textContent=this.name;
    const ulEl = document.createElement ('ul');
    articleEl.appendChild(ulEl);
    for (let i=0; i<14 ; i++)
    {
      const liEl=document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent =`${this.workHours[i]} : ${this.numberOfCookies[i]} cookkies`;
    }
    const liEl=document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total : ${this.total} cookies`;
  }

};
Dubai.getNumOfCust ();
Dubai.getNumOfCookies();
Dubai.render();
console.log(Dubai);

// Fourth Location
const Paris={
  name: 'Paris',
  minNumOfCust: 20,
  maxNumOfCust: 38,
  averageNumOfCookies: 2.3,
  numOfCust : [],
  numberOfCookies: [],
  workHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  total: 0,

  getNumOfCust : function (){
    for (let x=0; x<14; x++)
    {
      let cusNum=getRandomNumber(this.minNumOfCust,this.maxNumOfCust);
      this.numOfCust.push(cusNum);
    }
  },
  getNumOfCookies : function (){
    for (let i=0; i<14; i++)
    {
      let cookiesNum = Math.floor(this.numOfCust[i] * this.averageNumOfCookies);
      this.numberOfCookies.push(cookiesNum);
      this.total=this.total+ cookiesNum;
    }
  },
  render : function (){
    const container = document.getElementById('Location-profiles');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement ('h2');
    articleEl.appendChild(h2El);
    h2El.textContent=this.name;
    const ulEl = document.createElement ('ul');
    articleEl.appendChild(ulEl);
    for (let i=0; i<14 ; i++)
    {
      const liEl=document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent =`${this.workHours[i]} : ${this.numberOfCookies[i]} cookkies`;
    }
    const liEl=document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total : ${this.total} cookies`;
  }

};
Paris.getNumOfCust ();
Paris.getNumOfCookies();
Paris.render();
console.log(Paris);


// Fifth Location
const Lima={
  name: 'Lima',
  minNumOfCust: 2,
  maxNumOfCust: 16,
  averageNumOfCookies: 4.6,
  numOfCust : [],
  numberOfCookies: [],
  workHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  total: 0,

  getNumOfCust : function (){
    for (let x=0; x<14; x++)
    {
      let cusNum=getRandomNumber(this.minNumOfCust,this.maxNumOfCust);
      this.numOfCust.push(cusNum);
    }
  },
  getNumOfCookies : function (){
    for (let i=0; i<14; i++)
    {
      let cookiesNum = Math.floor(this.numOfCust[i] * this.averageNumOfCookies);
      this.numberOfCookies.push(cookiesNum);
      this.total=this.total+ cookiesNum;
    }
  },
  render : function (){
    const container = document.getElementById('Location-profiles');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement ('h2');
    articleEl.appendChild(h2El);
    h2El.textContent=this.name;
    const ulEl = document.createElement ('ul');
    articleEl.appendChild(ulEl);
    for (let i=0; i<14 ; i++)
    {
      const liEl=document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent =`${this.workHours[i]} : ${this.numberOfCookies[i]} cookkies`;
    }
    const liEl=document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total : ${this.total} cookies`;
  }

};
Lima.getNumOfCust ();
Lima.getNumOfCookies();
Lima.render();
console.log(Lima);

