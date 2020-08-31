import React from 'react';
import { CateWrap } from './styledCate';
import { get } from '../../utils/http';

export default class Category extends React.Component {
  state = {
    datasource: null,
    currentItem: "",
    defaultItem: ""
  }
  // 在数据改变的时候调用钩子
  static getDerivedStateFromProps(props, state) {
    if (props.defaultItem !== state.defaultItem) {
      return {
        ...state,
        defaultItem: props.defaultItem,
        currentItem: props.defaultItem
      };
    }
    return null;
  }

  async componentDidMount() {
    let result = await get({
      url: '/api/category'
    });
    this.setState({
      datasource: result.data,
      currentItem: '热门'
    });
  }

  handleItemClick = (item) => {
    return () => {
      this.setState({
        currentItem: item
      })
    }
  }

  render() {
    let { type } = this.props;
    let data = this.state.datasource ? Object.keys(this.state.datasource[type]) : [];
    let contents = this.state.datasource ? this.state.datasource[type][this.state.currentItem] : [];
    return (
      <CateWrap>
        <div>
          <ul>
            {data.map(category => {
              return (this.state.currentItem === category
                ? <li key={category} className="active"><span>{category}</span></li>
                : <li key={category} onClick={this.handleItemClick(category)}><span>{category}</span></li>)
            })}
          </ul>
        </div>
        <ul>
          {contents.map((value) => {
            return (
              <li key={value}>{value}</li>
            )
          })}
        </ul>
      </CateWrap>
    )
  }
}