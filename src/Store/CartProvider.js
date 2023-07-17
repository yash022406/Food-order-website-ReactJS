import { useReducer } from "react"
import CartContext from "./CartContext"

     const defaultCartState = {
        items: [],
        totalAmount: 0
     }

    const cartReducer = (state, action) => {
        if(action.type==='ADD'){
            const updatedTotalAmount = state.totalAmount + action.item.price*action.item.amount
            const existingCartItemIndex = state.items.findIndex((item) => item.id===action.item.id)
            const existingCartItems = state.items[existingCartItemIndex]

            let UpdatedItems;

            if(existingCartItems){
                const updatedItem = {
                    ...existingCartItems,
                    amount: existingCartItems.amount + action.item.amount
                }
                UpdatedItems = [...state.items]
                UpdatedItems[existingCartItemIndex] = updatedItem
            } else{
                UpdatedItems = state.items.concat(action.item)
            }
        
            



            return {
                items: UpdatedItems,
                totalAmount: updatedTotalAmount
            }
        }
        if(action.type==='REMOVE'){
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.id
            )
            const existingItem = state.items[existingCartItemIndex]
            const updatedTotalAmount = state.totalAmount - existingItem.price
            let UpdatedItems
            if(existingItem.amount===1){
                UpdatedItems = state.items.filter(item => item.id !== action.id)
            }else{
                const updatedItem =  {...existingItem, amount: existingItem.amount - 1 }
                UpdatedItems = [...state.items]
                UpdatedItems[existingCartItemIndex] = updatedItem
            }
            return{
                items: UpdatedItems,
                totalAmount: updatedTotalAmount
            }
        }
        if(action.type === 'CLEAR'){
            return defaultCartState
        }
        return defaultCartState
    }

const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCart = item => {
        dispatchCartAction({type: 'ADD', item: item})
    }
    const removeItem = (id) => {
        dispatchCartAction({type: 'REMOVE', id:id})
    }
    const clearCarthandler = () => {
        dispatchCartAction({type: 'CLEAR'})
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItem,
        clearCart: clearCarthandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}
export default CartProvider