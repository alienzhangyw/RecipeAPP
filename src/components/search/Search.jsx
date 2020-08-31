import React from 'react';
import searchImg from 'assets/search.png';
import { SearchWrap } from './styledSearch';

export default class Search extends React.Component {
  render() {
    return (
      <SearchWrap width='0px'>
        <div>
          <img src={searchImg} alt='' />
          <input type="text" placeholder="想吃什么搜这里，如川菜" />
        </div>
      </SearchWrap>
    );
  }
}