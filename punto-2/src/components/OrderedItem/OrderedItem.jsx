import React from 'react';
import './OrderedItem.css';
import ascending from './ascending.svg';
import ascendingBlue from './ascendingBlue.svg';
import descending from './descending.svg';
import descendingBlue from './descendingBlue.svg';

function OrderedItem(props) {
    return (
        <div className='orderedItemContainer flexbox'>
            <div className='dragableIcon'>☰ {props.item.name}</div>
            <div
                className='orderIcon'
                onClick={() => props.handleSortingChange(props.item, true)}
            >
                <img
                    src={props.item.ascendingOrder ? ascendingBlue : ascending}
                    alt=''
                />
            </div>
            <div
                className='orderIcon'
                onClick={() => props.handleSortingChange(props.item, false)}
            >
                <img
                    src={
                        !props.item.ascendingOrder ? descendingBlue : descending
                    }
                    alt=''
                    onClick={() => props.handleSortingChange(props.item, false)}
                />
            </div>
        </div>
    );
}

export default OrderedItem;
