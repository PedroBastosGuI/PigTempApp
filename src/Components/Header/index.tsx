import pig from '../../assets/pig.png';
import {Container, Content, ModalContainer, ModalTwoContainer } from './styled';
import React,{useState} from 'react';
import Modal from 'react-modal';
import Modal2 from 'react-modal';

import IlusttrationPng from '../../assets/pignerdola.png';


export function Header(){
    const[isModalVisibleRelatorio, setIsModalVisableRelatorio] = useState(false);

    const[isModalVisibleHelp, setIsModalVisableHelp] = useState(false);



    function handleOpenHelpModal() {
        setIsModalVisableHelp(true);
    }

    function handleCloseHelpModal(){
        setIsModalVisableHelp(false);
    }

    function handleOpenRelatorioModal() {
        setIsModalVisableRelatorio(true);
    }

    function handleCloseRelatorioModal() {
        setIsModalVisableRelatorio(false);
    }
    return(
        <header>
            <Container>
                <Content>
                    <img src={pig}/>
                    <div>
                    <button  type="button" onClick={handleOpenRelatorioModal}>Relatorio Do Ambiente
                    </button>
                    <Modal2 
                    isOpen={isModalVisibleRelatorio}
                     onRequestClose={handleCloseRelatorioModal}
                     >
                    <ModalTwoContainer>
                    <h1>Relatorio do ambiente</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Temperatura de Conforto para Matrizes</th>
                                <th>Temperatura de Conforto para Leitões</th>
                                <th>Temperatura de Conforto para Reprodutor</th>
                                <th> Indice Zootecnico | ITU</th>
                                <th>Indice Zootecnico | ITGU</th>
                                <th>Condição Ideal</th>
                            </tr>

                        </thead>
                        <tbody>
                            <tr>
                                <td>22-26°C</td>
                                <td>16-19°C</td>
                                <td>17-21°C</td>
                                <td>70</td>
                                <td>90</td>
                                <td>71|79</td>
                            </tr>
                            <tr>
                                <td>22-26°C</td>
                                <td>16-19°C</td>
                                <td>17-21°C</td>
                                <td>70</td>
                                <td>90</td>
                                <td>71|79</td>
                            </tr>
                            <tr>
                                <td>22-26°C</td>
                                <td>16-19°C</td>
                                <td>17-21°C</td>
                                <td>70</td>
                                <td>90</td>
                                <td>71|79</td>
                            </tr>
                            <tr>
                                <td>22-26°C</td>
                                <td>16-19°C</td>
                                <td>17-21°C</td>
                                <td>70</td>
                                <td>90</td>
                                <td>71|79</td>
                            </tr>
                            <tr>
                                <td>22-26°C</td>
                                <td>16-19°C</td>
                                <td>17-21°C</td>
                                <td>70</td>
                                <td>90</td>
                                <td>71|79</td>
                            </tr>
                            <tr>
                                <td>22-26°C</td>
                                <td>16-19°C</td>
                                <td>17-21°C</td>
                                <td>70</td>
                                <td>90</td>
                                <td>71|79</td>
                            </tr>
                        </tbody>
                    </table>

                    </ModalTwoContainer>
                    </Modal2>
                   
                    </div>
                    <button type="button" onClick={handleOpenHelpModal}>Como Usar TempPig
                    </button>
                    <Modal 
                    isOpen={isModalVisibleHelp} 
                    onRequestClose={handleCloseHelpModal}
                    >
                        <ModalContainer>
                        <div>
                        <h1>Precisa de ajuda? <strong>🐷</strong></h1>
                        <p>
                            Para usar a ferramenta é muito simples, <br/>
                            na pagina inicial terá informações dos parametros do ambiente <br/>
                            onde essas informções são atualizadas de hora em hora.<br/>
                        </p>

                        <h3>Fala dos grafícos porquinho! 🐖 ?</h3>
                        <p>
                              O valor dos paramentros climaticos podendo ser monitorado de forma constante, <br/>
                              atráves deles meu nobre humano!.
                        </p>

                        <h3>Como obter o relatorio</h3>
                        <p>
                                Muito simples meu usuario lindão, basta você clicar no botão obter relatorio,<br/>
                            onde tera acesso as informaçoes calculadas pelo Pig System, ajudando tomar a melhor descisão,<br/>
                            sobre o que fazer com os nossos amiguinhos porquinhos, ajudando você economizar o seu dinheirinho🐖 🥓 🤑<br/>
                            essas informações podem ser obeservadas por um relatorio completo, de todas as leituras do dia.
                        </p>
                        </div>
                    
                        
                            <img src={IlusttrationPng}/>
                        


                        </ModalContainer>
                        
                    </Modal>

                    
                </Content>
            </Container>
            
        </header>
    )
}