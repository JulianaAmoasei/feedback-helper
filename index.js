const { exec } = require("child_process")
const fs = require('fs')

const repos = fs.readFileSync('./repos.txt').toString().split('\n')

exec(`mkdir -p logs`)

let port = 3000
const printError = error => 
  error ? console.log(`error: ${error.message}`) : null

const startServeIfExists = (dir, port) => {
  const runServer = `cd ${dir} && npx serve -l ${port} ./src`

  fs.readFileSync(`./${dir}/package.json`)
    .toString()
    .indexOf('"serve"') !== -1 
    ? console.log(`${dir} em http://localhost:${port}`) ||
      exec(runServer, error => printError(error)) 
    : console.log(`serve não encontrado para repositório ${dir}:${port}`)
}

for (repo of repos) {
  const splitLink = repo.split('/')
  const name = splitLink[splitLink.length - 2]
  const linkRepo = repo.includes('.git') ? repo : `${repo}.git`
  
  exec(`git clone ${linkRepo} ${name}`, () => {
    
    const install = `cd ${name} && npm install`
    
    exec(install, error => {
      printError(error)
      
      const runTest = `cd ${name} && npm run test --no-color > ../logs/${name}.log 2>&1`
      startServeIfExists(name, port)
      port += 1
      
      exec(runTest, error => printError(error))
    })
  })
}