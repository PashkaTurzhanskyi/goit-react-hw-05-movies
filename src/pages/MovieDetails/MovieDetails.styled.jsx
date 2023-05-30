import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Description = styled.div`
    display: flex;
    gap: 20px;
`

export const Button = styled(Link)`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: white;
    width: 150px;
    height: 30px;
    /* border: 1px solid red; */
    background-color: gray;
    margin-bottom: 10px;
    &:hover{
        color: black;
    }
`