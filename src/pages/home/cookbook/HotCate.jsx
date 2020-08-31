import React from 'react';
import { Grid } from 'antd-mobile';
import { HotCateWrap } from './styledCookbook';
import { get } from '../../../utils/http';

export default class HotCate extends React.Component {
  state = {
    hotList: []
  }
  async componentDidMount() {
    let result = await get({
      url: '/api/hotcate'
    });
    let data = result.map((value, id) => ({
      key: id,
      title: value.title,
      icon: value.img
    }));
    this.setState({
      hotList: data
    });
  }

  render() {
    return (
      <HotCateWrap>
        <header>热门分类</header>
        <Grid data={this.state.hotList}
          columnNum={3}
          hasLine={false}
          square={false}
          renderItem={dataItem => (
            <div className='item'>
              <img src={dataItem.icon} alt={dataItem.title} />
              <span>{dataItem.title}</span>
            </div>
          )}
        />
      </HotCateWrap>
    )
  }
}