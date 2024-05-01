import { createContext } from 'react';

/**
 * Context = interface / blueprint / plan 
 */
const DataContext = createContext({
    cart: [],
    user: {},
    addProductToCart: () => {},
    removeProductsFromCart: () => {},
    clearCart: () => {},
});


export default DataContext;