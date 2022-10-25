import styled from "styled-components";

export const ButtonBox = styled.div`
display: flex;


`

export const Button = styled.button`
padding: 10px;
border-radius: 15%;
box-shadow: rgb(84 211 165 / 50%) 0px 0px 20px 20px;
background-color: #efe9b6;
font-size: 16px;
text-transform: capitalize;
cursor: pointer;

&:not(:last-child){
    margin-right: 35px;
}

&:hover, 
&:focus
{
    background-color: greenyellow;
}
`