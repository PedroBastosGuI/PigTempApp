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


export const ModalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        max-width: 100%;
        width: 30rem;
        height: 30rem;
    };

    h1{
        font-family: 'Noto Sans', sans-serif;
        font-size:3rem;
        color: var(--black-100);
        margin-top: 1.2rem;
        strong{
            color:#f0adb4;
        }
    }

        p{
            font-family: 'Noto Sans', sans-serif;
            font-size:1.25rem;
            color: var(--black-100);
            margin-top: 1.2rem;
        };

    h3{
        
        font-family: 'Noto Sans', sans-serif;
        font-size:2rem;
        color: var(--black-100);
                margin-top: 1.2rem;


    }


`

export const ModalTwoContainer = styled.div`
margin-top: 4rem;
h1{
    text-align: center;
    margin-bottom: 3rem;
    color: var(--black-100);
    font-weight: 400;
    font-size:4rem

}
table{
    width: 100%;
    border-spacing: 0 0.5rem;

    th{
        color: var(--black-100);
        font-weight: 400;
        padding: 1rem 2rem;
        text-align: center;
        font-size:1.5rem

    }

    td{
        color: var(--black-100);
        font-weight: 400;
        border: 0;
        background-color: #ffff;
        border-radius:0.2rem;
        text-align:center;
        font-size:1.75rem
    }
}

`