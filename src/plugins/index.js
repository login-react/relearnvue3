import navCurrent from './directives/navCurrent';

let newPlugin = {};

newPlugin.install = function (Vue) {
    Vue.directive('navCurrent', navCurrent)
}

export default newPlugin;