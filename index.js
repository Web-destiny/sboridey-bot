const TelegramApi = require('node-telegram-bot-api')

const token = '6580025605:AAHAaTGbOBczrR_0Vav41kiO3f92sSKLvFg'

const bot = new TelegramApi(token, {polling: true})


const start = () => {
     bot.setMyCommands([
         {command: '/start', description: 'Начальное приветствие'},
         {command: '/info', description: 'Информация о вас'}
     ])

     bot.on('message', async msg => {

         const text = msg.text;
         const chatId = msg.chat.id;

         if(text === '/start'){
             await bot.sendSticker(chatId, 'https://data.chpic.su/stickers/v/VProgramm/VProgramm_018.webp?v=1702631226')
             await bot.sendMessage(chatId, `Вы успешно подписались на уведомления об опросах!😉

Оставьте как можно больше информации о себе. Чем больше информации вы укажете, тем чаще будут приходить приглашения к опросам, а оплата за них будет выше.`)

         }

         if(text === '/info'){
             await bot.sendMessage(chatId, `Вас зовут ${msg.from.first_name}`)

         }
     })
 }

 start()
