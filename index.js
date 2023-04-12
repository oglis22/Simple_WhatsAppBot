console.log("WhatsAppBot is starting!");

const qrcode = require('qrcode-terminal');
const fs = require('fs');

const { Client } = require('whatsapp-web.js');
const client = new Client({
	puppeteer: {
		args: ['--no-sandbox'],
	}
})

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');

});




  client.on('message', message => {
	console.log("Dir wurde eine Nachricht gesendet");
	console.log(message);
	console.log(message.body);
	console.log(message.getInfo);
	if(message.body === 'Bot') {
		message.reply('Hey Ich bin ein Bot :)');	
	}

	
});

 

client.initialize();

 

 