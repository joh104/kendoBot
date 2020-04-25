exports.run = (client, message, args) => {
  output = "COMMANDS: \n" +
  "!sdkb [your name] - Uses the SDKB alphabet to generate a kendo workout! \n" +
  "!beer \n" +
  "!kanpai \n" +
  "!twss \n"; 
  message.channel.send(output).catch(console.error);
}