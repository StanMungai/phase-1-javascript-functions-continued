// code your solution here
function saturdayFun(hobby = 'roller-skate') {
    return `This Saturday, I want to ${hobby}!`
}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(param = '*') {
    return function innerFunc(param1 = 'special'){
        return `You are ${param}${param1}${param}!`
    }
}

console.log(wrapAdjective('%')('a dedicated programmer'));

