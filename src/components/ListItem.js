import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';



export default function ListItem({item = 'Test Item'}) {
    const [editActive, setEditActive] = useState()


    return (
        <div style={styles}>
            {editActive ? <TextField /> : <div style={itemNameStyle}>{item}</div>}
            <EditIcon />
            <DeleteIcon />
        </div>
    )
}

const styles = {
    display: 'grid',
    gridTemplateColumns: '5fr 1fr 1fr',
    alignItems: 'center'
}

const itemNameStyle = {
    justifySelf: 'start'
}
