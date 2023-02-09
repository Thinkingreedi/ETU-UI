import MainTest from './src/main.vue'

MainTest.install = function(Vue) {
    Vue.component(MainTest.name,MainTest);
}

export default MainTest