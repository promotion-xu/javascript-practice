// Virtual Dom 比原生Dom 快吗？

// vue(MVVM 数据层面) vs react(Dom层面)

// (1)Vue:    检测到数据变化，收集依赖，虚拟Dom对比，替换掉旧的
// (2)React:  state变化 shouldComponentUpdate，会重新渲染当前组件及其子组件, 不知道数据的变化

// 1. 性能比较

// 小量数据更新  依赖收集(vue) >> Virtual Dom(react)
// 大量数据更新  Virtual Dom  > 依赖收集
