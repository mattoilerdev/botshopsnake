const { MessageActionRow, MessageSelectMenu } = require('discord.js');
module.exports = {
    name: "help",
    async execute(message, interaction) {
      
/////////////////////////////////////////////////////////////
//https://media.discordapp.net/attachments/1092203250679296030/1117090463086821396/A74DB69A-3148-4667-86F0-6355B1DFC016.png?width=671&height=671
        let embedape = new Discord.MessageEmbed()
        .setAuthor("Snake Shop", `https://media.discordapp.net/attachments/1092203250679296030/1117090463086821396/A74DB69A-3148-4667-86F0-6355B1DFC016.png?width=671&height=671`)
        .setDescription(`**Ciao** ${message.member.toString()}!\n**Ecco a te delle indicazioni sul <@1019215374841036801> !**`)
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
                      label: '🆘・Info Generali',
                      description: 'Info generali sul bot e sul server',
                      value: 'first_optionn',
                      customId: 'gen',
                  },
                  {
                      label: '💰・Info Shop',
                      description: 'Info sul nostro shop',
                      value: 'second_optionn',
                      customId: 'mod',
                  },
                  {
                    label: '🤝・Info Partnership',
                    description: 'Info sulle partnerships',
                    value: 'third_optionn',
                    customId: 'mus',
                },
                {
                    label: '📋・Info Candidature Staff',
                    description: 'Info sulle candidature',
                    value: 'fourth_optionn',
                    customId: 'fun',
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

collector.on("collect", async (collected, i) => {
const value = collected.values[0]
const interaction = collected;

if(value === 'first_optionn')  {   
        let embed = new Discord.MessageEmbed()
        .setAuthor("Snake Shop", `https://media.discordapp.net/attachments/1092203250679296030/1117090463086821396/A74DB69A-3148-4667-86F0-6355B1DFC016.png?width=671&height=671`)
        .setDescription(`Lo Snake Shop inizialmente nasce come una community di developers e gamers, poi piano piano inizia a prendere forma ciò che è il nostro shop che vende prodotti di tutti i tipi`)
        .setColor("#000001")
        .setFooter(foottego)
        await interaction.reply({ embeds: [embed], ephemeral: true})
      }

      if(value === 'second_optionn')  {   
        let embed = new Discord.MessageEmbed()
        .setAuthor("Snake Shop", `https://media.discordapp.net/attachments/1092203250679296030/1117090463086821396/A74DB69A-3148-4667-86F0-6355B1DFC016.png?width=671&height=671`)
        .setDescription(`Lo Snake Shop è il nostro shop, offriamo prodotti di tutti i tipi come per i quali:\n**Account, Licenze Fivem,Grafiche,Montage,Bot privati, Creazione o settaggio server discord,Mod e ch3at per fivem e anche altro!**`)
        .setColor("#000001")
        .setFooter(foottego)
        await interaction.reply({ embeds: [embed], ephemeral: true})
      }
      if(value === 'third_optionn') {
      let embed = new Discord.MessageEmbed()
        .setAuthor("Snake Shop", `https://media.discordapp.net/attachments/1092203250679296030/1117090463086821396/A74DB69A-3148-4667-86F0-6355B1DFC016.png?width=671&height=671`)
        .setDescription(`Per fare una partner con il nostro shop bisogna avere un minimo di 100 membri bot esclusi, **i vantaggi possono essere quelli come sponsor o prodotti.**`)
        .setColor("#000001")
        .setFooter(foottego)
        await interaction.reply({ embeds: [embed], ephemeral: true})
      }
      if(value === 'fourth_optionn') {
        let embed = new Discord.MessageEmbed()
        .setAuthor("Snake Shop", `https://media.discordapp.net/attachments/1092203250679296030/1117090463086821396/A74DB69A-3148-4667-86F0-6355B1DFC016.png?width=671&height=671`)
        .setDescription(`Attualmente le nostre candidature sono aperte e per candidarsi basterà aprire un ticket, **cerchiamo seller,grafici,editors,developers e supporters**.`)
        .setColor("#000001")
        .setFooter(foottego)
        await interaction.reply({ embeds: [embed], ephemeral: true})
      }
    
    })

  }

}