import styled from 'styled-components';

export const HeaderWrap = styled.div`
  height: .44rem;
  background: #ee742f;
  font-size: .18rem;
  color: #fff;
  text-align: center;
  line-height: .44rem;
`;

export const HotCateWrap = styled.div`
  header{
    line-height: .4rem;
    background: #fff;
    padding-left: .2rem;
    border-bottom: 1px solid gray;
    font-size: .16rem;
  }
  .item{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;
    img{
      width: 70%;
    }
    span{
      margin-top: .05rem;
    }
  }
`;

export const HotListWrap = styled.div`
  background: #f7f7f7;
  padding-left: .1rem;
  header{
    color: #aaa;
    padding-left: .2rem;
    padding-top: .15rem;
    font-size: .14rem;
  }
  figure{
    background: #fff;
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;
    img{
      width: 100%;
    }
    figcaption{
      h3{
        margin-top: .05rem;
      }
      p{
        font-size: 0.1rem;
        color: #9f9f9f;
      }
    }
  }
  .am-grid .am-flexbox .am-flexbox-item .am-grid-item-content{
    padding: .05rem 0;
  }
`;