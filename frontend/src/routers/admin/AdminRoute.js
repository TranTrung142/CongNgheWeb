import ErrorNotFound from 'components/admin/common/ErrorNotFound';
import Loading from 'components/admin/common/Loading';
import PrivateAdminRoute from 'components/admin/common/PrivateAdminRoute';
import Menus from 'components/admin/layout/Menus';
import React from 'react';
import { lazy } from 'react';
import { Suspense } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

const Home = lazy(()=> import('components/admin/home/Home'));

const Bills = lazy(()=> import('components/admin/bills/Bills'));
const BillDetail = lazy(()=> import('components/admin/bills/BillDetail'))

const Sellers = lazy(()=> import('components/admin/sellers/Sellers'));
const SellerDetail = lazy(()=> import('components/admin/sellers/SellerDetail'));

const Customers = lazy(()=> import('components/admin/customers/Customers'));
const CustomerDetail = lazy(()=> import('components/admin/customers/CustomerDetail'));


function AdminRoute(props) {
    const {path} = useRouteMatch();
    return (
        <Menus>
      <Suspense fallback={<Loading />}>
        <Switch>
          <PrivateAdminRoute component={Home} exact path={`${path}/`} />
          {/* bills */}
          <PrivateAdminRoute component={Bills} exact path={`${path}/bills`} />
          <PrivateAdminRoute component={BillDetail} exact path={`${path}/bills/:id`} />

          {/* Seller */}
          <PrivateAdminRoute component={Sellers} exact path={`${path}/sellers`} />
          <PrivateAdminRoute component={SellerDetail} exact path={`${path}/sellers/:id`} />

          {/* Customer */}
          <PrivateAdminRoute component={Customers} exact path={`${path}/customers`} />
          <PrivateAdminRoute component={CustomerDetail} exact path={`${path}/customers/:id`} />
          

          <Route component={ErrorNotFound} path="*" />
        </Switch>
      </Suspense>
    </Menus>
    );
}

export default AdminRoute;