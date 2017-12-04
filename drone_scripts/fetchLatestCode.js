const request = require('request');
const {
    exec
} = require('child_process');
const shell = require('shelljs');

const args = process.argv;

const owner = args[2];
const repo = args[3];
const prNumber = args[4];
const token = args[5];

const url = 'https://api.github.com/repos/' + owner + '/' + repo + '/pulls/' + prNumber;
const headers = {
    'authorization': 'token ' + token,
    'User-Agent': 'request'
}

console.log('\n\nMaking request to Github');
request.get(url, {
    headers: headers,
    json: true
}, (err, response, body) => {
    if (err) {
        console.error('Error making request to Github');
        process.exit(1);
    }

    console.log('Got reposne');
    // Promise.all([
        shell.exec('export EXTRA_BASE_REPO=' + body.base.repo.full_name);
        shell.exec('export EXTRA_BASE_BRANCH=' + body.base.ref);
        shell.exec('export EXTRA_HEAD_REPO=' + body.head.repo.full_name);
        shell.exec('export EXTRA_HEAD_BRANCH=' + body.head.ref);
        shell.exec('echo $EXTRA_HEAD_BRANCH');
        
        process.exit(0);
    // ]).then((result) => {
    //     console.log('All ok\n');
    //     process.exit(0);
    // }).catch(err => {
    //     console.error('Error setting env vars');
    //     process.exit(1);
    // })
});

const cli = (command) => {
    return new Promise((resolve, reject) => {
        exec(command, (err, stdout, stderr) => {
            if (err) {
                reject(err);
            } else {
                resolve(stdout);
            }
        });
    });
}