import React from 'react';
import { IChildren } from '../../types';
import './Background.scss'


const Background = ({children} : IChildren) => {
    return (
        <div className='todo'>
            {children}
        </div>
    );
};

export default Background;