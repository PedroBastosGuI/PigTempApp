import Chart from "react-apexcharts";
import React, {useState, useEffect} from "react";
import axios from "axios";

// criando o PressionCharts


const DashMin = () => {
    // criando um estado de

    const[options, setObject] = useState({});
    const [series, setSeries] = useState([{}]);


    // controlando o ciclo de vida dos components que

    useEffect(()=>{

        //criando array para armazar
        const horaMin = [];
        const tempMin = [];


// fazer a requeste

        axios.get("https://apitempo.inmet.gov.br/estacao/2019-10-23/2019-10-23/A301")
        .then((response) => {
            console.log('ResposeMin',response);
            //tratar a response

            response.data.map(item => {
                horaMin.push(item.HR_MEDICAO);
                tempMin.push(item.TEM_MIN);
            })
        });


        setObject({

            chart:{
                id:'Temperatura',
          }, 
            xaxi:{
              category: horaMin
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
            text: 'Temperatura Mímina externa',
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
            name: 'Temperatura Minima',
            data:tempMin
        }])


    }, [])

    return(
        <Chart
        options={options} 
        series={series} 
        type="area"
        width={1350}
        height={300}
      />
    )
}


export default DashMin