import React from 'react';
import './Footer.scss'
import { useAppSelector } from '../../hooks/redux';
import { useDispatch } from 'react-redux';
import { clearCompleted } from '../../redux/slices/todo'
import { IFooter } from '../../types';


const Footer = ({ setFilteredItems } :IFooter) => {
    const {items} = useAppSelector(state => state.todo)
    const dispatch = useDispatch()

    const onFiltered = (filter: string) : void => {
        switch (filter) {
            case 'all':
                setFilteredItems(items)
                break
            case 'active':
                items.filter(item => !item.completed).length && setFilteredItems(items.filter(item => !item.completed))
                break
            case 'completed':   
                items.filter(item => item.completed).length && setFilteredItems(items.filter(item => item.completed))
                break
        }

    }
    return (
        <footer className='footer'>
            <span className='footer-left-item'>{items.filter(item => !item.completed).length} items left</span>
            <ul className='filters'>
                <li className='footer-button' onClick={() => onFiltered('all')}>All</li>
                <li className='footer-button' onClick={() => onFiltered('active')}>Active</li>
                <li className='footer-button' onClick={() => onFiltered('completed')}>Completed</li>
            </ul>
            <span className='clear' onClick={() => dispatch(clearCompleted())}>Clear completed</span>
        </footer>
    );
};

export default Footer;