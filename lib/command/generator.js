cmd.on('stres',['waifu','wangy','pregnant','simp','sherk','gemeteran','nenen','koboi'],['generator'],async(req, res) => {
	if (!res.query) return client.reply(req, "Masukan Namanya!\nContoh : .wangy danski");
	if (res.command.match("wangy")) {
	return client.generateStres(req.from, `${res.query.toUpperCase()}`, "wangy");
	}
	if (res.command.match("pregnant")) {
	return client.generateStres(req.from, `${res.query}`,"pregnant");
	}
	if (res.command.match("waifu")) {
	return client.generateStres(req.from, `${res.query.toUpperCase()}`,"waifu");
	}
	if (res.command.match("simp")) {
	return client.generateStres(req.from, `${res.query}`,"simp");
	}
	if (res.command.match("sherk")) {
	return client.generateStres(req.from, `${res.query}`,"sherk");
	}
	if (res.command.match("nenen")) {
	return client.generateStres(req.from, `${res.query.toUpperCase()}`,"nenen");
	}
	if (res.command.match("gemeteran")) {
	return client.generateStres(req.from, `${res.query}`,"gemeteran");
	}
	if (res.command.match("koboi")) {
	return client.generateStres(req.from, `${res.query}`,"koboi");
	}
	},{param:functions.needed("name")});
