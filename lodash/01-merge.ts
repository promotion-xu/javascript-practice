function isObject(value: any): value is object {
  return Object.prototype.toString.call(value) === "[object Object]";
}

export function merge<TTarget, TSource>(
  target: TTarget,
  source: TSource
): TTarget & TSource;
export function merge<ITarget, ISource1, ISource2>(
  target: ITarget,
  source1: ISource1,
  source2: ISource2
): ITarget & ISource1 & ISource2;
export function merge<ITarget, ISource extends { [key: string]: any }>(
  target: ITarget,
  ...args: ISource[]
): ITarget {
  return args.reduce((acc: ITarget, cur: ISource) => {
    return Object.keys(cur || {}).reduce((subAcc: any, key: string) => {
      const srcVal = cur[key];
      if (isObject(srcVal)) {
        subAcc[key] = merge(subAcc[key] ? subAcc[key] : {}, srcVal);
      } else if (Array.isArray(srcVal)) {
        // series: []，下层数组直接赋值
        subAcc[key] = srcVal.map((item, idx) => {
          if (isObject(item)) {
            const curAccVal = subAcc[key] ? subAcc[key] : [];
            return merge(curAccVal[idx] ? curAccVal[idx] : {}, item);
          } else {
            return item;
          }
        });
      } else {
        subAcc[key] = srcVal;
      }
      return subAcc;
    }, acc);
  }, target);
}
