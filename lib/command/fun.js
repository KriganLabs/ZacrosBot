
cmd.on('dare',['dare'],['fun'],async(msg, {
  command, client}) => {
 res = await functions.axios.get(`https://exneph-api.herokuapp.com/api/random/dare?apikey=ZYY`)
anu = res.data.result
return client.sendText(msg.from,`Dare\n\n${anu}`,msg)
},{usedPrefix:true});

cmd.on('truth',['truth'],['fun'],async(msg, {
  command, client}) => {
 res = await functions.axios.get(`https://exneph-api.herokuapp.com/api/random/truth?apikey=ZYY`)
anu = res.data.result
return client.sendText(msg.from,`Truth\n\n${anu}`,msg)
},{usedPrefix:true});


