// replacement for using many if statements
let day = 1;

switch (day) {
  case 1:
    console.log("It is Monday.");
    break;
  case 1:
    console.log("It is Tueday.");
    break;
  case 1:
    console.log("It is Wednsday.");
    break;
  case 1:
    console.log("It is Thurday.");
    break;
  case 1:
    console.log("It is Friday.");
    break;
  case 1:
    console.log("It is Sartuday.");
    break;
  case 1:
    console.log("It is Sunday.");
    break;
  default:
    console.log(`${day} is not a day`);
}

// example 2
let testScore = 90;
let letterGrade;

switch (true) {
  case testScore >= 90:
    letterGrade = "A";
  case testScore >= 80:
    letterGrade = "B";
  case testScore >= 70:
    letterGrade = "C";
  case testScore >= 60:
    letterGrade = "D";
  default:
    letterGrade = "F";
}
