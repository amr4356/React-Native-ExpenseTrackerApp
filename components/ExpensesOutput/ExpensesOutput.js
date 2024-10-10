import { View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES=[
    {
        id:'e1',
        description:'A pair of shoes',
        amount: 59.99,
        date: new Date('2021-12-19')
    },
    {
        id:'e2',
        description:'A pair of trousers',
        amount: 89.99,
        date: new Date('2022-01-05')
    },
    {
        id:'e3',
        description:'some apples',
        amount: 5.99,
        date: new Date('2021-12-01')
    },
    {
        id:'e4',
        description:'A book',
        amount: 30.99,
        date: new Date('2020-01-01')
    },
    {
        id:'e5',
        description:'Another book',
        amount: 18.59,
        date: new Date('2022-04-23')
    },
]

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;
