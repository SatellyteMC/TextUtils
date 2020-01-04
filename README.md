# TextUtils
**TextUtils** is an implementation of the BungeeCord Chat API for Drupi.
You can download Drupi [here](https://stacket.net/drupi).

## Installation
To install **TextUtils**, start up your Minecraft server and make sure Drupi is installed.
Once Drupi has been installed, restart your server, and type the command `/drupi install textutils` into chat.
This will begin installing **TextUtils**.

## Methods
The center of **TextUtils** is the `Text()` object, which has 5 methods.

`setHoverText(string)` - add text to displayed when text is hovered over

`setCommand(string)` - add a command to be run when the text is clicked

`setSuggestCommand(string)` - add a command to be suggested when the text is clicked

`setUrl(string)` - add a URL to be opened when the text is clicked

`addExtra(string)` - append text to the object

`create()` - returns the TextComponent, ready to be used

## Broadcasting a message
**TextUtils** is very easy to implement into your server. Let's see an example:

```js
const Text = require('TextUtils').Text;

event.addListener("PlayerJoinEvent", event => {
  var player = event.getPlayer();

  server().spigot().broadcast(Text("A player has joined!").setHoverText(player.getDisplayName()).create());
});
```

The above script would output `A player has joined!` to every player with the hover text being the player's name.

## Sending a message to a player
If you'd only like to send a message to the player that joined, you can use the following example:

```js
const Text = require('TextUtils').Text;

event.addListener("PlayerJoinEvent", event => {
  var player = event.getPlayer();

  player.spigot().sendMessage(Text("Welcome to the server!").setUrl("https://myserver.com").create());
});
```

This would send a clickable message to the player that opens the server's website.

## Notes
You can use any method with **TextUtils**, as long as it supports `TextComponent` from Bungeecord.
Methods that do not support `TextComponent`, such as the normal `player.sendMessage()`, will not work with **TextUtils**.

*Enjoy TextUtils? Consider checking out our [other services](https://satellyte.net).*
