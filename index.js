module.exports = {
  "Text": text => {
    var TextComponent = Java.type("net.md_5.bungee.api.chat.TextComponent");
    var HoverEvent = Java.type("net.md_5.bungee.api.chat.HoverEvent");
    var ClickEvent = Java.type("net.md_5.bungee.api.chat.ClickEvent");
    var ComponentBuilder = Java.type("net.md_5.bungee.api.chat.ComponentBuilder");

    this.message = new TextComponent(text);

    this.setHoverText = (hovText) => {
      this.message.setHoverEvent(new HoverEvent(HoverEvent.Action.SHOW_TEXT, new ComponentBuilder(hovText).create()));
      return this;
    }

    this.setCommand = (command) => {
      this.message.setClickEvent(new ClickEvent(ClickEvent.Action.RUN_COMMAND, command));
      return this;
    }

    this.setUrl = (url) => {
      this.message.setClickEvent(new ClickEvent(ClickEvent.Action.OPEN_URL, url));
      return this;
    }

    this.addExtra = (text) => {
      this.message.addExtra(text);
      return this;
    }

    this.setSuggestCommand = (command) => {
      this.message.setClickEvent(new ClickEvent(ClickEvent.Action.SUGGEST_COMMAND, command));
      return this;
    }

    this.create = () => {
      return this.message;
    }

    return this;
  }
}
