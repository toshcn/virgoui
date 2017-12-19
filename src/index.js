// es6 polyfill
import 'core-js/fn/array/find';
import 'core-js/fn/array/find-index';
import Icon from './components/icon';

const components = {
  Icon
};

const virgo = {
  ...components
}

const install = function (Vue) {
  if (install.installed) {
    return;
  }

  Object.keys(virgo).forEach(key => {
    Vue.component(key, virgo[key]);
  });
};

// install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const API = {
  version: process.env.VERSION,
  install,
  ...components
};

export default API; // eslint-disable-line no-undef
