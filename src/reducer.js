export const initialState = { 
    basket: [],//store item
    user: null, //store users
};

// build a selector
export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0);
// 'reduce' is a function which maps through the basket 
// '?' <<- means optional chaning to provent code from breaking.
// amount <<- is an initial state.
// loops through each item and adds the price to the initial state ->> amount.




// react context api

// listening for change  which is the ADD_TO_BASKET action 
const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_BASKET': //->> runs if the action.type is ->> 'ADD_TO_BASKET' ...done in product.js.
            return{
                ...state, //->> original state
                basket: [...state.basket , action.item], // push the item.action (seen in products.js) into the ->> 'basket = []'.
            };
        case 'REMOVE_FROM_BASKET': //->>  runs is the action.type is ->> 'REMOVE_FROM_BASKET' ...done in checkOutProduct.js
         const index = state.basket.findIndex(
            (basketItem) => basketItem.id === action.id
         );//->> find the index of the product in basket Array [...3,4].
         let newBasket = [...state.basket];
         if (index >= 0){
        newBasket.splice(index, 1)
         }else{
            console.warn(
                `cant resolve product (id: ${action.id} as its not in basket!)`
            ) 
         }
         return {
             ...state,
             basket: newBasket
         }
         case "SET_USER":
            return{
                ...state,
                user: action.user
            }
            default:
                return state;
    }
};


export default reducer;

