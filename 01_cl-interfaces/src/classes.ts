class Department {
  static fiscalYear = 2020;
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    // Anche se all'interno del costruttore per accedere al metodo statico bisogna comunque usare la classe
    // console.log(Department.fiscalYear);
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  describe(this: Department) {
    console.log(`Department: ${this.name}\nID: ${this.id}`);
  }

  addEmploye(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    } else {
      throw new Error("No report found!");
    }
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Error setting report. Please pass in a valid value!");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addEmploye(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("Pippo");
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("d1", ["Max"]);

it.addEmploye("Max");
it.addEmploye("Manu");

// it.employees[2] = "Bug";

// console.log(it);
it.describe();

it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment("d2", []);

// accounting.mostRecentReport;
accounting.mostRecentReport = "Trying setter";
accounting.addReport("Some example reports");

accounting.addEmploye("Max");
accounting.addEmploye("Pippozzo");

accounting.printReports();
accounting.printEmployeeInformation();

// const accountingCopy = { name: "s", describe: accounting.describe };
// const accountingCopy = new Department("pippozzo");

// accountingCopy.describe();
