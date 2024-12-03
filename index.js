// Saturday Fun Function
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

// Monday Work Function
const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
};

// Wrap Adjective Function
function wrapAdjective(flair = '*') {
    return function(adjective = 'special') {
        return `You are ${flair}${adjective}${flair}!`;
    };
}

console.log(saturdayFun());
console.log(saturdayFun('bathe my dog'));
console.log(mondayWork());
console.log(mondayWork('work from home'));

const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction('a dedicated programmer'));
console.log(wrapAdjective("%")("a dedicated programmer"));