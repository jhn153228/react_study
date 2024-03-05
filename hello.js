// ES6 + 문법 정리 및 사용해보기

// 배열 비구조화 (자주사용)
// let [arr_name] = ["Tom", 10, "Seoul"];
// let [,arr_age,] = ["Tom", 10, "Seoul"];
let [arr_name, arr_age, arr_region, arr_height = 150] = ["Tom", 10, "Seoul"];
console.log("배열 비구조화");
console.log(arr_region + arr_height);

// 객체 비구조화 (자주사용)
console.log("객체 비구조화");
const tom = {
  name: "Tom",
  age: 10,
  region: "seoul",
};
console.log(tom.age);

const { age, name, height } = tom;
console.log(age);

// const print_person1 = ({ name }) => {
//   console.log(name);
// };
function print_person1(name) {
  console.log(name);
}
print_person1(tom);

console.log("------------------");

function obj_destructuring1() {
  const people = [
    { name: "Tom", age: 10, region: "Seoul" },
    { name: "Steve", age: 12, region: "Pusan" },
    { name: "Jean", age: 14, region: "Ulsan" },
  ];
  for (const person of people) {
    console.log(person.name, person.age);
  }
  for (const { name, age, region } of people) {
    console.log(name, age, region);
  }
}

obj_destructuring1();

console.log("-------------");

function obj_destructuring2() {
  const person = {
    name: "Tom",
    age: 10,
    region: {
      country: "서울",
      postcode: "06222",
    },
  };
  const {
    name,
    region: { postcode },
  } = person;
  console.log(name, postcode);
}
obj_destructuring2();
console.log("------------------");
console.log("전개 연산자");

function spread_obj() {
  const tom = {
    name: "Tom",
    age: 10,
    region: "Seoul",
  };
  const steve = {
    ...tom, // tom 오브젝트를 복사해와서 name 속성을 steave로 변경
    name: "Steve",
  };
  console.log(steve);
  const num_array = [1, 3, 5, 7, 9];
  console.log(num_array);
  console.log(...num_array);
}
spread_obj();
console.log("-----------------");
console.log("Arrow Function");
function arrow_function() {
  function fn1(x, y) {
    //무조건 리턴 있어야 함
    console.log("가끔 씀");
    return x + y;
  }
  const fn2 = function (x, y) {
    //무조건 리턴 있어야 함
    console.log("잘 안씀");
    return x + y;
  };
  const fn3 = (x, y) => {
    //리턴 없음
    console.log("자주 씀");
    x + y;
  };
  const fn4 = (x, y) => x + y;
  /*this 바인딩하지 않음..?
    기존에는 함수안에서 함수 호출시 내부 함수에서 this가 바뀌는데 
    에로우 함수 사용 시 this가 바뀌지 않는다고 함
  */
  // 에로우 함수 사용 예시
  const mysum1 = (x, y) => x + y;
  const mysum2 = (x, y) => {
    x, y;
  };
  const mysum3 = (x, y) => ({ x: x, y: y });
  const mysum4 = (x, y) => {
    return { x: x, y: y };
  };
  const mysum5 = function (x, y) {
    return { x: x, y: y };
  };
  function mysum6(x, y) {
    return { x: x, y: y };
  }
}
// 콜백함수
/*
비동기 작업 : 코드의 로직이 끝날 때까지 기다리지 않고 나머지 코드를 먼저 실행 하는 것
순차적으로 불러야 하는 로직이 있을 땐 단점이 될수 있음
그것을 Promise, async/await으로 해결 가능
*/
const callback = () => {
  const fs = require("fs");
  fs.readdir(".", function (err, files) {
    if (err) {
      console.log("error finding file: " + err);
    } else {
      console.log(files);
    }
  });
  // 위에 fs.readdir가 끝나기 전에 수행됨
  console.log("end");
};
// Promise 사용한 콜백 활용
const promise = () => {
  const fs = require("fs");
  const fsPromises = fs.promises;
  fsPromises
    .readdir(".") // 파일을 읽는것을 성공했을 때의 처리.then
    .then((files) => {
      console.log(files);
    }) // 실패했을 때의 처리 catch
    .catch((err) => console.error(err));
  // 위 fsPromises.readdir이 끝나기 전에 수행
  console.log("ENDED");
};
// async/await을 사용한 콜백 활용 (ES8 부터 지원)
/*
Promise의 단점 : .then.then 으로 체인을 길게 이어가면 콜백체인과 마찬가지로
가독성이 떨어짐 이 단점을 보완하기 위해 async/await을 사

await은 async 함수 안에서만 사용할 수 있는 문법
await이 붙은 Promise는 성공 또는 실패로 바뀌기 전까지 다음 연상을 시작하지 않음
*/
const async_await = () => {
  const fs = require("fs");
  const fsPromises = fs.promises;
  async function fn() {
    try {
      // fsPormises.readdir = promise 객체
      let files = await fsPromises.readdir(".");
      console.log(files);
    } catch (err) {
      console.error(err);
    }
  }
  fn(); // async 함수 이기에, 완료 전에 다음 로직이 동작
  console.log("ENDED");
};

//클래스와 상속
const class_extend = () => {
  class Person {
    // 생성자 self 같이 사용하는건가..?
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    print() {
      console.log(this.name + ", " + this.age);
    }
  }

  const tom = new Person("Tom", 10);
  tom.print();
  // 상속 문법
  class Developer extends Person {
    constructor(name, age, field) {
      // 부모의 함수를 사용할 땐 super를 사용
      super(name, age);
      this.field = field;
    }
    print() {
      super.print();
      console.log(`field : ${this.field}`);
    }
  }
};
console.log("------module-------");

/* 모듈 시스템 / ES6 module
  Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
  package.json 파일에 "type": "module"  을 추가하던가 아니면 .mjs 파일을 사용 하라고 함,
  일반 js파일에서는 작동 구현 x
 */
// import my_module_es6 from "./my_module_es6";
// import { module_name } from "./my_module_es6.js";
// console.log(module_name);

/** 고차함수 high of fucntion
 *
 */
const my_hof = () => {
  const main = (fn) => {
    return (x, y) => fn(x, y) - 2;
  };
  const my_sum = (x, y) => x - y;

  const return_fn = main(my_sum);
  console.log(return_fn(3, 2));
};

my_hof();
