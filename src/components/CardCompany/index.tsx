interface CardCompanyProps {
  title: string;
  description: string;
  logo: string;
  thumbnailUrl_1: string;
  thumbnailUrl_2: string;
  thumbnailUrl_3: string;
}

export function CardCompany(props: CardCompanyProps) {
  const {
    title,
    description,
    logo,
    thumbnailUrl_1,
    thumbnailUrl_2,
    thumbnailUrl_3,
  } = props;
  return (
    <div className="w-[528px] bg-white rounded-xl shadow-md shadow-gray-800 p-4 my-6">
      <div className="w-[100%] h-[100%] flex justify-between items-center ">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt=""
            width={35}
            height={35}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <h1 className="text-lg font-bold">{title}</h1>
            <span className="text-sm">{description}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img
            src={thumbnailUrl_1}
            width={60}
            height={60}
            className="rounded-lg object-cover"
          />
          <img
            src={thumbnailUrl_2}
            width={60}
            height={60}
            className="rounded-lg"
          />
          <img
            src={thumbnailUrl_3}
            width={60}
            height={60}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
