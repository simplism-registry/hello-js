function handle() {

	// read function argument from the memory
	let http_request_data = Host.inputString()

	let JSONData = JSON.parse(http_request_data)

	let text = "💛 Hello " + JSONData.body

	const req = {
		method: "GET",
		url: "https://jsonplaceholder.typicode.com/todos/1"
	}
	const res = Http.request(req)

	let response = {
		header: {
			"Content-Type":["text/plain; charset=utf-8"],
			"simplism-version": ["0.0.7"]
		},
		body: text + " " + res.body,
		code: 200
	}
	
	// copy output to host memory
	Host.outputString(JSON.stringify(response))
}

module.exports = { handle }
