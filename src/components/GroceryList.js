import React from 'react'
import TextField from '@mui/material/TextField';

export default function GroceryList() {
    const items = []
    return (
        <div>
            <TextField  id="standard-basic" variant="standard" />
            {items.map((item,index) => <p key={`${item}= ${index}`}>{item}</p>)}
        </div>
    )
}
