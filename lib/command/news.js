let NewsApi = require("@dhnapi/news-api");
let dapi = new NewsApi();
let plugins = dapi._plugins.map((item) => Object.keys(item)[0].replace(/(\.\w+)/gi, "news"));

cmd.on("NewsApi", plugins, ["news"], (msg, res) => {
	dapi[res.command.split("news")[0]]((response, error) => {
		if (error) return client.reply(msg, error.message);
		let txt = "";
		for (let data of response.data.result) txt += functions.parseResult(data) + "\n\n";
		txt += "";
		return client.reply(msg, txt);
	});
}, {
	wait: true
});