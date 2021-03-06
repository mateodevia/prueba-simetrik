import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent/MyComponent';

function App() {
    return (
        <MyComponent
            data={[
                {
                    'order id': 1,
                    creation_date: '5/1/2020',
                    total_amount: 8448.79,
                    total_items: 6,
                    user_id: 20,
                    gateway_reference: 'AQDHYG',
                    status: 'APPROVED',
                    bin: 575015,
                    last4: 2199,
                },
                {
                    'order id': 2,
                    creation_date: '5/1/2020',
                    total_amount: 13522.08,
                    total_items: 4,
                    user_id: 33,
                    gateway_reference: 'HFUAQK',
                    status: 'APPROVED',
                    bin: 431883,
                    last4: 8372,
                },
                {
                    'order id': 3,
                    creation_date: '5/2/2020',
                    total_amount: 11967.81,
                    total_items: 4,
                    user_id: 33,
                    gateway_reference: 'HFUAQK',
                    status: 'PENDING',
                    bin: 979168,
                    last4: 4856,
                },
                {
                    'order id': 4,
                    creation_date: '5/1/2020',
                    total_amount: 8631.8,
                    total_items: 3,
                    user_id: 36,
                    gateway_reference: 'QYADHC',
                    status: 'REJECTED',
                    bin: 266242,
                    last4: 1784,
                },
                {
                    'order id': 5,
                    creation_date: '5/3/2020',
                    total_amount: 4899.82,
                    total_items: 3,
                    user_id: 9,
                    gateway_reference: 'AHGOAD',
                    status: 'APPROVED',
                    bin: 321622,
                    last4: 9343,
                },
                {
                    'order id': 6,
                    creation_date: '5/2/2020',
                    total_amount: 1532.48,
                    total_items: 5,
                    user_id: 22,
                    gateway_reference: 'GOQWJD',
                    status: 'REJECTED',
                    bin: 911263,
                    last4: 2215,
                },
                {
                    'order id': 7,
                    creation_date: '5/1/2020',
                    total_amount: 9750.77,
                    total_items: 2,
                    user_id: 32,
                    gateway_reference: 'AOWEJD',
                    status: 'APPROVED',
                    bin: 472794,
                    last4: 9952,
                },
                {
                    'order id': 8,
                    creation_date: '5/1/2020',
                    total_amount: 299.01,
                    total_items: 5,
                    user_id: 7,
                    gateway_reference: 'GOSUQD',
                    status: 'APPROVED',
                    bin: 613856,
                    last4: 9792,
                },
                {
                    'order id': 9,
                    creation_date: '5/2/2020',
                    total_amount: 3973.86,
                    total_items: 2,
                    user_id: 45,
                    gateway_reference: 'GEPIQD',
                    status: 'REJECTED',
                    bin: 808582,
                    last4: 3755,
                },
                {
                    'order id': 10,
                    creation_date: '5/1/2020',
                    total_amount: 9809.44,
                    total_items: 3,
                    user_id: 17,
                    gateway_reference: 'GDOPIQ',
                    status: 'APPROVED',
                    bin: 554205,
                    last4: 4398,
                },
                {
                    'order id': 11,
                    creation_date: '5/3/2020',
                    total_amount: 8844.37,
                    total_items: 5,
                    user_id: 45,
                    gateway_reference: 'MNASDO',
                    status: 'APPROVED',
                    bin: 149136,
                    last4: 9327,
                },
                {
                    'order id': 12,
                    creation_date: '5/2/2020',
                    total_amount: 4880.01,
                    total_items: 4,
                    user_id: 42,
                    gateway_reference: 'GEUDCS',
                    status: 'PENDING',
                    bin: 430735,
                    last4: 5724,
                },
                {
                    'order id': 13,
                    creation_date: '5/1/2020',
                    total_amount: 2666.09,
                    total_items: 4,
                    user_id: 6,
                    gateway_reference: 'IUQWEH',
                    status: 'APPROVED',
                    bin: 637539,
                    last4: 2960,
                },
                {
                    'order id': 14,
                    creation_date: '5/1/2020',
                    total_amount: 7617.01,
                    total_items: 4,
                    user_id: 38,
                    gateway_reference: 'SDYIUQ',
                    status: 'APPROVED',
                    bin: 229866,
                    last4: 3603,
                },
                {
                    'order id': 15,
                    creation_date: '5/2/2020',
                    total_amount: 1794.12,
                    total_items: 6,
                    user_id: 9,
                    gateway_reference: 'VSHIUQ',
                    status: 'REJECTED',
                    bin: 462245,
                    last4: 3200,
                },
                {
                    'order id': 16,
                    creation_date: '5/1/2020',
                    total_amount: 13279.79,
                    total_items: 2,
                    user_id: 8,
                    gateway_reference: 'OIHDFV',
                    status: 'APPROVED',
                    bin: 455644,
                    last4: 4769,
                },
                {
                    'order id': 17,
                    creation_date: '5/1/2020',
                    total_amount: 14036.99,
                    total_items: 5,
                    user_id: 44,
                    gateway_reference: 'Y9ERDQ',
                    status: 'APPROVED',
                    bin: 664701,
                    last4: 8193,
                },
                {
                    'order id': 18,
                    creation_date: '5/2/2020',
                    total_amount: 10618.03,
                    total_items: 1,
                    user_id: 12,
                    gateway_reference: 'FW98DA',
                    status: 'PENDING',
                    bin: 844904,
                    last4: 820,
                },
                {
                    'order id': 19,
                    creation_date: '5/1/2020',
                    total_amount: 7067.56,
                    total_items: 2,
                    user_id: 30,
                    gateway_reference: 'GER0FD',
                    status: 'APPROVED',
                    bin: 622348,
                    last4: 3126,
                },
                {
                    'order id': 20,
                    creation_date: '5/1/2020',
                    total_amount: 14920.06,
                    total_items: 5,
                    user_id: 22,
                    gateway_reference: 'GE63HD',
                    status: 'APPROVED',
                    bin: 417847,
                    last4: 1767,
                },
                {
                    'order id': 21,
                    creation_date: '5/1/2020',
                    total_amount: 2336.77,
                    total_items: 3,
                    user_id: 35,
                    gateway_reference: 'VWEASS',
                    status: 'APPROVED',
                    bin: 129521,
                    last4: 6422,
                },
                {
                    'order id': 22,
                    creation_date: '5/3/2020',
                    total_amount: 7134.42,
                    total_items: 2,
                    user_id: 6,
                    gateway_reference: 'QWEW87',
                    status: 'REJECTED',
                    bin: 573886,
                    last4: 6773,
                },
                {
                    'order id': 23,
                    creation_date: '5/1/2020',
                    total_amount: 7192.04,
                    total_items: 2,
                    user_id: 29,
                    gateway_reference: 'CB7QWQ',
                    status: 'APPROVED',
                    bin: 676927,
                    last4: 3364,
                },
                {
                    'order id': 24,
                    creation_date: '5/3/2020',
                    total_amount: 12240.53,
                    total_items: 2,
                    user_id: 24,
                    gateway_reference: 'BFED5D',
                    status: 'APPROVED',
                    bin: 760627,
                    last4: 3057,
                },
                {
                    'order id': 25,
                    creation_date: '5/2/2020',
                    total_amount: 11585.65,
                    total_items: 5,
                    user_id: 16,
                    gateway_reference: 'BVY1IQ',
                    status: 'REJECTED',
                    bin: 707178,
                    last4: 4405,
                },
                {
                    'order id': 26,
                    creation_date: '5/1/2020',
                    total_amount: 8393.5,
                    total_items: 3,
                    user_id: 51,
                    gateway_reference: 'HDN13F',
                    status: 'APPROVED',
                    bin: 984500,
                    last4: 7857,
                },
                {
                    'order id': 27,
                    creation_date: '5/3/2020',
                    total_amount: 14764.59,
                    total_items: 2,
                    user_id: 42,
                    gateway_reference: 'IWER91',
                    status: 'APPROVED',
                    bin: 855222,
                    last4: 9039,
                },
                {
                    'order id': 28,
                    creation_date: '5/2/2020',
                    total_amount: 9319.63,
                    total_items: 2,
                    user_id: 16,
                    gateway_reference: 'JGERJD2',
                    status: 'REJECTED',
                    bin: 296955,
                    last4: 6511,
                },
                {
                    'order id': 29,
                    creation_date: '5/2/2020',
                    total_amount: 1532.48,
                    total_items: 5,
                    user_id: 22,
                    gateway_reference: 'GOQWJD',
                    status: 'APPROVED',
                    bin: 800959,
                    last4: 9111,
                },
                {
                    'order id': 30,
                    creation_date: '5/1/2020',
                    total_amount: 9750.77,
                    total_items: 2,
                    user_id: 32,
                    gateway_reference: 'AOWEJD',
                    status: 'REJECTED',
                    bin: 849226,
                    last4: 5226,
                },
            ]}
        />
    );
}

export default App;
