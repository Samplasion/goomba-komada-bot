const { MessageEmbed: RichEmbed } = require('discord.js');
exports.run = (client, msg, args) => {
  var color = args[0].toLowerCase()
  const embed = new RichEmbed()
    .setTitle(`Color #${color}`)
    .setImage(`https://dummyimage.com/50x50/${color}/fff&text=+`)
    .setColor(`0x${color}`)
  msg.channel.send(embed)
}
exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text", "dm", "group"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
  requiredModules: [],
};

exports.help = {
  name: "hex",
  description: "Returns an image corresponding to the hex color given.",
  usage: "<hexColor:str{6,6}>",
  usageDelim: "",
  extendedHelp: "To use it, you must provide a hex color without the \"#\"."
};