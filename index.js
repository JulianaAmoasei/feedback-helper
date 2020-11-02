const { exec } = require("child_process");
const fs = require('fs')

const repos = fs.readFileSync('./repos.txt').toString().split('\n')

for (repo of repos) {
  const splitLink = repo.split('/')
  const name = splitLink[splitLink.length - 2]
  const linkRepo = repo.includes('.git') ? repo : `${repo}.git`

  const cloneInstall = `git clone ${linkRepo} ${name} && cd ${name} && npm install`
  const runTest = `cd ${name} && npm run test --no-color > ../logs/${name}.log 2>&1`

  exec(cloneInstall, (error, stdout, stderr) => {
    if (error) console.log(`error: ${error.message}`);
    if (stderr) console.log(`stderr: ${stderr}`);
    console.log(`stdout: ${stdout}`);

    exec(runTest, (error, stdout, stderr) => {
      if (error) console.log(`error: ${error.message}`);
      if (stderr) console.log(`stderr: ${stderr}`);
      console.log(`stdout: ${stdout}`);
    })
  })
}