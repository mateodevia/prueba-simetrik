import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './OrderedItemList.css';
import OrderedItem from '../OrderedItem/OrderedItem';

function OrderedItemList(props) {
    let onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }
        props.reorderSelected(result.source.index, result.destination.index);
    };
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId='droppable'>
                {(provided) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className='orderedListContainer'
                    >
                        {props.items.map((item, index) => (
                            <Draggable
                                key={item.name}
                                draggableId={item.name}
                                index={index}
                            >
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <OrderedItem
                                            item={item}
                                            handleSortingChange={
                                                props.handleSortingChange
                                            }
                                        />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}

export default OrderedItemList;
