const addStringToName = (fn: Function) => {
  return (name: String) => {
    const warpperString = name + " army";
    return fn(warpperString);
  };
};

const sayName = (name: String) => {
  return name;
};

const warpperString = addStringToName(sayName);

console.log(warpperString("JS"));
