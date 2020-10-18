import img11 from "../../images/img11.png"
export const initialState = {
    basket: []
}

const reducer = (state, action) =>{
    console.log(action)
    switch (action.type){
        case "ADD_TO_BASKET":
            return {
                ...state, 
                basket: [...state.basket, action.item],
            }
            break;
        case "REMOVE_FROM_BASKET":
            let newBasket = [...state.basket];

            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            )
            if (index >= 0){
                newBasket.splice(index, 1);
            }else{
                console.warn(
                        `Cannot remove product(id: ${action.id}) aas it has no match`
                )
            }
            return { 
                ...state,
                basket: newBasket
            }
            break;
        default:
            return(state);
            break
    }
}

export default reducer;