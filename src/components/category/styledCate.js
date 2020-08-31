import styled from 'styled-components';

export const CateWrap = styled.div`
  height: 100%;
  display: flex;
  div{
    width: 25%;
    ul{
      height: 100%;
      overflow-y: scroll;
      li{
        height: .5rem;
        text-align: center;
        line-height: .5rem;
        background: #f3f3f3;
      }
      li.active{
        background: #fff;
        span{
          display: inline-block;
          height: 100%;
          color: #ee742f;
          border-bottom: 2px solid #ee742f;
        }
      }
    }
  }
  >ul{
    flex: 1;
    background: #fff;
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
    height: 100%;
    justify-content: flex-start;
    align-content: flex-start;
    padding: .2rem 0;
    li{
      flex: 1 1 .8rem;
      min-width: 16.6666%;
      max-width: 33.3333%;
      text-align: center;
      height: .45rem;
      line-height: .45rem;
      color: #bbb;
    }
  }
`