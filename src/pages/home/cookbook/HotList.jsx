import React from 'react';
import { Grid } from 'antd-mobile';
import { HotListWrap } from './styledCookbook'
import { connect } from 'react-redux';

@connect((state) => ({
  hotList: state.home.list
}))

class HotList extends React.Component {
  render() {
    return (
      <HotListWrap>
        <header>精品好菜</header>
        <Grid data={this.props.hotList}
          columnNum={2}
          hasLine={false}
          square={false}
          itemStyle={{ background: '#f7f7f7', paddingRight: '0.1rem'}}
          renderItem={dataItem => (
            <figure key={dataItem.id}>
              <img src={dataItem.img} alt={dataItem.name} />
              <figcaption>
                <h3>{dataItem.name}</h3>
                <p>{dataItem.all_click}浏览 {dataItem.favorites}收藏</p>
              </figcaption>
            </figure>
          )}
        />
      </HotListWrap>
    )
  }
}
export default HotList;