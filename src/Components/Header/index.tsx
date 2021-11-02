import pig from '../../assets/pig.png';
import { Container, Content } from './styled';

export function Header(){
    return(
        <header>
            <Container>
                <Content>
                    <img src={pig}/>
                    <button type="button">Relatorio Do Ambiente
                    </button>
                    <button type="button">Como Usar TempPig
                    </button>
                </Content>
            </Container>
            
        </header>
    )
}