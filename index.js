const TextComponent = Java.type("net.md_5.bungee.api.chat.TextComponent");
const HoverEvent = Java.type("net.md_5.bungee.api.chat.HoverEvent");
const ClickEvent = Java.type("net.md_5.bungee.api.chat.ClickEvent");
const ComponentBuilder = Java.type("net.md_5.bungee.api.chat.ComponentBuilder");
const ChatColor = Java.type("net.md_5.bungee.api.ChatColor");

exports = class Text {
    constructor(message){
        this.message = new TextComponent(message);
    }

    setHoverText(hovText){
        this.message.setHoverEvent(new HoverEvent(HoverEvent.Action.SHOW_TEXT, new ComponentBuilder(hovText).create()));
        return this;
    }

    setCommand(command){
        this.message.setClickEvent(new ClickEvent(ClickEvent.Action.RUN_COMMAND, command));
        return this;
    }

    setUrl(url){
        this.message.setClickEvent(new ClickEvent(ClickEvent.Action.OPEN_URL, url));
        return this;
    }

    addExtra(text){
        this.message.addExtra(text);
        return this;
    }

    setSuggestCommand(command){
        this.message.setClickEvent(new ClickEvent(ClickEvent.Action.SUGGEST_COMMAND, command));
        return this;
    }

    setColor(color){
        this.message.setColor(ChatColor.of(color));
        return this;
    }

    setBold(bool){
        this.message.setBold(bool);
        return this;
    }

    setItalic(bool){
        this.message.setItalic(bool);
        return this;
    }

    setStrikethrough(bool){
        this.message.setStrikethrough(book);
        return this;
    }

    setUnderlined(bool){
        this.message.setUnderlined(bool);
        return this;
    }

    setObfuscated(bool){
        this.message.setObfuscated(bool);
        return this;
    }

    create(){
        return this.message;
    }

    static rgb(r, g, b){
        let rgbToHex = rgb => {
            let hex = Number(rgb).toString(16);
            if (hex.length < 2) {
                hex = "0" + hex;
            }
            return hex;
        }
        return `#${rgbToHex(r)}${rgbToHex(g)}${rgbToHex(b)}`;
    }
}