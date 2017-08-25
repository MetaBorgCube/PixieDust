var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Lifted = require('pixiedust/components/Lifted');
var pixiedustRuntime = require('pixiedust/runtime');
var imports = {
  "Native" : require("../components/inputs")
};
var expression = require('expression');
var constants = require('pixiedust-constants');
var _ = require('lodash');
var moment = require('moment');
var immutable = require('immutable');
var pixiedustRuntime = require('pixiedust/runtime');
var scope = constants.EMPTY_OBJECT;
var emptyState = immutable.Map({
  "Income" : immutable.Map(),
  "Income_employedTaxDiscount" : immutable.Map(),
  "Income_gernalTaxDiscount" : immutable.Map(),
  "Income_grossSalary" : immutable.Map(),
  "Income_grossSalaryYear" : immutable.Map(),
  "Income_incomeTax" : immutable.Map(),
  "Income_leaseCarAddition" : immutable.Map(),
  "Income_netSalary" : immutable.Map(),
  "Income_netSalaryYear" : immutable.Map(),
  "Income_salaryBracket1" : immutable.Map(),
  "Income_salaryBracket2" : immutable.Map(),
  "Income_salaryBracket3" : immutable.Map(),
  "Income_salaryBracket4" : immutable.Map(),
  "Income_summary" : immutable.Map(),
  "Income_tax" : immutable.Map(),
  "Income_taxableIncome" : immutable.Map(),
  "Income_taxBracket1" : immutable.Map(),
  "Income_taxBracket2" : immutable.Map(),
  "Income_taxBracket3" : immutable.Map(),
  "Income_taxRate1" : immutable.Map(),
  "Income_taxRate2" : immutable.Map(),
  "Income_taxRate3" : immutable.Map(),
  "Income_taxRate4" : immutable.Map()
});
module.exports.emptyState = emptyState;
function getIncome_employedTaxDiscount(state,id) {
  var result = state.get("Income_employedTaxDiscount").get(id);
  if(result === undefined) {
    result = undefined;
  }
  return result;
}

module.exports.getIncome_employedTaxDiscount = getIncome_employedTaxDiscount;
function getIncome_employedTaxDiscount_Many(state,ids) {
  var result = [];
  var table = state.get("Income_employedTaxDiscount");
  for (var i = 0 ; i < ids.length ; i++) {
    var value = table.get(ids[i]);
    result.push(value);
  }
  return result;
}

module.exports.getIncome_employedTaxDiscount_Many = getIncome_employedTaxDiscount_Many;
function getIncome_gernalTaxDiscount(state,id) {
  var result = state.get("Income_gernalTaxDiscount").get(id);
  if(result === undefined) {
    result = undefined;
  }
  return result;
}

module.exports.getIncome_gernalTaxDiscount = getIncome_gernalTaxDiscount;
function getIncome_gernalTaxDiscount_Many(state,ids) {
  var result = [];
  var table = state.get("Income_gernalTaxDiscount");
  for (var i = 0 ; i < ids.length ; i++) {
    var value = table.get(ids[i]);
    result.push(value);
  }
  return result;
}

module.exports.getIncome_gernalTaxDiscount_Many = getIncome_gernalTaxDiscount_Many;
function getIncome_grossSalary(state,id) {
  var result = state.get("Income_grossSalary").get(id);
  if(result === undefined) {
    result = undefined;
  }
  return result;
}

module.exports.getIncome_grossSalary = getIncome_grossSalary;
function getIncome_grossSalary_Many(state,ids) {
  var result = [];
  var table = state.get("Income_grossSalary");
  for (var i = 0 ; i < ids.length ; i++) {
    var value = table.get(ids[i]);
    result.push(value);
  }
  return result;
}

module.exports.getIncome_grossSalary_Many = getIncome_grossSalary_Many;
function getIncome_grossSalaryYear(state,id) {
  var result = state.get("Income_grossSalaryYear").get(id);
  if(result === undefined) {
    result = undefined;
  }
  return result;
}

module.exports.getIncome_grossSalaryYear = getIncome_grossSalaryYear;
function getIncome_grossSalaryYear_Many(state,ids) {
  var result = [];
  var table = state.get("Income_grossSalaryYear");
  for (var i = 0 ; i < ids.length ; i++) {
    var value = table.get(ids[i]);
    result.push(value);
  }
  return result;
}

module.exports.getIncome_grossSalaryYear_Many = getIncome_grossSalaryYear_Many;
function getIncome_holidayAllowance(state,id) {
  var result = state.get("Income").get(id);
  if(result === undefined) {
    result = null;
  }
  if(result != null) {
    result = result.holidayAllowance;
    if(result === undefined) {
      result = null;
    }
  }
  return result;
}

module.exports.getIncome_holidayAllowance = getIncome_holidayAllowance;
function getIncome_holidayAllowance_Many(state,ids) {
  var result = [];
  var table = state.get("Income");
  for (var i = 0 ; i < ids.length ; i++) {
    var value = table.get(ids[i]);
    if(value != null) {
      value = value.holidayAllowance;
      if(value === undefined) {
        value = null;
      }
    }
    result.push(value);
  }
  return result;
}

module.exports.getIncome_holidayAllowance_Many = getIncome_holidayAllowance_Many;
function getIncome_incomeTax(state,id) {
  var result = state.get("Income_incomeTax").get(id);
  if(result === undefined) {
    result = undefined;
  }
  return result;
}

module.exports.getIncome_incomeTax = getIncome_incomeTax;
function getIncome_incomeTax_Many(state,ids) {
  var result = [];
  var table = state.get("Income_incomeTax");
  for (var i = 0 ; i < ids.length ; i++) {
    var value = table.get(ids[i]);
    result.push(value);
  }
  return result;
}

module.exports.getIncome_incomeTax_Many = getIncome_incomeTax_Many;
function getIncome_leaseCarAddition(state,id) {
  var result = state.get("Income_leaseCarAddition").get(id);
  if(result === undefined) {
    result = undefined;
  }
  return result;
}

module.exports.getIncome_leaseCarAddition = getIncome_leaseCarAddition;
function getIncome_leaseCarAddition_Many(state,ids) {
  var result = [];
  var table = state.get("Income_leaseCarAddition");
  for (var i = 0 ; i < ids.length ; i++) {
    var value = table.get(ids[i]);
    if(value !== null) {
      result.push(value);
    }
  }
  return result;
}

module.exports.getIncome_leaseCarAddition_Many = getIncome_leaseCarAddition_Many;
function getIncome_leaseCarPercent(state,id) {
  var result = state.get("Income").get(id);
  if(result === undefined) {
    result = null;
  }
  if(result != null) {
    result = result.leaseCarPercent;
    if(result === undefined) {
      result = null;
    }
  }
  return result;
}

module.exports.getIncome_leaseCarPercent = getIncome_leaseCarPercent;
function getIncome_leaseCarPercent_Many(state,ids) {
  var result = [];
  var table = state.get("Income");
  for (var i = 0 ; i < ids.length ; i++) {
    var value = table.get(ids[i]);
    if(value != null) {
      value = value.leaseCarPercent;
      if(value === undefined) {
        value = null;
      }
    }
    if(value !== null) {
      result.push(value);
    }
  }
  return result;
}

module.exports.getIncome_leaseCarPercent_Many = getIncome_leaseCarPercent_Many;
function getIncome_leaseCarPrice(state,id) {
  var result = state.get("Income").get(id);
  if(result === undefined) {
    result = null;
  }
  if(result != null) {
    result = result.leaseCarPrice;
    if(result === undefined) {
      result = null;
    }
  }
  return result;
}

module.exports.getIncome_leaseCarPrice = getIncome_leaseCarPrice;
function getIncome_leaseCarPrice_Many(state,ids) {
  var result = [];
  var table = state.get("Income");
  for (var i = 0 ; i < ids.length ; i++) {
    var value = table.get(ids[i]);
    if(value != null) {
      value = value.leaseCarPrice;
      if(value === undefined) {
        value = null;
      }
    }
    if(value !== null) {
      result.push(value);
    }
  }
  return result;
}

module.exports.getIncome_leaseCarPrice_Many = getIncome_leaseCarPrice_Many;
function getIncome_monthlySalary(state,id) {
  var result = state.get("Income").get(id);
  if(result === undefined) {
    result = null;
  }
  if(result != null) {
    result = result.monthlySalary;
    if(result === undefined) {
      result = null;
    }
  }
  return result;
}

module.exports.getIncome_monthlySalary = getIncome_monthlySalary;
function getIncome_monthlySalary_Many(state,ids) {
  var result = [];
  var table = state.get("Income");
  for (var i = 0 ; i < ids.length ; i++) {
    var value = table.get(ids[i]);
    if(value != null) {
      value = value.monthlySalary;
      if(value === undefined) {
        value = null;
      }
    }
    result.push(value);
  }
  return result;
}

module.exports.getIncome_monthlySalary_Many = getIncome_monthlySalary_Many;
function getIncome_name(state,id) {
  var result = state.get("Income").get(id);
  if(result === undefined) {
    result = null;
  }
  if(result != null) {
    result = result.name;
    if(result === undefined) {
      result = null;
    }
  }
  return result;
}

module.exports.getIncome_name = getIncome_name;
function getIncome_name_Many(state,ids) {
  var result = [];
  var table = state.get("Income");
  for (var i = 0 ; i < ids.length ; i++) {
    var value = table.get(ids[i]);
    if(value != null) {
      value = value.name;
      if(value === undefined) {
        value = null;
      }
    }
    result.push(value);
  }
  return result;
}

module.exports.getIncome_name_Many = getIncome_name_Many;
function getIncome_netSalary(state,id) {
  var result = state.get("Income_netSalary").get(id);
  if(result === undefined) {
    result = undefined;
  }
  return result;
}

module.exports.getIncome_netSalary = getIncome_netSalary;
function getIncome_netSalary_Many(state,ids) {
  var result = [];
  var table = state.get("Income_netSalary");
  for (var i = 0 ; i < ids.length ; i++) {
    var value = table.get(ids[i]);
    result.push(value);
  }
  return result;
}

module.exports.getIncome_netSalary_Many = getIncome_netSalary_Many;
function getIncome_netSalaryYear(state,id) {
  var result = state.get("Income_netSalaryYear").get(id);
  if(result === undefined) {
    result = undefined;
  }
  return result;
}

module.exports.getIncome_netSalaryYear = getIncome_netSalaryYear;
function getIncome_netSalaryYear_Many(state,ids) {
  var result = [];
  var table = state.get("Income_netSalaryYear");
  for (var i = 0 ; i < ids.length ; i++) {
    var value = table.get(ids[i]);
    result.push(value);
  }
  return result;
}

module.exports.getIncome_netSalaryYear_Many = getIncome_netSalaryYear_Many;
function getIncome_salaryBracket1(state,id) {
  var result = state.get("Income_salaryBracket1").get(id);
  if(result === undefined) {
    result = undefined;
  }
  return result;
}

module.exports.getIncome_salaryBracket1 = getIncome_salaryBracket1;
function getIncome_salaryBracket1_Many(state,ids) {
  var result = [];
  var table = state.get("Income_salaryBracket1");
  for (var i = 0 ; i < ids.length ; i++) {
    var value = table.get(ids[i]);
    result.push(value);
  }
  return result;
}

module.exports.getIncome_salaryBracket1_Many = getIncome_salaryBracket1_Many;
function getIncome_salaryBracket2(state,id) {
  var result = state.get("Income_salaryBracket2").get(id);
  if(result === undefined) {
    result = undefined;
  }
  return result;
}

module.exports.getIncome_salaryBracket2 = getIncome_salaryBracket2;
function getIncome_salaryBracket2_Many(state,ids) {
  var result = [];
  var table = state.get("Income_salaryBracket2");
  for (var i = 0 ; i < ids.length ; i++) {
    var value = table.get(ids[i]);
    result.push(value);
  }
  return result;
}

module.exports.getIncome_salaryBracket2_Many = getIncome_salaryBracket2_Many;
function getIncome_salaryBracket3(state,id) {
  var result = state.get("Income_salaryBracket3").get(id);
  if(result === undefined) {
    result = undefined;
  }
  return result;
}

module.exports.getIncome_salaryBracket3 = getIncome_salaryBracket3;
function getIncome_salaryBracket3_Many(state,ids) {
  var result = [];
  var table = state.get("Income_salaryBracket3");
  for (var i = 0 ; i < ids.length ; i++) {
    var value = table.get(ids[i]);
    result.push(value);
  }
  return result;
}

module.exports.getIncome_salaryBracket3_Many = getIncome_salaryBracket3_Many;
function getIncome_salaryBracket4(state,id) {
  var result = state.get("Income_salaryBracket4").get(id);
  if(result === undefined) {
    result = undefined;
  }
  return result;
}

module.exports.getIncome_salaryBracket4 = getIncome_salaryBracket4;
function getIncome_salaryBracket4_Many(state,ids) {
  var result = [];
  var table = state.get("Income_salaryBracket4");
  for (var i = 0 ; i < ids.length ; i++) {
    var value = table.get(ids[i]);
    result.push(value);
  }
  return result;
}

module.exports.getIncome_salaryBracket4_Many = getIncome_salaryBracket4_Many;
function getIncome_summary(state,id) {
  var result = state.get("Income_summary").get(id);
  if(result === undefined) {
    result = undefined;
  }
  return result;
}

module.exports.getIncome_summary = getIncome_summary;
function getIncome_summary_Many(state,ids) {
  var result = [];
  var table = state.get("Income_summary");
  for (var i = 0 ; i < ids.length ; i++) {
    var value = table.get(ids[i]);
    result.push(value);
  }
  return result;
}

module.exports.getIncome_summary_Many = getIncome_summary_Many;
function getIncome_tax(state,id) {
  var result = state.get("Income_tax").get(id);
  if(result === undefined) {
    result = undefined;
  }
  return result;
}

module.exports.getIncome_tax = getIncome_tax;
function getIncome_tax_Many(state,ids) {
  var result = [];
  var table = state.get("Income_tax");
  for (var i = 0 ; i < ids.length ; i++) {
    var value = table.get(ids[i]);
    result.push(value);
  }
  return result;
}

module.exports.getIncome_tax_Many = getIncome_tax_Many;
function getIncome_taxableIncome(state,id) {
  var result = state.get("Income_taxableIncome").get(id);
  if(result === undefined) {
    result = undefined;
  }
  return result;
}

module.exports.getIncome_taxableIncome = getIncome_taxableIncome;
function getIncome_taxableIncome_Many(state,ids) {
  var result = [];
  var table = state.get("Income_taxableIncome");
  for (var i = 0 ; i < ids.length ; i++) {
    var value = table.get(ids[i]);
    result.push(value);
  }
  return result;
}

module.exports.getIncome_taxableIncome_Many = getIncome_taxableIncome_Many;
function getIncome_taxBracket1(state,id) {
  var result = state.get("Income_taxBracket1").get(id);
  if(result === undefined) {
    result = undefined;
  }
  return result;
}

module.exports.getIncome_taxBracket1 = getIncome_taxBracket1;
function getIncome_taxBracket1_Many(state,ids) {
  var result = [];
  var table = state.get("Income_taxBracket1");
  for (var i = 0 ; i < ids.length ; i++) {
    var value = table.get(ids[i]);
    result.push(value);
  }
  return result;
}

module.exports.getIncome_taxBracket1_Many = getIncome_taxBracket1_Many;
function getIncome_taxBracket2(state,id) {
  var result = state.get("Income_taxBracket2").get(id);
  if(result === undefined) {
    result = undefined;
  }
  return result;
}

module.exports.getIncome_taxBracket2 = getIncome_taxBracket2;
function getIncome_taxBracket2_Many(state,ids) {
  var result = [];
  var table = state.get("Income_taxBracket2");
  for (var i = 0 ; i < ids.length ; i++) {
    var value = table.get(ids[i]);
    result.push(value);
  }
  return result;
}

module.exports.getIncome_taxBracket2_Many = getIncome_taxBracket2_Many;
function getIncome_taxBracket3(state,id) {
  var result = state.get("Income_taxBracket3").get(id);
  if(result === undefined) {
    result = undefined;
  }
  return result;
}

module.exports.getIncome_taxBracket3 = getIncome_taxBracket3;
function getIncome_taxBracket3_Many(state,ids) {
  var result = [];
  var table = state.get("Income_taxBracket3");
  for (var i = 0 ; i < ids.length ; i++) {
    var value = table.get(ids[i]);
    result.push(value);
  }
  return result;
}

module.exports.getIncome_taxBracket3_Many = getIncome_taxBracket3_Many;
function getIncome_taxRate1(state,id) {
  var result = state.get("Income_taxRate1").get(id);
  if(result === undefined) {
    result = undefined;
  }
  return result;
}

module.exports.getIncome_taxRate1 = getIncome_taxRate1;
function getIncome_taxRate1_Many(state,ids) {
  var result = [];
  var table = state.get("Income_taxRate1");
  for (var i = 0 ; i < ids.length ; i++) {
    var value = table.get(ids[i]);
    result.push(value);
  }
  return result;
}

module.exports.getIncome_taxRate1_Many = getIncome_taxRate1_Many;
function getIncome_taxRate2(state,id) {
  var result = state.get("Income_taxRate2").get(id);
  if(result === undefined) {
    result = undefined;
  }
  return result;
}

module.exports.getIncome_taxRate2 = getIncome_taxRate2;
function getIncome_taxRate2_Many(state,ids) {
  var result = [];
  var table = state.get("Income_taxRate2");
  for (var i = 0 ; i < ids.length ; i++) {
    var value = table.get(ids[i]);
    result.push(value);
  }
  return result;
}

module.exports.getIncome_taxRate2_Many = getIncome_taxRate2_Many;
function getIncome_taxRate3(state,id) {
  var result = state.get("Income_taxRate3").get(id);
  if(result === undefined) {
    result = undefined;
  }
  return result;
}

module.exports.getIncome_taxRate3 = getIncome_taxRate3;
function getIncome_taxRate3_Many(state,ids) {
  var result = [];
  var table = state.get("Income_taxRate3");
  for (var i = 0 ; i < ids.length ; i++) {
    var value = table.get(ids[i]);
    result.push(value);
  }
  return result;
}

module.exports.getIncome_taxRate3_Many = getIncome_taxRate3_Many;
function getIncome_taxRate4(state,id) {
  var result = state.get("Income_taxRate4").get(id);
  if(result === undefined) {
    result = undefined;
  }
  return result;
}

module.exports.getIncome_taxRate4 = getIncome_taxRate4;
function getIncome_taxRate4_Many(state,ids) {
  var result = [];
  var table = state.get("Income_taxRate4");
  for (var i = 0 ; i < ids.length ; i++) {
    var value = table.get(ids[i]);
    result.push(value);
  }
  return result;
}

module.exports.getIncome_taxRate4_Many = getIncome_taxRate4_Many;
function getIncome_thirteenthMonth(state,id) {
  var result = state.get("Income").get(id);
  if(result === undefined) {
    result = null;
  }
  if(result != null) {
    result = result.thirteenthMonth;
    if(result === undefined) {
      result = null;
    }
  }
  return result;
}

module.exports.getIncome_thirteenthMonth = getIncome_thirteenthMonth;
function getIncome_thirteenthMonth_Many(state,ids) {
  var result = [];
  var table = state.get("Income");
  for (var i = 0 ; i < ids.length ; i++) {
    var value = table.get(ids[i]);
    if(value != null) {
      value = value.thirteenthMonth;
      if(value === undefined) {
        value = null;
      }
    }
    result.push(value);
  }
  return result;
}

module.exports.getIncome_thirteenthMonth_Many = getIncome_thirteenthMonth_Many;
function setIncome_holidayAllowance(state,id,value) {
  state = invalidateIncome_holidayAllowance(state,id);
  var prop = {
    holidayAllowance : value
  };
  state = state.update("Income",function (table) {
          return table.update(id,function (e) {
                  return _.assign({
                  },e,prop);
              });
      });
  return state;
}

module.exports.setIncome_holidayAllowance = setIncome_holidayAllowance;
function setIncome_leaseCarPercent(state,id,value) {
  state = invalidateIncome_leaseCarPercent(state,id);
  var prop = {
    leaseCarPercent : value
  };
  state = state.update("Income",function (table) {
          return table.update(id,function (e) {
                  return _.assign({
                  },e,prop);
              });
      });
  return state;
}

module.exports.setIncome_leaseCarPercent = setIncome_leaseCarPercent;
function setIncome_leaseCarPrice(state,id,value) {
  state = invalidateIncome_leaseCarPrice(state,id);
  var prop = {
    leaseCarPrice : value
  };
  state = state.update("Income",function (table) {
          return table.update(id,function (e) {
                  return _.assign({
                  },e,prop);
              });
      });
  return state;
}

module.exports.setIncome_leaseCarPrice = setIncome_leaseCarPrice;
function setIncome_monthlySalary(state,id,value) {
  state = invalidateIncome_monthlySalary(state,id);
  var prop = {
    monthlySalary : value
  };
  state = state.update("Income",function (table) {
          return table.update(id,function (e) {
                  return _.assign({
                  },e,prop);
              });
      });
  return state;
}

module.exports.setIncome_monthlySalary = setIncome_monthlySalary;
function setIncome_name(state,id,value) {
  state = invalidateIncome_name(state,id);
  var prop = {
    name : value
  };
  state = state.update("Income",function (table) {
          return table.update(id,function (e) {
                  return _.assign({
                  },e,prop);
              });
      });
  return state;
}

module.exports.setIncome_name = setIncome_name;
function setIncome_thirteenthMonth(state,id,value) {
  state = invalidateIncome_thirteenthMonth(state,id);
  var prop = {
    thirteenthMonth : value
  };
  state = state.update("Income",function (table) {
          return table.update(id,function (e) {
                  return _.assign({
                  },e,prop);
              });
      });
  return state;
}

module.exports.setIncome_thirteenthMonth = setIncome_thirteenthMonth;
function invalidateIncome_employedTaxDiscount(state,id) {
  state = state.update("Income_employedTaxDiscount",function (set) {
          return set.remove(id);
      });
  if(id != null) {
    state = invalidateIncome_tax(state,id);
  }
  return state;
}

module.exports.invalidateIncome_employedTaxDiscount = invalidateIncome_employedTaxDiscount;
function invalidateIncome_gernalTaxDiscount(state,id) {
  state = state.update("Income_gernalTaxDiscount",function (set) {
          return set.remove(id);
      });
  if(id != null) {
    state = invalidateIncome_tax(state,id);
  }
  return state;
}

module.exports.invalidateIncome_gernalTaxDiscount = invalidateIncome_gernalTaxDiscount;
function invalidateIncome_grossSalary(state,id) {
  state = state.update("Income_grossSalary",function (set) {
          return set.remove(id);
      });
  if(id != null) {
    state = invalidateIncome_grossSalaryYear(state,id);
  }
  if(id != null) {
    state = invalidateIncome_summary(state,id);
  }
  return state;
}

module.exports.invalidateIncome_grossSalary = invalidateIncome_grossSalary;
function invalidateIncome_grossSalaryYear(state,id) {
  state = state.update("Income_grossSalaryYear",function (set) {
          return set.remove(id);
      });
  if(id != null) {
    state = invalidateIncome_netSalaryYear(state,id);
  }
  if(id != null) {
    state = invalidateIncome_taxableIncome(state,id);
  }
  return state;
}

module.exports.invalidateIncome_grossSalaryYear = invalidateIncome_grossSalaryYear;
function invalidateIncome_holidayAllowance(state,id) {
  if(id != null) {
    state = invalidateIncome_grossSalary(state,id);
  }
  return state;
}

module.exports.invalidateIncome_holidayAllowance = invalidateIncome_holidayAllowance;
function invalidateIncome_incomeTax(state,id) {
  state = state.update("Income_incomeTax",function (set) {
          return set.remove(id);
      });
  if(id != null) {
    state = invalidateIncome_tax(state,id);
  }
  return state;
}

module.exports.invalidateIncome_incomeTax = invalidateIncome_incomeTax;
function invalidateIncome_leaseCarAddition(state,id) {
  state = state.update("Income_leaseCarAddition",function (set) {
          return set.remove(id);
      });
  if(id != null) {
    state = invalidateIncome_taxableIncome(state,id);
  }
  return state;
}

module.exports.invalidateIncome_leaseCarAddition = invalidateIncome_leaseCarAddition;
function invalidateIncome_leaseCarPercent(state,id) {
  if(id != null) {
    state = invalidateIncome_leaseCarAddition(state,id);
  }
  return state;
}

module.exports.invalidateIncome_leaseCarPercent = invalidateIncome_leaseCarPercent;
function invalidateIncome_leaseCarPrice(state,id) {
  if(id != null) {
    state = invalidateIncome_leaseCarAddition(state,id);
  }
  if(id != null) {
    state = invalidateIncome_summary(state,id);
  }
  return state;
}

module.exports.invalidateIncome_leaseCarPrice = invalidateIncome_leaseCarPrice;
function invalidateIncome_monthlySalary(state,id) {
  if(id != null) {
    state = invalidateIncome_grossSalary(state,id);
  }
  return state;
}

module.exports.invalidateIncome_monthlySalary = invalidateIncome_monthlySalary;
function invalidateIncome_name(state,id) {
  if(id != null) {
    state = invalidateIncome_summary(state,id);
  }
  return state;
}

module.exports.invalidateIncome_name = invalidateIncome_name;
function invalidateIncome_netSalary(state,id) {
  state = state.update("Income_netSalary",function (set) {
          return set.remove(id);
      });
  if(id != null) {
    state = invalidateIncome_summary(state,id);
  }
  return state;
}

module.exports.invalidateIncome_netSalary = invalidateIncome_netSalary;
function invalidateIncome_netSalaryYear(state,id) {
  state = state.update("Income_netSalaryYear",function (set) {
          return set.remove(id);
      });
  if(id != null) {
    state = invalidateIncome_netSalary(state,id);
  }
  return state;
}

module.exports.invalidateIncome_netSalaryYear = invalidateIncome_netSalaryYear;
function invalidateIncome_salaryBracket1(state,id) {
  state = state.update("Income_salaryBracket1",function (set) {
          return set.remove(id);
      });
  if(id != null) {
    state = invalidateIncome_incomeTax(state,id);
  }
  return state;
}

module.exports.invalidateIncome_salaryBracket1 = invalidateIncome_salaryBracket1;
function invalidateIncome_salaryBracket2(state,id) {
  state = state.update("Income_salaryBracket2",function (set) {
          return set.remove(id);
      });
  if(id != null) {
    state = invalidateIncome_incomeTax(state,id);
  }
  return state;
}

module.exports.invalidateIncome_salaryBracket2 = invalidateIncome_salaryBracket2;
function invalidateIncome_salaryBracket3(state,id) {
  state = state.update("Income_salaryBracket3",function (set) {
          return set.remove(id);
      });
  if(id != null) {
    state = invalidateIncome_incomeTax(state,id);
  }
  return state;
}

module.exports.invalidateIncome_salaryBracket3 = invalidateIncome_salaryBracket3;
function invalidateIncome_salaryBracket4(state,id) {
  state = state.update("Income_salaryBracket4",function (set) {
          return set.remove(id);
      });
  if(id != null) {
    state = invalidateIncome_incomeTax(state,id);
  }
  return state;
}

module.exports.invalidateIncome_salaryBracket4 = invalidateIncome_salaryBracket4;
function invalidateIncome_summary(state,id) {
  state = state.update("Income_summary",function (set) {
          return set.remove(id);
      });
  return state;
}

module.exports.invalidateIncome_summary = invalidateIncome_summary;
function invalidateIncome_tax(state,id) {
  state = state.update("Income_tax",function (set) {
          return set.remove(id);
      });
  if(id != null) {
    state = invalidateIncome_netSalaryYear(state,id);
  }
  return state;
}

module.exports.invalidateIncome_tax = invalidateIncome_tax;
function invalidateIncome_taxableIncome(state,id) {
  state = state.update("Income_taxableIncome",function (set) {
          return set.remove(id);
      });
  if(id != null) {
    state = invalidateIncome_employedTaxDiscount(state,id);
  }
  if(id != null) {
    state = invalidateIncome_gernalTaxDiscount(state,id);
  }
  if(id != null) {
    state = invalidateIncome_salaryBracket1(state,id);
  }
  if(id != null) {
    state = invalidateIncome_salaryBracket2(state,id);
  }
  if(id != null) {
    state = invalidateIncome_salaryBracket3(state,id);
  }
  if(id != null) {
    state = invalidateIncome_salaryBracket4(state,id);
  }
  return state;
}

module.exports.invalidateIncome_taxableIncome = invalidateIncome_taxableIncome;
function invalidateIncome_taxBracket1(state,id) {
  state = state.update("Income_taxBracket1",function (set) {
          return set.remove(id);
      });
  if(id != null) {
    state = invalidateIncome_salaryBracket1(state,id);
  }
  if(id != null) {
    state = invalidateIncome_salaryBracket2(state,id);
  }
  return state;
}

module.exports.invalidateIncome_taxBracket1 = invalidateIncome_taxBracket1;
function invalidateIncome_taxBracket2(state,id) {
  state = state.update("Income_taxBracket2",function (set) {
          return set.remove(id);
      });
  if(id != null) {
    state = invalidateIncome_salaryBracket2(state,id);
  }
  if(id != null) {
    state = invalidateIncome_salaryBracket3(state,id);
  }
  return state;
}

module.exports.invalidateIncome_taxBracket2 = invalidateIncome_taxBracket2;
function invalidateIncome_taxBracket3(state,id) {
  state = state.update("Income_taxBracket3",function (set) {
          return set.remove(id);
      });
  if(id != null) {
    state = invalidateIncome_salaryBracket3(state,id);
  }
  if(id != null) {
    state = invalidateIncome_salaryBracket4(state,id);
  }
  return state;
}

module.exports.invalidateIncome_taxBracket3 = invalidateIncome_taxBracket3;
function invalidateIncome_taxRate1(state,id) {
  state = state.update("Income_taxRate1",function (set) {
          return set.remove(id);
      });
  if(id != null) {
    state = invalidateIncome_incomeTax(state,id);
  }
  return state;
}

module.exports.invalidateIncome_taxRate1 = invalidateIncome_taxRate1;
function invalidateIncome_taxRate2(state,id) {
  state = state.update("Income_taxRate2",function (set) {
          return set.remove(id);
      });
  if(id != null) {
    state = invalidateIncome_incomeTax(state,id);
  }
  return state;
}

module.exports.invalidateIncome_taxRate2 = invalidateIncome_taxRate2;
function invalidateIncome_taxRate3(state,id) {
  state = state.update("Income_taxRate3",function (set) {
          return set.remove(id);
      });
  if(id != null) {
    state = invalidateIncome_incomeTax(state,id);
  }
  return state;
}

module.exports.invalidateIncome_taxRate3 = invalidateIncome_taxRate3;
function invalidateIncome_taxRate4(state,id) {
  state = state.update("Income_taxRate4",function (set) {
          return set.remove(id);
      });
  if(id != null) {
    state = invalidateIncome_incomeTax(state,id);
  }
  return state;
}

module.exports.invalidateIncome_taxRate4 = invalidateIncome_taxRate4;
function invalidateIncome_thirteenthMonth(state,id) {
  if(id != null) {
    state = invalidateIncome_grossSalary(state,id);
  }
  return state;
}

module.exports.invalidateIncome_thirteenthMonth = invalidateIncome_thirteenthMonth;
function calculateIncome_employedTaxDiscount(state,id) {
  var result = getIncome_employedTaxDiscount(state,id);
  if(result === undefined) {
    var _0 = id;
    var _22 ;
    var _1 ;
    if(_0 != null) {
      var calc = calculateIncome_taxableIncome(state,_0);
      state = calc.state;
      _1 = calc.result;
    } else {
      _1 = null;
    }
    var _2 = _1 !== null ? _1 < 9147.0 : null;
    if(_2) {
      var _3 ;
      if(_0 != null) {
        var calc = calculateIncome_taxableIncome(state,_0);
        state = calc.state;
        _3 = calc.result;
      } else {
        _3 = null;
      }
      var _4 = _3 !== null ? 0.0193 * _3 : null;
      _22 = _4;
    } else {
      var _21 ;
      var _5 ;
      if(_0 != null) {
        var calc = calculateIncome_taxableIncome(state,_0);
        state = calc.state;
        _5 = calc.result;
      } else {
        _5 = null;
      }
      var _6 = _5 !== null ? _5 < 19758.0 : null;
      if(_6) {
        var _7 ;
        if(_0 != null) {
          var calc = calculateIncome_taxableIncome(state,_0);
          state = calc.state;
          _7 = calc.result;
        } else {
          _7 = null;
        }
        var _8 = _7 !== null ? _7 - 9147.0 : null;
        var _9 = _8 !== null ? 0.27698 * _8 : null;
        var _10 = _9 !== null ? 146.0 + _9 : null;
        _21 = _10;
      } else {
        var _20 ;
        var _11 ;
        if(_0 != null) {
          var calc = calculateIncome_taxableIncome(state,_0);
          state = calc.state;
          _11 = calc.result;
        } else {
          _11 = null;
        }
        var _12 = _11 !== null ? _11 < 34015.0 : null;
        if(_12) {
          _20 = 3103.0;
        } else {
          var _19 ;
          var _13 ;
          if(_0 != null) {
            var calc = calculateIncome_taxableIncome(state,_0);
            state = calc.state;
            _13 = calc.result;
          } else {
            _13 = null;
          }
          var _14 = _13 !== null ? _13 < 111590.0 : null;
          if(_14) {
            var _15 ;
            if(_0 != null) {
              var calc = calculateIncome_taxableIncome(state,_0);
              state = calc.state;
              _15 = calc.result;
            } else {
              _15 = null;
            }
            var _16 = _15 !== null ? _15 - 34015.0 : null;
            var _17 = _16 !== null ? 0.04 * _16 : null;
            var _18 = _17 !== null ? 3103.0 - _17 : null;
            _19 = _18;
          } else {
            _19 = 0.0;
          }
          _20 = _19;
        }
        _21 = _20;
      }
      _22 = _21;
    }
    result = _22;
    state = state.update("Income_employedTaxDiscount",function (table) {
            return table.set(id,_22);
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_employedTaxDiscount = calculateIncome_employedTaxDiscount;
function calculateIncome_employedTaxDiscount_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateIncome_employedTaxDiscount(state,id);
    state = calc.state;
    if(calc.result !== null) {
      result.push(calc.result);
    }
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_employedTaxDiscount_Many = calculateIncome_employedTaxDiscount_Many;
function calculateIncome_gernalTaxDiscount(state,id) {
  var result = getIncome_gernalTaxDiscount(state,id);
  if(result === undefined) {
    var _0 = id;
    var _10 ;
    var _1 ;
    if(_0 != null) {
      var calc = calculateIncome_taxableIncome(state,_0);
      state = calc.state;
      _1 = calc.result;
    } else {
      _1 = null;
    }
    var _2 = _1 !== null ? _1 < 19222.0 : null;
    if(_2) {
      _10 = 2242.0;
    } else {
      var _9 ;
      var _3 ;
      if(_0 != null) {
        var calc = calculateIncome_taxableIncome(state,_0);
        state = calc.state;
        _3 = calc.result;
      } else {
        _3 = null;
      }
      var _4 = _3 !== null ? _3 < 66417.0 : null;
      if(_4) {
        var _5 ;
        if(_0 != null) {
          var calc = calculateIncome_taxableIncome(state,_0);
          state = calc.state;
          _5 = calc.result;
        } else {
          _5 = null;
        }
        var _6 = _5 !== null ? _5 - 19922.0 : null;
        var _7 = _6 !== null ? 0.04822 * _6 : null;
        var _8 = _7 !== null ? 2242.0 - _7 : null;
        _9 = _8;
      } else {
        _9 = 0.0;
      }
      _10 = _9;
    }
    result = _10;
    state = state.update("Income_gernalTaxDiscount",function (table) {
            return table.set(id,_10);
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_gernalTaxDiscount = calculateIncome_gernalTaxDiscount;
function calculateIncome_gernalTaxDiscount_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateIncome_gernalTaxDiscount(state,id);
    state = calc.state;
    if(calc.result !== null) {
      result.push(calc.result);
    }
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_gernalTaxDiscount_Many = calculateIncome_gernalTaxDiscount_Many;
function calculateIncome_grossSalary(state,id) {
  var result = getIncome_grossSalary(state,id);
  if(result === undefined) {
    var _0 = id;
    var _1 = getIncome_monthlySalary(state,_0);
    var _2 ;
    if(_0 != null) {
      var calc = calculateIncome_holidayAllowance(state,_0);
      state = calc.state;
      _2 = calc.result;
    } else {
      _2 = null;
    }
    var _3 = _2 !== null ? _2 / 100.0 : null;
    var _4 = _3 !== null ? 1.0 + _3 : null;
    var _7 ;
    var _5 ;
    if(_0 != null) {
      var calc = calculateIncome_thirteenthMonth(state,_0);
      state = calc.state;
      _5 = calc.result;
    } else {
      _5 = null;
    }
    if(_5) {
      var _6 = 1.0 / 12.0;
      _7 = _6;
    } else {
      _7 = 0.0;
    }
    var _8 = _4 !== null && _7 !== null ? _4 + _7 : null;
    var _9 = _1 !== null && _8 !== null ? _1 * _8 : null;
    result = _9;
    state = state.update("Income_grossSalary",function (table) {
            return table.set(id,_9);
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_grossSalary = calculateIncome_grossSalary;
function calculateIncome_grossSalary_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateIncome_grossSalary(state,id);
    state = calc.state;
    if(calc.result !== null) {
      result.push(calc.result);
    }
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_grossSalary_Many = calculateIncome_grossSalary_Many;
function calculateIncome_grossSalaryYear(state,id) {
  var result = getIncome_grossSalaryYear(state,id);
  if(result === undefined) {
    var _0 = id;
    var _1 ;
    if(_0 != null) {
      var calc = calculateIncome_grossSalary(state,_0);
      state = calc.state;
      _1 = calc.result;
    } else {
      _1 = null;
    }
    var _2 = _1 !== null ? _1 * 12.0 : null;
    result = _2;
    state = state.update("Income_grossSalaryYear",function (table) {
            return table.set(id,_2);
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_grossSalaryYear = calculateIncome_grossSalaryYear;
function calculateIncome_grossSalaryYear_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateIncome_grossSalaryYear(state,id);
    state = calc.state;
    if(calc.result !== null) {
      result.push(calc.result);
    }
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_grossSalaryYear_Many = calculateIncome_grossSalaryYear_Many;
function calculateIncome_holidayAllowance(state,id) {
  var result = getIncome_holidayAllowance(state,id);
  if(result === null) {
    var _0 = id;
    result = 8.0;
    var prop = {
      holidayAllowance : 8.0
    };
    state = state.update("Income",function (table) {
            return table.update(id,function (e) {
                    return _.assign({
                    },e,prop);
                });
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_holidayAllowance = calculateIncome_holidayAllowance;
function calculateIncome_holidayAllowance_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateIncome_holidayAllowance(state,id);
    state = calc.state;
    if(calc.result !== null) {
      result.push(calc.result);
    }
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_holidayAllowance_Many = calculateIncome_holidayAllowance_Many;
function calculateIncome_incomeTax(state,id) {
  var result = getIncome_incomeTax(state,id);
  if(result === undefined) {
    var _0 = id;
    var _1 ;
    if(_0 != null) {
      var calc = calculateIncome_salaryBracket1(state,_0);
      state = calc.state;
      _1 = calc.result;
    } else {
      _1 = null;
    }
    var _2 ;
    if(_0 != null) {
      var calc = calculateIncome_taxRate1(state,_0);
      state = calc.state;
      _2 = calc.result;
    } else {
      _2 = null;
    }
    var _3 = _1 !== null && _2 !== null ? _1 * _2 : null;
    var _4 ;
    if(_0 != null) {
      var calc = calculateIncome_salaryBracket2(state,_0);
      state = calc.state;
      _4 = calc.result;
    } else {
      _4 = null;
    }
    var _5 ;
    if(_0 != null) {
      var calc = calculateIncome_taxRate2(state,_0);
      state = calc.state;
      _5 = calc.result;
    } else {
      _5 = null;
    }
    var _6 = _4 !== null && _5 !== null ? _4 * _5 : null;
    var _7 = _3 !== null && _6 !== null ? _3 + _6 : null;
    var _8 ;
    if(_0 != null) {
      var calc = calculateIncome_salaryBracket3(state,_0);
      state = calc.state;
      _8 = calc.result;
    } else {
      _8 = null;
    }
    var _9 ;
    if(_0 != null) {
      var calc = calculateIncome_taxRate3(state,_0);
      state = calc.state;
      _9 = calc.result;
    } else {
      _9 = null;
    }
    var _10 = _8 !== null && _9 !== null ? _8 * _9 : null;
    var _11 = _7 !== null && _10 !== null ? _7 + _10 : null;
    var _12 ;
    if(_0 != null) {
      var calc = calculateIncome_salaryBracket4(state,_0);
      state = calc.state;
      _12 = calc.result;
    } else {
      _12 = null;
    }
    var _13 ;
    if(_0 != null) {
      var calc = calculateIncome_taxRate4(state,_0);
      state = calc.state;
      _13 = calc.result;
    } else {
      _13 = null;
    }
    var _14 = _12 !== null && _13 !== null ? _12 * _13 : null;
    var _15 = _11 !== null && _14 !== null ? _11 + _14 : null;
    result = _15;
    state = state.update("Income_incomeTax",function (table) {
            return table.set(id,_15);
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_incomeTax = calculateIncome_incomeTax;
function calculateIncome_incomeTax_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateIncome_incomeTax(state,id);
    state = calc.state;
    if(calc.result !== null) {
      result.push(calc.result);
    }
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_incomeTax_Many = calculateIncome_incomeTax_Many;
function calculateIncome_leaseCarAddition(state,id) {
  var result = getIncome_leaseCarAddition(state,id);
  if(result === undefined) {
    var _0 = id;
    var _1 = getIncome_leaseCarPrice(state,_0);
    var _2 = getIncome_leaseCarPercent(state,_0);
    var _3 = _1 !== null && _2 !== null ? _1 * _2 : null;
    var _4 = _3 !== null ? _3 / 100.0 : null;
    result = _4;
    state = state.update("Income_leaseCarAddition",function (table) {
            return table.set(id,_4);
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_leaseCarAddition = calculateIncome_leaseCarAddition;
function calculateIncome_leaseCarAddition_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateIncome_leaseCarAddition(state,id);
    state = calc.state;
    if(calc.result !== null) {
      result.push(calc.result);
    }
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_leaseCarAddition_Many = calculateIncome_leaseCarAddition_Many;
function calculateIncome_name(state,id) {
  var result = getIncome_name(state,id);
  if(result === null) {
    var _0 = id;
    result = "Untitled";
    var prop = {
      name : "Untitled"
    };
    state = state.update("Income",function (table) {
            return table.update(id,function (e) {
                    return _.assign({
                    },e,prop);
                });
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_name = calculateIncome_name;
function calculateIncome_name_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateIncome_name(state,id);
    state = calc.state;
    if(calc.result !== null) {
      result.push(calc.result);
    }
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_name_Many = calculateIncome_name_Many;
function calculateIncome_netSalary(state,id) {
  var result = getIncome_netSalary(state,id);
  if(result === undefined) {
    var _0 = id;
    var _1 ;
    if(_0 != null) {
      var calc = calculateIncome_netSalaryYear(state,_0);
      state = calc.state;
      _1 = calc.result;
    } else {
      _1 = null;
    }
    var _2 = _1 !== null ? _1 / 12.0 : null;
    result = _2;
    state = state.update("Income_netSalary",function (table) {
            return table.set(id,_2);
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_netSalary = calculateIncome_netSalary;
function calculateIncome_netSalary_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateIncome_netSalary(state,id);
    state = calc.state;
    if(calc.result !== null) {
      result.push(calc.result);
    }
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_netSalary_Many = calculateIncome_netSalary_Many;
function calculateIncome_netSalaryYear(state,id) {
  var result = getIncome_netSalaryYear(state,id);
  if(result === undefined) {
    var _0 = id;
    var _1 ;
    if(_0 != null) {
      var calc = calculateIncome_grossSalaryYear(state,_0);
      state = calc.state;
      _1 = calc.result;
    } else {
      _1 = null;
    }
    var _2 ;
    if(_0 != null) {
      var calc = calculateIncome_tax(state,_0);
      state = calc.state;
      _2 = calc.result;
    } else {
      _2 = null;
    }
    var _3 = _1 !== null && _2 !== null ? _1 - _2 : null;
    result = _3;
    state = state.update("Income_netSalaryYear",function (table) {
            return table.set(id,_3);
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_netSalaryYear = calculateIncome_netSalaryYear;
function calculateIncome_netSalaryYear_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateIncome_netSalaryYear(state,id);
    state = calc.state;
    if(calc.result !== null) {
      result.push(calc.result);
    }
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_netSalaryYear_Many = calculateIncome_netSalaryYear_Many;
function calculateIncome_salaryBracket1(state,id) {
  var result = getIncome_salaryBracket1(state,id);
  if(result === undefined) {
    var _0 = id;
    var _1 ;
    if(_0 != null) {
      var calc = calculateIncome_taxableIncome(state,_0);
      state = calc.state;
      _1 = calc.result;
    } else {
      _1 = null;
    }
    var _2 ;
    if(_0 != null) {
      var calc = calculateIncome_taxBracket1(state,_0);
      state = calc.state;
      _2 = calc.result;
    } else {
      _2 = null;
    }
    var _3 =  ( _1 == null ? constants.EMPTY_ARRAY : [_1] ) .concat(_2 == null ? constants.EMPTY_ARRAY : [_2]);
    var _4 = expression.min(_3);
    result = _4;
    state = state.update("Income_salaryBracket1",function (table) {
            return table.set(id,_4);
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_salaryBracket1 = calculateIncome_salaryBracket1;
function calculateIncome_salaryBracket1_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateIncome_salaryBracket1(state,id);
    state = calc.state;
    if(calc.result !== null) {
      result.push(calc.result);
    }
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_salaryBracket1_Many = calculateIncome_salaryBracket1_Many;
function calculateIncome_salaryBracket2(state,id) {
  var result = getIncome_salaryBracket2(state,id);
  if(result === undefined) {
    var _0 = id;
    var _1 ;
    if(_0 != null) {
      var calc = calculateIncome_taxableIncome(state,_0);
      state = calc.state;
      _1 = calc.result;
    } else {
      _1 = null;
    }
    var _2 ;
    if(_0 != null) {
      var calc = calculateIncome_taxBracket2(state,_0);
      state = calc.state;
      _2 = calc.result;
    } else {
      _2 = null;
    }
    var _3 =  ( _1 == null ? constants.EMPTY_ARRAY : [_1] ) .concat(_2 == null ? constants.EMPTY_ARRAY : [_2]);
    var _4 = expression.min(_3);
    var _5 ;
    if(_0 != null) {
      var calc = calculateIncome_taxBracket1(state,_0);
      state = calc.state;
      _5 = calc.result;
    } else {
      _5 = null;
    }
    var _6 = _4 !== null && _5 !== null ? _4 - _5 : null;
    var _7 =  ( 0.0 == null ? constants.EMPTY_ARRAY : [0.0] ) .concat(_6 == null ? constants.EMPTY_ARRAY : [_6]);
    var _8 = expression.max(_7);
    result = _8;
    state = state.update("Income_salaryBracket2",function (table) {
            return table.set(id,_8);
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_salaryBracket2 = calculateIncome_salaryBracket2;
function calculateIncome_salaryBracket2_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateIncome_salaryBracket2(state,id);
    state = calc.state;
    if(calc.result !== null) {
      result.push(calc.result);
    }
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_salaryBracket2_Many = calculateIncome_salaryBracket2_Many;
function calculateIncome_salaryBracket3(state,id) {
  var result = getIncome_salaryBracket3(state,id);
  if(result === undefined) {
    var _0 = id;
    var _1 ;
    if(_0 != null) {
      var calc = calculateIncome_taxableIncome(state,_0);
      state = calc.state;
      _1 = calc.result;
    } else {
      _1 = null;
    }
    var _2 ;
    if(_0 != null) {
      var calc = calculateIncome_taxBracket3(state,_0);
      state = calc.state;
      _2 = calc.result;
    } else {
      _2 = null;
    }
    var _3 =  ( _1 == null ? constants.EMPTY_ARRAY : [_1] ) .concat(_2 == null ? constants.EMPTY_ARRAY : [_2]);
    var _4 = expression.min(_3);
    var _5 ;
    if(_0 != null) {
      var calc = calculateIncome_taxBracket2(state,_0);
      state = calc.state;
      _5 = calc.result;
    } else {
      _5 = null;
    }
    var _6 = _4 !== null && _5 !== null ? _4 - _5 : null;
    var _7 =  ( 0.0 == null ? constants.EMPTY_ARRAY : [0.0] ) .concat(_6 == null ? constants.EMPTY_ARRAY : [_6]);
    var _8 = expression.max(_7);
    result = _8;
    state = state.update("Income_salaryBracket3",function (table) {
            return table.set(id,_8);
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_salaryBracket3 = calculateIncome_salaryBracket3;
function calculateIncome_salaryBracket3_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateIncome_salaryBracket3(state,id);
    state = calc.state;
    if(calc.result !== null) {
      result.push(calc.result);
    }
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_salaryBracket3_Many = calculateIncome_salaryBracket3_Many;
function calculateIncome_salaryBracket4(state,id) {
  var result = getIncome_salaryBracket4(state,id);
  if(result === undefined) {
    var _0 = id;
    var _1 ;
    if(_0 != null) {
      var calc = calculateIncome_taxableIncome(state,_0);
      state = calc.state;
      _1 = calc.result;
    } else {
      _1 = null;
    }
    var _2 ;
    if(_0 != null) {
      var calc = calculateIncome_taxBracket3(state,_0);
      state = calc.state;
      _2 = calc.result;
    } else {
      _2 = null;
    }
    var _3 = _1 !== null && _2 !== null ? _1 - _2 : null;
    var _4 =  ( 0.0 == null ? constants.EMPTY_ARRAY : [0.0] ) .concat(_3 == null ? constants.EMPTY_ARRAY : [_3]);
    var _5 = expression.max(_4);
    result = _5;
    state = state.update("Income_salaryBracket4",function (table) {
            return table.set(id,_5);
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_salaryBracket4 = calculateIncome_salaryBracket4;
function calculateIncome_salaryBracket4_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateIncome_salaryBracket4(state,id);
    state = calc.state;
    if(calc.result !== null) {
      result.push(calc.result);
    }
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_salaryBracket4_Many = calculateIncome_salaryBracket4_Many;
function calculateIncome_summary(state,id) {
  var result = getIncome_summary(state,id);
  if(result === undefined) {
    var _0 = id;
    var _1 ;
    if(_0 != null) {
      var calc = calculateIncome_name(state,_0);
      state = calc.state;
      _1 = calc.result;
    } else {
      _1 = null;
    }
    var _2 = _1 !== null ? _1 + " has a gross salary of " : null;
    var _3 ;
    if(_0 != null) {
      var calc = calculateIncome_grossSalary(state,_0);
      state = calc.state;
      _3 = calc.result;
    } else {
      _3 = null;
    }
    var _4 = _2 !== null && _3 !== null ? _2 + _3 : null;
    var _5 = _4 !== null ? _4 + " per month and a net salary of " : null;
    var _6 ;
    if(_0 != null) {
      var calc = calculateIncome_netSalary(state,_0);
      state = calc.state;
      _6 = calc.result;
    } else {
      _6 = null;
    }
    var _7 = _5 !== null && _6 !== null ? _5 + _6 : null;
    var _8 = _7 !== null ? _7 + " per month" : null;
    var _12 ;
    var _9 = getIncome_leaseCarPrice(state,_0);
    var _10 = expression.count(_9 == null ? constants.EMPTY_ARRAY : [_9]);
    var _11 = _10 !== null ? _10 > 0 : null;
    if(_11) {
      _12 = " with a lease car";
    } else {
      _12 = "";
    }
    var _13 = _8 !== null && _12 !== null ? _8 + _12 : null;
    var _14 = _13 !== null ? _13 + "." : null;
    result = _14;
    state = state.update("Income_summary",function (table) {
            return table.set(id,_14);
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_summary = calculateIncome_summary;
function calculateIncome_summary_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateIncome_summary(state,id);
    state = calc.state;
    if(calc.result !== null) {
      result.push(calc.result);
    }
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_summary_Many = calculateIncome_summary_Many;
function calculateIncome_tax(state,id) {
  var result = getIncome_tax(state,id);
  if(result === undefined) {
    var _0 = id;
    var _1 ;
    if(_0 != null) {
      var calc = calculateIncome_incomeTax(state,_0);
      state = calc.state;
      _1 = calc.result;
    } else {
      _1 = null;
    }
    var _2 ;
    if(_0 != null) {
      var calc = calculateIncome_gernalTaxDiscount(state,_0);
      state = calc.state;
      _2 = calc.result;
    } else {
      _2 = null;
    }
    var _3 = _1 !== null && _2 !== null ? _1 - _2 : null;
    var _4 ;
    if(_0 != null) {
      var calc = calculateIncome_employedTaxDiscount(state,_0);
      state = calc.state;
      _4 = calc.result;
    } else {
      _4 = null;
    }
    var _5 = _3 !== null && _4 !== null ? _3 - _4 : null;
    result = _5;
    state = state.update("Income_tax",function (table) {
            return table.set(id,_5);
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_tax = calculateIncome_tax;
function calculateIncome_tax_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateIncome_tax(state,id);
    state = calc.state;
    if(calc.result !== null) {
      result.push(calc.result);
    }
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_tax_Many = calculateIncome_tax_Many;
function calculateIncome_taxableIncome(state,id) {
  var result = getIncome_taxableIncome(state,id);
  if(result === undefined) {
    var _0 = id;
    var _1 ;
    if(_0 != null) {
      var calc = calculateIncome_grossSalaryYear(state,_0);
      state = calc.state;
      _1 = calc.result;
    } else {
      _1 = null;
    }
    var _3 ;
    var _2 ;
    if(_0 != null) {
      var calc = calculateIncome_leaseCarAddition(state,_0);
      state = calc.state;
      _2 = calc.result;
    } else {
      _2 = null;
    }
    if(_2 !== null) {
      _3 = _2;
    } else {
      _3 = 0.0;
    }
    var _5 = _1 !== null && _3 !== null ? _1 + _3 : null;
    result = _5;
    state = state.update("Income_taxableIncome",function (table) {
            return table.set(id,_5);
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_taxableIncome = calculateIncome_taxableIncome;
function calculateIncome_taxableIncome_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateIncome_taxableIncome(state,id);
    state = calc.state;
    if(calc.result !== null) {
      result.push(calc.result);
    }
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_taxableIncome_Many = calculateIncome_taxableIncome_Many;
function calculateIncome_taxBracket1(state,id) {
  var result = getIncome_taxBracket1(state,id);
  if(result === undefined) {
    var _0 = id;
    result = 19922.0;
    state = state.update("Income_taxBracket1",function (table) {
            return table.set(id,19922.0);
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_taxBracket1 = calculateIncome_taxBracket1;
function calculateIncome_taxBracket1_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateIncome_taxBracket1(state,id);
    state = calc.state;
    if(calc.result !== null) {
      result.push(calc.result);
    }
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_taxBracket1_Many = calculateIncome_taxBracket1_Many;
function calculateIncome_taxBracket2(state,id) {
  var result = getIncome_taxBracket2(state,id);
  if(result === undefined) {
    var _0 = id;
    result = 33715.0;
    state = state.update("Income_taxBracket2",function (table) {
            return table.set(id,33715.0);
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_taxBracket2 = calculateIncome_taxBracket2;
function calculateIncome_taxBracket2_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateIncome_taxBracket2(state,id);
    state = calc.state;
    if(calc.result !== null) {
      result.push(calc.result);
    }
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_taxBracket2_Many = calculateIncome_taxBracket2_Many;
function calculateIncome_taxBracket3(state,id) {
  var result = getIncome_taxBracket3(state,id);
  if(result === undefined) {
    var _0 = id;
    result = 66421.0;
    state = state.update("Income_taxBracket3",function (table) {
            return table.set(id,66421.0);
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_taxBracket3 = calculateIncome_taxBracket3;
function calculateIncome_taxBracket3_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateIncome_taxBracket3(state,id);
    state = calc.state;
    if(calc.result !== null) {
      result.push(calc.result);
    }
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_taxBracket3_Many = calculateIncome_taxBracket3_Many;
function calculateIncome_taxRate1(state,id) {
  var result = getIncome_taxRate1(state,id);
  if(result === undefined) {
    var _0 = id;
    var _1 = 36.55 / 100.0;
    result = _1;
    state = state.update("Income_taxRate1",function (table) {
            return table.set(id,_1);
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_taxRate1 = calculateIncome_taxRate1;
function calculateIncome_taxRate1_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateIncome_taxRate1(state,id);
    state = calc.state;
    if(calc.result !== null) {
      result.push(calc.result);
    }
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_taxRate1_Many = calculateIncome_taxRate1_Many;
function calculateIncome_taxRate2(state,id) {
  var result = getIncome_taxRate2(state,id);
  if(result === undefined) {
    var _0 = id;
    var _1 = 40.15 / 100.0;
    result = _1;
    state = state.update("Income_taxRate2",function (table) {
            return table.set(id,_1);
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_taxRate2 = calculateIncome_taxRate2;
function calculateIncome_taxRate2_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateIncome_taxRate2(state,id);
    state = calc.state;
    if(calc.result !== null) {
      result.push(calc.result);
    }
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_taxRate2_Many = calculateIncome_taxRate2_Many;
function calculateIncome_taxRate3(state,id) {
  var result = getIncome_taxRate3(state,id);
  if(result === undefined) {
    var _0 = id;
    var _1 = 40.15 / 100.0;
    result = _1;
    state = state.update("Income_taxRate3",function (table) {
            return table.set(id,_1);
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_taxRate3 = calculateIncome_taxRate3;
function calculateIncome_taxRate3_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateIncome_taxRate3(state,id);
    state = calc.state;
    if(calc.result !== null) {
      result.push(calc.result);
    }
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_taxRate3_Many = calculateIncome_taxRate3_Many;
function calculateIncome_taxRate4(state,id) {
  var result = getIncome_taxRate4(state,id);
  if(result === undefined) {
    var _0 = id;
    var _1 = 52.0 / 100.0;
    result = _1;
    state = state.update("Income_taxRate4",function (table) {
            return table.set(id,_1);
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_taxRate4 = calculateIncome_taxRate4;
function calculateIncome_taxRate4_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateIncome_taxRate4(state,id);
    state = calc.state;
    if(calc.result !== null) {
      result.push(calc.result);
    }
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_taxRate4_Many = calculateIncome_taxRate4_Many;
function calculateIncome_thirteenthMonth(state,id) {
  var result = getIncome_thirteenthMonth(state,id);
  if(result === null) {
    var _0 = id;
    result = false;
    var prop = {
      thirteenthMonth : false
    };
    state = state.update("Income",function (table) {
            return table.update(id,function (e) {
                    return _.assign({
                    },e,prop);
                });
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_thirteenthMonth = calculateIncome_thirteenthMonth;
function calculateIncome_thirteenthMonth_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateIncome_thirteenthMonth(state,id);
    state = calc.state;
    if(calc.result !== null) {
      result.push(calc.result);
    }
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateIncome_thirteenthMonth_Many = calculateIncome_thirteenthMonth_Many;
function init(state) {
  var phdStudent = {
    id : "phdStudent"
  };
  state = state.update("Income",function (table) {
          return table.set(phdStudent.id,phdStudent);
      });
  var phpProgrammer = {
    id : "phpProgrammer"
  };
  state = state.update("Income",function (table) {
          return table.set(phpProgrammer.id,phpProgrammer);
      });
  var seniorDeveloper = {
    id : "seniorDeveloper"
  };
  state = state.update("Income",function (table) {
          return table.set(seniorDeveloper.id,seniorDeveloper);
      });
  state = setIncome_monthlySalary(state,phdStudent.id,2500.0);
  state = setIncome_name(state,phdStudent.id,"PhD Student");
  state = setIncome_thirteenthMonth(state,phdStudent.id,true);
  state = setIncome_holidayAllowance(state,phpProgrammer.id,0.0);
  state = setIncome_monthlySalary(state,phpProgrammer.id,2800.0);
  state = setIncome_name(state,phpProgrammer.id,"PHP programmer");
  state = setIncome_leaseCarPercent(state,seniorDeveloper.id,21.0);
  state = setIncome_leaseCarPrice(state,seniorDeveloper.id,17000.0);
  state = setIncome_monthlySalary(state,seniorDeveloper.id,4000.0);
  state = setIncome_name(state,seniorDeveloper.id,"Senior Developer");
  return {
    state : state,
    ids : {
      phdStudent : phdStudent.id,
      phpProgrammer : phpProgrammer.id,
      seniorDeveloper : seniorDeveloper.id
    }
  };
}

module.exports.init = init;
function execute(store,ids) {
  var result = [];
  var oldScope = scope;
   ( function () {
          var scope = _.assign({
          },oldScope,ids);
           ( function () {
                  function calculation(state) {
                    var _0 = React.createElement(Component.IncomeTax,{
                      income : scope.phpProgrammer
                    });
                    return {
                      result : _0,
                      state : state
                    };
                  }
                  
                  var calc = calculation(store.getState());
                  state = calc.state;
                  result = result.concat([{
                    type : "View",
                    multiplicity : "1",
                    expression : "@IncomeTax(phpProgrammer) {\n}",
                    value : calc.result,
                    calculation : calculation
                  }]);
              } ) ();
           ( function () {
                  function calculation(state) {
                    var _0 = React.createElement(Component.IncomeTax,{
                      income : scope.phpProgrammer
                    });
                    var _1 = _0 !== null ? pixiedustRuntime.castViewToString(store,_0) : null;
                    return {
                      result : _1,
                      state : state
                    };
                  }
                  
                  var calc = calculation(store.getState());
                  state = calc.state;
                  result = result.concat([{
                    type : "String",
                    multiplicity : "1",
                    expression : "@IncomeTax(phpProgrammer) {\n} as String",
                    value : calc.result,
                    calculation : calculation
                  }]);
              } ) ();
           ( function () {
                  function calculation(state) {
                    var _0 = React.createElement(Component.IncomeTax,{
                      income : scope.phdStudent
                    });
                    return {
                      result : _0,
                      state : state
                    };
                  }
                  
                  var calc = calculation(store.getState());
                  state = calc.state;
                  result = result.concat([{
                    type : "View",
                    multiplicity : "1",
                    expression : "@IncomeTax(phdStudent) {\n}",
                    value : calc.result,
                    calculation : calculation
                  }]);
              } ) ();
           ( function () {
                  function calculation(state) {
                    var _0 = React.createElement(Component.IncomeTax,{
                      income : scope.seniorDeveloper
                    });
                    return {
                      result : _0,
                      state : state
                    };
                  }
                  
                  var calc = calculation(store.getState());
                  state = calc.state;
                  result = result.concat([{
                    type : "View",
                    multiplicity : "1",
                    expression : "@IncomeTax(seniorDeveloper) {\n}",
                    value : calc.result,
                    calculation : calculation
                  }]);
              } ) ();
           ( function () {
                  function calculation(state) {
                    var _0 = React.createElement(Component.IncomeTax,{
                      income : scope.seniorDeveloper
                    });
                    return {
                      result : _0,
                      state : state
                    };
                  }
                  
                  var calc = calculation(store.getState());
                  state = calc.state;
                  result = result.concat([{
                    type : "View",
                    multiplicity : "1",
                    expression : "@IncomeTax(seniorDeveloper) {\n}",
                    value : calc.result,
                    calculation : calculation
                  }]);
              } ) ();
           ( function () {
                  function calculation(state) {
                    var _0 ;
                    if(scope.phpProgrammer != null) {
                      var calc = calculateIncome_summary(state,scope.phpProgrammer);
                      state = calc.state;
                      _0 = calc.result;
                    } else {
                      _0 = null;
                    }
                    return {
                      result : _0,
                      state : state
                    };
                  }
                  
                  var calc = calculation(store.getState());
                  state = calc.state;
                  result = result.concat([{
                    type : "String",
                    multiplicity : "1",
                    expression : "phpProgrammer.summary",
                    value : calc.result,
                    calculation : calculation
                  }]);
              } ) ();
           ( function () {
                  function calculation(state) {
                    var _0 ;
                    if(scope.phdStudent != null) {
                      var calc = calculateIncome_summary(state,scope.phdStudent);
                      state = calc.state;
                      _0 = calc.result;
                    } else {
                      _0 = null;
                    }
                    return {
                      result : _0,
                      state : state
                    };
                  }
                  
                  var calc = calculation(store.getState());
                  state = calc.state;
                  result = result.concat([{
                    type : "String",
                    multiplicity : "1",
                    expression : "phdStudent.summary",
                    value : calc.result,
                    calculation : calculation
                  }]);
              } ) ();
           ( function () {
                  function calculation(state) {
                    var _0 ;
                    if(scope.seniorDeveloper != null) {
                      var calc = calculateIncome_summary(state,scope.seniorDeveloper);
                      state = calc.state;
                      _0 = calc.result;
                    } else {
                      _0 = null;
                    }
                    return {
                      result : _0,
                      state : state
                    };
                  }
                  
                  var calc = calculation(store.getState());
                  state = calc.state;
                  result = result.concat([{
                    type : "String",
                    multiplicity : "1",
                    expression : "seniorDeveloper.summary",
                    value : calc.result,
                    calculation : calculation
                  }]);
              } ) ();
      } ) ();
  return result;
}

module.exports.execute = execute;
var actions = {
  "init" : function (state) {
          state = state === undefined ? emptyState : state;
          return init(state).state;
      },
  "state_update" : function (state,action) {
          return action.newState;
      },
  "setIncome_holidayAllowance" : function (state,action) {
          return setIncome_holidayAllowance(state,action.id,action.value);
      },
  "setIncome_leaseCarPercent" : function (state,action) {
          return setIncome_leaseCarPercent(state,action.id,action.value);
      },
  "setIncome_leaseCarPrice" : function (state,action) {
          return setIncome_leaseCarPrice(state,action.id,action.value);
      },
  "setIncome_monthlySalary" : function (state,action) {
          return setIncome_monthlySalary(state,action.id,action.value);
      },
  "setIncome_name" : function (state,action) {
          return setIncome_name(state,action.id,action.value);
      },
  "setIncome_thirteenthMonth" : function (state,action) {
          return setIncome_thirteenthMonth(state,action.id,action.value);
      },
  "calculateIncome_employedTaxDiscount" : function (state,action) {
          return calculateIncome_employedTaxDiscount(state,action.id).state;
      },
  "calculateIncome_employedTaxDiscount_Many" : function (state,action) {
          return calculateIncome_employedTaxDiscount_Many(state,action.ids).state;
      },
  "calculateIncome_gernalTaxDiscount" : function (state,action) {
          return calculateIncome_gernalTaxDiscount(state,action.id).state;
      },
  "calculateIncome_gernalTaxDiscount_Many" : function (state,action) {
          return calculateIncome_gernalTaxDiscount_Many(state,action.ids).state;
      },
  "calculateIncome_grossSalary" : function (state,action) {
          return calculateIncome_grossSalary(state,action.id).state;
      },
  "calculateIncome_grossSalary_Many" : function (state,action) {
          return calculateIncome_grossSalary_Many(state,action.ids).state;
      },
  "calculateIncome_grossSalaryYear" : function (state,action) {
          return calculateIncome_grossSalaryYear(state,action.id).state;
      },
  "calculateIncome_grossSalaryYear_Many" : function (state,action) {
          return calculateIncome_grossSalaryYear_Many(state,action.ids).state;
      },
  "calculateIncome_holidayAllowance" : function (state,action) {
          return calculateIncome_holidayAllowance(state,action.id).state;
      },
  "calculateIncome_holidayAllowance_Many" : function (state,action) {
          return calculateIncome_holidayAllowance_Many(state,action.ids).state;
      },
  "calculateIncome_incomeTax" : function (state,action) {
          return calculateIncome_incomeTax(state,action.id).state;
      },
  "calculateIncome_incomeTax_Many" : function (state,action) {
          return calculateIncome_incomeTax_Many(state,action.ids).state;
      },
  "calculateIncome_leaseCarAddition" : function (state,action) {
          return calculateIncome_leaseCarAddition(state,action.id).state;
      },
  "calculateIncome_leaseCarAddition_Many" : function (state,action) {
          return calculateIncome_leaseCarAddition_Many(state,action.ids).state;
      },
  "calculateIncome_name" : function (state,action) {
          return calculateIncome_name(state,action.id).state;
      },
  "calculateIncome_name_Many" : function (state,action) {
          return calculateIncome_name_Many(state,action.ids).state;
      },
  "calculateIncome_netSalary" : function (state,action) {
          return calculateIncome_netSalary(state,action.id).state;
      },
  "calculateIncome_netSalary_Many" : function (state,action) {
          return calculateIncome_netSalary_Many(state,action.ids).state;
      },
  "calculateIncome_netSalaryYear" : function (state,action) {
          return calculateIncome_netSalaryYear(state,action.id).state;
      },
  "calculateIncome_netSalaryYear_Many" : function (state,action) {
          return calculateIncome_netSalaryYear_Many(state,action.ids).state;
      },
  "calculateIncome_salaryBracket1" : function (state,action) {
          return calculateIncome_salaryBracket1(state,action.id).state;
      },
  "calculateIncome_salaryBracket1_Many" : function (state,action) {
          return calculateIncome_salaryBracket1_Many(state,action.ids).state;
      },
  "calculateIncome_salaryBracket2" : function (state,action) {
          return calculateIncome_salaryBracket2(state,action.id).state;
      },
  "calculateIncome_salaryBracket2_Many" : function (state,action) {
          return calculateIncome_salaryBracket2_Many(state,action.ids).state;
      },
  "calculateIncome_salaryBracket3" : function (state,action) {
          return calculateIncome_salaryBracket3(state,action.id).state;
      },
  "calculateIncome_salaryBracket3_Many" : function (state,action) {
          return calculateIncome_salaryBracket3_Many(state,action.ids).state;
      },
  "calculateIncome_salaryBracket4" : function (state,action) {
          return calculateIncome_salaryBracket4(state,action.id).state;
      },
  "calculateIncome_salaryBracket4_Many" : function (state,action) {
          return calculateIncome_salaryBracket4_Many(state,action.ids).state;
      },
  "calculateIncome_summary" : function (state,action) {
          return calculateIncome_summary(state,action.id).state;
      },
  "calculateIncome_summary_Many" : function (state,action) {
          return calculateIncome_summary_Many(state,action.ids).state;
      },
  "calculateIncome_tax" : function (state,action) {
          return calculateIncome_tax(state,action.id).state;
      },
  "calculateIncome_tax_Many" : function (state,action) {
          return calculateIncome_tax_Many(state,action.ids).state;
      },
  "calculateIncome_taxableIncome" : function (state,action) {
          return calculateIncome_taxableIncome(state,action.id).state;
      },
  "calculateIncome_taxableIncome_Many" : function (state,action) {
          return calculateIncome_taxableIncome_Many(state,action.ids).state;
      },
  "calculateIncome_taxBracket1" : function (state,action) {
          return calculateIncome_taxBracket1(state,action.id).state;
      },
  "calculateIncome_taxBracket1_Many" : function (state,action) {
          return calculateIncome_taxBracket1_Many(state,action.ids).state;
      },
  "calculateIncome_taxBracket2" : function (state,action) {
          return calculateIncome_taxBracket2(state,action.id).state;
      },
  "calculateIncome_taxBracket2_Many" : function (state,action) {
          return calculateIncome_taxBracket2_Many(state,action.ids).state;
      },
  "calculateIncome_taxBracket3" : function (state,action) {
          return calculateIncome_taxBracket3(state,action.id).state;
      },
  "calculateIncome_taxBracket3_Many" : function (state,action) {
          return calculateIncome_taxBracket3_Many(state,action.ids).state;
      },
  "calculateIncome_taxRate1" : function (state,action) {
          return calculateIncome_taxRate1(state,action.id).state;
      },
  "calculateIncome_taxRate1_Many" : function (state,action) {
          return calculateIncome_taxRate1_Many(state,action.ids).state;
      },
  "calculateIncome_taxRate2" : function (state,action) {
          return calculateIncome_taxRate2(state,action.id).state;
      },
  "calculateIncome_taxRate2_Many" : function (state,action) {
          return calculateIncome_taxRate2_Many(state,action.ids).state;
      },
  "calculateIncome_taxRate3" : function (state,action) {
          return calculateIncome_taxRate3(state,action.id).state;
      },
  "calculateIncome_taxRate3_Many" : function (state,action) {
          return calculateIncome_taxRate3_Many(state,action.ids).state;
      },
  "calculateIncome_taxRate4" : function (state,action) {
          return calculateIncome_taxRate4(state,action.id).state;
      },
  "calculateIncome_taxRate4_Many" : function (state,action) {
          return calculateIncome_taxRate4_Many(state,action.ids).state;
      },
  "calculateIncome_thirteenthMonth" : function (state,action) {
          return calculateIncome_thirteenthMonth(state,action.id).state;
      },
  "calculateIncome_thirteenthMonth_Many" : function (state,action) {
          return calculateIncome_thirteenthMonth_Many(state,action.ids).state;
      },
  "createIncome" : function (state,action) {
          var entity = action.entity;
          var instance = {
            "id" : entity.id,
            "holidayAllowance" : entity.holidayAllowance === undefined ? null : entity.holidayAllowance,
            "leaseCarPercent" : entity.leaseCarPercent === undefined ? null : entity.leaseCarPercent,
            "leaseCarPrice" : entity.leaseCarPrice === undefined ? null : entity.leaseCarPrice,
            "monthlySalary" : entity.monthlySalary === undefined ? null : entity.monthlySalary,
            "name" : entity.name === undefined ? null : entity.name,
            "thirteenthMonth" : entity.thirteenthMonth === undefined ? null : entity.thirteenthMonth
          };
          state = state.update("Income",function (table) {
                  return table.set(instance.id,instance);
              });
          return state;
      }
};
module.exports.actions = actions;
var actionCreators = {
  "init" : function () {
          return {
            type : "init"
          };
      },
  "state_update" : function (newState) {
          return {
            type : "state_update",
            newState : newState
          };
      },
  "setIncome_holidayAllowance" : function (id,value) {
          return {
            type : "setIncome_holidayAllowance",
            id : id,
            value : value
          };
      },
  "setIncome_leaseCarPercent" : function (id,value) {
          return {
            type : "setIncome_leaseCarPercent",
            id : id,
            value : value
          };
      },
  "setIncome_leaseCarPrice" : function (id,value) {
          return {
            type : "setIncome_leaseCarPrice",
            id : id,
            value : value
          };
      },
  "setIncome_monthlySalary" : function (id,value) {
          return {
            type : "setIncome_monthlySalary",
            id : id,
            value : value
          };
      },
  "setIncome_name" : function (id,value) {
          return {
            type : "setIncome_name",
            id : id,
            value : value
          };
      },
  "setIncome_thirteenthMonth" : function (id,value) {
          return {
            type : "setIncome_thirteenthMonth",
            id : id,
            value : value
          };
      },
  "calculateIncome_employedTaxDiscount" : function (id) {
          return {
            type : "calculateIncome_employedTaxDiscount",
            id : id
          };
      },
  "calculateIncome_employedTaxDiscount_Many" : function (ids) {
          return {
            type : "calculateIncome_employedTaxDiscount_Many",
            id : ids
          };
      },
  "calculateIncome_gernalTaxDiscount" : function (id) {
          return {
            type : "calculateIncome_gernalTaxDiscount",
            id : id
          };
      },
  "calculateIncome_gernalTaxDiscount_Many" : function (ids) {
          return {
            type : "calculateIncome_gernalTaxDiscount_Many",
            id : ids
          };
      },
  "calculateIncome_grossSalary" : function (id) {
          return {
            type : "calculateIncome_grossSalary",
            id : id
          };
      },
  "calculateIncome_grossSalary_Many" : function (ids) {
          return {
            type : "calculateIncome_grossSalary_Many",
            id : ids
          };
      },
  "calculateIncome_grossSalaryYear" : function (id) {
          return {
            type : "calculateIncome_grossSalaryYear",
            id : id
          };
      },
  "calculateIncome_grossSalaryYear_Many" : function (ids) {
          return {
            type : "calculateIncome_grossSalaryYear_Many",
            id : ids
          };
      },
  "calculateIncome_holidayAllowance" : function (id) {
          return {
            type : "calculateIncome_holidayAllowance",
            id : id
          };
      },
  "calculateIncome_holidayAllowance_Many" : function (ids) {
          return {
            type : "calculateIncome_holidayAllowance_Many",
            id : ids
          };
      },
  "calculateIncome_incomeTax" : function (id) {
          return {
            type : "calculateIncome_incomeTax",
            id : id
          };
      },
  "calculateIncome_incomeTax_Many" : function (ids) {
          return {
            type : "calculateIncome_incomeTax_Many",
            id : ids
          };
      },
  "calculateIncome_leaseCarAddition" : function (id) {
          return {
            type : "calculateIncome_leaseCarAddition",
            id : id
          };
      },
  "calculateIncome_leaseCarAddition_Many" : function (ids) {
          return {
            type : "calculateIncome_leaseCarAddition_Many",
            id : ids
          };
      },
  "calculateIncome_name" : function (id) {
          return {
            type : "calculateIncome_name",
            id : id
          };
      },
  "calculateIncome_name_Many" : function (ids) {
          return {
            type : "calculateIncome_name_Many",
            id : ids
          };
      },
  "calculateIncome_netSalary" : function (id) {
          return {
            type : "calculateIncome_netSalary",
            id : id
          };
      },
  "calculateIncome_netSalary_Many" : function (ids) {
          return {
            type : "calculateIncome_netSalary_Many",
            id : ids
          };
      },
  "calculateIncome_netSalaryYear" : function (id) {
          return {
            type : "calculateIncome_netSalaryYear",
            id : id
          };
      },
  "calculateIncome_netSalaryYear_Many" : function (ids) {
          return {
            type : "calculateIncome_netSalaryYear_Many",
            id : ids
          };
      },
  "calculateIncome_salaryBracket1" : function (id) {
          return {
            type : "calculateIncome_salaryBracket1",
            id : id
          };
      },
  "calculateIncome_salaryBracket1_Many" : function (ids) {
          return {
            type : "calculateIncome_salaryBracket1_Many",
            id : ids
          };
      },
  "calculateIncome_salaryBracket2" : function (id) {
          return {
            type : "calculateIncome_salaryBracket2",
            id : id
          };
      },
  "calculateIncome_salaryBracket2_Many" : function (ids) {
          return {
            type : "calculateIncome_salaryBracket2_Many",
            id : ids
          };
      },
  "calculateIncome_salaryBracket3" : function (id) {
          return {
            type : "calculateIncome_salaryBracket3",
            id : id
          };
      },
  "calculateIncome_salaryBracket3_Many" : function (ids) {
          return {
            type : "calculateIncome_salaryBracket3_Many",
            id : ids
          };
      },
  "calculateIncome_salaryBracket4" : function (id) {
          return {
            type : "calculateIncome_salaryBracket4",
            id : id
          };
      },
  "calculateIncome_salaryBracket4_Many" : function (ids) {
          return {
            type : "calculateIncome_salaryBracket4_Many",
            id : ids
          };
      },
  "calculateIncome_summary" : function (id) {
          return {
            type : "calculateIncome_summary",
            id : id
          };
      },
  "calculateIncome_summary_Many" : function (ids) {
          return {
            type : "calculateIncome_summary_Many",
            id : ids
          };
      },
  "calculateIncome_tax" : function (id) {
          return {
            type : "calculateIncome_tax",
            id : id
          };
      },
  "calculateIncome_tax_Many" : function (ids) {
          return {
            type : "calculateIncome_tax_Many",
            id : ids
          };
      },
  "calculateIncome_taxableIncome" : function (id) {
          return {
            type : "calculateIncome_taxableIncome",
            id : id
          };
      },
  "calculateIncome_taxableIncome_Many" : function (ids) {
          return {
            type : "calculateIncome_taxableIncome_Many",
            id : ids
          };
      },
  "calculateIncome_taxBracket1" : function (id) {
          return {
            type : "calculateIncome_taxBracket1",
            id : id
          };
      },
  "calculateIncome_taxBracket1_Many" : function (ids) {
          return {
            type : "calculateIncome_taxBracket1_Many",
            id : ids
          };
      },
  "calculateIncome_taxBracket2" : function (id) {
          return {
            type : "calculateIncome_taxBracket2",
            id : id
          };
      },
  "calculateIncome_taxBracket2_Many" : function (ids) {
          return {
            type : "calculateIncome_taxBracket2_Many",
            id : ids
          };
      },
  "calculateIncome_taxBracket3" : function (id) {
          return {
            type : "calculateIncome_taxBracket3",
            id : id
          };
      },
  "calculateIncome_taxBracket3_Many" : function (ids) {
          return {
            type : "calculateIncome_taxBracket3_Many",
            id : ids
          };
      },
  "calculateIncome_taxRate1" : function (id) {
          return {
            type : "calculateIncome_taxRate1",
            id : id
          };
      },
  "calculateIncome_taxRate1_Many" : function (ids) {
          return {
            type : "calculateIncome_taxRate1_Many",
            id : ids
          };
      },
  "calculateIncome_taxRate2" : function (id) {
          return {
            type : "calculateIncome_taxRate2",
            id : id
          };
      },
  "calculateIncome_taxRate2_Many" : function (ids) {
          return {
            type : "calculateIncome_taxRate2_Many",
            id : ids
          };
      },
  "calculateIncome_taxRate3" : function (id) {
          return {
            type : "calculateIncome_taxRate3",
            id : id
          };
      },
  "calculateIncome_taxRate3_Many" : function (ids) {
          return {
            type : "calculateIncome_taxRate3_Many",
            id : ids
          };
      },
  "calculateIncome_taxRate4" : function (id) {
          return {
            type : "calculateIncome_taxRate4",
            id : id
          };
      },
  "calculateIncome_taxRate4_Many" : function (ids) {
          return {
            type : "calculateIncome_taxRate4_Many",
            id : ids
          };
      },
  "calculateIncome_thirteenthMonth" : function (id) {
          return {
            type : "calculateIncome_thirteenthMonth",
            id : id
          };
      },
  "calculateIncome_thirteenthMonth_Many" : function (ids) {
          return {
            type : "calculateIncome_thirteenthMonth_Many",
            id : ids
          };
      },
  "createIncome" : function (entity) {
          return {
            type : "createIncome",
            entity : entity
          };
      }
};
module.exports.actionCreators = actionCreators;
var reducer = pixiedustRuntime.makeReducer(actions);
module.exports.reducer = reducer;
var Component =  ( function () {
        var oldScope = scope;
        return {
          IncomeProperty : Lifted(function IncomeProperty(props,state) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _2 = React.createElement("td",{
                  },scope.name);
                  var _4 = React.createElement("td",{
                  },scope.value);
                  var _0 = React.createElement("tr",{
                  },_2,_4);
                  return {
                    result : _0,
                    state : state
                  };
              }),
          IncomeTax : Lifted(function IncomeTax(props,state) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _2 ;
                  if(scope.income != null) {
                    var calc = calculateIncome_name(state,scope.income);
                    state = calc.state;
                    _2 = calc.result;
                  } else {
                    _2 = null;
                  }
                  var _0 = React.createElement("h2",{
                  },_2);
                  var _5 = React.createElement("label",{
                  },"Monthly Salary");
                  var _8 = getIncome_monthlySalary(state,scope.income);
                  var _7 = React.createElement(imports["Native"].FloatInput,{
                    value$identity :  ( function () {
                            return scope.income;
                        } ) (),
                    value$setter : actionCreators["setIncome_monthlySalary"],
                    value : _8
                  });
                  var _3 = React.createElement("div",{
                  },_5,_7);
                  var _11 = React.createElement("label",{
                  },"Holiday Allowance");
                  var _14 ;
                  if(scope.income != null) {
                    var calc = calculateIncome_holidayAllowance(state,scope.income);
                    state = calc.state;
                    _14 = calc.result;
                  } else {
                    _14 = null;
                  }
                  var _13 = React.createElement(imports["Native"].FloatInput,{
                    value$identity :  ( function () {
                            return scope.income;
                        } ) (),
                    value$setter : actionCreators["setIncome_holidayAllowance"],
                    value : _14
                  });
                  var _9 = React.createElement("div",{
                  },_11,_13);
                  var _17 = React.createElement("label",{
                  },"Thirteenth month?");
                  var _20 ;
                  if(scope.income != null) {
                    var calc = calculateIncome_thirteenthMonth(state,scope.income);
                    state = calc.state;
                    _20 = calc.result;
                  } else {
                    _20 = null;
                  }
                  var _19 = React.createElement(imports["Native"].BooleanInput,{
                    value$identity :  ( function () {
                            return scope.income;
                        } ) (),
                    value$setter : actionCreators["setIncome_thirteenthMonth"],
                    value : _20
                  });
                  var _15 = React.createElement("div",{
                  },_17,_19);
                  var _23 = React.createElement("label",{
                  },"Lease car price");
                  var _26 = getIncome_leaseCarPrice(state,scope.income);
                  var _25 = React.createElement(imports["Native"].OptFloatInput,{
                    value$identity :  ( function () {
                            return scope.income;
                        } ) (),
                    value$setter : actionCreators["setIncome_leaseCarPrice"],
                    value : _26
                  });
                  var _21 = React.createElement("div",{
                  },_23,_25);
                  var _29 = React.createElement("label",{
                  },"Lease car percent");
                  var _32 = getIncome_leaseCarPercent(state,scope.income);
                  var _31 = React.createElement(imports["Native"].OptFloatInput,{
                    value$identity :  ( function () {
                            return scope.income;
                        } ) (),
                    value$setter : actionCreators["setIncome_leaseCarPercent"],
                    value : _32
                  });
                  var _27 = React.createElement("div",{
                  },_29,_31);
                  var _33 = React.createElement(Component.IncomeSummary,{
                    income : scope.income
                  });
                  return {
                    result : React.createElement('group',{
                    },_0,_3,_9,_15,_21,_27,_33),
                    state : state
                  };
              }),
          IncomeSummary : Lifted(function IncomeSummary(props,state) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _6 = React.createElement("th",{
                  },"Property");
                  var _8 = React.createElement("th",{
                  },"Value");
                  var _4 = React.createElement("tr",{
                  },_6,_8);
                  var _2 = React.createElement("thead",{
                  },_4);
                  var _13 ;
                  if(scope.income != null) {
                    var calc = calculateIncome_grossSalary(state,scope.income);
                    state = calc.state;
                    _13 = calc.result;
                  } else {
                    _13 = null;
                  }
                  var _12 = React.createElement(Component.IncomeProperty,{
                    name : "Gross salary",
                    value : _13
                  });
                  var _15 ;
                  if(scope.income != null) {
                    var calc = calculateIncome_tax(state,scope.income);
                    state = calc.state;
                    _15 = calc.result;
                  } else {
                    _15 = null;
                  }
                  var _16 = _15 !== null ? _15 / 12.0 : null;
                  var _14 = React.createElement(Component.IncomeProperty,{
                    name : "Monthly tax",
                    value : _16
                  });
                  var _18 ;
                  if(scope.income != null) {
                    var calc = calculateIncome_netSalary(state,scope.income);
                    state = calc.state;
                    _18 = calc.result;
                  } else {
                    _18 = null;
                  }
                  var _17 = React.createElement(Component.IncomeProperty,{
                    name : "Net salary",
                    value : _18
                  });
                  var _20 ;
                  if(scope.income != null) {
                    var calc = calculateIncome_taxableIncome(state,scope.income);
                    state = calc.state;
                    _20 = calc.result;
                  } else {
                    _20 = null;
                  }
                  var _19 = React.createElement(Component.IncomeProperty,{
                    name : "Taxable income",
                    value : _20
                  });
                  var _22 ;
                  if(scope.income != null) {
                    var calc = calculateIncome_gernalTaxDiscount(state,scope.income);
                    state = calc.state;
                    _22 = calc.result;
                  } else {
                    _22 = null;
                  }
                  var _21 = React.createElement(Component.IncomeProperty,{
                    name : "General tax discount",
                    value : _22
                  });
                  var _27 ;
                  var _24 = getIncome_leaseCarPrice(state,scope.income);
                  var _25 = expression.count(_24 == null ? constants.EMPTY_ARRAY : [_24]);
                  var _26 = _25 !== null ? _25 === 0 : null;
                  if(_26) {
                    _27 = "No";
                  } else {
                    _27 = "Yes";
                  }
                  var _23 = React.createElement(Component.IncomeProperty,{
                    name : "Lease car?",
                    value : _27
                  });
                  var _36 ;
                  var _28 = getIncome_leaseCarPrice(state,scope.income);
                  var _29 = expression.count(_28 == null ? constants.EMPTY_ARRAY : [_28]);
                  var _30 = _29 !== null ? _29 === 1 : null;
                  if(_30) {
                    var _34 ;
                    var _32 ;
                    if(scope.income != null) {
                      var calc = calculateIncome_leaseCarAddition(state,scope.income);
                      state = calc.state;
                      _32 = calc.result;
                    } else {
                      _32 = null;
                    }
                    var _33 = _32 !== null ? _32 / 12.0 : null;
                    if(_33 !== null) {
                      _34 = _33;
                    } else {
                      _34 = 0.0;
                    }
                    var _31 = React.createElement(Component.IncomeProperty,{
                      name : "Monthly Lease car addition",
                      value : _34
                    });
                    _36 = _31;
                  } else {
                    _36 = null;
                  }
                  var _10 = React.createElement("tbody",{
                  },_12,_14,_17,_19,_21,_23,_36);
                  var _0 = React.createElement("table",{
                  },_2,_10);
                  return {
                    result : _0,
                    state : state
                  };
              })
        };
    } ) ();
module.exports.Component = Component;