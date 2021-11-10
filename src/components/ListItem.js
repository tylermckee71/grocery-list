import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";

export default function ListItem({
  item = "Test Item",
  index,
  editItem,
  deleteItem,
}) {
  const [editActive, setEditActive] = useState(false);
  const [textInput, setTextInput] = useState(item);

  const handleEditSubmit = () => {
    editItem({ item: textInput, index });
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
        <div style={itemNameStyle}>{item}</div>
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
