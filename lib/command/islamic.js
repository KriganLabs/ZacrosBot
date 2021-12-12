 cmd.on('asmaulhusna',['asmaulhusna'],['islamic'],async(msg,{query,client})=> {
let res = await functions.axios.get(botinfo.linkApi.zacros+"/islami/asmaulhusna")
anu = res.data.result
return client.sendText(msg.from, functions.parseResult(anu))
});

cmd.on('doaseharian',['doaseharian'],['islamic'],async(msg,{query,client})=> {
let res = await functions.axios.get(botinfo.linkApi.zacros+"/islami/doaseharian")
anu = res.data.result
return client.sendText(msg.from, functions.parseResult(functions.randomize(anu)))
});

cmd.on('quran',['quran','randomquran'],['islamic'],async(msg,{query,client})=> {
let res = await functions.axios.get(botinfo.linkApi.zacros+"/islami/quran")
anu = res.data.result
await client.sendText(msg.from, functions.parseResult(anu,{title: "Random Quran"}))
return client.sendAudio(msg.from, anu.audio)
});
