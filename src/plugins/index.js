import navCurrent from './directives/navCurrent';

let Plugins = {};

Plugins.install = function (Vue) {
    Vue.directive('navCurrent', navCurrent)
}

export default Plugins;