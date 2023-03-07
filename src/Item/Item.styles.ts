import styled from "styled-components";

export const Wrapper =styled.div`
 display: flex;
 justify-content: space-between;
 flex-direction: column;
 width: 100%;
 height: 100%;
 box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
 border-radius: 10px;
 padding-bottom: 20px;
 transition: 0.3s linear;

 button{
   margin-left: auto;
   margin-right: 20px;
 }

 h3{
  color:#212529;
 }

 p{
  color: #495057;
 }
 img{
  width: 95%;
  height: 250px;
  padding: 10px 15px;
  display: block;
  margin: auto;
 }
 p{
  margin: 20px 0;
 }
 div{
  padding: 10px 15px;
 }

 :hover{
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
 }
`