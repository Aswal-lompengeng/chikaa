//════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 Xeon Bot Inc. Cheems Bot MD
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//
//recode kar ke youtube pe upload kar rhe hai ya
//codes copy kar ke apne script me dal rhe
//hai to, description me xeon ka yt channel
// ka link paste kr dena as a cradit or github 
//repo me bhi tag kardena baki jo
//bhi karna hai apki marzi, thank you!🦄
//════════════════════════════//
//If you recode and uploading on your channel
//or copy pasting the codes in ur script, 
//i give permission to do as long as you
//put Xeons youtube channel link in the video
//description and tag me on githuh repo, 
//thank you🦄
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}


//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = false //auto reading in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//semt menu variants
global.vidmenu = fs.readFileSync("./XeonMedia/theme/Cheems-bot.mp4") //gif and video menu

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['6282139274897'] //ur owner number
global.ownername = "𝑪𝒉𝒊𝒌𝒂𝒂彡" //ur owner name
global.ytname = "𝑪𝒉𝒊𝒌𝒂 𝑨𝒏𝒈𝒆𝒍𝒊𝒄𝒂" //ur yt chanel name
global.socialm = "GitHub: gk ada" //ur github or insta name
global.location = "indo, jawa, private" //ur location

//bot bomdy 
global.owner = ['6282139274897']
global.ownertag = '6285738641951' //ur tag number
global.botname = '𝑪𝒉𝒊𝒌𝒂𝒂ོ𝑨𝒏𝒈𝒆𝒍𝒊𝒄𝒂' //ur bot name
global.linkz = "https://chat.whatsapp.com/LQKlsamgBjT0XGwmrbwJU6" //your theme url which will be displayed on whatsapp
global.websitex = "https://github.com" //ur website to be displayed
global.botscript = 'https://wa.me/6285738641951' //script link
global.reactmoji = "🐱" //ur menu react emoji
global.themeemoji = "🪐" //ur theme emoji
global.packname = "𝑪𝒉𝒊𝒌𝒂𝒂ོ Stickers" //ur sticker watermark packname
global.author = "𝑳𝒖𝒗𝒊𝒆𝒆彡" //ur sticker watermark author

//Bot theme media
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//damtabase
global.premium = ['6285738641951'] //ur premium numbers
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.sessionName = 'fangz'
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '𝘼𝙡𝙝𝙖𝙢𝙙𝙪𝙡𝙞𝙡𝙡𝙖𝙝 𝘿𝙤𝙣𝙚 𝙠𝙖𝙠 ✓',
    admin: '𝙈𝙖𝙖𝙛 𝙮𝙖 𝙠𝙖𝙠,𝙛𝙞𝙩𝙪𝙧 𝙞𝙣𝙞 𝙝𝙣𝙮𝙖 𝙙𝙥𝙩 𝙙𝙞 𝙖𝙠𝙨𝙚𝙨 𝙤𝙡𝙚𝙝 𝙖𝙙𝙢𝙞𝙣 𝙜𝙧𝙪𝙥🙏',
    botAdmin: '𝐉𝐚𝐝𝐢𝐤𝐚𝐧 𝐚𝐝𝐦𝐢𝐧 𝐝𝐮𝐥𝐮 𝐤𝐚𝐤😅',
    owner: '𝐌𝐚𝐚𝐟 𝐤𝐚𝐤,𝐟𝐢𝐭𝐮𝐫 𝐢𝐧𝐢 𝐡𝐧𝐲𝐚 𝐝𝐩𝐭 𝐝𝐢𝐠𝐮𝐧𝐚𝐤𝐚𝐧 𝐨𝐥𝐞𝐡 𝐨𝐰𝐧𝐞𝐫/𝐩𝐞𝐦𝐢𝐥𝐢𝐤 𝐛𝐨𝐭🙏',
    group: '𝐅𝐢𝐭𝐮𝐫 𝐇𝐧𝐲𝐚 𝐝𝐩𝐭 𝐝𝐢𝐠𝐮𝐧𝐚𝐤𝐚𝐧 𝐝𝐢𝐝𝐥𝐦 𝐠𝐫𝐮𝐩',
    private: '𝐌𝐚𝐚𝐟 𝐤𝐚𝐤,𝐟𝐢𝐭𝐮𝐫 𝐢𝐧𝐢 𝐡𝐧𝐲𝐚 𝐝𝐩𝐭 𝐝𝐢 𝐚𝐤𝐬𝐞𝐬 𝐝𝐢 𝐩𝐫𝐢𝐛𝐚𝐝𝐢 𝐜𝐡𝐚𝐭🙏',
    bot: 'This Feature Is Only For Bot😉',
    wait: '𝙨𝙚𝙙𝙖𝙣𝙜 𝙙𝙞 𝙥𝙧𝙤𝙨𝙚𝙨⏳𖣘⌛',
    linkm: '𝙇𝙞𝙣𝙠 𝙣𝙮𝙖 𝙢𝙖𝙣𝙖 𝙠𝙖𝙘𝙠?',
    error: '𝙒𝙖𝙙𝙪𝙝 𝙨𝙤𝙧𝙧𝙮 𝙠𝙖𝙠 𝙚𝙧𝙧𝙤𝙧😢',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Diatur Ulang Setiap 12 Jam',
    ban: '𝘼𝙣𝙙𝙖 𝙩𝙚𝙡𝙖𝙝 𝙙𝙞 𝙗𝙖𝙣𝙣𝙚𝙙𝙊𝙡𝙚𝙝 𝙥𝙚𝙢𝙞𝙡𝙞𝙠😐, 𝙅𝙞𝙠𝙖 𝙚𝙣𝙩𝙚 𝙢𝙖𝙪 𝙐𝙣𝙗𝙖𝙣𝙣𝙚𝙙,𝘾𝙝𝙖𝙩 𝙤𝙬𝙣𝙚𝙧❗.',
    nsfw: 'Fitur nsfw tidak diaktifkan × taubatlah brother❗',
    banChat: '𝘽𝙤𝙩 𝙙𝙞 𝙗𝙖𝙣𝙣𝙚𝙙 𝙙𝙡𝙢 𝙂𝙧𝙪𝙥 𝙞𝙣𝙞,𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝙝𝙪𝙗𝙪𝙣𝙜𝙞 𝘾𝙝𝙞𝙠𝙖 𝙪𝙣𝙩𝙪𝙠 𝙪𝙣𝙗𝙖𝙣'
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
