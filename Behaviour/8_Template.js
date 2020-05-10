
class Employee {
    constructor(name, salary) {
      this.name = name
      this.salary = salary
    }
  
    responsibilities() {}
  
    work() {
      return `${this.name} does ${this.responsibilities()}`
    }
  
    getPaid() {
      return `${this.name} have salary: ${this.salary}`
    }
  }
  
  class Developer extends Employee {
    constructor(name, salary) {
      super(name, salary)
    }
  
    responsibilities() {
      return 'making apps'
    }
  }
  
  class Tester extends Employee {
    constructor(name, salary) {
      super(name, salary)
    }
  
    responsibilities() {
      return 'testing apps'
    }
  }
  
  const dev = new Developer('Andrey', 100000)
  console.log(dev.getPaid())
  console.log(dev.work())
  
  const tester = new Tester('Artur', 90000)
  console.log(tester.getPaid())
  console.log(tester.work())