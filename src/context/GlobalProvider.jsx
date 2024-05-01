import { useState } from 'react';
import DataContext from './DataContext';

function GlobalProvider (props){
    const [user, setUser] = useState ({id: 1234, name: "Jesse"});
    const [cart, setCart] = useState ([]);

    function addProductToCart (product){
        const copy = [...cart];
        copy.push(product);
        setCart(copy);
    }

    function removeProductsFromCart (){ }

    function clearCart () { }

    return (
        <DataContext.Provider value={{
            user: user,
            cart: cart,
            addProductToCart: addProductToCart,
            removeProductFromCart: removeProductsFromCart,
            clearCart: clearCart
        }}>
            {props.children}
        </DataContext.Provider>
    );
}

export default GlobalProvider;