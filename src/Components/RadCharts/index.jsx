import Chart from 'react-apexcharts';
import React, {useEffect, useState} from 'react';
import axios from 'axios';


const DashRad = () => {


    const[options,setObject] = useState({});
    const[series, setSeries] = useState([{}]);


    useEffect(()=>{

        const radHora = [];
        const rad = [];


        axios.get("https://apitempo.inmet.gov.br/estacao/2019-10-23/2019-10-23/A301")
        .then((response) => {
            console.log('ResponseRad', response)

            response.data.map(item => {
                radHora.push(item.HR_MEDICAO);
                rad.push(item.RAD_GLO)
            })
        });

        setObject({

            chart:{
                id:'Radiação Solar',
          }, 
            xaxi:{
              category: radHora
           },
    
            width:{
              width: 12,
          }, 
    
            stroke: {
              show: true,
              curve: 'straight',
              lineCap: 'butt',
              colors: undefined,
              width: 7,
              dashArray: 0, 
          },
    
          title: {
            text: 'Indice de radiação solar',
            align: 'left'
          },
    
          datalabels: {
            enabled: false,
          },
    
          markers: {
            shape: "circle",
            size: [4, 7]
          },
    
                  theme: {
                    monochrome: {
                        enabled: true,
                        color: '#f2ba0c',
                        shadeTo: 'dark',
                        shadeIntensity: 1
                    },
            },
    
            grid: {
              show: false,
            },


        });

        setSeries([{
            name:'Radiação Solar',
            data: rad
        }])

    }, [])

    return (
        <Chart
        options={options} 
        series={series} 
        type="area"
        width={1350}
        height={300}
      />
    )
}

export default DashRad;