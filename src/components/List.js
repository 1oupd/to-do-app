import React, {useState} from 'react'
import Form from './Form'

function List() {
    const [items, setItems] = useState([]);

    const addItem = item => {
        if(!item.text || /^\s*$/.test(item.text)){
            return
        }

        const newItems = [item, ...items]

        setItems(newItems)
    }

    return (
        <div>
            <h1>What would you like to do?</h1>        
            <Form onSubmit={addItem} />
        </div>
    )
}

export default List
