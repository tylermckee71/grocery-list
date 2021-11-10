import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import ListItem from './ListItem';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function GroceryList() {
    const [listItems, setListItems] = useState([])
    const [mainTextInput, setMainTextInput] = useState()

    const addItem = () => {
        setListItems([mainTextInput, ...listItems])
        setMainTextInput('')
    }

    const handleMainInputEnterKeyPress = (e) => {
        if(e.key === 'Enter') addItem()
    }

    return (
        <div>
            <div style={textInputStyle}>
                <TextField onKeyPress={handleMainInputEnterKeyPress} value={mainTextInput} onChange={(e) => setMainTextInput(e.target.value)} id="standard-basic" variant="standard" />
                <AddCircleIcon onClick={addItem}/>
            </div>
            {listItems.map((item,index) => <ListItem item={item} key={`${item}-${index}`} />)}
        </div>
    )
}

const textInputStyle={
    display: 'flex'
}

