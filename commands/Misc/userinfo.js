const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const status = {
  online: "Online",
  idle: "Idle",
  dnd: "Do Not Disturb",
  offline: "Offline/Invisible"
};
const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
exports.run = (client, msg, args) => {
  msg.channel.send("Gathering user info...").then(m => {
    const member = msg.mentions.members.first() || msg.guild.members.get(args[0]) || msg.member;
    if (!member) return msg.reply("Please provide a vaild Mention or USER ID");
    let bot;
    if (member.user.bot === true) {
      bot = "Yes";
    } else {
      bot = "No";
    }
    const embed = new Discord.MessageEmbed()
      .setColor(randomColor)
      .setThumbnail(`${member.user.avatarURL()}`)
      .setAuthor(`${member.user.tag} (${member.id})`, `${member.user.avatarURL()}`)
      .addField("Nickname", `${member.nickname != null || member.nickname != undefined ? `Nickname: ${member.nickname}` : "No nickname"}`, true)
      .addField("Bot", `${bot}`, true)
      .addField("Status", `${status[member.user.presence.status]}`, true)
      .addField("Playing", `${member.user.presence.game ? `${member.user.presence.game.name}` : "Not playing anything."}`, true)
      .addField("Roles", `${member.roles.filter(r => r.id !== msg.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "No Roles"}`, true)
      .addField("Joined At", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
      .addField("Created At", `${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")} ${"<a" + ":cursor:404001393360502805>"}`, true);
    

    m.edit({ embed });
  });
};


exports.conf = {
   enabled: true,
   runIn: ["text", "group"],
   aliases: ["uinfo"],
   permLevel: 0,
   botPerms: [],
   requiredFuncs: [],
   requiredSettings: [],
 };

exports.help = {
  name: 'userinfo',
  description: 'Gets user info from a mention or id.',
  usage: '<mention|id:str>',
  usageDelim: ""
};