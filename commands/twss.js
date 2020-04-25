exports.run = (client, message, args) => {
  message.channel.send("THAT'S WHAT SHE SAID!").catch(console.error);
}