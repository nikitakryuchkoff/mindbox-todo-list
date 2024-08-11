import React from 'react';
import {useDispatch} from 'react-redux'
import './Input.scss'
import { DownOutlined } from '@ant-design/icons'
import { addItem, allCompleted } from '../../redux/slices/todo';
import { IChange } from '../../types';

const Input = ({value, onChange}: IChange) => {
    const dispatch = useDispatch()
    return (
        <div style={{position: 'relative'}}>
            <DownOutlined className='todo-input__icon' onClick={() => dispatch(allCompleted())}/>
            <input
                type='text'
                placeholder='What needs to be done?'
                className='todo-input'
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && value) {
                        dispatch(addItem(value))
                        onChange('')
                    }
                }}
                value={value}
                data-testid={'todoinput'}
            />
        </div>
    );
};

export default Input;