import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import ListItem from "./ListItem";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { getUniqueID } from "../generateID";

export default function GroceryList({ items = [] }) {
  const [listItems, setListItems] = useState([]);
  const [mainTextInput, setMainTextInput] = useState();

  const addItem = () => {
    setListItems([{ name: mainTextInput, id: getUniqueID() }, ...listItems]);
    setMainTextInput("");
  };

  const editItem = ({ item, index }) => {
    const listCopy = [...listItems];
    listCopy.splice(index, 1, item);
    setListItems(listCopy);
  };

  const deleteItem = (item) => {
    const listWithRemovedItem = listItems.filter((i) => i.id !== item.id);
    setListItems(listWithRemovedItem);
  };

  const handleMainInputEnterKeyPress = (e) => {
    if (e.key === "Enter") addItem();
  };

  useEffect(() => {
    setListItems(items);
    return () => {
      setListItems([]);
    };
  }, [items]);

  return (
    <div>
      <div style={textInputStyle}>
        <TextField
          onKeyPress={handleMainInputEnterKeyPress}
          value={mainTextInput}
          onChange={(e) => setMainTextInput(e.target.value)}
          id="standard-basic"
          variant="standard"
        />
        <AddCircleIcon onClick={addItem} />
      </div>
      {listItems.map((item, index) => (
        <ListItem
          editItem={editItem}
          deleteItem={deleteItem}
          item={item}
          index={index}
          key={`${item.id}-${index}`}
        />
      ))}
    </div>
  );
}

const textInputStyle = {
  display: "flex",
  justifyContent: "space-around",
};
