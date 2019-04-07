
const Discord = require("discord.js");

const client = new Discord.Client();
const config = require("./config.json");


client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setActivity(`Kijken voor commands om uit te voeren`);
});


client.on("guildMemberAdd", member => {
    let guild = member.guild;
    client.channels.get("556908367205892120").send(`Welkom ${member.user} op de Paradox discord\nhopelijk blijf je nog een tijdje plakken`).catch(console.error);

});

client.on("message", async message => {

  if(message.author.bot) return;

  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


  if(command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }


  if(command === "help") {
    message.delete().catch(O_o=>{});
    return message.reply("```diff\n- Het Paradox discord bot help bericht\n1: $report\n2: $info geeft informatie over de discord bot en de eigenaar\n3: $ping geeft de response tijd van de bot weer```")
  }

 

  function checkBots(guild) {
    let botCount = 0;
    guild.members.forEach(member => {
      if(member.user.bot) botCount++;
    });
    return botCount;

  }

  if(command === "kick") {
    message.delete().catch(O_o=>{});
    if(!message.member.roles.some(r=>["Moderator", " Eigenaar"].includes(r.name)) )
    return message.reply("sorry maar je heb geen toestemming om mensen te kicken");

    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("speler niet gevonden!!");
    if(!member.kickable)
      return message.reply("ik kan deze speler niet kicken! is hij een role hoger? heb ik wel kick permissie?");
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Geen reden opgegeven";
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} ik kom hem niet kicken doordat: ${error}`));
    message.reply(`${member.user.tag} is gekicked door ${message.author.tag} doordat hij of zij: ${reason}`);

  }

  if(command === "ban") {
    message.delete().catch(O_o=>{});
    if(!message.member.roles.some(r=>["Eigenaar"].includes(r.name)) )
    return message.reply("sorry maar je heb geen toestemming om mensen te bannen");

    let member = message.mentions.members.first();
    if(!member)
      return message.reply("dit is geen geldige persoon!");
    if(!member.bannable)
      return message.reply("Ik kan de speler niet bannen! heeft hij een hogere role? heb ik wel ban permissie om mensen tebannen?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Geen reden opgegeven";

    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} ik kom hem niet bannen doordat: ${error}`));
    message.reply(`${member.user.tag} is gebanned door ${message.author.tag} doordat hij of zij: ${reason}`);
  }


if(command === "say") {
  const sayMessage = args.join(" ");
  message.delete().catch(O_o=>{});
  message.channel.send(sayMessage);
}
  if(command === "idee") {
    const ideeMessage = args.join(" ");
    if(!ideeMessage === null)
    return;
    message.delete().catch(O_o=>{});
    client.channels.get("564414848100728847").send(ideeMessage);
  }



if(command === "warn") {
    if(!message.member.roles.some(r=>["Moderator", " Eigenaar ", "Helper"].includes(r.name)) )
    return message.reply("sorry maar je heb geen toestemming om mensen te warnen");
  let member = message.mentions.members.first();
  if(!member)
    return message.reply("dit is geen geldige persoon!");
  let reason = args.slice(1).join(' ');
  if(!reason) reason = "Geen reden opgegeven";
  message.delete().catch(O_o=>{});
  message.reply(`${member.user.tag} is gewarned door ${message.author.tag} omdat hij of zij: ${reason}`);
  let embed = new Discord.RichEmbed()
  .setColor("#dc322f")
  .setTitle("Warns")
  .addField("Reden", reason)
  .addField("de speler die is gewarned", member.user.tag)
  .addField("De speler die de speler heeft gewarnd", message.author.tag)
  .addField("is gewarned op:", message.author.createdAt)
  .addField("gewarned in", message.channel)
  .addField("gewarned in de server", message.guild)


client.channels.get("491669091287957524").send(embed);
client.channels.get("502495421227204628").send(embed);
    member.addRole("491640681488449546").catch(console.error);    //discord community
    member.addRole("502499265185185795").catch(console.error);    //discord minecraft server
      if(message.member.roles.some(r=>["Warned-1"].includes(r.name)) )
        member.addRole("491640724714946571").catch(console.error);    //discord community
        member.addRole("502499265185185795").catch(console.error);    //discord minecraft server
        if(message.member.roles.some(r=>["Warned-2"].includes(r.name)) )
          member.addRole("491640742708641811").catch(console.error);    //discord community
          member.addRole("502499265185185795").catch(console.error);        //discord minecraft server
          if(message.member.roles.some(r=>["Warned-3"].includes(r.name)) )
            message.reply(`${member.user.tag} uw waarschuwing zijn op hierdoor bent u gebanned`);
                await member.ban(reason)
}
if(command === "warnsreset") {
    if(!message.member.roles.some(r=>["Eigenaar"].includes(r.name)) )
    return message.reply("sorry maar je heb geen toestemming om mensen te warnen");
  let member = message.mentions.members.first();
  if(!member)
    return message.reply("dit is geen geldige persoon!");
  let reason = args.slice(1).join(' ');
  if(!reason) reason = "Geen reden opgegeven";
  message.delete().catch(O_o=>{});
  message.reply(`${member.user.tag} zijn warns zijn verwijderd door: ${message.author.tag} reden: ${reason}`);
  message.reply(`${member.user.tag} zijn warns zijn verwijderd door ${message.author.tag} reden: ${reason}`);
    member.removeRole("491640681488449546").catch(console.error);
    member.removeRole("491640724714946571").catch(console.error);
    member.removeRole("491640742708641811").catch(console.error);

    let embed = new Discord.RichEmbed()
    .setColor("#dc322f")
    .setTitle("warnreset")
    .addField("Reden", reason)
    .addField("de speler waarvan de warns zijn gereset", member.user.tag)
    .addField("De speler die de warns heeft gereset", message.author.tag)
    .addField("is gereset op:", message.author.createdAt)
    .addField("channel waar de command is uitgevoerd", message.channel)

    .setDescription("SYSTEM");

client.channels.get("564180482267545621").send(embed);

}

if(command === "report") {
    if(!message.member.roles.some(r=>["@everyone"].includes(r.name)) )
    return message.reply("sorry maar je heb geen toestemming om mensen te reporten");
  let member = message.mentions.members.first();
  if(!member)
    return message.reply("dit is geen geldige persoon!");
  let reason = args.slice(1).join(' ');
  if(!reason) reason = "Geen reden opgegeven";
  message.delete().catch(O_o=>{});
  message.reply(`${member.user.tag} is gereport door ${message.author.tag} reden: ${reason}`);

    let embed = new Discord.RichEmbed()

    .setColor("#cb4b16")
    .setTitle("Report")
    .addField("Reden", reason)
    .addField("de speler die gereport is", member.user.tag)
    .addField("de speler die heeft gereport", message.author.tag)
    .addField("Created At", message.author.createdAt)
    .addField("channel waar is gereport", message.channel)

    .setDescription("SYSTEM");

client.channels.get("491669091287957524").send(embed);
client.channels.get("502495421227204628").send(embed);
}


if(command === "clear") {
 // This command removes all messages from all users in the channel, up to 100.
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Je Hebt Geen Permissies Dit Te Doen!");
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Geef een aantal op tussen 2 en 100 voor het aantal berichten dat u wilt verwijderen");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Kon berichten niet verwijderen vanwege: ${error}`));
  }


if(command === "new") {
    const reason = message.content.split(" ").slice(1).join(" ");
    if (!message.guild.roles.find("name", "Support")) return message.channel.send(`Deze server heeft geen \`Support\` role gemaakt, daarom kan ik geen ticket maken.\nals je een administrator bent, maak deze role en geef het aan spelers die tickets moeten kunnen zien.`);
    if (message.guild.channels.find("name", "ticket-" + message.author.id)) return message.channel.send(`Je hebt al een open ticket.`);
    message.guild.createChannel(`ticket-${message.author.id}`, "text").then(c => {
        let role = message.guild.roles.find("name", "Eigenaar");
        let role2 = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(role2, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        message.channel.send(`:white_check_mark: Je ticket is gemaakt, #${c.name}.`);
        const embed = new Discord.RichEmbed()
        .setColor(0xCF40FA)
        .addField(`Hey ${message.author.username}!`, `Probeer zo goed mogelijk uit te leggen waarom je deze ticket hebt gemaakt en wij proberen je zo goed mogelijk te helpen.`)
        .setTimestamp();
        c.send({ embed: embed });
    }).catch(console.error);
  }

  // Close ticket command
if(command === "close") {
      if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`u kunt dit alleen in een ticket channel doen`);
      // Confirm delete - with timeout (Not command)
      message.channel.send(`wil je de ticket echt sluiten!\ntype dan \`/confirm\`.Je moet binnen 10 seconden hebben gereageerd.`)
          .then((m) => {
              message.channel.awaitMessages(response => response.content === '/confirm', {
                      max: 1,
                      time: 10000,
                      errors: ['time'],
                  })
                  .then((collected) => {
                      message.channel.delete();
                  })
                  .catch(() => {
                      m.edit('ticket close is over, de ticket is niet gesloten.').then(m2 => {
                          m2.delete();
                      }, 3000);
                  });
          });
  }

});


client.login(config.token);
