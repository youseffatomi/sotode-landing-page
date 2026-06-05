import BaleBot from "node-bale-bot-api";

type Body = {
  name: string;
  lastName: string;
  tel: string;
  description: string;
};

type msg = {
  chat: {
    id: number;
  };
};

const bot = new BaleBot(process.env.BOT_TOKEN, { polling: true });

const TARGET_CHAT_ME = process.env.TARGET_CHAT_ME;
const TARGET_CHAT_SO = process.env.TARGET_CHAT_SO;

// دستور /start
bot.onText(/\/start/, (msg: msg) => {
  bot.sendMessage(msg.chat.id, "سلام! بات آماده دریافت اطلاعات فرم است ✅");
});

// دستور /getid — برای پیدا کردن chat_id خودت
bot.onText(/\/getid/, (msg: msg) => {
  bot.sendMessage(msg.chat.id, `آیدی چت شما: \`${msg.chat.id}\``, {
    parse_mode: "Markdown",
  });
});

async function sendFormData({ name, lastName, tel, description }: Body) {
  const text =
    `📋 *اطلاعات موکل*\n` +
    `━━━━━━━━━━━━━━━━━━━\n` +
    `👤 *نام:* ${name} ${lastName}\n` +
    `📞 *شماره تماس:* ${tel}\n` +
    `📝 *توضیحات:*\n${description || "—"}`;
  bot.sendMessage(TARGET_CHAT_ME, text, { parse_mode: "Markdown" });
  return bot.sendMessage(TARGET_CHAT_SO, text, { parse_mode: "Markdown" });
}

export async function POST(request: Request) {
  console.log(request);

  const body: Body = await request.json();
  const { description, lastName, name, tel } = body;

  // اعتبارسنجی
  if (!name || !lastName || !tel) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "نام، نام خانوادگی و شماره تماس الزامی هستند",
      }),
      { status: 401, headers: { "Content-Type": "application/json" } },
    );
  }

  if (!/^[0-9+]{10,13}$/.test(tel)) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "شماره تماس معتبر نیست",
      }),
      { status: 401, headers: { "Content-Type": "application/json" } },
    );
  }

  try {
    await sendFormData({ name, lastName, tel, description });

    return new Response(
      JSON.stringify({
        success: true,
        message: "اطلاعات با موفقیت ارسال شد ✅",
      }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  } catch (error) {
    console.error("خطا در ارسال پیام:", (error as Error).message);

    await sendFormData({ name, lastName, tel, description });

    return new Response(
      JSON.stringify({ success: false, message: "خطا در ارسال پیام به بله" }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
}
