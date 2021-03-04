class TestBase {
  hi() {
    console.log("Hi from base");
  }
}

class TestSub extends TestBase {
  hi() {
    console.log("Hi from sub");
  }
}

class TestTwo<T extends TestBase> {
  constructor(private testType: new () => T) {}

  getNew(): T {
    return new this.testType();
  }
}

var test1 = new TestTwo<TestBase>(TestBase);
var test2 = new TestTwo<TestSub>(TestSub);

var example1 = test1.getNew();
example1.hi();

var example2 = test2.getNew();
example2.hi();
