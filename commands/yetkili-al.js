const Discord = require('discord.js');
const moment = require("moment");

exports.run = async (client, message, args) => { 
const guild = message.member.guild
let executor = message.member
moment.locale("tr")  
if (!message.member.roles.cache.has("KULLANACAK YETKİLİ ROL İD") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().addField("Yetersiz Yetki",`Bu Komutu Kullanabilmeniz için Yeterli Yetkiniz Yok`).setColor("RANDOM")).then(m => m.delete({timeout: 7000}));
let salvouye = message.mentions.users.first()
if (!salvouye) return message.channel.send(new Discord.MessageEmbed().addField("Hatalı Kullanım",`Lütfen Yetkisi Alınacak Kişiyi Etiketleyiniz`).setColor("RANDOM")).then(m => m.delete({timeout: 7000}));
let user = message.mentions.users.first();
let rol = message.mentions.roles.first()
let member = message.guild.member(salvouye)


//KADEMELER
member.roles.remove("ALINACAK ROL İD"); //3. Yetkili Kademesi
member.roles.remove("ALINACAK ROL İD"); //2. Yetkili Kademesi
member.roles.remove("ALINACAK ROL İD");   //1. Yetkili Kademesi


//YETKİLER
member.roles.remove("ALINACAK ROL İD"); //3. Yetki
member.roles.remove("ALINACAK ROL İD"); //2. Yetki
member.roles.remove("ALINACAK ROL İD");   //1. Yetki


let yetkialinmatarihi = moment(message.createdAt).format("LLLL")
let salvocode = new Discord.MessageEmbed() 
.setColor("RANDOM")
.setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
.setDescription(`<@!${member.id}> **İsimli Kullanıcı** <@!${message.author.id}> **İsimli Yetkili Tarafından Yetkileri Alındı**

• Yetki Alan: <@!${message.author.id}> \`${message.author.id}\`
• Yetki Alınan: <@!${member.id}> \`${member.id}\`
• Yetki Alınma Tarihi: \`${yetkialinmatarihi}\``)
.setFooter("Safe Code ❤ Salvatore", client.user.avatarURL({dynamic: true}))
return message.channel.send(salvocode).then(m => m.delete({timeout: 10000}));
  
  
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ytal","yt-al"],
  permLevel: 0
}
exports.help = {
  name: "yetkili-al",
  description: "Yetkileri Çek ❤ Salvo Code"
}