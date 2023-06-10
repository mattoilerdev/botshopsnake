module.exports = {
    name: "unban",
    execute(message) {
        if (!message.member.permissions.has('BAN_MEMBERS')) {
            return message.channel.send({embeds: [noperms]});
        }
        let args = message.content.split(/\s+/);
        let idUtente = args[1]

        if (!idUtente) {
            return message.channel.send({embeds: [nouser]});
        }
        message.guild.members.unban(idUtente)
            .then(() => {
                let embed = new Discord.MessageEmbed()
                .setAuthor("Snake Shop", `https://media.discordapp.net/attachments/1092203250679296030/1117090463086821396/A74DB69A-3148-4667-86F0-6355B1DFC016.png?width=671&height=671`)
                .setDescription("<a:banned:1083791739606810704> ・ " + idUtente + " **è stato bannato da** " + message.author.toString())
                .setColor("#000001")
                .setFooter(foottego)
                message.channel.send({ embeds: [embed] })
            })
           

    }
}