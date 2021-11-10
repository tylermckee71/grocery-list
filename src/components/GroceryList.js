import React from 'react'
import TextField from '@mui/material/TextField';
import ListItem from './ListItem';

export default function GroceryList() {
    const items = ['tacos', 'burrito']
    return (
        <div>
            <TextField id="standard-basic" variant="standard" />
            {items.map((item,index) => <ListItem item={item} key={`${item}-${index}`} />)}
        </div>
    )
}
