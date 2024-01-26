import styled from "styled-components";

const Photo = styled.div`
    max-height: 400px;
    max-width: 400px;
    aspect-ratio: 1/1;
    background-color: white;
    display: flex;
    justify-content: center;
    padding: 20px;
    border: #C81E1E solid 2px;
    border-radius: 25px;
    img{
        width: 100%;
        height: 100%;
        
    }
`
const Info = styled.div`
    color: white;
    h1{
        font-weight: bolder;
        font-size: calc(1.5rem + 0.5vw);
        border-bottom: 2px solid #C81E1E;
    }

`
const Ficha = styled.section`
    border: #C81E1E solid 5px;
    border-top: #52525B solid 5px;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px,rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;;
    position: relative;
    border-radius: 0px 0px 25px 25px;
`
const Tag = styled.h1`
    color: white;
    border-radius: 100% 100% 0px 0px;
    padding-inline: 20px;
    position: absolute;
    z-index: 2;
    bottom: 0px;
    right: calc(50% - 37px);
`
const Type = styled.li`
    width: 100%;
    text-align: center;
    border-radius: 5px;
    border: 1px solid white;
    
`
const Pokenav = styled.nav`
    div{border-radius:  0px 25px 0px 0px;}
    #return{
        position: absolute;
        background-color: #C81E1E;
        border-radius: 15px 15px 0px 0px;
        padding: 5px 15px;
        
        display: flex;
        align-items: center;
        top:-30px
    }
`

export{Photo,Info,Ficha,Tag,Type,Pokenav}