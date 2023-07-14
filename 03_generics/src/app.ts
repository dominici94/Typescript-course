// document.body.appendChild(document.createElement("p")).innerHTML = "prova";

// const names: Array<any> = [];

function merge<T extends object, U extends object>(objA: T, objB: U) {
  // return Object.assign(objA, objB);
  return { ...objA, ...objB };
}

// console.log(merge({ name: "Max" }, { age: 20 }));

const mergedObj = merge({ name: "Max", hobbies: ["sports"] }, { age: 20 });
const mergedObj2 = merge({ name: "Pippo" }, { age: 30, job: "Petty clerk" });
// mergedObj.name;
console.log(mergedObj.hobbies);
console.log(mergedObj2.job);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }

  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe(""));
console.log(countAndDescribe([]));
console.log(countAndDescribe("a"));
console.log(countAndDescribe(["sports", "cooking"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

extractAndConvert({ name: "Max" }, "name");

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    // NON è una buona soluzione per tipi per riferimento
    // this.data.splice(this.data.indexOf(item), 1);
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const maxObj = { name: "Massimo" };
// objStorage.addItem(maxObj);
// objStorage.addItem({ name: "Manuele" });

// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  // return { title, description, completeUntil: date };
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Max", "Anna"];
// names.push("Manu");
// names.pop();
