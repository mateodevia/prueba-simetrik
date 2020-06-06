import React, { useState, useEffect } from 'react';
import { DataFrame } from 'pandas-js';
import './MyComponent.css';
import LineGraph from '../LineGraph/LineGraph';
import PieChart from '../PieChart/PieChart';

function MyComponent(props) {
    let [df, setDf] = useState(new DataFrame(props.data));
    let [values, setValues] = useState([]);
    let [x, setX] = useState([]);
    let [approved, setApproved] = useState([]);
    let [pending, setPending] = useState([]);
    let [rejected, setRejected] = useState([]);
    let [size, setSize] = useState({
        width: window.innerWidth,
        heigth: window.innerHeight,
    });

    let handleResize = () => {
        setSize({ width: window.innerWidth, heigth: window.innerHeight });
    };

    let calculatePieData = () => {
        let approvedDf = df
            .filter(df.get('status').eq('APPROVED'))
            .get('total_amount');
        let pendingDf = df
            .filter(df.get('status').eq('PENDING'))
            .get('total_amount');
        let rejectedDf = df
            .filter(df.get('status').eq('REJECTED'))
            .get('total_amount');
        let approvedSumDf = approvedDf.sum();
        let pendingSumDf = pendingDf.sum();
        let rejectedSumDf = rejectedDf.sum();
        setValues([approvedSumDf, pendingSumDf, rejectedSumDf]);
    };

    let calculateLineData = () => {
        let newApproved = [...approved];
        let newPending = [...pending];
        let newRejected = [...rejected];

        let dates = df.get('creation_date').unique()._tail.array;

        for (let i in dates) {
            let dateDf = df.filter(df.get('creation_date').eq(dates[i]));

            let approvedDf = dateDf
                .filter(dateDf.get('status').eq('APPROVED'))
                .get('total_items');

            let pendingDf = dateDf
                .filter(dateDf.get('status').eq('PENDING'))
                .get('total_items');

            let rejectedDf = dateDf
                .filter(dateDf.get('status').eq('REJECTED'))
                .get('total_items');

            let approvedSumDf = approvedDf.sum();
            let pendingSumDf = pendingDf.sum();
            let rejectedSumDf = rejectedDf.sum();

            newApproved.push(approvedSumDf);
            newPending.push(pendingSumDf);
            newRejected.push(rejectedSumDf);
        }

        setApproved(newApproved);
        setPending(newPending);
        setRejected(newRejected);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        calculatePieData();
        calculateLineData();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div>
            <PieChart
                size={size}
                values={values}
                labels={['APPROVED', 'PENDING', 'REJECTED']}
            />
            <LineGraph
                size={size}
                x={['5/1/2020', '5/2/2020', '5/3/2020']}
                approved={approved}
                pending={pending}
                rejected={rejected}
            />
        </div>
    );
}

export default MyComponent;
