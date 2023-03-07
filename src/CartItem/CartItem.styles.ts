import styled from "styled-components";

export const Wrapper=styled.div`
 display: flex;
 align-items: center;
 /* justify-content: space-between; */
 margin-bottom: 20px;
 border-bottom: 2px solid #ddd;
 padding: 20px;

 .content{
  width: 100%;
  max-width: 280px;
 }
 .amount{
  padding: 0 10px;
 }

 .title{
  margin-bottom: 15px;
 }

 img{
  margin-left: auto;
  max-width: 80px;
 }

 .information {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  justify-content: space-between;
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

span{
  color: #862e9c;
  font-weight: 700;
}

`




