interface ITypeClass<T> {
  status: T;
  // arrow function
  //  เพิ่ม <T extends number>  แทนที่ return :T ที่หายไปแบบ arrow function
  get1: <T extends number>(number: T) => number;
  get2(number: T): number;
}

class NormalClass implements ITypeClass<number> {
  status: number;
  // arrow function
  get1 = (n: number) => number;

  get2(n: number): number {
    return n;
  }
}
