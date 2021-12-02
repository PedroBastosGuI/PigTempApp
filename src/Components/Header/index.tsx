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
                                <th>Temperatura de Conforto para Matrizes 22-26°C</th>
                                <th>Temperatura de Conforto para Leitões 16-19°C</th>
                                <th>Temperatura de Conforto para Reprodutor 17-21°C</th>
                                <th> Indice Zootecnico | ITU</th>
                                <th>Situação de Conforto Termico Animal Matrizes</th>
                                <th>Condição Ideal</th>
                            </tr>

                        </thead>
                        <tbody>
                            <tr>
                                <td>30.8°C</td>
                                <td>30.8°C</td>
                                <td>30.8°C</td>
                                <td>81.5</td>
                                <td>P</td>
                                <td>71|79</td>
                            </tr>
                            <tr>
                                <td>30.2°C</td>
                                <td>30.2°C</td>
                                <td>30.2°C</td>
                                <td>81.2</td>
                                <td>P</td>
                                <td>71|79</td>
                            </tr>
                            <tr>
                                <td>28.5°C</td>
                                <td>28.5°C</td>
                                <td>28.5°C</td>
                                <td>78.7</td>
                                <td>C</td>
                                <td>71|79</td>
                            </tr>
                            <tr>
                                <td>28.5°C</td>
                                <td>28.5°C</td>
                                <td>28.5°C</td>
                                <td>78.7</td>
                                <td>C</td>
                                <td>71|79</td>
                            </tr>
                            <tr>
                                <td>27.4°C</td>
                                <td>27.4°C</td>
                                <td>27.4°C</td>
                                <td>77.4</td>
                                <td>C</td>
                                <td>71|79</td>
                            </tr>
                            <tr>
                                <td>26.8°C</td>
                                <td>26.8°C</td>
                                <td>26.8°C</td>
                                <td>75.8</td>
                                <td>B</td>
                                <td>71|79</td>
                            </tr>
                            <tr>
                                <td>24.5°C</td>
                                <td>24.5°C</td>
                                <td>24.5°C</td>
                                <td>73.7</td>
                                <td>B</td>
                                <td>71|79</td>
                            </tr>
                            <tr>
                                <td>24.3°C</td>
                                <td>24.3°C</td>
                                <td>24.3°C</td>
                                <td>73.5</td>
                                <td>B</td>
                                <td>71|79</td>
                            </tr>
                            <tr>
                                <td>24.1°C</td>
                                <td>24.1°C</td>
                                <td>24.1°C</td>
                                <td>73.4</td>
                                <td>B</td>
                                <td>71|79</td>
                            </tr>
                            <tr>
                                <td>24°C</td>
                                <td>24°C</td>
                                <td>24°C</td>
                                <td>73.2</td>
                                <td>B</td>
                                <td>71|79</td>
                            </tr>
                            <tr>
                                <td>24.3°C</td>
                                <td>24.3°C</td>
                                <td>24.3°C</td>
                                <td>73.5</td>
                                <td>B</td>
                                <td>71|79</td>
                            </tr>
                            <tr>
                                <td>25.9°C</td>
                                <td>25.9°C</td>
                                <td>25.9°C</td>
                                <td>74.6</td>
                                <td>B</td>
                                <td>71|79</td>
                            </tr>
                            <tr>
                                <td>27.6°C</td>
                                <td>27.6°C</td>
                                <td>27.6°C</td>
                                <td>77.5</td>
                                <td>B</td>
                                <td>71|79</td>
                            </tr>
                            <tr>
                                <td>30°C</td>
                                <td>30°C</td>
                                <td>30°C</td>
                                <td>81.2</td>
                                <td>P</td>
                                <td>71|79</td>
                            </tr>
                            <tr>
                                <td>31.9°C</td>
                                <td>31.9°C</td>
                                <td>31.9°C</td>
                                <td>82.1</td>
                                <td>P</td>
                                <td>71|79</td>
                            </tr>
                            <tr>
                                <td>34°C</td>
                                <td>34°C</td>
                                <td>34°C</td>
                                <td>87</td>
                                <td>P</td>
                                <td>71|79</td>
                            </tr>
                            <tr>
                                <td>35.7°C</td>
                                <td>35.7°C</td>
                                <td>35.7°C</td>
                                <td>88.3</td>
                                <td>E</td>
                                <td>71|79</td>
                            </tr>
                            <tr>
                                <td>37.2°C</td>
                                <td>37.2°C</td>
                                <td>37.2°C</td>
                                <td>89.2</td>
                                <td>E</td>
                                <td>71|79</td>
                            </tr>
                            <tr>
                                <td>37.8°C</td>
                                <td>37.8°C</td>
                                <td>37.8°C</td>
                                <td>89.5</td>
                                <td>E</td>
                                <td>71|79</td>
                            </tr>
                            <tr>
                                <td>38°C</td>
                                <td>38°C</td>
                                <td>38°C</td>
                                <td>90.1</td>
                                <td>E</td>
                                <td>71|79</td>
                            </tr>
                            <tr>
                                <td>37.3°C</td>
                                <td>37.3°C</td>
                                <td>37.3°C</td>
                                <td>89.7</td>
                                <td>E</td>
                                <td>71|79</td>
                            </tr>
                            <tr>
                                <td>37.2°C</td>
                                <td>37.2°C</td>
                                <td>37.2°C</td>
                                <td>89.2</td>
                                <td>E</td>
                                <td>71|79</td>
                            </tr>
                            <tr>
                                <td>36°C</td>
                                <td>36°C</td>
                                <td>36°C</td>
                                <td>89</td>
                                <td>E</td>
                                <td>71|79</td>
                            </tr>
                            <tr>
                                <td>31.7°C</td>
                                <td>31.7°C</td>
                                <td>31.7°C</td>
                                <td>86.4</td>
                                <td>E</td>
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
                            As medidas de ITU no relatorio seram apresentadas como indices como: B = bom | C = Critico | P = perigo | E = Emergencia,
                            So um detalhe meu Usuario o sistema está na fase beta logo o ITU ideal é apenas para matrizes mais logo está completamente concluido!!
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