module.exports = {
    name: "ban",
    execute(message) {
        var currentDate = new Date()
        let iuser = message.mentions.members.first()
        if (!message.member.permissions.has('BAN_MEMBERS')) {
            return message.channel.send({embeds: [noperms]});
        }
        if (!iuser) {
            return message.channel.send({embeds: [nouser]});
        }
        let embed = new Discord.MessageEmbed()
        .setAuthor("Snake Shop", `https://media.discordapp.net/attachments/1092203250679296030/1117090463086821396/A74DB69A-3148-4667-86F0-6355B1DFC016.png?width=671&height=671`)
        .setDescription("<a:banned:1083791739606810704> ・ " + iuser.toString() + " **è stato bannato da** " + message.author.toString())
        .setColor("#000001")
        .setFooter(foottego)    
         message.channel.send({ embeds: [embed] })
         iuser.ban()
         message.delete()
                
    }
}