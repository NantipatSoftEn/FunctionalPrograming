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
  constructor(varOfClass: T) {
    this.varOfClass = varOfClass;
  }
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
//  ต้องใช้ T ใน constructor
const c1 = new NormalClass<IVarOfClass>({ name: "army", age: 22 });

console.log(c1.get1(1));

console.log(c1.varOfClass);
