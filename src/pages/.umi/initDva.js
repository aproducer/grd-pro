import dva from 'dva';
import createLoading from 'dva-loading';

const runtimeDva = window.g_plugins.mergeConfig('dva');
let app = dva({
  history: window.g_history,
  
  ...(runtimeDva.config || {}),
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});

app.model({ namespace: 'cart', ...(require('/Users/Macbook/github/grd-pro/src/models/cart.js').default) });
app.model({ namespace: 'global', ...(require('/Users/Macbook/github/grd-pro/src/models/global.js').default) });
app.model({ namespace: 'goodsList', ...(require('/Users/Macbook/github/grd-pro/src/models/goodsList.js').default) });
app.model({ namespace: 'list', ...(require('/Users/Macbook/github/grd-pro/src/models/list.js').default) });
app.model({ namespace: 'login', ...(require('/Users/Macbook/github/grd-pro/src/models/login.js').default) });
app.model({ namespace: 'menu', ...(require('/Users/Macbook/github/grd-pro/src/models/menu.js').default) });
app.model({ namespace: 'order', ...(require('/Users/Macbook/github/grd-pro/src/models/order.js').default) });
app.model({ namespace: 'project', ...(require('/Users/Macbook/github/grd-pro/src/models/project.js').default) });
app.model({ namespace: 'setting', ...(require('/Users/Macbook/github/grd-pro/src/models/setting.js').default) });
app.model({ namespace: 'user', ...(require('/Users/Macbook/github/grd-pro/src/models/user.js').default) });
