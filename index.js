import Calendar from './index.vue'

const install = function(Vue) {
	Vue.component(Calendar.name, Calendar);
}

if(typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
};

export default install