interface ITypeGeneric<T> {
  status: T;
  doing(arg: T): T;
}

class GenericNumber1<T> {
  status: number;
  zeroValue: T;
  n: T;
  constructor(n: T) {
    this.n = n;
  }
  add: (x: T, y: T) => T;
  minus: (x: number, y: number) => number;
  test<T>(arg: T): T {
    return arg;
  }
}

let myGenericNumber = new GenericNumber1<number>(11);
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
