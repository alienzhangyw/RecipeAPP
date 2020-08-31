import React from 'react';
import { HeaderWrap } from './styledCookbook';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <HeaderWrap>
          菜谱大全
        </HeaderWrap>
      </div>
    )
  }
}