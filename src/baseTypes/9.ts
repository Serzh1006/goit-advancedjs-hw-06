/*
  Створіть новий тип даних, який підходить для цих двох об'єктів.
*/

type Page1 = {
  details?: {
    createAt: object;
    updateAt: object;
  };
};

type Page2 = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
};

type UnionPage = Page1 & Page2;

const page1: UnionPage = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: UnionPage = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};

export {};
