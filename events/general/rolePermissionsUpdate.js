module.exports = {
    name: "rolePermissionsUpdate",
    execute(role, oldPermissions, newPermissions) {
        const LogChannel = role.guild.channels.cache.get('1091377199828975636');
        const RolePositionUpdated = new Discord.MessageEmbed()
          .setTitle('**__Posizione Ruolo Aggiornata__**')
          .setColor('#000001')
          .setDescription(`I **permessi** del ruolo ${role.toString()} **sono cambiati,** da: \n${oldPermissions} a \n${newPermissions} `)
          .setFooter(foottego)
      
        return LogChannel.send({
          embeds: [RolePositionUpdated]
        });  
    }
}