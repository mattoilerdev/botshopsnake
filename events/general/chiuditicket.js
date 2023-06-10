module.exports = {
    name: "interactionCreate",
    async execute(interaction) {
        if (!interaction.isButton()) {
            return
          }
          if (interaction.customId == "chiuditicket") {
            if (!interaction.member.permissions.has('MANAGE_CHANNELS')) {
              return await interaction.channel.send({ embeds: [noperms], ephemeral: true })
            }
        
            let embedverifigianz = new Discord.MessageEmbed()
              .setAuthor("Snake Shop", `https://media.discordapp.net/attachments/1091029706465366046/1116786785419276380/64977070-A9ED-48BE-B1B5-AE49344A0D1B.png?width=671&height=671`)
              .setDescription(`<a:verifygreen:1084425754554683402> ・ **Il ticket sta per essere chiuso in 5 secondi.\nAzionato da** ${interaction.user.toString()}`)
              .setColor("#000001")
              .setFooter(foottego)
            await interaction.channel.send({ embeds: [embedverifigianz] })
        
            setTimeout(async () => {
            interaction.channel.delete()
            }, 5000);
        
            interaction.deferUpdate()
          }
          if (interaction.customId == 'claimticket') {
            interaction.deferUpdate()
            if (!interaction.member.roles.cache.has("1091323090476220489")) {
              return await interaction.channel.send({ embeds: [noperms], ephemeral: true })
            }
        
            let embedverifigianz2 = new Discord.MessageEmbed()
            .setAuthor("Snake Shop", `https://media.discordapp.net/attachments/1091029706465366046/1116786785419276380/64977070-A9ED-48BE-B1B5-AE49344A0D1B.png?width=671&height=671`)
              .setDescription(`<a:verifygreen:1084425754554683402> ・ **Il ticket è stato claimato da** ${interaction.user.toString()}`)
              .setColor("#000001")
              .setFooter(foottego)
            await interaction.channel.send({ embeds: [embedverifigianz2] })
        
            interaction.channel.permissionOverwrites.edit("1091323090476220489", {
              VIEW_CHANNEL: true,
              SEND_MESSAGES: false,
              READ_MESSAGE_HISTORY: true,
              ATTACH_FILES: false
            });
            interaction.channel.permissionOverwrites.edit(interaction.user.id, {
              VIEW_CHANNEL: true,
              SEND_MESSAGES: true,
              READ_MESSAGE_HISTORY: true,
              ATTACH_FILES: false
            });
        
          }

    }
}