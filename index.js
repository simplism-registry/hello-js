function handle() {

	// read function argument from the memory
	let http_request_data = Host.inputString()

	let JSONData = JSON.parse(http_request_data)

	let text = "💛 Hello " + JSONData.body

	let response = {
		header: {
			"Content-Type":["text/plain; charset=utf-8"],
            "simplism-version": ["0.0.7"]
		},
		body: text,
		code: 200
	}

	// copy output to host memory
	Host.outputString(JSON.stringify(response))
}

module.exports = {handle}
