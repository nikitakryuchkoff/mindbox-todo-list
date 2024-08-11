import React from 'react';
import {useDispatch} from 'react-redux'
import './ToDoListItem.scss'
import classnames from 'classnames'
import {deleteItem, makeCompleted} from '../../redux/slices/todo'
import { IToDoListItem } from '../../types';


const ToDoListItem = ({text, id, completed} : IToDoListItem) => {
    const checkBoxRef = React.useRef<HTMLInputElement>(null)
    const dispatch = useDispatch()
    return (
        <li className='list-item' data-testid={'todolistitem'}>
            <div className={classnames('list-item__flex', {
                'list-item__flex--checked': completed
            })}>
                <input type='checkbox' className='checkbox' ref={checkBoxRef}/>
                <span
                    className={classnames('custom-checkbox', {
                        'custom-checkbox--checked': completed
                    })}
                    onClick={() => {
                        checkBoxRef.current?.click()
                        dispatch(makeCompleted({
                            id, 
                            completed: checkBoxRef.current?.checked
                        }))
                    }}>
                </span>
                <label className='task-heading '>{text}</label>
            </div>
            <button className='destroy' onClick={() => dispatch(deleteItem(id))}></button>
        </li>
    );
};

export default ToDoListItem;