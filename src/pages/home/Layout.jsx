/* eslint-disable jsx-a11y/anchor-is-valid */
import { TabBar } from 'antd-mobile';
import React from 'react';

import cookbook from 'assets/cookbook.png';
import cookbookActive from 'assets/cookbook-active.png';
import location from 'assets/location.png';
import locationActive from 'assets/location-active.png';
import menu from 'assets/menu.png';
import menuActive from 'assets/menu-active.png';
import more from 'assets/more.png';
import moreActive from 'assets/more-active.png';

import { Cookbook, Category, Map, Profile } from './index';

import { connect } from 'react-redux';

@connect((state) => ({
  isShown: state.home.isShown
}))

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'cookbook',
      hidden: false,
      fullScreen: true,
    };
  }

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#666"
          tintColor="#000"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          {[<TabBar.Item
            title="菜谱大全"
            key="cookbook"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${cookbook}) center center /  21px 21px no-repeat`
            }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${cookbookActive}) center center /  21px 21px no-repeat`
            }}
            />
            }
            selected={this.state.selectedTab === 'cookbook'}
            onPress={() => {
              this.setState({
                selectedTab: 'cookbook',
              });
            }}
          >
            <Cookbook />
          </TabBar.Item>,
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${menu}) center center /  21px 21px no-repeat`
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${menuActive}) center center /  21px 21px no-repeat`
              }}
              />
            }
            title="分类"
            key="category"
            selected={this.state.selectedTab === 'category'}
            onPress={() => {
              this.setState({
                selectedTab: 'category',
              });
            }}
          >
            <Category />
          </TabBar.Item>,
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${location}) center center /  21px 21px no-repeat`
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${locationActive}) center center /  21px 21px no-repeat`
              }}
              />
            }
            title="美食地图"
            key="map"
            selected={this.state.selectedTab === 'map'}
            onPress={() => {
              this.setState({
                selectedTab: 'map',
              });
            }}
          >
            <Map />
          </TabBar.Item>,
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${more}) center center /  21px 21px no-repeat`
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${moreActive}) center center /  21px 21px no-repeat`
              }}
              />
            }
            title="更多"
            key="more"
            selected={this.state.selectedTab === 'more'}
            onPress={() => {
              this.setState({
                selectedTab: 'more',
              });
            }}
          >
            <Profile />
          </TabBar.Item>
          ].filter((item, index) => {
            return (index === 2 && this.props.isShown) || index !== 2
          })
          }
        </TabBar>
      </div>
    );
  }
}

export default Layout;