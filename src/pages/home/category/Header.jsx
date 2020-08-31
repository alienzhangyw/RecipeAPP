import React from 'react';
import { HeaderWrap } from './styledCategory';
import { withRouter } from 'react-router-dom';

class Header extends React.Component {
  state = {
    dir: "category"
  }

  handleClick = (active) => {
    this.setState({ dir: active });
    this.props.history.push(`/${active}`);
  }

  render() {
    return (
      <HeaderWrap>
        <ul>
          <li onClick={() => this.handleClick("category")} className={this.state.dir === "category" ? "active" : ""}>分类</li>
          <li onClick={() => this.handleClick("material")} className={this.state.dir === "material" ? "active" : ""}>食材</li>
        </ul>
      </HeaderWrap>
    )
  }
}

export default withRouter(Header);