module.exports = {
    name: "rolePositionUpdate",
    execute(role, newPosition, oldPosition) {
        const LogChannel = role.guild.channels.cache.get('1091377199828975636');
        const RolePositionUpdated = new Discord.MessageEmbed()
          .setTitle('**__Posizione Ruolo Aggiornata__**')
          .setColor('#000001')
          .setDescription(`La **posizione** del ruolo ${role.toString()} **è cambiata** da \n${oldPosition} a \n${newPosition}`)
          .setFooter(foottego)
      
        return LogChannel.send({
          embeds: [RolePositionUpdated]
        });  
    }
}