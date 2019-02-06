Vue.component('testcomponent',{
    template : '<div><h1>commonet</h1></div>'
});
var vm = new Vue({
    el: '#component_test'
});
var vm1 = new Vue({
    el: '#component_test1'
});

Vue.component('testcomponent1',{
    template : '<div><h1>testcomponent1</h1></div>'
});

var vm3 = new Vue({
    el: '#component_test3'
});

Vue.component('commpnentbulid',{
    template : '<div><h1>commpnentbulid</h1></div>'
});
var object= new Vue({
    el: '#newcomponent'
})