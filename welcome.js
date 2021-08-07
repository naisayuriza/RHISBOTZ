const
	{
		WAConnection,
		ReconnectMode,
		MessageType,
		ProxyAgent,
		mentionedJid,
		processTime
	} = require("@adiwajshing/baileys")
const fs = require('fs')
const axios = require('axios')
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const { simih, getBuffer, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const kickarea = JSON.parse(fs.readFileSync('./database/kickarea.json'))
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}
module.exports = denz = async (denz, anu) => {
	    if (!welkom.includes(anu.jid)) return
	    try {
        console.log(anu)
        const num = anu.participants[0]
        const mdata = await denz.groupMetadata(anu.jid)
        const pushnem = denz.contacts[num] != undefined ? denz.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : denz.contacts[num].notify || denz.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
        const thu = await denz.getStatus(anu.participants[0], MessageType.text)
        try {
        var ppus = await denz.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
         } catch (e) {
        var ppus = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
        }
        try {
        var ppgc = await denz.getProfilePicture(anu.jid)
         } catch (e) {
        var ppgc = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
        }
            if (anu.action == 'add') {
			myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
			myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
			var tgl = new Date();
			var day = tgl.getDate()
			var bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			const tanggalu = `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
		    membr = mdata.participants.length
		    anu_user = denz.contacts[num]
            teks = `\`\`\`Welcome In Gc ${mdata.subject}\`\`\`\n─────────────────\n\`\`\`Nama : @${num.split('@')[0]}\`\`\`\n\`\`\`Bio : ${thu.status}\`\`\`\n\`\`\`Member Ke : ${membr}\`\`\`\n\`\`\`Tanggal : ${tanggalu}\`\`\`\n\`\`\`Jangan Lupa Baca Deskripsi\`\`\`\n─────────────────\n${mdata.desc}`
          buff = await getBuffer(`https://api.lolhuman.xyz/api/base/welcome?apikey=10fc6699cb730fa8c16a7d9e&img1=${ppus}&img2=${ppgc}&background=https://lolhuman.herokuapp.com/api/random/loli?apikey=10fc6699cb730fa8c16a7d9e&username=${pushnem}&member=${membr}&groupname=${mdata.subject}`)
        denz.sendMessage(mdata.id, buff, MessageType.image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName":`${pushnem}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;${num.split('@')[0]};;;\nFN:${num.split('@')[0]}\nitem1.TEL;waid=${num.split('@')[0]}:${num.split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}, contextInfo: {"mentionedJid": [num]}, caption: teks})
        }
            if (anu.action == 'remove') {
            myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
			myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
			var tgl = new Date();
			var day = tgl.getDate()
			var bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			const tanggalu = `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
                anu_user = denz.contacts[num]
                membr = mdata.participants.length
                out = `_Selamat Jalan @${num.split('@')[0]}_\n─────────────────\n_Meninggal Pada : ${tanggalu}_\n_Kata Kata Terakhir : ${thu.status}_\n─────────────────\n_May Rest In Peace~_`
                buff = await getBuffer(`https://api.lolhuman.xyz/api/base/leave?apikey=10fc6699cb730fa8c16a7d9e&img1=${ppus}&img2=${ppgc}&background=https://lolhuman.herokuapp.com/api/random/loli?apikey=10fc6699cb730fa8c16a7d9e&username=${pushnem}&member=${membr}&groupname=${mdata.subject}`)
                denz.sendMessage(mdata.id, buff, MessageType.image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName":`${pushnem}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;${num.split('@')[0]};;;\nFN:${num.split('@')[0]}\nitem1.TEL;waid=${num.split('@')[0]}:${num.split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}, contextInfo: {"mentionedJid": [num]}, caption: out})
            }
        else if (anu.action == 'promote') {
        	const mdata = await denz.groupMetadata(anu.jid)
        	myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
			myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
			var tgl = new Date();
			var day = tgl.getDate()
			var bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			const tanggalu = `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
			const num = anu.participants[0]
			anu_user = denz.contacts[num]
                memeg = mdata.participants.length
                try {
					ppimg = await denz.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBuffer(ppimg)
			teks = `\`\`\`Naik Jabatan Di Grup ${mdata.subject}\`\`\`
\`\`\`─────────────────\`\`\`        
\`\`\`Nama : @${num.split('@')[0]}\`\`\`
\`\`\`Bio : ${thu.status}\`\`\`
\`\`\`Tanggal : ${tanggalu}\`\`\`
\`\`\`─────────────────\`\`\`
\`\`\`Congrats!\`\`\``
			denz.sendMessage(mdata.id, buff, MessageType.image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName":`${pushnem}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;${num.split('@')[0]};;;\nFN:${num.split('@')[0]}\nitem1.TEL;waid=${num.split('@')[0]}:${num.split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}, contextInfo: {"mentionedJid": [num]}, caption: teks})
		} else if (anu.action == 'demote') {
			myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
			myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
			var tgl = new Date();
			var day = tgl.getDate()
			var bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			const tanggalu = `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
			num = anu.participants[0]
		 anu_user = denz.contacts[num]
                memeg = mdata.participants.length
			try {
					ppimg = await denz.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBuffer(ppimg)
			teks = `\`\`\`Turun Jabatan Di Grup ${mdata.subject}\`\`\`
\`\`\`─────────────────\`\`\`        
\`\`\`Nama : @${num.split('@')[0]}\`\`\`
\`\`\`Bio : ${thu.status}\`\`\`
\`\`\`Tanggal : ${tanggalu}\`\`\`
\`\`\`─────────────────\`\`\`
\`\`\`Makannya Jadi Admin Jangan Baperan:v\`\`\``
			denz.sendMessage(mdata.id, buff, MessageType.image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName":`${pushnem}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;${num.split('@')[0]};;;\nFN:${num.split('@')[0]}\nitem1.TEL;waid=${num.split('@')[0]}:${num.split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}, contextInfo: {"mentionedJid": [num]}, caption: teks})
            }
	} catch (e) {
		console.log(e)
		}
		denz.on('group-participants-update', async (anu) => {
    	if (!kickarea.includes(anu.jid)) return
	    const num = anu.participants[0]
		const mdata = denz.groupMetadata(anu.jid)
		const pushnem = denz.contacts[num] != undefined ? denz.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : denz.contacts[num].notify || denz.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
		if (num.includes('62')) return
	    bule = `${num.split('@')[0]}`
		console.log(color('Kick bule', 'yellow'))
		teks= `\`\`\`@${num.split('@')[0]}, Sorry this Group is only for Indonesians!\`\`\``
		await denz.sendMessage(mdata.id, teks, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName":`${pushnem}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;${num.split('@')[0]};;;\nFN:${num.split('@')[0]}\nitem1.TEL;waid=${num.split('@')[0]}:${num.split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}, contextInfo: { mentionedJid: [num] }})
		denz.groupRemove(anu.jid, [num])
        })
        }