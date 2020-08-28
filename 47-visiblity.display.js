/**
 * @desc 分析比较
 * @param opacity: 0
 * @param visibility: hidden
 * @param display: none
 * */

// 1. display: none, 不占用空间，不能点击， 会触发回流
// 2. visibility: hidden, 占用空间，不能点击，会触发重绘、
// 3. opacity: 0, 占据解空间可以点击

// 补充：株连性
// 如果祖先元素遭遇某祸害，则其子孙孙无一例外也要遭殃，比如：
// opacity:0和display:none，若父节点元素应用了opacity:0和display:none，无论其子孙元素如何挣扎都不会再出现在大众视野；
// 而若父节点元素应用visibility:hidden，子孙元素应用visibility:visible，那么其就会毫无意外的显现出来。
