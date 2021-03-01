function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;

console.log(buildNameFun("Joseph", "Samuel", "Lucas", "MacKinzie"));
