import React from 'react';
import Dash from './Components/ApexComponents';
import { Header } from './Components/Header';
import { GlobalStyle } from './styles/global';
export function App() {
    
   return(
       <>
        
        <Header/>
        <GlobalStyle/>
        <div className="container">
            <div className='row px-3'>
                <div className='co-sm-6'>
                <Dash/>
                </div>
            </div>
        </div>
        
       </>
   )
}


