import Chart from 'react-apexcharts';
import React, {useEffect, useState} from 'react';
import axios from 'axios';


const DashPress = () => {


    const[options,setObject] = useState({});
    const[series, setSeries] = useState([{}]);


    useEffect(()=>{

        const pressaohora = [];
        const pressao = [];


        axios.get("https://apitempo.inmet.gov.br/estacao/2021-10-9/2021-10-9/A907")
        .then((response) => {
            console.log('ResponseRad', response)

            response.data.map(item => {
                pressaohora.push(item.HR_MEDICAO);
                pressao.push(item.PRE_MAX)
            })
        });

        setObject({

            chart:{
                id:'Pressão do Ar',
          }, 
            xaxi:{
              category: pressaohora
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
            text: 'Pressão do Ar externa',
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
            name:'Pressão do Ar',
            data: pressao
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

export default DashPress;