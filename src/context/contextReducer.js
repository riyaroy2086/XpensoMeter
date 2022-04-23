// const contextReducer = (state, action) => {
//   switch (action.type) {
//     case "DELETE_TRANSACTION":
//       break;
//     case "ADD_TRANSACTION":
//       break;
//     default:
//       break;
//   }

// };
// export default contextReducer;

const contextReducer = (state, action) => {
    let transactions;
  
    switch (action.type) {
      case 'DELETE_TRANSACTION':
        transactions = state.filter((transaction) => transaction.id !== action.payload);
  
        localStorage.setItem('transactions', JSON.stringify(transactions));
  
        return transactions;
        case 'ADD_TRANSACTION':
        transactions = [action.payload, ...state];
  
        localStorage.setItem('transactions', JSON.stringify(transactions));
  
        return transactions;
      default:
        return state;
    }
  }
  
  export default contextReducer;
