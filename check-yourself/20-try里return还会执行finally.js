// 在 try 语句中，在执行 return 语句时，要返回的结果已经准备好了，就在此时，程序转到 finally 执行了。

// 在转去之前，try 中先把要返回的结果存放到局部变量中去，执行完 finally 之后，在从中取出返回结果。

// 因此，即使finally 中对返回的结果进行了改变，但是不会影响返回结果。

// 它应该使用栈保存返回值。
