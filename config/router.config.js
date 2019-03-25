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
        path: "/market",
        name: "店铺",
        icon: "shop",
        component: "./Grd/Home"
      },{
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
        path: "/shop/detail/:id",
        name: "店铺详情",
        icon: "shop",
        // hideInMenu:true,
        component: "./Grd/Item/Detail"
      },
      {
        path: "/users/detail/:id",
        name: "用户详情",
        icon: "shop",
        // hideInMenu:true,
        component: "./Grd/users/User"
      }
    ]
  }
];
