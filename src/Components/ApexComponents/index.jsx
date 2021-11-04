import Chart from 'react-apexcharts';
import React, {Component, useState,useEffect} from 'react';
import axios from 'axios';



 const Dash  = () => {

    //um state 
    const[options, setObject] = useState(
      {
        chart:{
          id:'Testing',
          background:'#00010',
      }, 
      xaxi:{
          category:[]
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
      color:["#ffe70d"]        
      }
    )

    const [series, setSeries] = useState([{
      name:'Temperatura',
      data:["19.3","18.8","18.6","18.1","17.9",
      "17.2","13.9","13.6","14"]
    }]);
    //requisição para pegar os valores 
    useEffect(()=>{
        //criando lista para armazenar os valor
        const data=[];
        const temp=[];

        axios.get("https://apitempo.inmet.gov.br/estacao/dados/2020-05-02").then((response=>{
          console.log('response',response);
            response.data.map(item => {
            //console.log('item',item)
            data.push(item.DT_MEDICAO);
            temp.push(item.TEM_MAX);
          }) 
        }));

        setObject({

          chart:{
            id:'Testing',
            background:'#00010',
            foreColor: '#000',

      }, 
        xaxi:{
          category: data
       },

        width:{
          width: 9,
      }, 

        stroke: {
          curve:['smooth'],
      },

      color:['#ffe70d']

        });
      //linha do setObejct

      setSeries([{
        name: 'Temperatura',
        data: temp,
      }]
      )
      console.log('data',data,temp)
    },[])
    
    
    return(
      <Chart
        options={options} 
        series={series} 
        type="area"
        width={1110}
        height={300}
      />
        );
}

export default Dash













    
    









    


