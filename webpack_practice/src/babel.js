async function start () {
    return await Promise.resolve('async works');
}
const unusedVariable = 0;
start().then(console.log);

import('lodash').then(() => {
    console.log('Lodash:', _.random(0, 42, true));
})