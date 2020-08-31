import React from 'react';

export default class Map extends React.Component{
  render() {
    return (
      <div style={{ height: '100%' }}>
        <iframe src="/map.html" frameBorder="0" title="baiduditu" style={{ width: '100%', height: '100%' }}></iframe>
      </div>
    )
  }
}