module.exports = {
    name: "clear",
    execute(message) {
        let user = new Discord.MessageEmbed()
        .setAuthor("Snake Shop", `https://media.discordapp.net/attachments/1092203250679296030/1117090463086821396/A74DB69A-3148-4667-86F0-6355B1DFC016.png?width=671&height=671`)
        .setDescription("<a:verifyred:1084425689853329469> ・ **Aggiungi un numero valido!**")
        .setColor("#000001")
        .setFooter(foottego)
        
        let mtk = new Discord.MessageEmbed()
        .setAuthor("Snake Shop", `https://media.discordapp.net/attachments/1092203250679296030/1117090463086821396/A74DB69A-3148-4667-86F0-6355B1DFC016.png?width=671&height=671`)
        .setDescription("<a:verifyred:1084425689853329469> ・ **Il numero non deve superare 100!**")
        .setColor("#000001")
        .setFooter(foottego)

        if (!message.member.permissions.has("MANAGE_MESSAGES")) {
            return message.channel.send({embeds: [noperms]});
        }
        let count = parseInt(message.content.split(/\s+/)[1]);
        if (!count) {
            return message.channel.send({embeds: [user]})
        }
        if (count > 100) {
            return message.channel.send({embeds: [mtk]})
        }
        message.channel.bulkDelete(count, true)

        let cancella = new Discord.MessageEmbed()
        .setAuthor("Snake Shop", `https://media.discordapp.net/attachments/1092203250679296030/1117090463086821396/A74DB69A-3148-4667-86F0-6355B1DFC016.png?width=671&height=671`)
        .setDescription(`<a:verifyred:1084425689853329469> ・ **puliti ${count} messaggi!**`)
        .setColor("#000001")
        .setFooter(foottego)
        message.channel.send({embeds: [cancella]}).then(msg => {
            setTimeout(() => msg.delete(), 15000)


        })

    }
}