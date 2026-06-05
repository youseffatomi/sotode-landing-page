import {
  IconBook,
  IconBriefcase,
  IconHome2,
  IconShieldCheck,
} from "@tabler/icons-react";

type ServiceData = {
  icon: React.ReactElement;
  title: string;
  description: string;
};

export default function Services() {
  const ServiceData: ServiceData[] = [
    {
      icon: <IconShieldCheck stroke={2} color="#c9a227" size={50} />,
      title: "میانجیگری جزایی",
      description:
        "تخصص ویژه در میانجیگری پرونده‌های جزایی استان خوزستان با بالاترین نرخ موفقیت",
    },
    {
      icon: <IconBriefcase stroke={2} color="#c9a227" size={50} />,
      title: "مشاوره حقوقی شرکت‌ها",
      description:
        "معاونت حقوقی و مشاوره ارشد شرکت‌های بخش خصوصی و دولتی با رویکرد پیشگیرانه",
    },
    {
      icon: <IconHome2 stroke={2} color="#c9a227" size={50} />,
      title: "داوری تجاری",
      description:
        "عضویت در کانون داوران استان خوزستان و حل‌وفصل اختلافات تجاری با روش‌های نوین",
    },
    {
      icon: <IconBook stroke={2} color="#c9a227" size={50} />,
      title: "تألیف آثار حقوقی",
      description: "مدرس و نگارنده آثار حقوقی",
    },
  ];

  return (
    <section className="bg-off-white py-20" id="services">
      <div className="container">
        <div className="mb-10">
          <h2 className="yekanBlack text-3xl">خدمات حقوقی ما</h2>
          <span className="mt-3 block">
            با بیش از سال ها تجربه در مهم‌ترین پرونده‌های حقوقی کشور، آماده دفاع
            از حقوق شما هستیم.
          </span>
        </div>

        <div className="grid md:mt-20 md:grid-cols-2 lg:grid-cols-4">
          {ServiceData.map((S, i) => (
            <div key={i} className="flex h-70 flex-col items-center">
              <div className="bg-navy-light mb-8 grid h-25 w-25 place-items-center rounded-xl transition-all hover:scale-125">
                {S.icon}
              </div>

              <h3 className="yekanBold mb-4 text-center! text-2xl">
                {S.title}
              </h3>

              <p className="max-w-50 text-center! text-sm">{S.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
