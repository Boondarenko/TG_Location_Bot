import { Telegraf, Markup } from "telegraf";

const token = "6918120014:AAGB3UfT4aHE8r_f4ml5KZucobXHU5Ny_lo";
const webAppUrl = "https://0d5e-146-120-13-72.ngrok-free.app";

const bot = new Telegraf(token);

bot.command("start", (context) => {
  context.reply(
    "Hello, click on the button to find out your current location",
    Markup.keyboard([
      Markup.button.webApp("Find out your current location", webAppUrl),
    ])
  );
});

bot.launch();
