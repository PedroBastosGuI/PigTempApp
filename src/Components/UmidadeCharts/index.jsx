import Chart from 'react-apexcharts';
import React, {useEffect, useState} from 'react';
import axios from 'axios';


const DashUmi = () => {


    const[options,setObject] = useState({});
    const[series, setSeries] = useState([{}]);


    useEffect(()=>{

        const umidadeHora = [];
        const umidade = [];


        axios.get("https://apitempo.inmet.gov.br/estacao/2019-10-23/2019-10-23/A301")
        .then((response) => {
            console.log('ResponseRad', response)

            response.data.map(item => {
                umidadeHora.push(item.HR_MEDICAO);
                umidade.push(item.UMD_MAX)
            })
        });

        setObject({

            chart:{
                id:'Umidade Relativa',
          }, 
            xaxi:{
              category: umidadeHora
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
            text: 'Umidade Relativa',
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
            name:'Umidade relativa',
            data: umidade
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

export default DashUmi;