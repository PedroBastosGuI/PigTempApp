import pig from '../../assets/pig.png';
import { Container, Content } from './styled';


export function Header(){
    return(
        <header>
            <Container>
                <Content>
                    <img src={pig}/>
                    <button type="button">Verificar Dados
                    </button>
                </Content>
            </Container>
            
        </header>
    )
}