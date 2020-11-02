const { exec } = require("child_process");

const repos = [
  "https://github.com/Laboratoria/SAP005-cipher",
  "https://github.com/JulianaAmoasei/SAP005-cipher"
]

for (repo of repos) {
  const splitLink = repo.split('/')
  const name = splitLink[splitLink.length - 2]
  const linkRepo = repo.includes('.git') ? repo : `${repo}.git`

  const cloneInstall = `git clone ${linkRepo} ${name} && cd ${name} && npm install`
  const runTest = `cd ${name} && npm run test -- --json --outputFile=output.json`

  exec(cloneInstall, (error, stdout, stderr) => {
    if (error) console.log(`error: ${error.message}`);
    if (stderr) console.log(`stderr: ${stderr}`);

    exec(runTest, (error, stdout, stderr) => {
      if (error) console.log(`error: ${error.message}`);
      if (stderr) console.log(`stderr: ${stderr}`);
      
    })
  })
}
