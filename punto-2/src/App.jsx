import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent/MyComponent';

let items = [
    'SKT_ID',
    'ORDER_ID',
    'CREATION_DATE',
    'TOTAL_AMOUNT',
    'TOTAL_ITEMS',
    'USER_ID',
    'GATEWAY_REFERENCE',
    'STATUS',
    'BIN',
    'LAST4',
    'SKT_UNIQUENESS11',
    'SKT_UNIQUENESS12',
    'SKT_UNIQUENESS13',
    'SKT_UNIQUENESS14',
    'SKT_UNIQUENESS15',
    'SKT_UNIQUENESS16',
    'SKT_UNIQUENESS17',
    'SKT_UNIQUENESS18',
    'SKT_UNIQUENESS19',
    'SKT_UNIQUENES20',
    'SKT_UNIQUENES21',
    'SKT_UNIQUENES22',
    'SKT_UNIQUENES23',
    'SKT_UNIQUENES24',
    'SKT_UNIQUENES25',
    'SKT_UNIQUENES26',
    'SKT_UNIQUENES27',
    'SKT_UNIQUENES28',
    'SKT_UNIQUENES30',
];

function App() {
    return <MyComponent items={items} />;
}

export default App;
