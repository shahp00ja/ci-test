const DRONE_VARS = [
    'DRONE',
    'DRONE_REPO',
    'DRONE_BRANCH',
    'DRONE_COMMIT',
    'DRONE_DIR',
    'DRONE_BUILD_NUMBER',
    'DRONE_PULL_REQUEST',
    'DRONE_JOB_NUMBER',
    'DRONE_TAG',
    'DRONE_REFSPEC'
]

console.log('Logging drone variables');
for (let key of DRONE_VARS) {
    console.log('Value of', key, ':', process.env[key]);
}

console.log('\n\nPRINT ALL ENV VARS\n');

for(let key in process.env) {
    if (process.env.hasOwnProperty(key)) {
        console.log(key, '-', process.env[key]);
    }
}
