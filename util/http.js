import axios from "axios";

const BACKEND_URL =
  "https://react-native-course-50750-default-rtdb.firebaseio.com";

export async function storeExpense(expenseData) {
  const response = await axios.post(
    BACKEND_URL + "/expenses.json",
    expenseData
  );

  const id = response.data.name;

  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URL + "/expenses.json");

  const expesnes = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expesnes.push(expenseObj);
  }

  return expesnes;
}

export function updateExpense(id,expenseData){
   return axios.put(BACKEND_URL+`/expenses/${id}.json`,expenseData);
}
export function deleteExpense(id){
    return axios.delete(BACKEND_URL+`/expenses/${id}.json`);
}
