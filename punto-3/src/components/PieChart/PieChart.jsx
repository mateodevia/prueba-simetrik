import React from 'react';
import './PieChart.css';
import Plot from 'react-plotly.js';

function PieChart(props) {
    let formatNumber = (x) => {
        x = parseFloat(x);
        x = x.toFixed(2);
        var parts = x.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');

        return `$ ${parts.join(',')}`;
    };

    return (
        <Plot
            data={[
                {
                    values: props.values,
                    labels: props.labels,
                    text: props.values.map((value) => formatNumber(value)),
                    textinfo: 'text',
                    textposition: 'inside',
                    hoverinfo: 'label+text+percent',
                    marker: {
                        colors: [
                            'rgb(112, 173, 70)',
                            'rgb(89, 154, 215)',
                            'rgb(255, 192, 0)',
                        ],
                    },
                    type: 'pie',
                },
            ]}
            layout={{
                width: props.size.width - 20,
                title: 'Suma de total_amount por status',
            }}
        />
    );
}

export default PieChart;
