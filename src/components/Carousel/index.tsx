import { useEffect, useRef, useState } from "react";
import { CardCarousel } from "../CardCarousel";
import { ArrowButton } from "../ArrowButton";

interface CarouselProps {
  children?: React.ReactNode;
  className?: string;
  style?: Object;
  showArrows?: boolean;
  data?: any;
}
interface Data {
  avatar_url: string;
  name: string;
  likes: string;
  thumbnail: string;
  title: string;
  description: string;
  price: string;
  created_at: string;
}

export function Carousel(props: CarouselProps) {
  const { children, className, style, showArrows, data } = props;
  const carousel = useRef<any>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [carouselWidth, setCarouselWidth] = useState(0);

  useEffect(() => {
    if (carousel.current) {
      setCarouselWidth(carousel.current.scrollWidth);
      setScrollPosition(carousel.current.scrollLeft);
    }
  }, [scrollPosition, carouselWidth]);

  const handleLeftClick = (e: any) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
    setScrollPosition(carousel.current.scrollLeft);
  };

  const handleRightClick = (e: any) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
    setScrollPosition(carousel.current.scrollLeft);
  };

  const isLeftDisabled = scrollPosition === 0;
  const isRightDisabled =
    scrollPosition + carousel.current?.offsetWidth === carouselWidth;

  return (
    <>
      <div className="flex items-center justify-end mt-[-2rem]">
        <div className="flex items-center gap-2">
          <ArrowButton
            direction="left"
            onClick={handleLeftClick}
            disabled={isLeftDisabled}
          />
          <ArrowButton
            direction="right"
            onClick={handleRightClick}
            disabled={isRightDisabled}
          />
        </div>
      </div>

      <div className="container">
        <div className="carousel gap-10" ref={carousel}>
          {data?.map((item: Data, index: number) => (
            <CardCarousel
              avatar_url={item.avatar_url}
              created_at={item.created_at}
              description={item.description}
              likes={item.likes}
              name={item.name}
              price={item.price}
              thumbnail={item.thumbnail}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </>
  );
}
