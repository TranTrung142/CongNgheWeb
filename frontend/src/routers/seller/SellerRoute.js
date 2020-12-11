import ErrorNotFound from 'components/seller/common/ErrorNotFound';
import Loading from 'components/seller/common/Loading';
import PrivateSellerRoute from 'components/seller/common/PrivateSellerRoute';
import Menus from 'components/seller/layout/Menus';
import Test from 'components/Test';
import React from 'react';
import { Suspense } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(()=> import('components/seller/home/Home'));
const Bills = lazy(()=> import('components/seller/bills/Bills'));
const Customers = lazy(()=> import('components/seller/customers/Customers'));
const Profile = lazy(()=> import('components/seller/profile/Profile'));

function SellerRoute(props) {
  const {path} = useRouteMatch();
    return (
        <Menus>
      <Suspense fallback={<Loading />}>
        <Switch>
			{/* home */}
          <PrivateSellerRoute component={Home} exact path={`${path}/`} />

		  {/* bills */}
          <PrivateSellerRoute component={Bills} exact path={`${path}/bills`} />

		  {/* customers */}
          <PrivateSellerRoute component={Customers} exact path={`${path}/customers`} />

		  {/* profile */}
          <PrivateSellerRoute component={Profile} exact path={`${path}/products`} />
          

          <Route component={ErrorNotFound} path="*" />
        </Switch>
      </Suspense>
    </Menus>
    );
}

export default SellerRoute;