 cmd.on('quotes',['quotes'],['random'],async(req,res) => {

let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/randomquote?apikey=ZYY`)

  return res.client.reply(req,`Author : ${anu.data.result.author}\n\n*${anu.data.result.quotes}*`)

},{usedPrefix:true});

 cmd.on('islamiquotes',['islamiquotes'],['random'],async(req,res) => {

let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/randomquote/muslim?apikey=ZYY`)

  return res.client.reply(req,`*${anu.data.result.text_id}*`)

},{usedPrefix:true});

 cmd.on('kanyequotes',['kanyequotes'],['random'],async(req,res) => {

let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/quotes/kanye?apikey=ZYY`)

  return res.client.reply(req,`Author : ${anu.data.result.author}\n\n*Id : ${anu.data.result.text_id}*\n\nEn : *${anu.data.result.text_en}*`)

},{usedPrefix:true});
