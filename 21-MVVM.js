// 聊聊 Vue 的双向数据绑定，Model 如何改变 View，View 又是如何改变 Model 的

// vue通过Object.defineProperty 劫持传进来的数据，
// 然后在数据getter的时候订阅重新编译模板的消息，然后通过js监听元素的事件，这里input事件也好，keyup事件也好，总是监听输入框值变化，将新的值重新赋值给被劫持的data,
// 这样就会触发setter函数，再setter函数中就会去发布重新编译模板的消息；

// Model 如何改变 View , View 如何改变 Model
// 1. Model --> View     Object.defineProperty
// 2. View ---> Model    onChange
