import { View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

function ExpensesOutput({ expenses, expensesPeriodName }) {
  return (
    <View>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriodName} />
      <ExpensesList />
    </View>
  );
}

export default ExpensesOutput;
