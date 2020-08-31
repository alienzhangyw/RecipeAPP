/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Carousel } from 'antd-mobile';
import { connect } from 'react-redux';
import { GETLIST } from '../action-types';

const mapState = (state) => (
  {
    list: state.home.list
  }
);

const mapDispatch = (dispatch) => ({
  loadData() {
    dispatch({
      type: GETLIST,
      url: '/api/list',
    });
  }
})

@connect(mapState, mapDispatch)

class Swiper extends React.Component {
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    return (
      this.props.list.length && (<Carousel
        autoplay={true}
        infinite
      >
        {this.props.list.slice(0, 5).map((item) => <a
          key={item.id}
          href="#"
          style={{ display: 'inline-block', width: '100%', height: 'auto' }}
        >
          <img
            // 
            src={item.img}
            alt={item.name}
            style={{ display: 'block', width: '100%', verticalAlign: 'top' }}
            onLoad={() => {
              // fire window resize event to change height
              window.dispatchEvent(new Event('resize'));
            }}
          />
        </a>)}
      </Carousel>)
    );
  }
}

export default Swiper;