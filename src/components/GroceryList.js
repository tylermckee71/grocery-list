import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import ListItem from "./ListItem";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function GroceryList() {
  const [listItems, setListItems] = useState([]);
  const [mainTextInput, setMainTextInput] = useState();

  const addItem = () => {
    setListItems([mainTextInput, ...listItems]);
    setMainTextInput("");
  };

  const editItem = ({ item, index }) => {
    const listCopy = [...listItems];
    console.log({ item, index });
    const listWithEditedItem = listCopy.splice(index, 1, item);
    console.log({ listWithEditedItem });
    setListItems(listCopy);
  };

  const deleteItem = (item) => {
    const listWithRemovedItem = listItems.filter((i) => i !== item);
    setListItems(listWithRemovedItem);
  };

  const handleMainInputEnterKeyPress = (e) => {
    if (e.key === "Enter") addItem();
  };

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
          key={`${item}-${index}`}
        />
      ))}
    </div>
  );
}

const textInputStyle = {
  display: "flex",
};
