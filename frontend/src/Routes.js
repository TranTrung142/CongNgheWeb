import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import AdminLogin from "components/admin/login/Login";
import UserLogin from "components/user/login/Login";
import SellerLogin from "components/seller/login/Login";

import AdminRoute from "routers/admin/AdminRoute";
import UserRoute from "routers/user/UserRoute";
import SellerRoute from "routers/seller/SellerRoute";

import PrivateAdminRoute from "components/admin/common/PrivateAdminRoute";
import PrivateUserRoute from "components/user/common/PrivateUserRoute";
import PrivateSellerRoute from "components/seller/common/PrivateSellerRoute";

import Loading from "components/admin/common/Loading";
import Test from "components/Test";



function Routes(props) {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        {/* admin */}
        <Route component={AdminLogin} path="/admin/login" />
        <PrivateAdminRoute component={AdminRoute} path="/admin" />

        {/* user */}
        <Route component={UserLogin} path="/user/login" />
        <PrivateUserRoute component={UserRoute} path="/user" />

        {/* seller */}
        <Route component={SellerLogin} path="/seller/login" />
        <PrivateSellerRoute component={SellerRoute} path="/seller" />
      </Switch>
    </Suspense>
  );
}

export default Routes;
