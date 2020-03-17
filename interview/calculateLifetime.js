/**
 * 周末寿险风控计算。（迭代需求）
 * 1. 计算一个人还能活多少个周末。（假设男性平均寿命70，女性75）
 * 2. 如果有不良嗜好 -5 年
 * 3. 如果有疾病史 -5 年
 * 4. 设计至少 3 个测试案例测试程序
 */

const AverageLife = {
  male: 70,
  female: 75
};

function badHobbyStrategy(restYear) {
  return restYear - 5;
}
function medicalHistoryStrategy(restYear) {
  return restYear - 5;
}

function RiskCalculator(sex, currentAge) {
  this.sex = sex;
  this.currentAge = currentAge;
  this.restYear = AverageLife[sex];
  this.calculateQueue = [];
}
RiskCalculator.prototype.addStrategy = function(strategy) {
  if(this.calculateQueue.indexOf(strategy) === -1) this.calculateQueue.push(strategy);
}
RiskCalculator.prototype.count = function() {
  this.calculateQueue.forEach((strategy) => {
    this.restYear = strategy(this.restYear);
  })
  this.restWeekend = ((this.restYear - this.currentAge) * 365 / 7).toFixed(0);
  return {
    restWeekend: this.restWeekend,
    restYear: this.restYear - this.currentAge,
    sex: this.sex,
    currentAge: this.currentAge
  };
}

var riskCalculator = new RiskCalculator('male', 35);
riskCalculator.addStrategy(badHobbyStrategy);
// 测试重复添加策略
riskCalculator.addStrategy(medicalHistoryStrategy);
riskCalculator.addStrategy(medicalHistoryStrategy);
riskCalculator.addStrategy(medicalHistoryStrategy);
riskCalculator.addStrategy(medicalHistoryStrategy);
var res = riskCalculator.count();

console.log(res);
