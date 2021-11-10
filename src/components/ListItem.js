import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";

export default function ListItem({
  item = { name: "Test Item", id: "id" },
  index = 0,
  editItem = () => console.log("add edit functionality"),
  deleteItem = () => console.log("add delete functionality"),
}) {
  const [editActive, setEditActive] = useState(false);
  const [textInput, setTextInput] = useState(item?.name);

  const handleEditSubmit = () => {
    editItem({ item: { name: textInput, id: item.id }, index });
    setEditActive(false);
  };

  const handleInputEnterKeyPress = (e) => {
    if (e.key === "Enter" && editActive) handleEditSubmit();
  };

  const handleDeleteClick = () => {
    deleteItem(item);
  };

  return (
    <div style={styles}>
      {editActive ? (
        <TextField
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          onKeyPress={handleInputEnterKeyPress}
          defaultValue={item}
          id="standard-basic"
          variant="standard"
        />
      ) : (
        <div style={itemNameStyle}>{item.name}</div>
      )}
      <EditIcon onClick={() => setEditActive(!editActive)} />
      <DeleteIcon onClick={handleDeleteClick} />
    </div>
  );
}

const styles = {
  display: "grid",
  gridTemplateColumns: "5fr 1fr 1fr",
  alignItems: "center",
  paddingTop: "10px",
};

const itemNameStyle = {
  justifySelf: "start",
};
