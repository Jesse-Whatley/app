import { useState } from "react";
import "./ShoppingList.css";

function ShoppingList (){
    const [text, setText] = useState("");
    const [list, setList] = useState([]);    

    function add() {
        console.log("Add Clicked", text);

        // create a copy
        let copy = [...list];
        // modify the copy 
        copy.push(text);
        // set the copy back
        setList(copy);
    }

    function handleChange(e){
        setText(e.target.value);
    }

    function totalItems (){

    }

    return (
        <div className="shopping">
            <h1>This Is Your Shopping List</h1>
            
            <div className="form">
                <label>Product:</label>
                <input onChange={handleChange}placeholder="Type your list item here" type="text" />
                <button onClick={add} className="btn btn-sm btn-dark">Add</button>
            </div>

            <div className="list">
                <label className="info">{list.length}</label>
                {list.map((item) => (<li key={item}>{item}</li>))}
            </div>
        </div>
    );
}

export default ShoppingList;