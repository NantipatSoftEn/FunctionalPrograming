interface ITypeClass<T> {
  status: T;
  // arrow function
  //  เพิ่ม <T extends number>  แทนที่ return :T ที่หายไปแบบ arrow function
  get1: <T extends number>(number: T) => number;
  get2(number: T): number;
}

interface IVarOfClass {
  name: string;
  age: number;
}

class NormalClass<T extends IVarOfClass> implements ITypeClass<number> {
  // T of class
  varOfClass: T;

  status: number;
  // arrow function
  get1 = (n: number) => n;

  get2(n: number): number {
    return n;
  }

  getString(str: T): T {
    return str;
  }
}

const c1 = new NormalClass<IVarOfClass>();

console.log(c1.get1(1));

//  new NormalClass<string> เลย set เป็น string ได้
console.log(c1.getString({ name: "army", age: 22 }));
c1.varOfClass = { name: "asd", age: 55 };
console.log(c1.varOfClass);

//==========================

interface IVarOfClass2<T> {
  name: T;
  age: T;
}

class NormalClass2<T extends IVarOfClass2<string>>
  implements ITypeClass<number> {
  // T of class
  varOfClass: T;
  status: number;
  // arrow function
  get1 = (n: number) => n;

  get2(n: number): number {
    return n;
  }

  setVarOfClass(str: T): T {
    return str;
  }
}

const c2 = new NormalClass2();
console.log(c2.setVarOfClass({ name: "army", age: `22` }));
console.log(c2.varOfClass);
