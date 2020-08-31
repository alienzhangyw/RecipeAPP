import React from 'react';
import Header from './Header';
import Cate from '../../../components/category/Category';
import Material from '../../../components/category/Category';
import Search from '../../../components/search/Search';
import { CateWrap } from './styledCategory';
import { BrowserRouter as Route, Switch, Redirect } from 'react-router-dom';

export default class Category extends React.Component {
  render() {
    return (
      <CateWrap>
        <Header history/>
        <Search />
        <Switch>
          <Route path='/category'>
            <Cate defaultItem='热门' type='category'/>
          </Route>
          <Route path='/material'>
            <Material defaultItem='肉类' type='material' />
          </Route>
          <Redirect from='/' to='/category' />
        </Switch>
      </CateWrap>
    )
  }
}