const { MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js');
module.exports = {
    name: "tsend",
    async execute(message) {
    message.delete()
        let embedape = new Discord.MessageEmbed()
        .setAuthor("Snake Shop", `https://media.discordapp.net/attachments/1092203250679296030/1117090463086821396/A74DB69A-3148-4667-86F0-6355B1DFC016.png?width=671&height=671`)
        .setDescription(`<:HW_GESTORETICKET:1084433235808882808> ・ Salve a tutti <@&1091327272717402122> ! , Questi sono i ticket dello **Snake Shop** . \n**Per aprirne uno vi basterà cliccare sul menù sottostante, e scegliere una categoria!**`)
        .setColor("#000001")
        .setFooter(foottego)
    
      const row = new MessageActionRow()
      .addComponents(
          new MessageSelectMenu()
              .setCustomId('select')
              .setPlaceholder('Nothing selected')
              .setMinValues(1)
              .setMaxValues(1)
              .addOptions([
                  {
                      label: '🆘・Ticket Supporto',
                      description: 'Apri un Ticket Supporto',
                      value: 'first_option',
                      customId: 'supporto',
                  },


                  
                  {
                      label: '💰・Ticket Shop',
                      description: 'Apri un Ticket Shop',
                      value: 'second_option',
                      customId: 'shop',
                  },
                  {
                    label: '🤝・Ticket Partnership',
                    description: 'Apri un Ticket Partnership',
                    value: 'third_option',
                    customId: 'partner',
                },
                {
                    label: '📋・Ticket Candidature',
                    description: 'Apri un Ticket Candidature Staff',
                    value: 'fourth_option',
                    customId: 'candidature',
                },
              ]),
      );

  await message.channel.send({embeds: [embedape], components: [row] });

  client.on('interactionCreate', interaction => {
	if (!interaction.isSelectMenu()) return;
	console.log(interaction);
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isSelectMenu()) return;
});

const collector = message.channel.createMessageComponentCollector({
    componentType: 'SELECT_MENU'
})

collector.on("collect", async (collected) => {
const value = collected.values[0]

if(value === 'first_option')  {
const interaction = collected
    if (interaction.guild.channels.cache.find(canale => canale.topic == `Supporto: ${interaction.user.username}`)) {
       return interaction.user.send("Hai gia un ticket aperto").catch(() => { }) 
    }


  let canalego = interaction.guild.channels.create("🆘│𝑺𝒖𝒑𝒑𝒐𝒓𝒕𝒐-" + interaction.user.username, {
       type: "text",
       topic: `Supporto: ${interaction.user.username}`,
       parent: "1093450785209208993", //Settare la categoria,
       permissionOverwrites: [
           {
               id: interaction.guild.id,
               deny: ["VIEW_CHANNEL"]
           },
           {
               id: interaction.user.id,
               allow: ["VIEW_CHANNEL"]
           },
           { //Aggiungere altri "blocchi" se si vogliono dare permessi anche a ruoli o utenti
               id: "1091323090476220489",
               allow: ["VIEW_CHANNEL"]
           }
       ],

}).then(canalego => {

   


    let chiusura = new MessageButton()
    .setLabel("🔐・Chiudi Ticket")
    .setStyle("SECONDARY")
    .setCustomId("chiuditicket") //tua zia puttana

    let claim = new MessageButton()
    .setLabel("📝・Claim Ticket")
    .setStyle("SECONDARY")
    .setCustomId("claimticket") //tua zia puttana

    let row1 = new MessageActionRow()
    .addComponents(chiusura)
    .addComponents(claim)


    ////////////////////////////////////////////////////////////////////

let ggt = new Discord.MessageEmbed()

.setAuthor("Snake Shop", `https://media.discordapp.net/attachments/1092203250679296030/1117090463086821396/A74DB69A-3148-4667-86F0-6355B1DFC016.png?width=671&height=671`)
.setDescription(`<a:verifygreen:1084425754554683402> ・ Congratulazioni ${interaction.user.toString()} hai aperto il ticket: ${canalego}`)
.setColor("#000001")
.setFooter(foottego)
interaction.reply({embeds: [ggt], ephemeral: true})

let aperturaticket = new Discord.MessageEmbed()
.setAuthor("Snake Shop", `https://media.discordapp.net/attachments/1092203250679296030/1117090463086821396/A74DB69A-3148-4667-86F0-6355B1DFC016.png?width=671&height=671`)
.setDescription(`**Salve ${interaction.user.toString()} \nGrazie per aver aperto un ticket, uno staff le risponderà a breve!** `)
.setColor("#000001")
.setFooter(foottego)

canalego.send({ embeds: [aperturaticket], components: [row1]})

   })

/////////////////////////////////////////SHOP///////////////////////////////////////////////////////////////////////////////////////////

  }
  else if(value === 'second_option') {
    const interaction = collected
    if (interaction.guild.channels.cache.find(canale => canale.topic == `Shop: ${interaction.user.username}`)) {
        return interaction.user.send("Hai gia un ticket aperto").catch(() => { }) 
     }
 
 
   let canalego = interaction.guild.channels.create("💰│𝑺𝒉𝒐𝒑-" + interaction.user.username, {
        type: "text",
        topic: `Shop: ${interaction.user.username}`,
        parent: "1093451888655081502", //Settare la categoria,
        permissionOverwrites: [
            {
                id: interaction.guild.id,
                deny: ["VIEW_CHANNEL"]
            },
            {
                id: interaction.user.id,
                allow: ["VIEW_CHANNEL"]
            },
            { //Aggiungere altri "blocchi" se si vogliono dare permessi anche a ruoli o utenti
                id: "1091323090476220489",
                allow: ["VIEW_CHANNEL"]
            }
        ],
 
 }).then(canalego => {

    let chiusura = new MessageButton()
    .setLabel("🔐・Chiudi Ticket")
    .setStyle("SECONDARY")
    .setCustomId("chiuditicket") //tua zia puttana

    let claim = new MessageButton()
    .setLabel("📝・Claim Ticket")
    .setStyle("SECONDARY")
    .setCustomId("claimticket") //tua zia puttana

    let row1 = new MessageActionRow()
    .addComponents(chiusura)
    .addComponents(claim)


    ///////////////////////////////////////////////////////////////


 let ggt = new Discord.MessageEmbed()
 
 .setAuthor("Snake Shop", `https://media.discordapp.net/attachments/1092203250679296030/1117090463086821396/A74DB69A-3148-4667-86F0-6355B1DFC016.png?width=671&height=671`)
 .setDescription(`<a:verifygreen:1084425754554683402> ・ Congratulazioni ${interaction.user.toString()} hai aperto il ticket: ${canalego}`)
 .setColor("#000001")
 .setFooter(foottego)
 interaction.reply({embeds: [ggt], ephemeral: true})
 
 let aperturaticket = new Discord.MessageEmbed()
 .setAuthor("Snake Shop", `https://media.discordapp.net/attachments/1092203250679296030/1117090463086821396/A74DB69A-3148-4667-86F0-6355B1DFC016.png?width=671&height=671`)
 .setDescription(`**Salve ${interaction.user.toString()} \nGrazie per aver aperto un ticket, uno staff le risponderà a breve!** `)
 .setColor("#000001")
 .setFooter(foottego)
 
 canalego.send({ embeds: [aperturaticket], components: [row1]})
    })

  }



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

else if(value === 'third_option')  {
    const interaction = collected
        if (interaction.guild.channels.cache.find(canale => canale.topic == `Partnership: ${interaction.user.username}`)) {
           return interaction.user.send("Hai gia un ticket aperto").catch(() => { }) 
        }
    
    
      let canalego = interaction.guild.channels.create("🤝│𝑷𝒂𝒓𝒕𝒏𝒆𝒓𝒔𝒉𝒊𝒑-" + interaction.user.username, {
           type: "text",
           topic: `Partnership: ${interaction.user.username}`,
           parent: "1094701239616405667", //Settare la categoria,
           permissionOverwrites: [
               {
                   id: interaction.guild.id,
                   deny: ["VIEW_CHANNEL"]
               },
               {
                   id: interaction.user.id,
                   allow: ["VIEW_CHANNEL"]
               },
               { //Aggiungere altri "blocchi" se si vogliono dare permessi anche a ruoli o utenti
                   id: "1091323090476220489",
                   allow: ["VIEW_CHANNEL"]
               }
           ],
    
    }).then(canalego => {
    
        let chiusura = new MessageButton()
        .setLabel("🔐・Chiudi Ticket")
        .setStyle("SECONDARY")
        .setCustomId("chiuditicket") //tua zia puttana
    
        let claim = new MessageButton()
        .setLabel("📝・Claim Ticket")
        .setStyle("SECONDARY")
        .setCustomId("claimticket") //tua zia puttana
    
        let row1 = new MessageActionRow()
        .addComponents(chiusura)
        .addComponents(claim)
    
    
        ////////////////////////////////////////////////////////////////////
    
    let ggt = new Discord.MessageEmbed()
    
    .setAuthor("Snake Shop", `https://media.discordapp.net/attachments/1092203250679296030/1117090463086821396/A74DB69A-3148-4667-86F0-6355B1DFC016.png?width=671&height=671`)
    .setDescription(`<a:verifygreen:1084425754554683402> ・ Congratulazioni ${interaction.user.toString()} hai aperto il ticket: ${canalego}`)
    .setColor("#000001")
    .setFooter(foottego)
    interaction.reply({embeds: [ggt], ephemeral: true})
    
    let aperturaticket = new Discord.MessageEmbed()
    .setAuthor("Snake Shop", `https://media.discordapp.net/attachments/1092203250679296030/1117090463086821396/A74DB69A-3148-4667-86F0-6355B1DFC016.png?width=671&height=671`)
    .setDescription(`**Salve ${interaction.user.toString()} \nGrazie per aver aperto un ticket, uno staff le risponderà a breve!** `)
    .setColor("#000001")
    .setFooter(foottego)
    
    canalego.send({ embeds: [aperturaticket], components: [row1]})
    
       })
    }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

else if(value === 'fourth_option')  {
    const interaction = collected
        if (interaction.guild.channels.cache.find(canale => canale.topic == `Candidature: ${interaction.user.username}`)) {
           return interaction.user.send("Hai gia un ticket aperto").catch(() => { }) 
        }
    
    
      let canalego = interaction.guild.channels.create("📋│𝑪𝒂𝒏𝒅𝒊𝒅𝒂𝒕𝒖𝒓𝒆-" + interaction.user.username, {
           type: "text",
           topic: `Candidature: ${interaction.user.username}`,
           parent: "1094701203448926298", //Settare la categoria,
           permissionOverwrites: [
               {
                   id: interaction.guild.id,
                   deny: ["VIEW_CHANNEL"]
               },
               {
                   id: interaction.user.id,
                   allow: ["VIEW_CHANNEL"]
               },
               { //Aggiungere altri "blocchi" se si vogliono dare permessi anche a ruoli o utenti
                   id: "1091323090476220489",
                   allow: ["VIEW_CHANNEL"]
               }
           ],
    
    }).then(canalego => {
    
        let chiusura = new MessageButton()
        .setLabel("🔐・Chiudi Ticket")
        .setStyle("SECONDARY")
        .setCustomId("chiuditicket") //tua zia puttana
    
        let claim = new MessageButton()
        .setLabel("📝・Claim Ticket")
        .setStyle("SECONDARY")
        .setCustomId("claimticket") //tua zia puttana
    
        let row1 = new MessageActionRow()
        .addComponents(chiusura)
        .addComponents(claim)
    
    
        ////////////////////////////////////////////////////////////////////
    
    let ggt = new Discord.MessageEmbed()
    
    .setAuthor("Snake Shop", `https://media.discordapp.net/attachments/1092203250679296030/1117090463086821396/A74DB69A-3148-4667-86F0-6355B1DFC016.png?width=671&height=671`)
    .setDescription(`<a:verifygreen:1084425754554683402> ・ Congratulazioni ${interaction.user.toString()} hai aperto il ticket: ${canalego}`)
    .setColor("#000001")
    .setFooter(foottego)
    interaction.reply({embeds: [ggt], ephemeral: true})
    
    let aperturaticket = new Discord.MessageEmbed()
    .setAuthor("Snake Shop", `https://media.discordapp.net/attachments/1092203250679296030/1117090463086821396/A74DB69A-3148-4667-86F0-6355B1DFC016.png?width=671&height=671`)
    .setDescription(`**Salve ${interaction.user.toString()} \nGrazie per aver aperto un ticket, uno staff le risponderà a breve!** `)
    .setColor("#000001")
    .setFooter(foottego)
    
    canalego.send({ embeds: [aperturaticket], components: [row1]})
    
       })
    
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}
    
        })
     }
}
