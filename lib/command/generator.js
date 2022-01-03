cmd.on('stres',['swaifu','wangy','pregnant','simp','sherk','gemeteran','nenen','koboi'],['generator'],async(req, res) => {
	if (!res.query) return client.reply(req, "Masukan Namanya!\nContoh : .wangy danski");
	if (res.command.match("wangy")) {
	return client.generateStres(req.from, `${res.query}`, "wangy");
	}
	if (res.command.match("pregnant")) {
	return client.generateStres(req.from, `${res.query}`,"pregnant");
	}
	if (res.command.match("swaifu")) {
	return client.generateStres(req.from, `${res.query}`,"waifu");
	}
	if (res.command.match("simp")) {
	return client.generateStres(req.from, `${res.query}`,"simp");
	}
	if (res.command.match("sherk")) {
	return client.generateStres(req.from, `${res.query}`,"sherk");
	}
	if (res.command.match("nenen")) {
	return client.generateStres(req.from, `${res.query}`,"nenen");
	}
	if (res.command.match("gemeteran")) {
	return client.generateStres(req.from, `${res.query}`,"gemeteran");
	}
	if (res.command.match("koboi")) {
	return client.generateStres(req.from, `${res.query}`,"koboi");
	}
	},{param:functions.needed("name")});
