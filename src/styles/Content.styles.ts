import styled from "styled-components";


const Content = styled.main`

    min-height: 80vh;
    padding-block: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url('/images/bghome.jpg');
    background-size: contain;
    background-color: #d5e5f2;
    background-blend-mode: screen;
    
`
const Back = styled.a`

    background-color: red;
    padding: 18px 18px;
    font-weight: bolder;
    border-radius: 50%;
    color: white;
    position: fixed;
    bottom: 15px;
    left: 15px;

`

export {Content,Back}