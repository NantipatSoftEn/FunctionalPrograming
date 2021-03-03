enum Roles {
  SwardMan,
  WiZard,
  please,
}
interface IHuman {
  name: string;
  age: number;
  role: Roles;

  attack(damag: number): string;
  skill(name: string): string;
  getStatus(): void;
}

class Uchiva {
  eyes: number;
  constructor(eyes: number) {
    this.eyes = eyes;
  }

  getEye(): string {
    return `get ${this.eyes}`;
  }
}

class Human extends Uchiva implements IHuman {
  name: string;
  age: number;
  role: Roles;
  eyes: number;
  constructor(name: string, age: number, role: Roles, eyes: number) {
    super(eyes);
    this.name = name;
    this.age = age;
    this.role = role;
  }

  attack(damag: number): string {
    return `atk ${damag}`;
  }

  skill(name: string): string {
    return `skill ~${name}`;
  }

  getStatus() {}
}

const Army = new Human("army", 22, Roles.SwardMan);
