import pig from '../../assets/pig.png';
import { Container, Content } from './styled';
import React,{useState} from 'react';
export function Header(){

    const[isModalVisible, setIsModalVisable] = useState(false)

    return(
        <header>
            <Container>
                <Content>
                    <img src={pig}/>
                    <div>
                    <button onClick={() => setIsModalVisable(true)} type="button">Relatorio Do Ambiente
                    </button>
                    {isModalVisible ? <h1>modal</h1>:null}
                    </div>
                    <button type="button">Como Usar TempPig
                    </button>
                </Content>
            </Container>
            
        </header>
    )
}