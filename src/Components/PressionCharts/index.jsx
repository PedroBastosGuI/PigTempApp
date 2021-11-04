import Chart from 'react-apexcharts';
import React, {Component, useState, useEffect} from 'react';
import axios from 'axios';


const PressionDash = () =>{

    const[options, setObeject] = useState({

        chart:{
            id:'Testing',
            background:'#00010',
            foreColor: '#000',

        }, 
        xaxi:{
            category:[39,39,42,44,35,18,38,21,34,32,12,20]
        },

        width:{
            width: 9,
        },  

            stroke: {
                curve:['smooth'],
            },
            
        

    })

    const[series, setSeries] = useState([{
        name: 'Sales',
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
    }])
    
    return(
        <Chart
        options={options}
        type={'line'}
        series={series}
        width={1110}
        height={300}
        />
    )
}

export default PressionDash;