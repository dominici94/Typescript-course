// document.body.appendChild(document.createElement("p")).innerHTML = "prova";

// const names: Array<any> = [];

function merge<T, U>(objA: T, objB: U) {
  // return Object.assign(objA, objB);
  return { ...objA, ...objB };
}

// console.log(merge({ name: "Max" }, { age: 20 }));

const mergedObj = merge({ name: "Max", hobbies: ["sports"] }, { age: 20 });
const mergedObj2 = merge({ name: "Pippo" }, { age: 30, job: "Petty clerk" });
// mergedObj.name;
console.log(mergedObj.hobbies);
console.log(mergedObj2.job);
