import React from 'react';
import Dash from './Components/ApexComponents';
import { Header } from './Components/Header';
import { GlobalStyle } from './styles/global';
export function App() {
    
   return(
       <>
        
        <Header/>
        <GlobalStyle/>
        <div className="container py-5">
            <div className='row px-3' >
                <div className='co-sm-6'>
                <h4 className="font-weight-bold h1">T Máxima °C</h4>
                <Dash/>
                </div>
            </div>

            <div className='row px-3'>
                <div className='co-sm-6'>
                <h4 className="font-weight-bold h1">T Mínima °C</h4>
                <Dash/>
                </div>
            </div>

            <div className='row px-3'>
                <div className='co-sm-6'>
                <h4 className="font-weight-bold h1">T Média °C</h4>
                <Dash/>
                </div>
            </div>   

            <div className='row px-3'>
                <div className='co-sm-6'>
                <h4 className="font-weight-bold h1">Presão do Ar(Kpa)</h4>
                <Dash/>
                </div>
            </div>

            <div className='row px-3'>
                <div className='co-sm-6'>
                <h4 className="font-weight-bold h1">Umidade Relativa(%)</h4>
                <Dash/>
                </div>
            </div>
            </div>
        
        
       </>
   )
}


