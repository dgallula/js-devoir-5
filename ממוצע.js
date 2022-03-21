let student1GradesList =[90, 70, 85, 60, 98]
let student2GradesList =[98, 99, 69, 79,]
let student3GradesList =[99, 96, 89]

let student1GradesSum =0
let student2GradesSum =0
let student3GradesSum =0

let student1Average= 0
let student2Average= 0
let student3Average= 0

let totalAverage= [0]

// for student1 

for(let i=0 ; i < student1GradesList.length; i++){
    student1GradesSum = student1GradesSum + student1GradesList[i]

}
console.log('student1Grades:Sum' +  student1GradesSum)

student1Average = student1GradesSum / student1GradesList.length

console.log('student 1 Average: is' +  student1Average) 

// for student2 


for(let i=0 ; i < student2GradesList.length; i++){
    student2GradesSum = student2GradesSum + student2GradesList[i]

}
console.log('student2Grades:Sum' +  student2GradesSum)

student2Average = student2GradesSum / student2GradesList.length

console.log('student 2 Average: is' +  student2Average) 

//for student3 


for(let i=0 ; i < student3GradesList.length; i++){
    student3GradesSum = student3GradesSum + student3GradesList[i]

}
console.log('student3Grades:Sum' +  student3GradesSum)

student3Average = student3GradesSum / student3GradesList.length

console.log('student 3 Average: is' +  student3Average) 










