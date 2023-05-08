import { useState } from "react";
import {
  BsFillHandThumbsDownFill,
  BsFillHandThumbsUpFill,
} from "react-icons/bs";

interface CardCarouselProps {
  avatar_url: string;
  name: string;
  likes: string;
  thumbnail: string;
  title: string;
  description: string;
  price: string;
  created_at: string;
}

export function CardCarousel(props: CardCarouselProps) {
  const { avatar_url, name, likes, thumbnail, title, description, price } =
    props;
  const [valor, setValor] = useState(Number(likes));
  function limitText(text: string, limit: number) {
    if (text.length > limit) {
      return text.substring(0, limit) + "...";
    } else {
      return text;
    }
  }
  function Decrement() {
    setValor(valor - 1);
  }
  function Increment() {
    setValor(valor + 1);
  }
  return (
    <div className="w-96 mt-6 cursor-pointer">
      <div className="flex justify-between items-center gap-2 w-10 h-10 bg-white rounded-full">
        <img src={avatar_url} className="rounded-full object-contain" />
        <span>{name}</span>
        <div className="flex-1 flex justify-end items-center gap-4">
          <span>{valor}k</span>
          <div className="flex items-center justify-center gap-2">
            <button
              className="bg-gray-200 text-black w-8 h-8 rounded-full  flex items-center justify-center"
              onClick={Increment}
            >
              <BsFillHandThumbsUpFill color="#bb0202" />
            </button>
            <button
              className="bg-gray-200 text-black w-8 h-8 rounded-full  flex items-center justify-center"
              onClick={Decrement}
            >
              <BsFillHandThumbsDownFill color="#df6c00" />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-green-300 w-72 h-48 rounded-[20%] mt-2 hover:opacity-95 transition-transform duration-200 hover:transform hover:scale-95">
        <img
          src={thumbnail}
          alt=""
          className="w-[100%] h-[100%] rounded-[20%] object-fill"
        />
      </div>
      <div className="flex flex-col gap-2 items-start justify-start">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex items-center gap-2 justify-between">
          <div>
            <span title={description}>{limitText(description, 20)}</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold">{price}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
