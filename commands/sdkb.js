const sdkb = require("../sdkbAlphabet.json");
exports.run = (client, message, args) => {

  output = "";
  //join the arguments removing all spaces and then turn it into a char array
  challenge = args.join("").split("");

  //loop through every character in the challenge array
  for(let i = 0; i < challenge.length; i++)
  {
    //Create output string in format "letter - exercise"
    let ch = challenge[i].toUpperCase();
    output = output + ch + " - " + sdkb[ch] + "\n";
  }

  //Send output to discord channel
  message.channel.send(output).catch(console.error);
}