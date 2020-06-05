import React from 'react';
import './OrderedItem.css';
import ascending from './ascending.svg';
import ascendingBlue from './ascending.svg';
import descending from './descending.svg';
import descendingBlue from './descending.svg';

function OrderedItem(props) {
    return (
        <div className='orderedItemContainer flexbox'>
            <div>☰ {props.item}</div>
            <img className='orderIcon' src={ascending} alt='' />
            <img className='orderIcon' src={descending} alt='' />
        </div>
    );
}

export default OrderedItem;
