interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string
    [key: string]: any
}

// const teacher3: Teacher = {
//     firstName: 'John',
//     fullTimeEmployee: false,
//     lastName: 'Doe',
//     location: 'London'
//   };

  class teacherClass implements Teacher{
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any

    constructor(
        firstName: string,
        lastName: string,
        fullTimeEmployee: boolean,
        location: string,
        yearsOfExperience?: number,
        aditionalAttribut?: {[key: string]: any}
    ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.location = location;
        if (yearsOfExperience){
            this.yearsOfExperience = yearsOfExperience;
        }
        if (aditionalAttribut) {
            this.aditionalAttribut = aditionalAttribut;
        }
    }
  }

  const teacher2 = new teacherClass('Moussa', 'Traore', true, 'BKO')
  teacher2.contract = false

  //console.log(teacher2)

  interface Directors extends Teacher {
    numberOfReports: number
  }

  class directorsClass extends teacherClass{
    numberOfReports: number
    constructor(
        firstName: string,
        lastName: string,
        fullTimeEmployee: boolean,
        location: string,
        numberOfReports: number,
        yearsOfExperience?: number,
        aditionalAttribut?: {[key: string]: any}
    ){
        super(firstName, lastName, fullTimeEmployee, location, yearsOfExperience, aditionalAttribut);
        this.numberOfReports = numberOfReports
        
    }
  }

//   const director1: Directors = {
//     firstName: 'John',
//     lastName: 'Doe',
//     location: 'London',
//     fullTimeEmployee: true,
//     numberOfReports: 17,
//   };

//   console.log(director1);
  
function printTeacher(firstName: string, lastName: string){
    return `${firstName[0]}. ${lastName}`
}

// console.log(printTeacher('Breh', 'Traore'))

interface Student{
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string
}

class StudentClass implements Student {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName:string){
    this.firstName = firstName,
    this.lastName = lastName
  }

  workOnHomework(): string{
    return `Currently working`
  }

  displayName(): string{
    return `${this.firstName}`
  }
}
