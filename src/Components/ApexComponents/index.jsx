import Chart from 'react-apexcharts';
import React, {Component, useState,useEffect} from 'react';
import axios from 'axios';



 const Dash  = () => {

    //um state 
    const[options, setObject] = useState({})
    const [series, setSeries] = useState([{}]);
    //requisição para pegar os valores 
    useEffect(()=>{
        //criando lista para armazenar os valor
        const data=[];
        const temp=[];

        axios.get("https://apitempo.inmet.gov.br/estacao/2021-10-9/2021-10-9/A907").then((response=>{
          console.log('response',response);
            response.data.map(item => {
            //console.log('item',item)
           data.push(item.DT_MEDICAO);
           temp.push(item.TEM_MAX);
          })
        }));

       setObject({

          chart:{
            id:'Temperatura',
      }, 
        xaxi:{
          category: data
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
        text: 'Temperatura Máximo externa',
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
      //linha do setObejct

      setSeries([{
        name: 'Temperatura',
        data: temp,
      }]
      )
    },[])

    return(
      <Chart
        options={options} 
        series={series} 
        type="area"
        width={1350}
        height={300}
      />
        );
}

export default Dash













    
    









    


