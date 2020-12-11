
import ErrorNotFound from 'components/user/common/ErrorNotFound';
import Loading from 'components/user/common/Loading';
import PrivateUserRoute from 'components/user/common/PrivateUserRoute';

import Menus from 'components/user/layout/Menus';
import React from 'react';
import { lazy } from 'react';
import { Suspense } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

const Home = lazy(()=> import('components/user/home/Home'));

const ProductDetail = lazy(()=> import('components/user/product/ProductDetail'));
const Cart = lazy(()=> import('components/user/cart/Cart'));

const Test = lazy(()=> import('components/Test'));

function UserRoute(props) {
    let { path, url } = useRouteMatch();
    return (
        <Menus>
      <Suspense fallback={<Loading />}>
        <Switch>
          <PrivateUserRoute component={Home} exact path={`${path}/`} />
          <PrivateUserRoute component={ProductDetail} exact path={`${path}/product/:id`} />
          <PrivateUserRoute component={Cart} exact path={`${path}/cart`} />

          <PrivateUserRoute component={Test} path={`${path}/test`} />
          

          <Route component={ErrorNotFound} path="*" />
        </Switch>
      </Suspense>
    </Menus>
    );
}

export default UserRoute;