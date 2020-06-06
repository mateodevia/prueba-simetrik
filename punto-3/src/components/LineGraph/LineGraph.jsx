import React from 'react';
import Plot from 'react-plotly.js';
import './LineGraph.css';

function LineGraph(props) {
    return (
        <Plot
            data={[
                {
                    x: props.x,
                    y: props.approved,
                    type: 'scatter',
                    mode: 'lines+markers',
                    name: 'APROVED',
                    marker: { color: 'rgb(80, 104, 170)' },
                },
                {
                    x: props.x,
                    y: props.pending,
                    type: 'scatter',
                    mode: 'lines+markers',
                    name: 'PENDING',
                    marker: { color: 'rgb(255, 127, 71)' },
                },
                {
                    x: props.x,
                    y: props.rejected,
                    type: 'scatter',
                    mode: 'lines+markers',
                    name: 'REJECTED',
                    marker: { color: 'rgb(165, 165, 165)' },
                },
            ]}
            layout={{
                width: props.size.width - 20,
                title: 'Suma total de items',
            }}
        />
    );
}

export default LineGraph;
