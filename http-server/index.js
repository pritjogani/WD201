const args = require('minimist')(process.argv.slice(2))
const http = require('http')
const fs = require('fs')

let homeDetails = ''
let projectDetails = ''
let registrationDetails = ''

fs.readFile('home.html', (err, home) => {
	if (err) throw err
	homeDetails = home
})

fs.readFile('project.html', (err, project) => {
	if (err) throw err
	projectDetails = project
})

fs.readFile('registration.html', (err, registration) => {
	if (err) throw err
	registrationDetails = registration
})

http.createServer((req, res) => {
	let url = req.url
	res.writeHead(200, { 'Content-Type': 'text/html' })
	switch (url) {
		case '/project':
			res.write(projectDetails)
			res.end()
			break
		case '/registration':
			res.write(registrationDetails)
			res.end()
			break
		default:
			res.write(homeDetails)
			res.end()
			break
	}
}).listen(args.port || 5000)