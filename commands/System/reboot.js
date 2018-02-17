exports.run = async (client, msg) => {
  await msg.sendMessage("**Rebooting**...").catch(err => client.emit("error", err));
  process.exit();
};

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["restart"],
  permLevel: 8,
  botPerms: ["SEND_MESSAGES"],
  requiredFuncs: [],
  requiredSettings: [],
};

exports.help = {
  name: "reboot",
  description: "Reboots the bot.",
  usage: "",
  usageDelim: "",
};