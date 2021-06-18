interface IPerson {
  name: string;
  say: (n: number) => void;
}

class Person implements IPerson {
  name: string = "";
  constructor(name) {
    this.name = name;
  }
  say(n: number): void {
    console.log(n);
  }
}

class Xuzhen extends Person {
  private a = 1;
  public b = 2;
  protected c = 3;
  static d = 4;
  constructor(name) {
    super(name); // 调用父类的构造函数
  }
}

const x = new Xuzhen("xuzhen");
