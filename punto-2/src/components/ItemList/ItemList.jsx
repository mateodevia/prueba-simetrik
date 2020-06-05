import React from 'react';
import './ItemList.css';
import checkIcon from './checkIcon.svg';

function ItemList(props) {
    return (
        <div className='itemListContainer'>
            {props.items.map((item, i) => (
                <div key={i}>
                    {props.selectedItems.includes(item) && (
                        <div
                            className='itemContainer selectedContainer flexbox'
                            onClick={() => props.handleUnselection(item)}
                            style={{
                                backgroundColor: props.invertColor
                                    ? 'white'
                                    : 'var(--grey)',
                            }}
                        >
                            <img src={checkIcon} alt='selected icon' />
                            <div>{item}</div>
                        </div>
                    )}
                    {!props.selectedItems.includes(item) && (
                        <div
                            className='itemContainer'
                            onClick={() => props.handleSelection(item)}
                        >
                            <div className='unselectedContent'>{item}</div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default ItemList;
