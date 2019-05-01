export default [
  // user
  {
    path: "/user",
    component: "../layouts/UserLayout",
    routes: [
      { path: "/user", redirect: "/user/login" },
      { path: "/user/login", component: "./User/Login" },
      { path: "/user/register", component: "./User/Register" },
      { path: "/user/register-result", component: "./User/RegisterResult" }
    ]
  },
  // app
  {
    path: "/",
    component: "../layouts/BasicLayout",
    Routes: ["src/pages/Authorized"],
    authority: ["admin", "user"],
    routes: [
      { path: "/", redirect: "/home" },
      {
        path: "/home",
        name: "首页",
        icon: "home",
        component: "./Grd/Home"
      },
      {
        path: "/shoppingCart",
        name: "购物车",
        icon: "shopping-cart",
        component: "./Grd/ShoppingCart"
      },
      {
        path: "/item/detail/:id",
        name: "商品详情",
        icon: "shop",
        hideInMenu:true,
        component: "./Grd/Item/Detail"
      },
      {
        path: "/order/:id",
        name: "我的订单",
        icon: "wallet",
        // hideInMenu:true,
        component: "./Grd/Order/Order",
        routes: [
          {
            path: "/order/:id",
            redirect: "/order/:id/all"
          },
          {
            path: "/order/:id/all",
            component: "./Grd/Order/AllOrder"
          }
        ]
      },
      {
        path: "/orderdetail/:uid/:oid",
        name: "订单详情",
        icon: "wallet",
        hideInMenu:true,
        component: "./Grd/Order/Detail"
      },

      {
        path: "/shop/detail/:id",
        name: "我的店铺",
        icon: "shop",
        // hideInMenu:true,
        component: "./Grd/Management/Shop",
        routes: [
          {
            path: "/shop/detail/:id",
            redirect: "/shop/detail/:id/management"
          },
          {
            name:'商品管理',
            icon:"gold",
            path: "/shop/detail/:id/management",
            component: "./Grd/Management/Management"
          },
          {
            name:'数据分析',
            icon:'area-chart',
            path: "/shop/detail/:id/analysis",
            component: "./Grd/Management/Analysis"
          }
        ]
      },
      {
        path: "/users/detail/:id",
        name: "用户中心",
        icon: "user",
        // hideInMenu:true,
        component: "./Grd/users/User",
        routes: [
          {
            path: "/users/detail/:id/",
            redirect: "/users/detail/:id/settings"
          },
          {
            name:'个人信息',
            icon:'solution',
            path: "/users/detail/:id/settings",
            component: "./Grd/users/Settings"
          },
          {
            name:'客户评论',
            icon:'smile',
            path: "/users/detail/:id/comments",
            component: "./Grd/Comments"
          },
          {
            name:'在售商品',
            icon:'barcode',
            path: "/users/detail/:id/goods",
            component: "./Grd/users/Goods"
          },
          {
            name:'地址管理',
            icon:'environment',
            path: "/users/detail/:id/address",
            component: "./Grd/users/Address"
          },
        ]
      }
    ]
  }
];
