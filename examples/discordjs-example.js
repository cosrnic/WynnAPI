const { Client, GatewayIntentBits, EmbedBuilder } = require("discord.js");

const { Guilds, GuildMessages, MessageContent } = GatewayIntentBits;
const client = new Client({ intents: [Guilds, GuildMessages, MessageContent] }); // register/create the bot

const WynnAPI = require("wynnapi");
const wynn = new WynnAPI();

// register a command when the bot is ready
client.on("ready", async () => {
  console.log("## " + client.user.tag); // send the bot tag to console

  let commands;

  commands = client.application?.commands;
  commands?.create({
    name: "wynnapi", // test slash command
    description: "WynnAPI test command",
  });
});

// when the bot recives an interaction
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName, options } = interaction;

  // check if the command used was the wynnapi command
  if (commandName === "wynnapi") {
    let embed = new EmbedBuilder(); // creating the embed
    // wait for the WynnAPI to get the player
    await wynn
      .getPlayer("0xCosmic")
      .then((player) => {
        embed.setTitle(`WynnAPI - ${player.username}`); // set the embed title to contain the player's username
        // set the embed description to include stats from the api, for more information read here: https://docs.wynncraft.com/Player-API/#statistics
        embed.setDescription(
          `This is a test command for the WynnAPI, ${player.username} has the ${player.rank} 'rank' with the tag ${player.meta.tag.value}`
        );
        // catching any errors, normally this happens if you include an invalid username, check the README.md for more information on the error codes.
      })
      .catch((err) => {
        embed.setTitle(`WynnAPI - Encountered an ERROR`);
        embed.setDescription(`Check the console for more information`);
        console.log(err);
      });
    interaction.reply({
      // reply to the interaction with the embed
      embeds: [embed],
    });
  }
});

// login to the bot using its token
client.login("BOT TOKEN HERE");
