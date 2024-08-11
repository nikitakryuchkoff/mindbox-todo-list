import React, { useState } from 'react';
import Input from '../Input';
import ToDoListItem from '../ToDoListItem';
import './ToDoList.scss'
import Footer from '../Footer';
import { IToDoList, IToDoItem } from '../../types';



const ToDoList = ({items} : IToDoList) => {
    const [filteredItems, setFilteredItems] = useState<IToDoItem[]>(Array.from(items))
    const [value, onValueChange] = React.useState<string>('')

    React.useEffect(() => {
        setFilteredItems(items)
    }, [items])

    console.log(filteredItems)
    return (
        <div className='todo-list'>
            <Input value={value} onChange={onValueChange}/>
            {filteredItems.length ? (
                <>
                    <ul className='list-group' data-testid={'todoList'}>
                        {
                            filteredItems.map((item) =>
                                <ToDoListItem 
                                    id={item.id}
                                    text={item.text} 
                                    completed={item.completed}
                                    key={item.id}
                                />
                            )
                        }
                    </ul>
                    <Footer setFilteredItems={setFilteredItems}/>
                </>
            ): null}
        </div>
    );
};

export default ToDoList;