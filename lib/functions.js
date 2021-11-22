const fs = require('fs')
const fetch = require('node-fetch');
const util = require('util');
const cheerio = require('cheerio') ;
const ytSearch = require('yt-search');
const googleSearch = require('google-it')
const FileType = require('file-type');
const spin = require('spinnies');
const axios = require('axios');
const jimp = require('jimp')
const moment = require('moment-timezone');
const chalk = require('chalk');
const performance = require('performance-now');
const ffmpeg = require('fluent-ffmpeg');
const googleImage = require('g-i-s');
const Crypto = require('crypto');
const fakeUa = require('fake-useragent');
const baileys = require('@adiwajshing/baileys');
const qrcode = require('qrcode');
const cookie = require('cookie');
const PhoneNumber = require("awesome-phonenumber");
const FormData = require('form-data')
const { exec, spawn, execSync } = require('child_process');


exports.Functions = class Functions {
constructor(){
this.qrcode = qrcode;
this.ffmpeg = ffmpeg;
this.fakeUa = fakeUa;
this.exec = exec;
this.spins = spin;
this.spawn = spawn;
this.baileys = baileys;
this.cheerio = cheerio;
this.moment = moment;
this.util = util;
this.fs = fs;
this.PhoneNumber = PhoneNumber;
this.fetch = fetch;
this.axios = axios;
this.util = util;
this.FileType = FileType;
this.ytSearch = ytSearch;
this.chalk = chalk;
this.animate = new spin();
}

pad(num) {
return (num < 10 ? '0' : '') + num;
}

logLoading(teks){
if (!Object.keys(this.animate.spinners).includes("Loading")){
this.animate.add('Loading',{text:teks});
} else {
this.animate.update('Loading',{text:teks});
}
return;
}

readmore(length){
return String.fromCharCode(3000).repeat(length)
}

needed(str){
return botinfo.unicode.needed[0]+str+botinfo.unicode.needed[1]
}


linkwa(nama){

	return new Promise((resolve,reject) => {
	axios.get('http://ngarang.com/link-grup-wa/daftar-link-grup-wa.php?search='+ nama +'&searchby=name')
	.then(({ data }) => {
	const $ = cheerio.load(data);
	const result = [];
	const lnk = [];
	const nm = [];
	$('div.wa-chat-title-container').each(function(a,b){
	const limk = $(b).find('a').attr('href');
	lnk.push(limk)
	})
        $('div.wa-chat-title-text').each(function(c,d) {
	const name = $(d).text();
	nm.push(name)
	})
	for( let i = 0; i < lnk.length; i++){
	result.push({
	nama: nm[i].split('. ')[1],
	link: lnk[i].split('?')[0]
	})
	}
	resolve(result)
	})
	.catch(reject)
	})
}

parseMention(text) {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

formatDate(n, locale = 'id') {
  let d = new Date(n)
  return d.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  })
}

optional(str){
return botinfo.unicode.optional[0]+str+botinfo.unicode.optional[1]
}

random(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

strong() {
    let string = "1234567890ABCDEFGIJKLMNOPQRSTUVWXYZabcdefgijklmnopqrstuvwxyz`~!@#$%^&*()_+=";
    let ranInt = this.random(0,string.length - 1);
    return string[ranInt];
}

memorable() {
    let string = "1234567890ABCDEFGIJKLMNOPQRSTUVWXYZabcdefgijklmnopqrstuvwxyz";
    let ranInt = this.random(0,string.length - 1);
    return string[ranInt];
}

strongPass(x){
    let ranPass = "";
    if(x != null){
        for(let i=0; i < x.length; i++){
            let rx = x[i];
            ranPass += rx == "x" ? this.strong() : rx;
        }
    }
    return ranPass;
}

memorablePass(x){
    let ranPass = "";
    if(x != null){
        for(let i=0; i < x.length; i++){
            let rx = x[i];
            ranPass += rx == "x" ? this.memorable() : rx;
        }
    }
    return ranPass;
}

logColor(text,color){
return chalk.keyword(color)(text);
}

parseResult(json, options = {}) {
  let {list,head,upper,down,line} = botinfo.unicode
    let opts = {
      unicode: true,
      ignoreVal: [null, undefined],
      ignoreKey: [],
      title: botinfo.botname,
      headers: `${head} *%title* ${head}\n`,
      body: `${list} *%key*: %value`,
      footer: '\n'+head+line+line+line+line+line+line+line+line+line+list+'\n',
      ...options,
    };
    let { unicode, ignoreKey, title, headers, ignoreVal, body, footer } = opts;

    let obj = Object.entries(json);
    let tmp = [];
    for (let [_key, val] of obj) {
      if (ignoreVal.indexOf(val) !== -1) continue;
      let key = _key[0].toUpperCase() + _key.slice(1);
      let type = typeof val;
      if (ignoreKey && ignoreKey.includes(_key)) continue;
      switch (type) {
        case 'boolean':
          tmp.push([key, val ? 'Ya' : 'Tidak']);
          break;
        case 'object':
          if (Array.isArray(val)) {
            tmp.push([key, val.join(', ')]);
          } else {
            tmp.push([
              key,
              this.parseResult(val, { ignoreKey, unicode: false }),
            ]);
          }
          break;
        default:
          tmp.push([key, val]);
          break;
      }
    }
    if (unicode) {
      let text = [
        headers.replace(/%title/g, title),
        tmp
          .map((v) => {
            return body.replace(/%key/g, v[0]).replace(/%value/g, v[1]);
          })
          .join('\n'),
        footer,
      ];
      return text.join('\n').trim();
    }
    return tmp;
}

createExif(packname, authorname, filename) {
if (!filename) filename = 'data';
let json = {
'sticker-pack-id': 'CreateByAqul-RemasteredByZbin',
'sticker-pack-name': packname,
'sticker-pack-publisher': authorname,
};
let stringify = JSON.stringify(json).length;
let f = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00]);
let code = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00];
if (stringify > 256) {
stringify = stringify - 256;
code.unshift(0x01);
} else {
code.unshift(0x00);
 }
let fff = Buffer.from(code);
const ffff = Buffer.from(JSON.stringify(json));
if (stringify < 16) {
stringify = stringify.toString(16);
stringify = '0' + stringify;
} else {
stringify = stringify.toString(16);
}
const ff = Buffer.from(stringify, 'hex');
const buffer = Buffer.concat([f, ff, fff, ffff]);
if (!fs.existsSync('tmp')) fs.mkdirSync('tmp');
fs.writeFileSync(`./tmp/${filename}.exif`, buffer);
return `./tmp/${filename}.exif`;
}

randomize(obj){
if (obj instanceof Array) return obj[Math.floor(Math.random()*obj.length)]
if (typeof obj == 'number') return Math.floor(Math.random()*obj)
}
  
getTime(format,date) {
if (date){
return moment(date).locale('id').format(format);
} else {
return moment.tz('Asia/Jakarta').locale('id').format(format);
}
}

sizeName(number) {
let tags = ["", "K", "M", "G", "T", "P", "E"];
let tier = Math.log10(Math.abs(number)) / 3 | 0;
if (tier == 0) return number;
let tag = tags[tier];
let scale = Math.pow(10, tier * 3);
let scaled = number / scale;
let formatted = scaled.toFixed(1);
if (/\.0$/.test(formatted))
formatted = formatted.substr(0, formatted.length - 2);
return formatted + tag + 'b';
}

isUrl(url) {
	return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'));
}

parseRegex(string) {
return string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
}

count(sec) {
let day = functions.pad(Math.floor(sec / (60*60*24)));
let hours = this.pad(Math.floor(sec / (60*60)));
let minutes = this.pad(Math.floor(sec % (60*60) / 60));
let seconds = this.pad(Math.floor(sec % 60));
return {day,hours,minutes,seconds};
}

async metadataMsg(client,msg) {
let chatMeta = async(mess) => {
mess = JSON.parse(JSON.stringify(mess))
mess.message = {...mess?.message}
mess.key = {...mess?.key}
mess.sender = {}
mess.realType = Object.keys(mess.message)[0]
mess.message = mess.realType == 'ephemeralMessage'?mess.message.ephemeralMessage.message:mess.message
mess.message = mess.realType == 'viewOnceMessage'? mess.message[mess.realType].message : mess.message
mess.type = Object.keys(mess.message)[0]
mess.data = typeof mess.message[mess.type]== "object" ? Object.keys(mess.message[mess.type]).includes("contextInfo") ? Object.keys(mess.message[mess.type]).concat(Object.keys(mess.message[mess.type].contextInfo)) : Object.keys(mess.message[mess.type]) : Object.keys(mess.message)
mess.string = (mess.type === baileys.MessageType.text) ? mess.message.conversation : (mess.data.includes('caption')) ? mess.message[mess.type].caption : (mess.type == baileys.MessageType.extendedText) ? mess.message[mess.type].text : (mess.type == 'buttonsResponseMessage') ? mess.message[mess.type].selectedButtonId : (mess.type == 'listResponseMessage') ? mess.message[mess.type].singleSelectReply.selectedRowId :''
mess.body = mess.message[mess.type]
mess.from = mess.key.remoteJid
mess.isGroup = mess.from.endsWith('g.us')
mess.sender.jid= mess.isGroup ? mess.participant ? mess.participant : client.user.jid : mess.key.remoteJid
mess.sender.name = client.contacts[mess.sender.jid] ? client.contacts[mess.sender.jid].name || client.contacts[mess.sender.jid].vname || client.contacts[mess.sender.jid].notify || client.contacts[mess.sender.jid].short || 'Unknown' : 'Unknown';
mess.client = {};
mess.client.name = client.user.name;
mess.client.jid = client.user.jid;
mess.mentionedJid = mess.data.includes('contextInfo') && mess.data.includes('mentionedJid')? mess.message[mess.type].contextInfo.mentionedJid : false;
mess.isText = mess.type == 'conversation' || mess.type == 'extendedTextMessage'
mess.isMedia = !mess.isText
mess.id = mess.key.id
mess.fromMe = mess.key.fromMe
mess.quotedMsg = mess.data.includes('contextInfo') && mess.data.includes('quotedMessage')?{key:{remoteJid:mess.from,fromMe:mess.message[mess.type].contextInfo.participant == client.user.jid,id:mess.message[mess.type].contextInfo.stanzaId},message:mess.message[mess.type].contextInfo.quotedMessage,participant: mess.message[mess.type].contextInfo.participant}:false
mess.isOwner = botinfo.ownerNumber.includes(mess.sender.jid.split('@')[0]) || mess.key.fromMe
mess.groupData = mess.isGroup ? client.chats.get(mess.from) : false
mess.groupData = mess.groupData ? {...mess.groupData,...mess.groupData?.metadata} : false;
delete mess.groupData.metadata;
delete mess.groupData.messages;
var x = await this.ambilSender(client, mess) || {}
mess.groupData = mess.groupData ? {...mess?.groupData,...x} : false
mess.sender = {...x?.sender,...mess?.sender}
mess.client = {...x?.client,...mess?.client}


//function
mess.downloadMsg = async(save,auto_ext = true) => {
if (mess.isText) return;
let buffer = await client.downloadMediaMessage(mess);
let anu = await FileType.fromBuffer(buffer) || {ext:'bin',mime:'application/octet-stream'}
if (save){
save = auto_ext?save+'.'+anu.ext:save
fs.writeFileSync(save,buffer);
return {buffer,filename:save,...anu};
} else {
return {buffer,...anu};
}
};
mess.deleteMsg = async(forAll) => {
if (forAll) return await client.deleteMessage(mess.key.remoteJid,mess.key);
return await client.clearMessage(mess.key);
};
mess.loadQuotedMsg = async() => {
if (!mess.quotedMsg) return;
return await chatMeta(await client.loadMessage(mess.from,mess.quotedMsg.key.id))
};
mess.reloadMsg = async() => {
return await chatMeta(await client.loadMessage(mess.from,mess.key.id))
};
mess.resendMsg = async(jid,opt) => {
return await client.sendMessageFromContent(jid,mess.message,opt);
};
mess.forwardMsg= async(jid,force,opt) => {
let message = await client.generateForwardMessageContent(mess,force)
return client.sendMessageFromContent(jid,message,opt)
}
mess.modifyMsg = async(object) => {
return {...mess,...object}
}
mess.groupMetadata = async() => {
if(!mess.isGroup) return;
let groupMetadata =  mess.groupData?.participants ? mess.groupData : await client.groupMetadata(mess.from).catch(e => {});
groupMetadata.client = (groupMetadata.participants.find(res => res.jid == client.user.jid)) || {isAdmin:false,isSuperAdmin:false,jid:client.user.jid}
groupMetadata.client.isAdmin = groupMetadata?.client?.isAdmin || groupMetadata?.client?.isSuperAdmin
groupMetadata.sender = (groupMetadata.participants.find(ros => ros.jid == mess.sender.jid)) || {isAdmin:false,isSuperAdmin:false,jid:mess.sender.jid}
groupMetadata.sender.isAdmin = groupMetadata?.sender?.isAdmin || groupMetadata?.sender?.isSuperAdmin 
groupMetadata.groupAdmins = groupMetadata.participants.filter(tr => tr.isAdmin || tr.isSuperAdmin) || []
groupMetadata.groupMembers = groupMetadata.participants.filter(tr => !tr.isAdmin || !tr.isSuperAdmin) || []
mess.sender = {...groupMetadata.sender,...mess?.sender}
mess.client = {...groupMetadata.client,...mess?.client}
return {
	...groupMetadata
}
}
mess.quotedMsg = mess.quotedMsg ? await chatMeta(mess.quotedMsg) : false
return mess;
};
return await chatMeta(msg)
}

async ambilSender(client, mess) {
if(!mess.isGroup) return;
let groupMetadata =  mess.groupData?.participants ? mess.groupData : await client.groupMetadata(mess.from).catch(e => {});
groupMetadata.client = (groupMetadata.participants.find(res => res.jid == client.user.jid)) || {isAdmin:false,isSuperAdmin:false,jid:client.user.jid}
groupMetadata.client.isAdmin = groupMetadata?.client?.isAdmin || groupMetadata?.client?.isSuperAdmin
groupMetadata.sender = (groupMetadata.participants.find(ros => ros.jid == mess.sender.jid)) || {isAdmin:false,isSuperAdmin:false,jid:mess.sender.jid}
groupMetadata.sender.isAdmin = groupMetadata?.sender?.isAdmin || groupMetadata?.sender?.isSuperAdmin 
groupMetadata.groupAdmins = groupMetadata.participants.filter(tr => tr.isAdmin || tr.isSuperAdmin) || []
groupMetadata.groupMembers = groupMetadata.participants.filter(tr => !tr.isAdmin || !tr.isSuperAdmin) || []
mess.sender = {...groupMetadata.sender,...mess?.sender}
mess.client = {...groupMetadata.client,...mess?.client}
return {
	...groupMetadata
}
}

async searchImage(query) {
return new Promise(async (resolve,reject) => {
await googleImage(query,resultImage)
function resultImage(error,result) {
if (error) reject(error)
if (result) resolve(result)
}
})
}

async delay(ms) {
 return new Promise(resolve => setTimeout(resolve, ms))
}

       async run(client){
       try {
       await this.start();
       for (let a of fs.readdirSync('./lib/command')) require(`./command/${a}`)
       for (let b of fs.readdirSync('./lib/actions')) require(`./actions/${b}`);
       await this.delay(1000);
       this.animate.succeed('Loading',{text:'Checking And Adding New Command Succd'});
       client.version = [2, 2140, 12]
       client.logger.level = 'error';
       client.browserDescription = ['Zacros-Bot','Flock','3.0'];
       botinfo.session && await client.loadAuthInfo(botinfo.session);
       await client.connect({timeoutMs: 30000});
       } catch(e) {
       console.log(e)
       }
       }

async start (){
console.clear()
let kali = fs.readFileSync('./src/kali.cat').toString()
console.log(this.logColor(kali,'silver'))
console.log(this.logColor(`Starting Running Bot......`,'silver'))
await this.delay(3000)
console.clear()
console.log(this.logColor(`Hai, selamat datang owner`,'silver'))
await this.delay(1)
}


async googleSearch(query) {
return googleSearch({query})
}

}
exports.WAConnection = class WAConnection extends baileys.WAConnection {
		 async reply(mess, text, opt) {
		  return await this.sendMessage(mess.key.remoteJid, util.format(text), baileys.MessageType.extendedText, { quoted:mess, ...opt})
		  } 
     async getBuffer(path,save,auto_ext=true){
       let buffer = Buffer.isBuffer(path) ? path : /^data:.?\/.?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path, { headers: { 'User-Agent': fakeUa()}})).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : typeof path === 'string' ? path : Buffer.alloc(0);
       let anu = await FileType.fromBuffer(buffer) || {ext:'bin',mime:'application/octet-stream'}
       if (save) {
       save = auto_ext?save+'.'+anu.ext:save
       fs.writeFileSync(save,buffer)
       return {filename: save,buffer,...anu}
       } else {
        return {buffer,...anu}
       }
      }
     async sendMessageFromContent(jid,obj,opt={}){
     let prepare = await this.prepareMessageFromContent(jid,obj,opt)
    await this.relayWAMessage(prepare)
    return prepare
     }
     async fakeReply(jid,message,type,opt,fakeJid,participant,fakeMessage){
     return await this.sendMessage(jid,message,type,{
  quoted: { key: {fromMe: jid == this.user.jid, participant,remoteJid: fakeJid },
"message": fakeMessage}, 
...opt
})
     }
     getMentionedJidList(text){
		try{
			return text.match(/@(\d*)/g).map(x => x.replace('@', '')+'@s.whatsapp.net')||[];
		} catch(e){
			return []
		}
  	}
     async prepareSticker(path,exifFile){
       let getBuf = (await this.getBuffer(path))
       let {ext,mime} = getBuf 
       let buf = getBuf.buffer
       if (!fs.existsSync("./tmp")) fs.mkdirSync('tmp')
       let fileName = `./tmp/${Date.now()}.${ext}`
       let output = fileName.replace(ext,'webp')
       fs.writeFileSync(fileName,buf)
       if (ext == 'webp'){
         if (exifFile){
         return new Promise((resolve,reject) => {
         exec(`webpmux -set exif ${exifFile} ${output} -o ${output}`,(err) => { 
           if (err) throw err 
        let result = fs.readFileSync(output)
       fs.unlinkSync(output)
       resolve(result)
         })
         })
         } else {
       let result = fs.readFileSync(output)
       fs.unlinkSync(output)
       return result
         }
       }
       return new Promise(async(resolve,reject) => {
         await ffmpeg(fileName).input(fileName).on('error', function (err) { 
           fs.unlinkSync(fileName)
           reject(err)
}).on('end', function () {
if (exifFile) {
exec(`webpmux -set exif ${exifFile} ${output} -o ${output}`,(err) => { 
if (err) return err
let result = fs.readFileSync(output)
fs.unlinkSync(fileName)
fs.unlinkSync(output)
resolve(result)
})
} else {
let result = fs.readFileSync(output)
fs.unlinkSync(fileName)
fs.unlinkSync(output)
resolve(result)
}
}).addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`]).toFormat('webp').save(output)
       })
     }
     async toImage(jid,path,caption,quoted,opt){
     let buff = (await this.getBuffer(path)).buffer
     return await this.sendMessage(jid,buff,'imageMessage',{quoted,caption,thumbnail: buff,...opt})
     }
     async sendImage(jid,path,caption,opt){
     let buff = (await this.getBuffer(path)).buffer
     return await this.sendMessage(jid,buff,'imageMessage',{caption,...opt})
     }
     async sendAudio(jid,path,caption,opt){
     let buff = (await this.getBuffer(path)).buffer
     return await this.sendMessage(jid,buff,'audioMessage',{caption,...opt})
     }
     async sendVideo(jid,path,caption,opt){
     let buff = (await this.getBuffer(path)).buffer
     return await this.sendMessage(jid,buff,'videoMessage',{caption,...opt})
     }
     async sendLocation(jid,property,opt){
     return await this.sendMessageFromContent(jid,{locationMessage: property},opt)
     }
     async sendText(jid, text, quoted) {
     return await this.sendMessage(jid, text, baileys.MessageType.text, {quoted: quoted, contextInfo: { externalAdReply: { title: botinfo.botname, "body": `multipurpose WhatsApp bot using baileys library!`,thumbnailUrl: botinfo.thumb, sourceUrl: 'wa.me/+6283153448697' }}})
     }
     async sendLiveLocation(jid,property,opt){
     return await this.sendMessageFromContent(jid,{liveLocationMessage:property},opt)
     }
     async sendProduct(jid,property,opt){
      return await this.sendMessageFromContent(jid,{productMessage:property},opt)
     }
     async sendButton(jid, message, type, button = [], opt = {}) {
        message = (
            await this.prepareMessage(`0@s.whatsapp.net`, message, type, opt).catch(async(e) => {
          let err = util.format(e).toLowerCase()
          if (err.includes('marker')){
          return await this.prepareMessage(`0@s.whatsapp.net`,message,type,{...opt,thumbnail:await this.resizeImage(message,'48x48')})
          } else if (err.includes('this.isZero')){
            return await this.prepareMessage(`0@s.whatsapp.net`,message,type,{...opt,quoted:null})
          }
        })
        ).message;
        let isMedia = !(type == 'conversation' || type == 'extendedTextMessage');
        message = message[type] || message;
        let headerType = type
            .toUpperCase()
            .replace('MESSAGE', '')
            .replace(`EXTENDED`, '')
            .replace(`CONVERSATION`, 'EMPTY')
            .trim();
        let buttons = [];
        for (let a of button) {
            buttons.push({ type: 'RESPONSE', buttonText: { displayText: a.text }, buttonId: a.id });
        }
        let contentText =
            opt.content || (type == baileys.MessageType?.text
                ? message.extendedTextMessage?.text
                : Object.keys(message).includes('caption')
                ? message.caption
                : ' ');
        let footerText = opt.footer;
        let content = isMedia ? { [type]: message } : headerType == 'TEXT' ? { ...message } : {};
        return this.sendMessageFromContent(
            jid,
            { buttonsMessage: { contentText, footerText, headerType, buttons, ...content } },
            { ...opt },
        );
     }
     async sendFileFromUrl(id, url, qu, caption="", filename="file",opt={}){
        const buffers = await axios(url, {headers: {'User-Agent':'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.585 Mobile Safari/534.11+'},responseType: "arraybuffer", ...opt.headers}).catch(e =>{throw e})
	var mimtype = buffers.headers["content-type"]
	mimtype = mimtype == 'image/gif' ? 'video/gif' : mimtype == 'image/jpg' ? 'image/jpeg' : mimtype
	const msgtype = mimtype && mimtype.includes('image') ? 'imageMessage' : mimtype && mimtype.includes('audio') ? 'audioMessage' : mimtype && mimtype.includes('video') || mimtype && mimtype.includes('gif')  ? 'videoMessage' : 'documentMessage'
	filename = mimtype == 'image/jpeg' ? null : filename
	mimtype = mimtype == 'image/jpeg' ? null : mimtype
	return await this.sendMessage(id, buffers.data, msgtype, {quoted: qu, mimetype: mimtype, filename:filename,caption:caption, contextInfo:{"mentionedJid": this.getMentionedJidList(caption)}, ...opt})
      } 
      async sendHidetag(jid, message,type) {
	const gcx = await this.groupMetadata(jid)
        const mememl = gcx['participants']
	const memelx = []
        mememl.map( async adm => {
        memelx.push(adm.id.replace('c.us', 's.whatsapp.net'))
	  })
	const bslx = {
	text: message,
	contextInfo: { mentionedJid: memelx }
	}
	return this.sendMessage(jid, bslx, type)
	}      
       async generateStres(jid,name,type) {

     	if (type === "pregnant") {
        return await this.sendText(jid, `I would literally never stop trying to impregnate ${name}. Every day I would wake her up by coming in her and every night I would cum in her right before going to sleep, which I would do with my dick stuck insider her. I would take some viagra before bed just to maintain my erection so that she'll be ready in the morning when I thrust into her like an animal and slather her in kisses. Part of our wedding vows would be to have as many children as physically possible. I wouldn't even care if she's already pregnant, I'll fuck her while she's pregnant and she'll get double pregnant. I'll fill her with so much cum every day that she'll look pregnant even when she isn't (which she'll never be after we're married) I would do everything in my power to make ${name} as fertile as possible. I'd give her fertility drugs, I'd give her uterus massages, breast massages, I wouldn't let her go 12 hours without at least one spastic orgasm. I'll even bake her home made lactation inducing biscuits to help her get to a point of hyperlactation syndrome so that she'll be seeping out multiple quarts of milk per day. Which I will save and drink just so that I can tell her how delicious it is. I'll make her so fertile that triplets will be the minimum number she's carrying at any given time. I would literally never stop doting on her, I would respond to her every beck and call and I would cum inside her again each time she asks for something. She would be so pregnant all the time that she would literally not be able to stand up straight anymore even after menopause. Her spine would be permanently bent out of shape to accommodate a pregnant belly. Even after she can't get pregnant anymore I would just keep putting more eggs into her. I would clone her purely so that I can put fresh eggs from the clone inside her after she runs out of them. She would have so much progesterone running through her veins at any given time that even the thought of not being pregnant would seem alien to her.`)
        }
        if (type === "wangy") {
        return await this.sendText(jid, `${name} ${name} ${name}  ❤️ ❤️ ❤️ WANGI WANGI WANGI WANGI HU HA HU HA HU HA, aaaah baunya rambut ${name} wangi aku mau nyiumin aroma wanginya ${name} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${name} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${name} AAAAA LUCCUUUUUUUUUUUUUUU............${name} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${name} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${name} gw ...${name} di laptop ngeliatin gw, ${name} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${name} aku gak mau merelakan ${name} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${name} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`)
        }
        if (type === "gemeteran") {
        return await this.sendText(jid, `Bro, gue gemeteran. GUE GEMETERAN ANJING Gue gak pernah mau berkembangbiak dengan siapapun lebih daripada seorang ${name}. Badannya yang cakep, TETE GEDE, pinggul seksi dari seorang BIDADARI. Jujur aja, sakit hati kalau tau KENYATAANNYA gue GAK AKAN PERNAH BISA BUAT KAWIN SAMA DIA, ngewarisin gen gue lewat dia, dan ngebiarin dia ngelahirin anak yang sempurna dari gue.Gue rela ngelakuin APAPUN demi kesempatan buat bikin ${name} hamil. A P A P U N. Dan gue bener-bener gk bisa terima kenyataan. Kenapa Authornya rela bikin suatu hal yang sempurna kyk dia? Buat ngegoda kita? NGETAWAIN KITA DI DEPAN MUKA?SUMPAH BRO, GUE UDAH BENER BENER GAK TAHAN. ANJING.`)
        }
        if (type === "simp") {
        return await this.sendText(jid, `Buruan, panggil gue SIMP, ato BAPERAN. ini MURNI PERASAAN GUE. Gue pengen genjot bareng ${name}. Ini seriusan, suaranya yang imut, mukanya yang cantik, apalagi badannya yang aduhai ningkatin gairah gue buat genjot ${name}. Setiap lapisan kulitnya pengen gue jilat. Saat gue mau crot, gue bakal moncrot sepenuh hati, bisa di perut, muka, badan, teteknya, sampai lubang burit pun bakal gue crot sampai puncak klimaks. Gue bakal meluk dia abis gue moncrot, lalu nanya gimana kabarnya, ngrasain enggas bareng saat telanjang. Dia bakal bilang kalau genjotan gue mantep dan nyatain perasaannya ke gue, bilang kalo dia cinta ama gue. Gue bakal bilang balik seberapa gue cinta ama dia, dan dia bakal kecup gue di pipi. Terus kita ganti pakaian dan ngabisin waktu nonton film, sambil pelukan ama makan hidangan favorit. Gue mau ${name} jadi pacar, pasangan, istri, dan idup gue. Gue cinta dia dan ingin dia jadi bagian tubuh gue. Lo kira ini copypasta? Kagak cok. Gue ngetik tiap kata nyatain prasaan gue. Setiap kali elo nanya dia siapa, denger ini baik-baik : DIA ISTRI GUE. Gue sayang ${name}, dan INI MURNI PIKIRAN DAN PERASAAN GUE.`)
        }
        if (type === "nenen") {
        return await this.sendText(jid, `NENEN NENEN KEPENGEN NENEN SAMA ${name}. TETEK GEDE NAN KENCANG MILIK ${name} MEMBUATKU KEPENGEN NENEN. DIBALUT PAKAIAN KETAT YANG ADUHAI CROOOOTOTOTOTOTOT ANJING SANGE GUA BANGSAT. ${name}, PLIS DENGERIN BAIK BAIK. TOLONG BUKA BAJU SEBENTAR SAJA PLISSS TOLOOONG BANGET, BIARKAN MULUT KERINGKU BISA MENGECAP NENEN ${name}. BIARKAN AKU MENGENYOT NENENMU ${name}. AKU RELA NGASIH SESEMBAHAN APA AJA BERAPAPUN ITU DUIT YANG AKU BAKAR KHUSUS TERKHUSUS BUATMU. TAPI TOLOOOONG BANGET BUKA BAJUMU AKU MAU NENEN. NENEN NENEEEEN NENEN ${name} WANGIIII`)
        }
        if (type === "waifu") {
        return await this.sendText(jid, `Sejujurnya gw ga nyangka ama tindakan lo yg ga dewasa begini Kita udh temenan dri kecil ,melalui berbagai kenangan ,tapi sikaplo begini ke gw ,ga habis pikir. Padahal sudah berjanji tidak mengusik hubungan satu sama lain lagi ,tapi maksud tindakan mu sekarang ini apa? Tiba tiba di pagi bangun tidur lu make Pp ${name}. Lu kira lucu begitu anjing? Make waifu pp org seenaknya? Ngeklaim pula bangsad maksudnya apa apaan coba . Pertemanan dari kecil kita ga dihargai sama sekali. Gw tunggu klarifikasi lo.`)
        }
        if (type === "sherk") {
        return await this.sendText(jid, `Usiaku 22 tahun. Aku sangat mencintai ${name}, aku punya semua Figurine dan wallpapernya. Aku berdoa setiap malam dan berterima kasih atas segala hal yang telah ia berikan kepadaku. "${name} adalah cinta" aku bilang "${name} adalah Tujuan Hidupku". Temanku datang ke kamarku dan berkata "HALU LU ANJING !!". Aku tau dia cemburu atas kesetiaanku kepada ${name}. Lalu kukatakan padanya "BACOT NJING !!". Temanku menampol kepalaku dan menyuruhku untuk tidur. Kepalaku sakit dan aku menangis. Aku rebahan di kasur yang dingin, lalu ada sesuatu yang hangat menyentuhku. Ternyata ${name} datang ke dalam kamarku, Aku begitu senang bertemu ${name}. Dia membisikan ke telingaku, "Kamu adalah impianku" Dengan tangannya dia meraih diriku. Aku melebarkan pantatku keatas demi ${name}. Dia menusukan sesuatu kedalam Anggusku. begitu sakit, tapi kulakukan itu demi ${name}. Aku ingin memberikan kepuasan kepada ${name}. Dia meraum bagaikan singa, disaat dia melepaskan cintanya kedalam Anggusku. Temanku masuk kekamarku dan berkata "....... Anjing". ${name} melihat temanku dan berkata " Semua sudah berakhir" Dengan menggunakan kemampuannya Stellar Restoration ${name} pergi meninggalkan kamarku. "${name} itu cinta" "${name} itu kehidupan".`)
        }
        if (type === "koboi") {
        return await this.sendText(jid, `Koboi fesbuk, koboi fesbuk, koboi fesbuk, koboi fesbuk\n${name} koboi fesbuk ${name} koboi fesbuk kalo gak senang, akun mengenang\n\nsore sore pukul tiga ${name} baru pulang kerja\niseng buka fb nemu postingan di beranda\n${name} coba baca baca dan ternyata oh ternyata\npostingannya tidak sopan waifu ${name} dihina\n\nlantas ${name} bertanya sudah keras kah anda\nbuat postingan kaya begini maksudnya apa\n${name} suruh hapus postnya tapi dia keras kepala\nkalau udah begini ${name} kenangkan saja\n\nsaat ${name} bilang begitu dia hanya tertawa\ndia meremehkan ${name} seolah tidak percaya\ntapi ${name} tidak mundur dengan begitu saja\nakunmu kan mengenang coba kita lihat saja\n\nlangsung ${name} eksekusi dalam sekejap mata\n${name} hitung sampai tiga akunmu tak berdaya\njika nanti kau lihat profilmu sudah berbunga\njanganlah kau bertanya ini ulah siapa`)
        } 
        }
       async sendMessage(id, message, type, options = {}) {
        let waMessage = await this.prepareMessage(id, message, type, options).catch(async(e) => {
          let err = util.format(e).toLowerCase()
          if (err.includes('marker')){
          return await this.prepareMessage(id,message,type,{...options,thumbnail:await this.resizeImage(message,'48x48')})
          } else if (err.includes('this.isZero')){
            return await this.prepareMessage(id,message,type,{...options,quoted:null})
          }
        })
        await this.relayWAMessage(waMessage, { waitForAck: options.waitForAck !== false });
        return waMessage;
       }
       async resizeImage(path,size){
       if (!fs.existsSync('tmp')) fs.mkdirSync('tmp');
       let buffer = await this.getBuffer(path,'./tmp/'+Date.now().toString())
       if (!buffer.mime.includes('image')) return
       return new Promise((resolve,reject) => {
       exec(`mogrify -resize ${size} ${buffer.filename}`,(e,o) => {
       if (e) return reject(e)
       resolve(fs.readFileSync(buffer.filename))
       fs.unlinkSync(buffer.filename)
       return
       })
       })
       }
       async getBuffer(path,save,auto_ext=true){
       let buffer = Buffer.isBuffer(path) ? path : /^data:.?\/.?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path, { headers: { 'User-Agent': fakeUa()}})).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : typeof path === 'string' ? path : Buffer.alloc(0);
       let anu = await FileType.fromBuffer(buffer) || {ext:'bin',mime:'application/octet-stream'}
       if (save) {
       save = auto_ext?save+'.'+anu.ext:save
       fs.writeFileSync(save,buffer)
       return {filename: save,buffer,...anu}
       } else {
        return {buffer,...anu}
       }
      }
       async sendContact(jid, name, number, quoted, opt){
       number = number.replace(/[^0-9]/g, '')
       let njid = number + '@s.whatsapp.net'
       let { isBusiness } = await this.isOnWhatsApp(njid) || { isBusiness: false }
       let vcard = `
       BEGIN:VCARD
       VERSION:3.0
       N:;${name.replace(/\n/g, '\\n')};;;
       FN:${name.replace(/\n/g, '\\n')}
       TEL;type=CELL;type=VOICE;waid=${number}:${PhoneNumber('+' + number).getNumber('international')}${isBusiness ? `
       X-WA-BIZ-NAME:${(this.contacts[njid].vname || this.getName(njid)).replace(/\n/, '\\n')}
       X-WA-BIZ-DESCRIPTION:${((await this.getBusinessProfile(njid)).description || '').replace(/\n/g, '\\n')}
       ` : ''}
       END:VCARD
       `.trim()
       return await this.sendMessage(jid, {displayname: name, vcard}, 'contactMessage', {quoted, ...opt})
       }
       async sendSticker(jid,path,opt,exifFile){
       let prepare;
       if (exifFile){
         prepare = await this.prepareSticker(path,exifFile)
       } else {
       prepare = await this.prepareSticker(path)
       }
       return await this.sendMessage(jid,prepare,baileys.MessageType.sticker,opt)
     }
    }
