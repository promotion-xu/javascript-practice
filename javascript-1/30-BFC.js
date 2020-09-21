// 介绍下BFC及其作用
// 块级格式化上下文

// 1. 如何创建BFC
// (1). overflow的值不为visible
// (2). position的值不为relative,static
// (3). display的值为 inline-block,table-cell,table-caption
// (4). float的值不为none

// 2.BFC特性
// 1.就是在BFC这个元素的垂直方面边距(margin)会发生重叠
// 2.BFC的区域不会与浮动元素的box重叠
// 3.BFC在页面中是一个独立的容器，外面的元素不会影响它里面的元素
// 4.计算BFC高度的时候，浮动元素也会参与计算
