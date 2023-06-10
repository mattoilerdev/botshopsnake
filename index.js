const Discord = require("discord.js")
const client = new Discord.Client({ intents: 3276799 })
const express = require('express')
const app = express()
const config = require('./config.json')
const chalk = import("chalk")
const prefix = "!"
const guildsnake = "Snake Shop"

app.listen(3000, () => {
  console.log('Anticrash Funzionante');
});

global.logs = require('discord-logs');
global.interceptor = require("rest/interceptor");
logs(client, {
  debug: true
});

// ———————————————[Error Handling]———————————————
process.on("unhandledRejection", (reason, p) => {
  console.log("—————————————————————————————————");
  console.log("Anticrash, unhandled rejection")
  console.log("—————————————————————————————————");
  console.log(reason, p);
});
process.on("uncaughtException", (err, origin) => {
  console.log("—————————————————————————————————");
  console.log("Anticrash, uncaught Expression")
  console.log("—————————————————————————————————");
  console.log(err, origin);
});
process.on("multipleResolves", (type, promise, reason) => {
  console.log("—————————————————————————————————");
  console.log("Anticrash, Multiple Resolves")
  console.log("—————————————————————————————————");
  console.log(type, promise, reason);
});
process.on("multipleResolves", (type, promise, reason) => {
  if (reason === "Error: Cannot perform IP discovery - socket closed") return;
});

client.on("ready", () => {
  console.log("BOT IS READY TO FUCK UR MOM")

})

///////<a:Attenzione_Gif:1083801350481125459>
global.orario = new Date()
global.foottego = `${guildsnake} | ` + orario.toLocaleString()
global.noperms= new Discord.MessageEmbed()
.setAuthor("Snake Shop", `https://media.discordapp.net/attachments/1092203250679296030/1117090463086821396/A74DB69A-3148-4667-86F0-6355B1DFC016.png?width=671&height=671`)
.setDescription("<a:verifyred:1084425689853329469> ・ **Non hai il permesso di eseguire questo comando!**")
.setColor("#000001")
.setFooter(foottego)
global.nouser = new Discord.MessageEmbed()
.setAuthor("Snake Shop", `https://media.discordapp.net/attachments/1092203250679296030/1117090463086821396/A74DB69A-3148-4667-86F0-6355B1DFC016.png?width=671&height=671`)
.setDescription("<a:verifyred:1084425689853329469> ・ **Aggiungi un utente valido!**")
.setColor("#000001")
.setFooter(foottego)
global.norole = new Discord.MessageEmbed()
.setAuthor("Snake Shop", `https://media.discordapp.net/attachments/1092203250679296030/1117090463086821396/A74DB69A-3148-4667-86F0-6355B1DFC016.png?width=671&height=671`)
.setDescription("<a:verifyred:1084425689853329469> ・ **Aggiungi un ruolo valido!**")
.setColor("#000001")
.setFooter(foottego)
global.notxt = new Discord.MessageEmbed()
.setAuthor("Snake Shop", `https://media.discordapp.net/attachments/1092203250679296030/1117090463086821396/A74DB69A-3148-4667-86F0-6355B1DFC016.png?width=671&height=671`)
.setDescription("<a:verifyred:1084425689853329469> ・ **Aggiungi un messaggio valido!**")
.setColor("#000001")
.setFooter(foottego)
///////
const status_list = [
  "! help / ! shop",
  " by ɢᴏᴏғʏ ᴀʜ ᴍᴀᴛᴛᴜᴢ. / v. 13.14.0 ",
  "! help / ! shop",
  " by ɢᴏᴏғʏ ᴀʜ ᴍᴀᴛᴛᴜᴢ. / v. 13.14.0 ",
];

client.on("ready", () => {
  setInterval(() => {
    const index_status = Math.floor(Math.random() * ((status_list.length - 1) + 1 - 1 + 1));
    client.user.setActivity(status_list[index_status], { type: 'WATCHING' })
  }, 5000);
})
  .setMaxListeners(100)

  global.Discord = require("discord.js");
global.client = new Discord.Client({
  intents: 32767
})
global.config = require('./config.json')
global.log = config.log
global.pingbot = client.ws.ping
global.moment = require('moment')
const fs = require('fs')

client.commands = new Discord.Collection();
const commandsFolder = fs.readdirSync("./commands");
for (const folder of commandsFolder) {
  const commandsFiles = fs.readdirSync(`./commands/${folder}`);
  for (const file of commandsFiles) {
    if (file.endsWith(".js")) {
      const command = require(`./commands/${folder}/${file}`);
      client.commands.set(command.name, command);
    }
    else {
      const commandsFiles2 = fs.readdirSync(`./commands/${folder}/${file}`)
      for (const file2 of commandsFiles2) {
        const command = require(`./commands/${folder}/${file}/${file2}`);
        client.commands.set(command.name, command);
      }
    }
  }
}
const eventsFolders = fs.readdirSync('./events');
for (const folder of eventsFolders) {
    const eventsFiles = fs.readdirSync(`./events/${folder}`).filter(file => file.endsWith(`.js`));

    for (const file of eventsFiles) {
        if (file.endsWith(".js")) {
            const event = require(`./events/${folder}/${file}`);
            client.on(event.name, (...args) => event.execute(...args));
        }
        else {
            const eventsFiles2 = fs.readdirSync(`./events/${folder}/${file}`)
            for (const file2 of eventsFiles2) {
                const event = require(`./events/${folder}/${file}/${file2}`);
                client.on(event.name, (...args) => event.execute(...args));
            }
        }
    }
}



client.on(`messageCreate`, message => {


  if (!message.content.startsWith(prefix) || !message.guild) return

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command) && !client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command))) return

  var comando = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command))

  comando.execute(message, args);
})

client.on("guildMemberAdd", member => {
  if (member.user.bot) return

  member.roles.add("1091327417592860802");
  member.roles.add("1091327272717402122");

});

//
client.on("messageCreate", message => {
  if (message.content == "!verifica") {


    let embed = new Discord.MessageEmbed()
      .setTitle("<a:greencheck:1083791192833142794>" + " **__$nake VERIFY SYSTEM__**" + " <a:greencheck:1083791192833142794>")
      .setDescription(`<:emoji_34:1091371229073653870> Ciao a tutti <@&1091327272717402122> e benvenuti all'interno di $nake Graphics, vi chiediamo gentilmente di verificarvi **cliccando sul bottone sottostante** per garantirci che tu non sia un robot , lo <@&1091323719164629032> vi augura una buona permanenza nel server!`)
      .setColor("#000001")
      .setFooter(`${message.guild.name} | ` + currentDate.toLocaleString(), `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=671&height=671`)

    let verifigianz = new Discord.MessageButton()
      .setLabel(" ✅ ")
      .setStyle("SUCCESS")
      .setCustomId("verifigianz") //tua zia puttana


    let row = new Discord.MessageActionRow()
      .addComponents(verifigianz)

    message.channel.send({ embeds: [embed], components: [row] })

  }
})

client.on("interactionCreate", interaction => {


  if (interaction.customId == "verifigianz") {


    interaction.member.roles.add("1091327135148417026")


    let embedverifigianz = new Discord.MessageEmbed()
      .setTitle("$nake Verify System")
      .setDescription("<a:verifygreen:1084425754554683402> Ti sei verificato con successo!")
      .setColor("#000001")
      .setFooter(`${interaction.guild.name} | ` + currentDate.toLocaleString(), `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=671&height=671`)
    interaction.reply({ embeds: [embedverifigianz], ephemeral: true })

    }
  }
)
//////////////////////////////////////
const { DisTube } = require("distube")
//Plugin facoltativi
const { SpotifyPlugin } = require("@distube/spotify")
const { SoundCloudPlugin } = require("@distube/soundcloud")

const distube = new DisTube(client, {
  youtubeDL: false,
  plugins: [new SpotifyPlugin(), new SoundCloudPlugin()],
  leaveOnEmpty: true,
  leaveOnStop: true
})

distube.on('error', (channel, e) => {
  if (channel) console.error(e)

})

client.on("messageCreate", message => {
  if (message.content.startsWith("!play")) {
    const voiceChannel = message.member.voice.channel
    if (!voiceChannel) {
      let embed = new Discord.MessageEmbed()
        .setAuthor("Snake Shop",`https://media.discordapp.net/attachments/1091029706465366046/1116786785419276380/64977070-A9ED-48BE-B1B5-AE49344A0D1B.png?width=671&height=671`)
        .setDescription("<a:verifyred:1084425689853329469> ・ **Nessun canale vocale trovato**")
        .setColor("#000001")
        .setFooter(foottego)
      return message.channel.send({ embeds: [embed] })
    }
    const voiceChannelBot = message.guild.channels.cache.find(x => x.type == "GUILD_VOICE" && x.members.has(client.user.id))
    if (voiceChannelBot && voiceChannel.id != voiceChannelBot.id) {
      let embed = new Discord.MessageEmbed()
        .setAuthor("Snake Shop",`https://media.discordapp.net/attachments/1091029706465366046/1116786785419276380/64977070-A9ED-48BE-B1B5-AE49344A0D1B.png?width=671&height=671`)
        .setDescription("<a:verifyred:1084425689853329469> ・ **Nessun canale vocale trovato**")
        .setColor("#000001")
        .setFooter(foottego)
      return message.channel.send({ embeds: [embed] })
    }

    let args = message.content.split(/\s+/)
    let query = args.slice(1).join(" ")

    if (!query) {
      let embed = new Discord.MessageEmbed()
        .setAuthor("Snake Shop",`https://media.discordapp.net/attachments/1091029706465366046/1116786785419276380/64977070-A9ED-48BE-B1B5-AE49344A0D1B.png?width=671&height=671`)
        .setDescription("<a:verifyred:1084425689853329469> ・ **Nessuna canzone trovata**")
        .setColor("#000001")
        .setFooter(foottego)
      return message.channel.send({ embeds: [embed] })
    }

    distube.play(voiceChannelBot || voiceChannel, query, {
      member: message.member,
      textChannel: message.channel,
      message: message
    })
  }

  if (message.content == "!pause") {
    const voiceChannel = message.member.voice.channel
    if (!voiceChannel) {
      let embed = new Discord.MessageEmbed()
        .setAuthor("Snake Shop",`https://media.discordapp.net/attachments/1091029706465366046/1116786785419276380/64977070-A9ED-48BE-B1B5-AE49344A0D1B.png?width=671&height=671`)
        .setDescription("<a:verifyred:1084425689853329469> ・ **Nessun canale vocale trovato**")
        .setColor("#000001")
        .setFooter(foottego)
      return message.channel.send({ embeds: [embed] })
    }

    const voiceChannelBot = message.guild.channels.cache.find(x => x.type == "GUILD_VOICE" && x.members.has(client.user.id))
    if (voiceChannelBot && voiceChannel.id != voiceChannelBot.id) {
      let embed = new Discord.MessageEmbed()
        .setAuthor("Snake Shop",`https://media.discordapp.net/attachments/1091029706465366046/1116786785419276380/64977070-A9ED-48BE-B1B5-AE49344A0D1B.png?width=671&height=671`)
        .setDescription("<a:verifyred:1084425689853329469> ・ **Qualcun'altro sta ascoltando la musica**")
        .setColor("#000001")
        .setFooter(foottego)
      return message.channel.send({ embeds: [embed] })
    }

    try {
      distube.pause(message)
        .catch(() => { return message.channel.send("Nessuna canzone in riproduzione o canzone già in pausa") })
    } catch {
      return message.channel.send("Nessuna canzone in riproduzione o canzone già in pausa")
    }

    let embed = new Discord.MessageEmbed()
      .setAuthor("Snake Shop",`https://media.discordapp.net/attachments/1091029706465366046/1116786785419276380/64977070-A9ED-48BE-B1B5-AE49344A0D1B.png?width=671&height=671`)
      .setDescription("**Canzone stoppata**")
      .setColor("#000001")
      .setFooter(foottego)
    message.channel.send({ embeds: [embed] })
  }

  if (message.content == "!resume") {
    const voiceChannel = message.member.voice.channel
    if (!voiceChannel) {
      let embed = new Discord.MessageEmbed()
        .setAuthor("Snake Shop",`https://media.discordapp.net/attachments/1091029706465366046/1116786785419276380/64977070-A9ED-48BE-B1B5-AE49344A0D1B.png?width=671&height=671`)
        .setDescription("<a:verifyred:1084425689853329469> ・ **Nessun canale vocale trovato**")
        .setColor("#000001")
        .setFooter(foottego)
      return message.channel.send({ embeds: [embed] })
    }

    const voiceChannelBot = message.guild.channels.cache.find(x => x.type == "GUILD_VOICE" && x.members.has(client.user.id))
    if (voiceChannelBot && voiceChannel.id != voiceChannelBot.id) {
      let embed = new Discord.MessageEmbed()
        .setAuthor("Snake Shop",`https://media.discordapp.net/attachments/1091029706465366046/1116786785419276380/64977070-A9ED-48BE-B1B5-AE49344A0D1B.png?width=671&height=671`)
        .setDescription("<a:verifyred:1084425689853329469> ・ **Qualcun'altro sta ascoltando la musica**")
        .setColor("#000001")
        .setFooter(foottego)
      return message.channel.send({ embeds: [embed] })
    }

    try {
      distube.resume(message)
        .catch(() => { return message.channel.send("Nessuna canzone in riproduzione o canzone già in riproduzione") })
    } catch {
      return message.channel.send("Nessuna canzone in riproduzione o canzone già in riproduzione")
    }

    let embed = new Discord.MessageEmbed()
      .setAuthor("Snake Shop",`https://media.discordapp.net/attachments/1091029706465366046/1116786785419276380/64977070-A9ED-48BE-B1B5-AE49344A0D1B.png?width=671&height=671`)
      .setDescription("**Canzone ripresa**")
      .setColor("#000001")
      .setFooter(foottego)
    message.channel.send({ embeds: [embed] })
  }

  if (message.content == "!queue") {
    const voiceChannel = message.member.voice.channel
    if (!voiceChannel) {
      let embed = new Discord.MessageEmbed()
        .setAuthor("Snake Shop",`https://media.discordapp.net/attachments/1091029706465366046/1116786785419276380/64977070-A9ED-48BE-B1B5-AE49344A0D1B.png?width=671&height=671`)
        .setDescription("<a:verifyred:1084425689853329469> ・ **Nessun canale vocale trovato**")
        .setColor("#000001")
        .setFooter(foottego)
      return message.channel.send({ embeds: [embed] })
    }

    const voiceChannelBot = message.guild.channels.cache.find(x => x.type == "GUILD_VOICE" && x.members.has(client.user.id))
    if (voiceChannelBot && voiceChannel.id != voiceChannelBot.id) {
      let embed = new Discord.MessageEmbed()
        .setAuthor("Snake Shop",`https://media.discordapp.net/attachments/1091029706465366046/1116786785419276380/64977070-A9ED-48BE-B1B5-AE49344A0D1B.png?width=671&height=671`)
        .setDescription("<a:verifyred:1084425689853329469> ・ **Qualcun'altro sta ascoltando la musica**")
        .setColor("#000001")
        .setFooter(foottego)
      return message.channel.send({ embeds: [embed] })
    }

    let queue = distube.getQueue(message)

    if (!queue) return message.channel.send("Coda vuota")

    let totPage = Math.ceil(queue.songs.length / 10)
    let page = 1

    let songsList = ""
    for (let i = 10 * (page - 1); i < 10 * page; i++) {
      if (queue.songs[i]) {
        songsList += `${i + 1}. **${queue.songs[i].name.length <= 100 ? queue.songs[i].name : `${queue.songs[i].name.slice(0, 100)}...`}** - ${queue.songs[i].formattedDuration}\r`
      }
    }

    let embed = new Discord.MessageEmbed()
      .addField("Queue", songsList)
      .setFooter({ text: `Page ${page}/${totPage}` })

    let button1 = new Discord.MessageButton()
      .setLabel("Indietro")
      .setStyle("PRIMARY")
      .setCustomId("indietro")

    let button2 = new Discord.MessageButton()
      .setLabel("Avanti")
      .setStyle("PRIMARY")
      .setCustomId("avanti")

    if (page == 1) button1.setDisabled()
    if (page == totPage) button2.setDisabled()

    let row = new Discord.MessageActionRow()
      .addComponents(button1)
      .addComponents(button2)

    message.channel.send({ embeds: [embed], components: [row] })
      .then(msg => {
        const collector = msg.createMessageComponentCollector()

        collector.on("collect", i => {
          i.deferUpdate()

          if (i.user.id != message.author.id) return i.reply({ content: "Questo bottone non è tuo", ephemeral: true })

          if (i.customId == "indietro") {
            page--
            if (page < 1) page = 1
          }
          if (i.customId == "avanti") {
            page++
            if (page > totPage) page = totPage
          }

          let songsList = ""
          for (let i = 10 * (page - 1); i < 10 * page; i++) {
            if (queue.songs[i]) {
              songsList += `${i + 1}. **${queue.songs[i].name.length <= 100 ? queue.songs[i].name : `${queue.songs[i].name.slice(0, 100)}...`}** - ${queue.songs[i].formattedDuration}\r`
            }
          }

          let embed = new Discord.MessageEmbed()
            .addField("Queue", songsList)
            .setFooter({ text: `Page ${page}/${totPage}` })

          let button1 = new Discord.MessageButton()
            .setLabel("Indietro")
            .setStyle("SECONDARY")
            .setCustomId("indietro")

          let button2 = new Discord.MessageButton()
            .setLabel("Avanti")
            .setStyle("SECONDARY")
            .setCustomId("avanti")

          if (page == 1) button1.setDisabled()
          if (page == totPage) button2.setDisabled()

          let row = new Discord.MessageActionRow()
            .addComponents(button1)
            .addComponents(button2)

          msg.edit({ embeds: [embed], components: [row] })
        })
      })
  }

  if (message.content == "!skip") {
    const voiceChannel = message.member.voice.channel
    if (!voiceChannel) {
      let embed = new Discord.MessageEmbed()
        .setAuthor("Snake Shop",`https://media.discordapp.net/attachments/1091029706465366046/1116786785419276380/64977070-A9ED-48BE-B1B5-AE49344A0D1B.png?width=671&height=671`)
        .setDescription("<a:verifyred:1084425689853329469> ・ **Nessun canale vocale trovato**")
        .setColor("#000001")
        .setFooter(foottego)
      return message.channel.send({ embeds: [embed] })
    }

    const voiceChannelBot = message.guild.channels.cache.find(x => x.type == "GUILD_VOICE" && x.members.has(client.user.id))
    if (voiceChannelBot && voiceChannel.id != voiceChannelBot.id) {
      let embed = new Discord.MessageEmbed()
        .setAuthor("Snake Shop",`https://media.discordapp.net/attachments/1091029706465366046/1116786785419276380/64977070-A9ED-48BE-B1B5-AE49344A0D1B.png?width=671&height=671`)
        .setDescription("<a:verifyred:1084425689853329469> ・ Qualcun'altro sta ascoltando la musica")
        .setColor("#000001")
        .setFooter(foottego)
      return message.channel.send({ embeds: [embed] })
    }

    try {
      distube.skip(message)
        .catch(() => {
          let embed = new Discord.MessageEmbed()
            .setAuthor("Snake Shop",`https://media.discordapp.net/attachments/1091029706465366046/1116786785419276380/64977070-A9ED-48BE-B1B5-AE49344A0D1B.png?width=671&height=671`)
            .setDescription("<a:verifyred:1084425689853329469> ・ **Nessuna canzone in riproduzione successiva o attuale trovata**")
            .setColor("#000001")
            .setFooter(foottego)
          return message.channel.send({ embeds: [embed] })
        })
    } catch {
      let embed = new Discord.MessageEmbed()
        .setAuthor("Snake Shop",`https://media.discordapp.net/attachments/1091029706465366046/1116786785419276380/64977070-A9ED-48BE-B1B5-AE49344A0D1B.png?width=671&height=671`)
        .setDescription("<a:verifyred:1084425689853329469> ・ **Nessuna canzone in riproduzione successiva o attuale trovata**")
        .setColor("#000001")
        .setFooter(foottego)
      return message.channel.send({ embeds: [embed] })
    }
    let embed = new Discord.MessageEmbed()
      .setAuthor("Snake Shop",`https://media.discordapp.net/attachments/1091029706465366046/1116786785419276380/64977070-A9ED-48BE-B1B5-AE49344A0D1B.png?width=671&height=671`)
      .setDescription("**La canzone è stata skippatta correttamente**")
      .setColor("#000001")
      .setFooter(foottego)
    message.channel.send({ embeds: [embed] })
  }

  if (message.content == "!previous") {
    const voiceChannel = message.member.voice.channel
    if (!voiceChannel) {
      let embed = new Discord.MessageEmbed()
        .setAuthor("Snake Shop",`https://media.discordapp.net/attachments/1091029706465366046/1116786785419276380/64977070-A9ED-48BE-B1B5-AE49344A0D1B.png?width=671&height=671`)
        .setDescription("<a:verifyred:1084425689853329469> ・ **Nessun canale vocale trovato**")
        .setColor("#000001")
        .setFooter(foottego)
      return message.channel.send({ embeds: [embed] })
    }

    const voiceChannelBot = message.guild.channels.cache.find(x => x.type == "GUILD_VOICE" && x.members.has(client.user.id))
    if (voiceChannelBot && voiceChannel.id != voiceChannelBot.id) {
      let embed = new Discord.MessageEmbed()
        .setAuthor("Snake Shop",`https://media.discordapp.net/attachments/1091029706465366046/1116786785419276380/64977070-A9ED-48BE-B1B5-AE49344A0D1B.png?width=671&height=671`)
        .setDescription("<a:verifyred:1084425689853329469> ・ **Qualcun'altro sta ascoltando la musica**")
        .setColor("#000001")
        .setFooter(foottego)
      return message.channel.send({ embeds: [embed] })
    }

    try {
      distube.previous(message)
        .catch(() => { return message.channel.send("Nessuna canzone in riproduzione o canzone precedente non presente") })
    } catch {
      return message.channel.send("Nessuna canzone in riproduzione o canzone precedente non presente")
    }

    message.channel.send("Previous song")
  }

  if (message.content == "!stop") {
    const voiceChannel = message.member.voice.channel
    if (!voiceChannel) {
      let embed = new Discord.MessageEmbed()
        .setAuthor("Snake Shop",`https://media.discordapp.net/attachments/1091029706465366046/1116786785419276380/64977070-A9ED-48BE-B1B5-AE49344A0D1B.png?width=671&height=671`)
        .setDescription("<a:verifyred:1084425689853329469> ・ **Nessun canale vocale trovato**")
        .setColor("#000001")
        .setFooter(foottego)
      return message.channel.send({ embeds: [embed] })
    }

    const voiceChannelBot = message.guild.channels.cache.find(x => x.type == "GUILD_VOICE" && x.members.has(client.user.id))
    if (voiceChannelBot && voiceChannel.id != voiceChannelBot.id) {
      let embed = new Discord.MessageEmbed()
        .setAuthor("Snake Shop",`https://media.discordapp.net/attachments/1091029706465366046/1116786785419276380/64977070-A9ED-48BE-B1B5-AE49344A0D1B.png?width=671&height=671`)
        .setDescription("<a:verifyred:1084425689853329469> ・ **Qualcun'altro sta ascoltando la musica**")
        .setColor("#000001")
        .setFooter(foottego)
      return message.channel.send({ embeds: [embed] })
    }

    try {
      distube.stop(message)
        .catch(() => {
          let embed = new Discord.MessageEmbed()
            .setAuthor("Snake Shop",`https://media.discordapp.net/attachments/1091029706465366046/1116786785419276380/64977070-A9ED-48BE-B1B5-AE49344A0D1B.png?width=671&height=671`)
            .setDescription("<a:verifyred:1084425689853329469> ・ **Nessuna canzone in riproduzione**")
            .setColor("#000001")
            .setFooter(foottego)
          return message.channel.send({ embeds: [embed] })
        })
    } catch {
      let embed = new Discord.MessageEmbed()
        .setAuthor("Snake Shop",`https://media.discordapp.net/attachments/1091029706465366046/1116786785419276380/64977070-A9ED-48BE-B1B5-AE49344A0D1B.png?width=671&height=671`)
        .setDescription("<a:verifyred:1084425689853329469> ・ **Nessuna canzone in riproduzione**")
        .setColor("#000001")
        .setFooter(foottego)
      return message.channel.send({ embeds: [embed] })

    }
    let embed = new Discord.MessageEmbed()
      .setAuthor("Snake Shop",`https://media.discordapp.net/attachments/1091029706465366046/1116786785419276380/64977070-A9ED-48BE-B1B5-AE49344A0D1B.png?width=671&height=671`)
      .setDescription("<a:verifyred:1084425689853329469> ・ **La riproduzione è finita, per maggiori info\n!help**")
      .setColor("#000001")
      .setFooter(foottego)

    message.channel.send({ embeds: [embed] })
  }
})

distube.on("addSong", (queue, song) => {
  let embed = new Discord.MessageEmbed()
    .setAuthor("Snake Shop",`https://media.discordapp.net/attachments/1091029706465366046/1116786785419276380/64977070-A9ED-48BE-B1B5-AE49344A0D1B.png?width=671&height=671`)
    .addField("**Canzone **", song.name)
    .setColor("#000001")
    .setFooter(foottego)

  queue.textChannel.send({ embeds: [embed] })
})

distube.on("playSong", (queue, song) => {
  const voiceChannel = queue.voice.channel
  let embed = new Discord.MessageEmbed()
    .setAuthor("Snake Shop",`https://media.discordapp.net/attachments/1091029706465366046/1116786785419276380/64977070-A9ED-48BE-B1B5-AE49344A0D1B.png?width=671&height=671`)
    .addField("**Canzone **", song.name)
    .addField("**Richiesta da **", song.user.toString())
    .addField("**Canale **", voiceChannel.toString())
    .setColor("#000001")
    .setFooter(foottego)

  queue.textChannel.send({ embeds: [embed] })
})

distube.on("searchNoResult", (message, query) => {
  let embed = new Discord.MessageEmbed()
    .setAuthor("Snake Shop",`https://media.discordapp.net/attachments/1091029706465366046/1116786785419276380/64977070-A9ED-48BE-B1B5-AE49344A0D1B.png?width=671&height=671`)
    .setDescription("<a:verifyred:1084425689853329469> ・ **La canzone non è stata trovata**")
    .setColor("#000001")
    .setFooter(foottego)

  queue.textChannel.send({ embeds: [embed] })
})
//////////////////////////////////////
//caccuz
client.login(config.token) 