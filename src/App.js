import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 146.43,
      date: new Date(2021, 2, 7),
    },
    {
      id: "e3",
      title: "Kitchen Towel",
      amount: 4.94,
      date: new Date(2022, 7, 12),
    },
    { id: "e4", title: "Spices", amount: 66.54, date: new Date(2022, 8, 11) },
  ];

  return (
    <div>
      <NewExpense></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
};

export default App;
