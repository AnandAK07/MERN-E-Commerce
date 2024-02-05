import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export const mainCaroselData = [
    {
        name: "dress",
        image: "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/0/10_5.jpg",
    },
    {
        name: "dress",
        image: "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/2/12_4.jpg",

    },
    {
        name: "dress",
        image: "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/9/_/9_8.jpg",
    },
    {
        name: "dress",
        image: "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/1/11_4.jpg",
    }
]
const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <div className="item" data-value="1">1</div>,
    <div className="item" data-value="2">2</div>,
    <div className="item" data-value="3">3</div>,
    <div className="item" data-value="4">4</div>,
    <div className="item" data-value="5">5</div>,
];

export const MainCarousel = () => {
    const items = mainCaroselData.map((item) => <img src={item.image} className='cursor-pointer' role='presentation' />)
  return (
    <div>
          <AliceCarousel
              items={items}
              disableButtonsControls
              autoPlay
              autoPlayInterval={2500}
              infinite
          />
    </div>
  )
}
