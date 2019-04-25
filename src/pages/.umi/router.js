import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import RendererWrapper0 from '/Users/Macbook/github/grd-pro/src/pages/.umi/LocaleWrapper.jsx'
import _dvaDynamic from 'dva/dynamic'

let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/user",
    "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "layouts__UserLayout" */'../../layouts/UserLayout'),
  LoadingComponent: require('/Users/Macbook/github/grd-pro/src/components/PageLoading/index').default,
}),
    "routes": [
      {
        "path": "/user",
        "redirect": "/user/login",
        "exact": true
      },
      {
        "path": "/user/login",
        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__User__models__register.js' */'/Users/Macbook/github/grd-pro/src/pages/User/models/register.js').then(m => { return { namespace: 'register',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__User__Login" */'../User/Login'),
  LoadingComponent: require('/Users/Macbook/github/grd-pro/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "path": "/user/register",
        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__User__models__register.js' */'/Users/Macbook/github/grd-pro/src/pages/User/models/register.js').then(m => { return { namespace: 'register',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__User__Register" */'../User/Register'),
  LoadingComponent: require('/Users/Macbook/github/grd-pro/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "path": "/user/register-result",
        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__User__models__register.js' */'/Users/Macbook/github/grd-pro/src/pages/User/models/register.js').then(m => { return { namespace: 'register',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__User__RegisterResult" */'../User/RegisterResult'),
  LoadingComponent: require('/Users/Macbook/github/grd-pro/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "component": () => React.createElement(require('/Users/Macbook/github/grd-pro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "path": "/",
    "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../../layouts/BasicLayout'),
  LoadingComponent: require('/Users/Macbook/github/grd-pro/src/components/PageLoading/index').default,
}),
    "Routes": [require('../Authorized').default],
    "authority": [
      "admin",
      "user"
    ],
    "routes": [
      {
        "path": "/",
        "redirect": "/home",
        "exact": true
      },
      {
        "path": "/home",
        "name": "首页",
        "icon": "home",
        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Grd__models__geographic.js' */'/Users/Macbook/github/grd-pro/src/pages/Grd/models/geographic.js').then(m => { return { namespace: 'geographic',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__Grd__Home" */'../Grd/Home'),
  LoadingComponent: require('/Users/Macbook/github/grd-pro/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "path": "/shoppingCart",
        "name": "购物车",
        "icon": "shopping-cart",
        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Grd__models__geographic.js' */'/Users/Macbook/github/grd-pro/src/pages/Grd/models/geographic.js').then(m => { return { namespace: 'geographic',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__Grd__ShoppingCart" */'../Grd/ShoppingCart'),
  LoadingComponent: require('/Users/Macbook/github/grd-pro/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "path": "/item/detail/:id",
        "name": "商品详情",
        "icon": "shop",
        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Grd__models__geographic.js' */'/Users/Macbook/github/grd-pro/src/pages/Grd/models/geographic.js').then(m => { return { namespace: 'geographic',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__Grd__Item__Detail" */'../Grd/Item/Detail'),
  LoadingComponent: require('/Users/Macbook/github/grd-pro/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "path": "/order/:id",
        "name": "我的订单",
        "icon": "wallet",
        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Grd__Order__models__profile.js' */'/Users/Macbook/github/grd-pro/src/pages/Grd/Order/models/profile.js').then(m => { return { namespace: 'profile',...m.default}}),
  import(/* webpackChunkName: 'p__Grd__models__geographic.js' */'/Users/Macbook/github/grd-pro/src/pages/Grd/models/geographic.js').then(m => { return { namespace: 'geographic',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__Grd__Order__Order" */'../Grd/Order/Order'),
  LoadingComponent: require('/Users/Macbook/github/grd-pro/src/components/PageLoading/index').default,
}),
        "routes": [
          {
            "path": "/order/:id",
            "redirect": "/order/:id/all",
            "exact": true
          },
          {
            "path": "/order/:id/all",
            "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Grd__Order__models__profile.js' */'/Users/Macbook/github/grd-pro/src/pages/Grd/Order/models/profile.js').then(m => { return { namespace: 'profile',...m.default}}),
  import(/* webpackChunkName: 'p__Grd__models__geographic.js' */'/Users/Macbook/github/grd-pro/src/pages/Grd/models/geographic.js').then(m => { return { namespace: 'geographic',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__Grd__Order__Order" */'../Grd/Order/AllOrder'),
  LoadingComponent: require('/Users/Macbook/github/grd-pro/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "component": () => React.createElement(require('/Users/Macbook/github/grd-pro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/orderdetail/:uid/:oid",
        "name": "订单详情",
        "icon": "wallet",
        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Grd__Order__models__profile.js' */'/Users/Macbook/github/grd-pro/src/pages/Grd/Order/models/profile.js').then(m => { return { namespace: 'profile',...m.default}}),
  import(/* webpackChunkName: 'p__Grd__models__geographic.js' */'/Users/Macbook/github/grd-pro/src/pages/Grd/models/geographic.js').then(m => { return { namespace: 'geographic',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__Grd__Order__Detail" */'../Grd/Order/Detail'),
  LoadingComponent: require('/Users/Macbook/github/grd-pro/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "path": "/shop/detail/:id",
        "name": "我的店铺",
        "icon": "shop",
        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Grd__Management__models__activities.js' */'/Users/Macbook/github/grd-pro/src/pages/Grd/Management/models/activities.js').then(m => { return { namespace: 'activities',...m.default}}),
  import(/* webpackChunkName: 'p__Grd__Management__models__chart.js' */'/Users/Macbook/github/grd-pro/src/pages/Grd/Management/models/chart.js').then(m => { return { namespace: 'chart',...m.default}}),
  import(/* webpackChunkName: 'p__Grd__Management__models__monitor.js' */'/Users/Macbook/github/grd-pro/src/pages/Grd/Management/models/monitor.js').then(m => { return { namespace: 'monitor',...m.default}}),
  import(/* webpackChunkName: 'p__Grd__models__geographic.js' */'/Users/Macbook/github/grd-pro/src/pages/Grd/models/geographic.js').then(m => { return { namespace: 'geographic',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__Grd__Management__Shop" */'../Grd/Management/Shop'),
  LoadingComponent: require('/Users/Macbook/github/grd-pro/src/components/PageLoading/index').default,
}),
        "routes": [
          {
            "path": "/shop/detail/:id",
            "redirect": "/shop/detail/:id/management",
            "exact": true
          },
          {
            "path": "/shop/detail/:id/management",
            "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Grd__Management__models__activities.js' */'/Users/Macbook/github/grd-pro/src/pages/Grd/Management/models/activities.js').then(m => { return { namespace: 'activities',...m.default}}),
  import(/* webpackChunkName: 'p__Grd__Management__models__chart.js' */'/Users/Macbook/github/grd-pro/src/pages/Grd/Management/models/chart.js').then(m => { return { namespace: 'chart',...m.default}}),
  import(/* webpackChunkName: 'p__Grd__Management__models__monitor.js' */'/Users/Macbook/github/grd-pro/src/pages/Grd/Management/models/monitor.js').then(m => { return { namespace: 'monitor',...m.default}}),
  import(/* webpackChunkName: 'p__Grd__models__geographic.js' */'/Users/Macbook/github/grd-pro/src/pages/Grd/models/geographic.js').then(m => { return { namespace: 'geographic',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__Grd__Management__Shop" */'../Grd/Management/Management'),
  LoadingComponent: require('/Users/Macbook/github/grd-pro/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "path": "/shop/detail/:id/analysis",
            "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Grd__Management__models__activities.js' */'/Users/Macbook/github/grd-pro/src/pages/Grd/Management/models/activities.js').then(m => { return { namespace: 'activities',...m.default}}),
  import(/* webpackChunkName: 'p__Grd__Management__models__chart.js' */'/Users/Macbook/github/grd-pro/src/pages/Grd/Management/models/chart.js').then(m => { return { namespace: 'chart',...m.default}}),
  import(/* webpackChunkName: 'p__Grd__Management__models__monitor.js' */'/Users/Macbook/github/grd-pro/src/pages/Grd/Management/models/monitor.js').then(m => { return { namespace: 'monitor',...m.default}}),
  import(/* webpackChunkName: 'p__Grd__models__geographic.js' */'/Users/Macbook/github/grd-pro/src/pages/Grd/models/geographic.js').then(m => { return { namespace: 'geographic',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__Grd__Management__Shop" */'../Grd/Management/Analysis'),
  LoadingComponent: require('/Users/Macbook/github/grd-pro/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "component": () => React.createElement(require('/Users/Macbook/github/grd-pro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/users/detail/:id",
        "name": "用户详情",
        "icon": "user",
        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Grd__models__geographic.js' */'/Users/Macbook/github/grd-pro/src/pages/Grd/models/geographic.js').then(m => { return { namespace: 'geographic',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__Grd__users__User" */'../Grd/users/User'),
  LoadingComponent: require('/Users/Macbook/github/grd-pro/src/components/PageLoading/index').default,
}),
        "routes": [
          {
            "path": "/users/detail/:id/",
            "redirect": "/users/detail/:id/settings",
            "exact": true
          },
          {
            "path": "/users/detail/:id/settings",
            "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Grd__models__geographic.js' */'/Users/Macbook/github/grd-pro/src/pages/Grd/models/geographic.js').then(m => { return { namespace: 'geographic',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__Grd__users__User" */'../Grd/users/Settings'),
  LoadingComponent: require('/Users/Macbook/github/grd-pro/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "path": "/users/detail/:id/comments",
            "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Grd__models__geographic.js' */'/Users/Macbook/github/grd-pro/src/pages/Grd/models/geographic.js').then(m => { return { namespace: 'geographic',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__Grd__users__User" */'../Grd/Comments'),
  LoadingComponent: require('/Users/Macbook/github/grd-pro/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "path": "/users/detail/:id/goods",
            "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Grd__models__geographic.js' */'/Users/Macbook/github/grd-pro/src/pages/Grd/models/geographic.js').then(m => { return { namespace: 'geographic',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__Grd__users__User" */'../Grd/users/Goods'),
  LoadingComponent: require('/Users/Macbook/github/grd-pro/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "path": "/users/detail/:id/address",
            "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Grd__models__geographic.js' */'/Users/Macbook/github/grd-pro/src/pages/Grd/models/geographic.js').then(m => { return { namespace: 'geographic',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__Grd__users__User" */'../Grd/users/Address'),
  LoadingComponent: require('/Users/Macbook/github/grd-pro/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "component": () => React.createElement(require('/Users/Macbook/github/grd-pro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "component": () => React.createElement(require('/Users/Macbook/github/grd-pro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "component": () => React.createElement(require('/Users/Macbook/github/grd-pro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
  }
];
window.g_routes = routes;
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  window.g_plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
window.g_history.listen(routeChangeHandler);
routeChangeHandler(window.g_history.location);

export default function RouterWrapper() {
  return (
<RendererWrapper0>
          <Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
        </RendererWrapper0>
  );
}
