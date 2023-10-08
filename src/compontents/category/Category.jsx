import React from 'react'
import "./category.css"
import {GrFormPrevious} from "react-icons/gr"
import {MdNavigateNext} from "react-icons/md"
import {category} from "../../assets/data/data"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function SampleNextArrow(props) {
    const {onClick } = props
        return(
            <div className='btn-control-next ' onClick={onClick}>
                <button className='btn-next'>
                    <MdNavigateNext/>
                </button>
            </div>
        )
      
      
    
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return(
        <div className='btn-control-prev ' onClick={onClick}>
            <button className='btn-prev'>
                <GrFormPrevious/>
            </button>
        </div>
    )
  }
function Category() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2
            }
          },
        ]
      };
  
  return (
    <div className='section__category pb-5'>
          <div className="category__container">
          <Slider {...settings} >
            {category.map((ele)=>{
                return(
                    <div className='r' key={ele.id}>    
                     <div className='category__boxs ' >
                    <div className="box bg-white text-center w-100 me-2">
                      <div className="box__img d-flex justify-content-center">    
                      <img src={ele.img} alt="" />
                      </div>
                      <p className='text-center'>{ele.title}</p>
                    </div>
  
                  </div>
                  </div>
           
                )
            })}
            </Slider>
          </div>
    </div>
  )
}

export default Category