// 介绍下如何实现 token 加密

// 后端通过随机数加签名生成一个token，前端拿到token后通过拦截器在接口调用时添加token。