import React from "react";

function Item({ item, onDeleteItem, onToggleItem }) {
    return (
        <li>
            <input
            // add the checkbox next to item
                type="checkbox"
                value={item.packed}
                // use onToggleItem function when the checkbox is pressed
                onChange={() => onToggleItem(item.id)}
            />
            <span style={item.packed ? { textDecorationi: "line-through" } :{}}>
                {item.quantity} {item.description}
            </span>
            {/* create a function to get the selected id, if we only use onDeleteItem will return the event not the id */}
            <button onClick={() => onDeleteItem(item.id)}>❌</button>
        </li>
    );
}

export default Item