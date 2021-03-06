import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { useRef } from 'react';
import ItemList from '../ItemList/ItemList';
import './MyComponent.css';
import { useState } from 'react';
import OrderedItemList from '../OrderedItemList/OrderedItemList';

function MyComponent(props) {
    let [completeListLeft, setCompleteListLeft] = useState(props.items);
    let [completeListRight, setCompleteListRight] = useState(props.items);
    let [selectedItemsLeft, setSelectedItemsLeft] = useState([]);
    let [selectedItemsRight, setSelectedItemsRight] = useState([]);
    let [orderedItems, setOrderedItems] = useState([]);
    let [showingMessage, setShowingMessage] = useState(false);

    let leftInputRef = useRef();
    let rightInputRef = useRef();

    let handleSelectionLeft = (item) => {
        let newSelectedItemsLeft = [...selectedItemsLeft];
        newSelectedItemsLeft.push(item);
        setSelectedItemsLeft(newSelectedItemsLeft);
    };

    let handleUnselectionLeft = (item) => {
        let newSelectedItemsLeft = selectedItemsLeft.filter((i) => i !== item);
        setSelectedItemsLeft(newSelectedItemsLeft);
    };

    let handleSelectionRight = (item) => {
        let newSelectedItemsRight = [...selectedItemsRight];
        newSelectedItemsRight.push(item);
        setSelectedItemsRight(newSelectedItemsRight);
        let newOrderedItems = [...orderedItems];
        newOrderedItems.push({ name: item, ascendingOrder: true });
        setOrderedItems(newOrderedItems);
    };

    let handleUnselectionRight = (item) => {
        let newSelectedItemsRight = selectedItemsRight.filter(
            (i) => i !== item
        );
        setSelectedItemsRight(newSelectedItemsRight);
        let newOrderedItems = orderedItems.filter((i) => i.name !== item);
        setOrderedItems(newOrderedItems);
    };

    let handleSearchLeft = () => {
        let newList = props.items.filter((item) =>
            item
                .toLowerCase()
                .includes(leftInputRef.current.value.toLowerCase())
        );
        setCompleteListLeft(newList);
    };

    let handleSearchRight = () => {
        let newList = props.items.filter((item) =>
            item
                .toLowerCase()
                .includes(rightInputRef.current.value.toLowerCase())
        );
        setCompleteListRight(newList);
    };

    let handleSortingChange = (item, ascending) => {
        let newOrderedItems = [...orderedItems];
        let updated = newOrderedItems.find((i) => i === item);
        updated.ascendingOrder = ascending;
        setOrderedItems(newOrderedItems);
    };

    let reorderSelected = (startIndex, endIndex) => {
        const result = [...orderedItems];
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        setOrderedItems(result);
    };

    let handleOk = () => {
        console.log(
            'Elementos seleccionados en la izquierda:',
            selectedItemsLeft
        );
        console.log('Elementos seleccionados en la derecha:', orderedItems);
        setShowingMessage(true);
        setTimeout(() => setShowingMessage(false), 3000);
    };

    let handleCancel = () => {
        setOrderedItems([]);
        setSelectedItemsRight([]);
        setSelectedItemsLeft([]);
    };

    return (
        <div className='componentContainer flexbox'>
            <div className='column1'>
                <h1>¿Qué columnas se repiten?</h1>
                <SearchBar
                    myRef={leftInputRef}
                    handleSearch={handleSearchLeft}
                />
                <div className='leftItemListContainer'>
                    <ItemList
                        items={completeListLeft}
                        selectedItems={selectedItemsLeft}
                        handleSelection={handleSelectionLeft}
                        handleUnselection={handleUnselectionLeft}
                    />
                </div>
            </div>
            <div className='column2'>
                <h1>¿Cómo quieres ordenarlos?</h1>
                <OrderedItemList
                    items={orderedItems}
                    reorderSelected={reorderSelected}
                    handleSortingChange={handleSortingChange}
                />
                <SearchBar
                    myRef={rightInputRef}
                    handleSearch={handleSearchRight}
                />
                <div className='rightItemListContainer'>
                    <ItemList
                        items={completeListRight}
                        selectedItems={selectedItemsRight}
                        handleSelection={handleSelectionRight}
                        handleUnselection={handleUnselectionRight}
                        invertColor={true}
                    />
                </div>
                <div className='flexbox'>
                    <button className='cancel' onClick={handleCancel}>
                        Cancelar
                    </button>
                    {showingMessage && (
                        <div className='okMessage'>
                            EL resultado se imprimió en consola
                        </div>
                    )}
                    <button className='ok' onClick={handleOk}>
                        Ok
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MyComponent;
