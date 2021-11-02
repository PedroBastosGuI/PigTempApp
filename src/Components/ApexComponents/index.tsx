import Chart from 'react-apexcharts';
import React, {Component, useState} from 'react';

interface Mystate{
    stroke:any;
}


 const Dash  = () => {

    //um state 
    const[options, setObject] = useState({
        
        chart:{
            id:'Testing',
            background:'#00010',
        }, 
        xaxi:{
            category:[39,39,42,44,35,18,38,21,34,32,12,20]
        },
        title:{
            style: {
                fontSize: "16px",
                color: '#666'
              }

        },
        width:{
            width: 9,
        },              
    })

    const [series, setSeries] = useState([{
            name: 'Sales',
              data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
    }])
    
    return(
      <Chart
        options={options} series={series} type="area"
        width={1110}
        height={300}
      />
        );
}

export default Dash













    
    









    


