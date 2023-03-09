import React from 'react'
import Slider from 'react-slick';
import NextArrow from '../common/footer/Arrows/NextArrow';
import PreviousArrow from '../common/footer/Arrows/PreviousArrow';
import './TopBrands.css'

const brandList = [
    {
        id: 1,
        time: "26 mins",
        name: "Sagar Gaire Fast Food",
        img: "https://b.zmtcdn.com/data/brand_creatives/logos/f8eeab5b2de60c8b2f19c9d1015e32f9_1617972403.png"
    },
    {
        id: 2,
        time: "45 mins",
        name: "Manohar Dairy And Restaurant",
        img: "https://b.zmtcdn.com/data/brand_creatives/logos/304f7e8f12ed82f7aa1e23f076a43e65_1617972508.png"
    },
    {
        id: 3,
        time: "30 mins",
        name: "Sharma Chinese and Fast Food",
        img: "https://b.zmtcdn.com/data/brand_creatives/logos/aaa86c706fe235dd78dec0dd32d43d6b_1550745886.png"
    },

    {
        id: 5,
        time: "35 mins",
        name: "Bake N Shake",
        img: "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png"
    },
    {
        id: 6,
        time: "24 mins",
        name: "Bapu ki Kutiya",
        img: "https://b.zmtcdn.com/data/brand_creatives/logos/ddc425ee369b0169900fec2738bfff26_1592480548.png"
    },
    {
        id: 7,
        time: "35 mins",
        name: "Burger King",
        img: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187753.png"
    },
    {
        id: 8,
        time: "41 mins",
        name: "KFC",
        img: "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589432952.png"
    }

]

//settings for carousel
const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />
    // arrow will be reused so place it in common folder
    //slidesToShow is 4 as in zomato web site at a time 4 imgs are shown
};
function TopBrands() {
    return (
        <>
            <div className=' maxWidth py-3'>
                <div className='collectionTitle'>Top brands for you</div>
            </div>


            <Slider {...settings} className='maxWidth my-4'>
                {brandList.map(item => {
                    return (
                        <div className=' dFlex px-2' key={item.id} style={{ position: 'relative', width: '90%' }}>


                            <div className='brandCover cursorPointer' >
                                <img src={item.img} alt={item.name} className='topBrandsImg'></img>

                            </div>

                            <div className='delItemTitle mt-2'>{item.name}</div>


                        </div>
                    )

                }

                )
                }
            </Slider>


        </>
    )
}

export default TopBrands
