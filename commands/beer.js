exports.run = (client, message, args) => {
  message.channel.send("🍺").catch(console.error);
}