import React from "react";

function Stats({ items }) {
    // if there is no items render a message to let the user know
    if (!items.length)
        return (
            <p className="stats">
                <em>Start adding some items to your packing list ✈️</em>
            </p>
        );
        
        // create states with derived state instead of usestate when possible
        const numItems = items.length;
        // numpacked is the items array filtered by the items that are already packed, then take the length of that array.
        const numPacked = items.filter((item) => item.packed).length;
        // round the percentage
        const percentage = Math.round((numPacked / numItems) * 100);

        return (
            <footer className="stats">
                <em>
                    {/* use conditional rendering to generate the message based on the progress. */}
                    {percentage === 100
                        ? "You got everything! Ready to go 🛫"
                        : ` 🎒 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
                </em>
            </footer>
        );
}

export default Stats