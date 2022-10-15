/* Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo, addIncome, addExpense and accountBalance methods. Incomes is an array of objects income and its description and expenses is also an array of objects having expense and its description*/


class PersonAccount {
  constructor(firstName, lastName, incomes, expenses) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.incomes = incomes;
    this.expenses = expenses;
  }
  totalIncome() {
    return this.incomes.reduce((a, b) => a + b.income, 0);
  }
  totalExpense() {
    return this.expenses.reduce((a, b) => a + b.expense, 0);
  }
  accountInfo() {
    return `${this.firstName} ${this.lastName}\n
    Total incomes = ${this.totalIncome()}\n
    Total expenses = ${this.totalExpense()}\n
    Account balance = ${this.accountBalance()}`;
  }
  addIncome(income, description) {
    this.incomes.push({ income, description });
  }
  addExpense(expense, description) {
    this.expenses.push({ expense, description });
  }
  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  }
}
const person = new PersonAccount(
  "Muhammad Farooq",
  "Muhammad Faheem",
  [
    { income: 30000, description: "salary" },
    { income: 10000, description: "part time job" },
  ],
  [
    { expense: 5000, description: "bike fuel" },
    { expense: 1000, description: "hotel" },
  ]
);
console.log(person);
console.log("Total Income", person.totalIncome());
console.log("Total Expense", person.totalExpense());
person.addIncome(10000, "bickea");
person.addExpense(1000, "gift");
console.log("Account Balance", person.accountBalance());



/*
Create an Automobile class. The class will have name, model, color, type properties and create different methods e.g openOrCloseDoor() logs doors are opened or closed, start() logs car is ready for drive. 
*/


class Automobile {
  constructor(name, color, brand, year, type) {
    this.name = name;
    this.color = color;
    this.brand = brand;
    this.year = year;
    this.type = type;
  }
  openDoor() {
    console.log(`${this.name} door are open`);
  }
  CloseDoor() {
    console.log(`${this.name} door are close`);
  }
  start() {
    console.log(`${this.name}  is ready for drive`);
  }
}
// Create Car, Bus and Truck child class from the Automobile Class.

class Car extends Automobile {
  constructor(name, color, brand, year, type, doors, speed) {
    super(name, color, brand, year, type);
    this.doors = doors;
    this.speed = speed;
    console.log(`${name} has ${doors} doors`);
    console.log(`${name} It has a  ${speed}  KM/H`);
  }
}
class Truck extends Automobile {
  constructor(name, color, brand, year, type, doors, speed) {
    super(name, color, brand, year, type);
    this.doors = doors;
    this.speed = speed;
    console.log(`${name} has ${doors} doors`);
    console.log(`${name} It has a  ${speed} KM/H`);
  }
}
class Bus extends Automobile {
  constructor(name, color, brand, year, type, doors, speed) {
    super(name, color, brand, year, type);
    this.doors = doors;
    this.speed = speed;
    console.log(`${name} has ${doors} doors`);
    console.log(`${name} It has a  ${speed} KM/H`);
  }
}
const car1 = new Car("Swift","white","Suzuki","2022","auto",4,220)
const truck1 = new Truck("Hino","black","Toyota","1942","manual",2,80)
const bus1 = new Bus("HiAce","gray","Toyota","2019","auto",4,180)
console.log(Automobile);
