import styled from 'styled-components';
import border from '../styled/border';

export const SearchWrap = border({
  Comp: styled.div`
    padding: .1rem .15rem;
    div{
      height: .4rem;
      color: #666;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: .22rem;
        height: .22rem;
        margin-right: .05rem;
      }
      input{
        outline: none;
        border: none;
        height: .22rem;
        line-height: .22rem;
      }
    }
  `
});