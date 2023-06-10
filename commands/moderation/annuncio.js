module.exports = {
    name: "annuncio",
    execute(message) {

        const args = message.content.split(/\s+/);
        let testo;
        testo = args.slice(1).join(" ");
        if(!message.member.permissions.has("ADMINISTRATOR")) {
            return message.channel.send({ embeds: [noperms] })
        }
        if (!testo) {
            return message.channel.send({embeds: [notxt]});
        }
        message.delete()
        let embed = new Discord.MessageEmbed()
        .setAuthor("Snake Shop", `https://media.discordapp.net/attachments/1092203250679296030/1117090463086821396/A74DB69A-3148-4667-86F0-6355B1DFC016.png?width=671&height=671`)
        .setDescription(`<a:Pin:1083801456102080702> ・ **Nuovo Annuncio:** \n\n${testo}`)
        .setColor("#000001")
        .setFooter(foottego)
        message.channel.send({embeds: [embed]})

    }
}