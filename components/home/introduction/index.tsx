import {
  IconChecklist,
  IconHistory,
  IconPhone,
  IconUserCheck,
} from "@tabler/icons-react";
import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function Introduction() {
  const itemCount = [
    {
      title: "10 سال سابقه",
      sub: "",
      icon: <IconHistory stroke={2} size={50} />,
    },
    {
      title: "+300",
      sub: "موکل موفق",
      icon: <IconUserCheck stroke={2} size={50} />,
    },
    {
      title: "+300",
      sub: "پرونده موفق",
      icon: <IconChecklist stroke={2} size={50} />,
    },
  ];

  const Pic = () => {
    return (
      <div className="relative h-60 w-60 md:min-h-50 md:min-w-50">
        <Image src={"/images/profile.png"} alt="profile" fill />
      </div>
    );
  };
  const Details = () => {
    return (
      <div className="grid gap-3 md:max-w-80 lg:max-w-100">
        <h1 className="yekanBlack text-center! text-4xl md:text-right! lg:text-5xl">
          حسین ستوده کیا
        </h1>
        <div className="yekanBold text-center! text-xl md:text-right!">
          موسسه حقوقی وکالتی
        </div>
        <div className="text-md text-justify!">
          متخصص در زمینه حقوق خانواده، با بیش از 10 سال سابقه موفق در ارائه
          خدمات حقوقی به مشتریان خود. تخصص در حل مسائل پیچیده حقوقی و ارائه
          راهکارهای موثر برای حفظ حقوق و منافع موکلین.
        </div>
        <div className="mt-5">
          <Button
            size="md"
            color=""
            className="bg-gold text-navy mx-auto md:mx-0"
          >
            <Link href={"#contact"} className="flex items-center gap-2">
              برای گرفتن مشاوره کلیک کنید
              <IconPhone stroke={1} />
            </Link>
          </Button>
        </div>
      </div>
    );
  };

  return (
    <section
      id="up"
      style={{ backgroundImage: "url('/images/bg.png')" }}
      className="bg- relative place-items-center overflow-y-hidden bg-contain bg-fixed bg-center bg-no-repeat md:grid md:min-h-screen"
    >
      <div className="container h-full md:grid md:place-items-center">
        <div>
          <div className="bg-navy mt-4 mb-5 flex w-full flex-col items-center gap-5 rounded-4xl px-4 py-10 text-white backdrop-blur-sm md:mt-0 md:w-180 md:flex-row-reverse md:justify-between lg:w-200 lg:p-15">
            <Pic />
            <Details />
          </div>
          {/* ==== */}
          <div className="mt-4 grid w-full grid-cols-1 gap-10 rounded-4xl bg-[rgba(10,22,40,0.2)] px-4 py-5 backdrop-blur-sm md:w-180 md:grid-cols-3 md:justify-between lg:w-200 lg:p-5">
            {itemCount.map(({ title, sub, icon }, index) => (
              <div key={index} className="flex flex-col items-center gap-5">
                {icon}
                <div className="text-xl md:text-[16px]">
                  <span>{title}</span>
                  <span>{sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
