import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import image1 from "../../assets/images/carousel1.jpg"
import image2 from "../../assets/images/carousel2.jpg"


export const mainCaroselData = [
    // {
    //     name: "dress",
    //     image: "https://www.ethnicplus.in/cdn/shop/files/1_6c18ba97-1808-4b5f-b40d-0a73e98c6e6b.jpg?v=1755022934",
    // },
    {
        name: "dress",
        image: image1,

    },
    {
        name: "dress",
        image: image2,
    },
    // {
    //     name: "dress",
    //     image: "https://www.ethnicplus.in/cdn/shop/files/25_gown_coll_copy.jpg_mob_2_1920x.jpg?v=1754073611",
    // }
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
