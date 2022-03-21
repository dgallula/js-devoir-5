// exercices לולאות 

//exercice 1
  

const getRndInteger= (min, max) => {
    return Math.floor(Math.random() * max-min) + min;
  }
  
  let randomInteger= getRndInteger(10,20)
  console.log(randomInteger)
  
  //exercice 2 


const getRndInteger= (min, max) => {
    return Math.floor(Math.random() * (max-min)) + min;
  }
  let listOfRandomNumbers =[]
  
  
  for(let i=0; i<100; i++){
  let randomInteger=getRndInteger(10,20)
  listOfRandomNumbers.push(randomInteger)
  }
  
  console.log(listOfRandomNumbers)

  // הערה  במערך מופיעים מספרים שהם פחות מ10 לר הבנתי למה 

  
  // exercice 3 

 
const getRndInteger= (min, max) => {
    return Math.floor(Math.random() * (max-min)) + min;
  }
  let listOfRandomNumbers =[]
  
  
  for(let i=0; i<100; i++){
  let randomInteger=getRndInteger(10,20)
  listOfRandomNumbers.push(randomInteger)
  }
  
  console.log(listOfRandomNumbers)
  
  let sumOfRandomNumbers=0
  
  sumOfRandomNumbers=sumOfRandomNumbers + 100
  
  console.log( "the average of random numbers is " + sumOfRandomNumbers/listOfRandomNumbers.length )


// הממוצע שלי היא 1 


 // exercices fonctions 

  // exercice 1 

  let array1= [5,8,3];
  let array2=[9,6,5];
  let array3=[9,6,3];
  
  const calculAverageNumbers = (x) => {
    let sumNumbers=0
    let averageNumbers=0

    for (let i in listOfnumbers) {
    sumNumbers = sumNumbers + listOfnumbers[i] 

  }

  average = sumNumbers/listOfnumbers.length 

  return average
    };
    console.log(averageNumbers);
  
  calculAverageNumbers(array1)
  calculAverageNumbers(array2)
  calculAverageNumbers(array3)

// error: ReferenceError: averageNumbers is not defined


  //exercice 2 

  let array1= [5,8,3];
  let array2=[9,6,5];
  let array3=[9,6,3];
  
  const calculMinNumber = (x) => {
    let minNumber=x.reduce(function(a,b) {
      return a<b ? a : b;
    });
    console.log(minNumber);
  };
  
  calculMinNumber(array1)
  calculMinNumber(array2)
  calculMinNumber(array3)


   

// exercice 3

let array1= ["Renault", "Peugeot", "Citroen" ,];
let array2=["BMW", "Mercedes" , "Audi" , "Skoda"];
let array3=["Mitsubish", "Honda", "Mazada","Hunday"];

const calculWordLonger = (x) => {
  let longerWord=x.reduce(function(a,b) {
    return a < b ? a : b;
  });
  console.log(longerWord);
};

calculWordLonger(array1)
calculWordLonger(array2)
calculWordLonger(array3)

let array1= ["Renault", "Peugeot", "Citroen" ,];
let array2=["BMW", "Mercedes" , "Audi" , "Skoda"];
let array3=["Mitsubish", "Honda", "Mazada","Hunday"];

const calculWordLonger = (x) => {
  let longerWord=x.reduce(function(a,b) {
    return a < b ? a : b;
  });
  console.log(longerWord);
};

calculWordLonger(array1)
calculWordLonger(array2)
calculWordLonger(array3)

let word1="Citroen";
let i = 0; 
while (word1[i]) {
  i++
}
console.log(i);


let word2="Audi";
let j = 0; 
while (word2[j]) {
  j++
}
console.log(j);



let word3="Honda";
let k = 0; 
while (word3[k]) {
  k++
}
console.log(k);

//  לא הצלחתי למצא פונקציה לספור את האותיאות 


// exercice 4 



let array1= ["Renault", "Peugeot", "Citroen" ,];
let array2=["BMW", "Mercedes" , "Audi" , "Skoda"];
let array3=["Mitsubish", "Honda", "Mazada","Hunday"];

const calculWordLonger = (x) => {
  let longerWord=x.reduce(function(a,b) {
    return a < b ? a : b;
  });
  console.log(longerWord);
};

calculWordLonger(array1)
calculWordLonger(array2)
calculWordLonger(array3)

let array1= ["Renault", "Peugeot", "Citroen" ,];
let array2=["BMW", "Mercedes" , "Audi" , "Skoda"];
let array3=["Mitsubish", "Honda", "Mazada","Hunday"];

const calculWordLonger = (x) => {
  let longerWord=x.reduce(function(a,b) {
    return a < b ? a : b;
  });
  console.log(longerWord);
};

calculWordLonger(array1)
calculWordLonger(array2)
calculWordLonger(array3)


let array1= [4,5,6 ,];
let array2=[42,45 ,47 ,48];
let array3=[63,65,68,69];

const calculNumberAboveAverage = (x) => {
 let sum1Numbers=0
 let average1=0

  for (let i in list1Numbers) {
    sum1Numbers = sum1Numbers + list1numbers[i] 
  }
  average1= sum1Numbers/list1Numbers.length

 let sum2Numbers=0
 let average2=0

  for (let i in list2Numbers) {
    sum2Numbers = sum2Numbers + list2numbers[i] 
  }
  average2= sum2Numbers/list2Numbers.length

 let sumlist3Numbers=0
 let average3=0

  for (let i in list3Numbers) {
    sum3Numbers = sum3Numbers + list3numbers[i] 
  }
  average3= sum3Numbers/list3Numbers.length

 let b= average 
 let calculNumberAboveAverage =x.reduce(function(a,b) {
    return a < b ? a : b;
  });
  console.log(a);
};

calculNumberAboveAverage(array1)
calculNumberAboveAverage(array2)
calculNumberAboveAverage(array3)

// error , list1Number is not définided 

