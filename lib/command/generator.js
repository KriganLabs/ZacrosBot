cmd.on('stres',['swaifu','wangy','pregnant','simp','sherk','gemeteran','nenen','koboi'],['generator'],async(msg, {query, client, command, commandNpref}) => {
	return client.generateStres(msg.from, `${query.toUpperCase()}`, command)
	},{param:functions.needed("name"),query:`Masukan Namanya!\n\nPenggunaan : ${commandNpref} *nama*\nExample : ${commandNpref} zyy`});
