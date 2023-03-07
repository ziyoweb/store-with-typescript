import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";



export const  Wrapper=styled.div`
  width: 100%;
  padding: 0 20px;
  max-width: 1240px;
  margin: 50px auto;
`

export const StyledButton=styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
  background-color: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`

export const Grid=styled.div`
 display: grid;
 grid-gap: 30px;
 grid-template-columns: repeat(auto-fit,minmax(280px, 1fr));
`
