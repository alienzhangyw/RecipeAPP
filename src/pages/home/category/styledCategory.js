import styled from 'styled-components';

export const HeaderWrap = styled.div`
  height: .44rem;
  background: #ee742f;
  display: flex;
  align-items: center;
  justify-content: center;
  ul{
    width: 1.4rem;
    height: .3rem;
    display: flex;
    border: 1px solid #fff;
    border-radius: .15rem;
    li{
      flex: 1;
      line-height: .3rem;
      text-align: center;
      color: #fff;
      transition: all 0.4s;
      border-radius: .15rem;
      &.active{
        background: #fff;
        color: #ee742f;
      }
    }
  }
`
export const CateWrap = styled.div`
  height: 100%;
  overflow: hidden;
`