import React from "react";
import { useState } from "react";

// accept function onAddItems into form component
function Form({ onAddItems }) {
    // use controlled forms to handle description and quantity and set default state between ()
    const [description, setDescription] = useState(""); 
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();

        // check if the description is empty to stop submitting the item
        if (!description) return;
        // if description was empty just return without doing anything

        // generate a new item from the input and use date.now for item id.
        const newItem = {description, quantity, packed: false, id: Date.now() };

        onAddItems(newItem);
        // set description and quantity back to its initial state
        setDescription("");
        setQuantity(1);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for Your 🤩 trip?</h3>
            <select
                // use state to control the value
                value={quantity}
                // listen for change event
                onChange={(e) => setQuantity(Number(e.target.value))}
            >
                {/* create array of 20 instead of writing 20 options */}
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    // set key and value for each number generated
                    <option value={num} key={num}>
                        {num}
                    </option>
                ))}
            </select>
            <input
                // use state to control the input
                type="text"
                placeholder="Item..."
                value={description}
                // listen for change event inside the input 
                onChange={(e) => setDescription(e.target.value)}
                />
                <button>Insert</button>
        </form>
    );
}

export default Form