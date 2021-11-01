import styled from 'styled-components';

export const Container = styled.header`
background: #000;

`;

export const Content = styled.div`
margin: 0 auto;
max-width:1120px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 1rem 3rem;

img{
    width:8rem;
    margin-top: 2rem;
}

button{ 
    height:4rem;
    color: #000;
    border: 0;
    padding:0 2rem;
    background-color: #F2BA0C;
    border-radius: 1rem;
    font-size:1.25rem;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 700;
    margin-top: 2rem;


    &:hover{
        color: #fff;
    }
}

`