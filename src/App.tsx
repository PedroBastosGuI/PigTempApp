import React, {useState} from 'react';
import Dash from './Components/ApexComponents';
import { Header } from './Components/Header';
import DashPress from './Components/PressionCharts';
import PressionDash from './Components/PressionCharts';
import DashRad from './Components/RadCharts';
import DashMin from './Components/TempMinCharts';
import DashUmi from './Components/UmidadeCharts';
import { GlobalStyle } from './styles/global';
import Modal2 from 'react-modal';

import Modal from 'react-modal'
export function App() {
    

   

   return(
       <>
        
        <Header/>
        <GlobalStyle/>

        <div className="container py-5">
            <div className='row px-3' >
                <div className='co-sm-6'>
                <h4 className="font-weight-bold display-4 text-warning">T Máxima °C 🌡️</h4>
                <Dash/>
                </div>
            </div>

            <div className='row px-3'>
                <div className='co-sm-6'>
                <h4 className="font-weight-bold display-4 text-warning">T Mínima °C ⛄</h4>
                <DashMin/>
                </div>
            </div>

            <div className='row px-3'>
                <div className='co-sm-6'>
                <h4 className="font-weight-bold display-4 text-warning">Radiação Solar KJ/m² ☀️</h4>
                <DashRad />
                </div>
            </div>   

            <div className='row px-3'>
                <div className='co-sm-6'>
                <h4 className="font-weight-bold display-4 text-warning">Presão do Ar(mB) 🏔️</h4>
                <DashPress />
                </div>
            </div>

            <div className='row px-3'>
                <div className='co-sm-6'>
                <h4 className="font-weight-bold display-4 text-warning">Umidade Relativa(%) 💧</h4>
                <DashUmi/>
                </div>
            </div>
            </div>
        
        
       </>
   )
}


