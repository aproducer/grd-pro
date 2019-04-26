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
        // hideInMenu:true,
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
        // hideInMenu:true,
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
            path: "/shop/detail/:id/management",
            component: "./Grd/Management/Management"
          },
          {
            path: "/shop/detail/:id/analysis",
            component: "./Grd/Management/Analysis"
          }
        ]
      },
      {
        path: "/users/detail/:id",
        name: "用户详情",
        icon: "user",
        // hideInMenu:true,
        component: "./Grd/users/User",
        routes: [
          {
            path: "/users/detail/:id/",
            redirect: "/users/detail/:id/settings"
          },
          {
            path: "/users/detail/:id/settings",
            component: "./Grd/users/Settings"
          },
          {
            path: "/users/detail/:id/comments",
            component: "./Grd/Comments"
          },
          {
            path: "/users/detail/:id/goods",
            component: "./Grd/users/Goods"
          },
        ]
      }
    ]
  }
];
