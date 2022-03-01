import styled from "styled-components";

export const Container = styled.button`
background: var(${props => props.color});
width: ${props => props.width};
height: ${props => props.heigth};
color: var(--grey-0);
text-align: center;
border: none;
border-radius: 4px;
font-weight: 500;
`