function person() {
  return {
    name: "John Doe",
    print: function () {
      console.log(this.name);
    },
  };
}
var obj = person("John Doe");
obj.print(); //John Doe
