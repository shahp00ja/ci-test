const DRONE_VARS = [
    'CI',
    'CI_NAME',
    'CI_REPO',
    'CI_BRANCH',
    'CI_COMMIT',
    'CI_BUILD_NUMBER',
    'CI_PULL_REQUEST',
    'CI_JOB_NUMBER',
    'CI_BUILD_DIR',
    'CI_BUILD_URL',
    'CI_TAG'
]

for (let key of DRONE_VARS) {
    console.log('Value of', key, ':', process.env[key]);
}