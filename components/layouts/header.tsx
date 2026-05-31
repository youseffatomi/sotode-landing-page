import {
  IconCategory2,
  IconHeadset,
  IconHome,
  IconPhone,
  IconPhoneRinging,
} from "@tabler/icons-react";
import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const menu = {
    right: [
      {
        name: "خانه",
        link: "#",
        icon: <IconHome stroke={1} size={20} />,
      },
      {
        name: "مشاوره",
        link: "#",
        icon: <IconHeadset stroke={1} size={20} />,
      },
    ],
    left: [
      {
        name: "تماس",
        link: "#",
        icon: <IconPhoneRinging stroke={1} size={20} />,
      },
      {
        name: "خدمات",
        link: "#",
        icon: <IconCategory2 stroke={1} size={20} />,
      },
    ],
  };

  return (
    <header className="text-navy fixed right-1/2 bottom-4 z-50 mx-auto w-full max-w-85 translate-x-1/2 rounded-3xl bg-[rgba(10,22,40,.06)] py-2 shadow-2xl backdrop-blur-sm md:max-w-100">
      <div className="relative flex w-full items-center justify-between px-4">
        {menu.right.map(({ name, icon, link }, index) => (
          <Link
            href={link}
            key={index}
            className="flex h-15 w-15 flex-col items-center justify-center gap-1 rounded-xl transition-all hover:bg-[rgba(17,34,64,.3)] hover:text-white"
          >
            {icon}
            <span className="text-xs">{name}</span>
          </Link>
        ))}
        <Image src="/images/logo.svg" alt="logo" width={50} height={50} />
        {menu.left.map(({ name, icon, link }, index) => (
          <Link
            href={link}
            key={index}
            className="flex h-15 w-15 flex-col items-center justify-center gap-1 rounded-xl transition-all hover:bg-[rgba(17,34,64,.3)] hover:text-white"
          >
            {icon}
            <span className="text-xs">{name}</span>
          </Link>
        ))}
      </div>
    </header>
  );
}
