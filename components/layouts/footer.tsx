import {
  IconBrandInstagram,
  IconMail,
  IconPhoneCall,
} from "@tabler/icons-react";
import Link from "next/link";

export default function Footer() {
  const information = [
    {
      icon: <IconPhoneCall stroke={1} color="#c9a227" />,
      value: "09196163337",
    },
    {
      icon: <IconBrandInstagram stroke={1} color="#c9a227" />,
      value: "@SOTOUDEH2030",
    },
    {
      icon: <IconMail stroke={1} color="#c9a227" />,
      value: "Send500500@gmail.com",
    },
  ];

  return (
    <footer className="bg-navy-light">
      <div className="container py-5" id="call">
        <div className="grid gap-5 md:grid-cols-3">
          {information.map((info, i) => (
            <div
              key={i}
              className="flex items-center gap-2 md:justify-center md:gap-6"
            >
              <div className="border-accent-line grid h-10 w-10 place-items-center rounded-xl border">
                {info.icon}
              </div>
              <span className="text-white">{info.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-accent-line text-navy pt-4 pb-25 text-xs">
        <p className="text-center!">
          تمامی حقوق برای سایت شخصی حسین ستوده کیا محفوظ است
        </p>
        <p className="text-center!">
          طراحی و برنامه نویسی شده توسط
          <Link href="https://t.me/Yousef_fatomi" className="text-red-950">
            {" "}
            یوسف فاطومی
          </Link>
        </p>
      </div>
    </footer>
  );
}
