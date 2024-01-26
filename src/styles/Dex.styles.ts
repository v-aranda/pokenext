import styled from "styled-components"
const Button = styled.button`
    background-color: #C81E1E;
    color: white;
    padding: 2px 5px;
    border-radius: 5px;
    margin-top: 5px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`
const Card = styled.div`
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;  
    padding: 35px;
    border-radius: 15px;
    background-color: white;
    border: #C81E1E solid 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        font-weight: 500;
    }
    span{
        font-weight: 700;
        }
        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;    
`
export {Button,Card}