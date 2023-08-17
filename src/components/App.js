import React, { useState } from "react";
import { Switch, Route } from "react-router-dom"
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import Advice from "./Advice";
import NavBar from "./NavBar";
import About from "./About";

function App() {
  // moving state to parent component, we need the data from form component into packinglist component
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    // create new array of items using spread then add the new item.
    setItems((items) => [...items, item]);
  }

  // we need the it id to remove it, delete items by updating state, filter the items and return all the item
  // that doesnt match the clicked id
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  // make function to handle the packec check and pass it into item
  function handleToggleItem(id) {
    setItems((items) =>
    // loop over array ane return a new array with the same number of items as the initial array
      items.map((item) =>
      // for the selected item we change the value of packed between true and false and return the rest of items
        item.id === id ? { ...item,packed: !item.packed } : item
        )
      );
  }

  function handleClearList() {
    // send warning message before deleting the list
    const confirmed  = window.confirm(
      "Are you sure you want to delete all items?"
    );
      // to clear items simply return it to intial state
    if (confirmed) setItems([]);
  }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/about">
          <Advice />
          <About />
        </Route>
        <Route exact path="/">
          <div className="app">
          <Logo />
          {/* pass handleAddItems function into form, onAddItems is a convention  */}
          <Form onAddItems={handleAddItems} />
          <PackingList
          // pass items as props into packinglist
          items={items}
          // pass function as props into packinglist
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
          onClearList={handleClearList}
          />
        {/* pass items as a prope into stats to calculate stats */}
        <Stats items={items} />
        </div>
        </Route>
      </Switch>
    </div>
  );  
}

export default App;
