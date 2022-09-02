


// 王者荣耀抽奖伪代码
const user = {
  vip_level: 2,
  register_days: 30
}
// 最大抽奖次数
const MAX_TIME = 361;
// 最低抽奖次数中奖
const MIN_LUCKY_DRAW_TIME = 180
// 当前抽奖次数
var current_time = 0;
// 用户贵族等级 0 ~ 10
const VIP_LEVEL = user.vip_level;
// 用户注册天数
const REGISTER_DAYS = user.register_days;
// 奖品类型
const BEST_PRIZE = "荣耀水晶"
const NORMAL_PRIZE = "大冤种"
function lucky_draw() {
  if (current_time < MIN_LUCKY_DRAW_TIME) return NORMAL_PRIZE;
  if (current_time >= MAX_TIME) return BEST_PRIZE;
  current_time ++;
  // 随着抽奖次数增加，逐渐增加中奖几率
  let lucky_rate = getWinRate() + current_time * 0.01;
  // 用户注册天数减少，逐渐增加中奖几率
  lucky_rate -= REGISTER_DAYS * 0.01;
  // 用户vip等级越高，中奖几率越低
  lucky_rate -= VIP_LEVEL
  const new_rate = getWinRate();
  if (lucky_rate < new_rate) return NORMAL_PRIZE;
  return BEST_PRIZE;
}

for (var i = 0; i <= 365; i ++) {
  console.log(i, lucky_draw(), current_time)
}

// 单次中奖概率
function getWinRate() {
  return Math.random() * 100
}


