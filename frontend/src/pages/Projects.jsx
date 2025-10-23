import { useGSAP } from '@gsap/react'
import ProjectCard from '../components/ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


const Projects = () => {

  const projects = [
    {
    image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
  }, 
  {
    image1: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/4b7d8d8d64a943cc9a5c629c4ca483b7_9366/Real_Madrid_24-25_Home_Mini_Kit_Kids_White_IT5175_01_laydown.jpg',
    image2: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/ca0497a38c7f48dfa0bff9acfd5a8081_9366/Predator_League_Firm_Ground_Boots_Kids_Blue_ID0911_22_model.jpg'
  },



  //  {
  //   image1: 'https://fulltimestore.in/cdn/shop/files/intermiamiawayset.jpg?v=1744929843&width=1080',
  //   image2: 'https://fulltimestore.in/cdn/shop/files/Screenshot2025-09-21at16-52-4726311a11a192f4f24989f9960f03873cd25b2776c795f168zo12vvl12vvufowebp.jpg_WEBPImage1200x1200pixels_Scaled_60.png?v=1758453831&width=700'
  // }
]


  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.hero', {
      height: '100px',
      stagger: {
        amount: 0.4
      },
      // scrollTrigger: {
      //   trigger: '.lol',
      //   start: 'top 100%',
      //   end: 'top -150%',
      //   scrub: true
      // }
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'bottom -180%',
        scrub: true
      }
    })
  })


//copilot
// gsap.registerPlugin(ScrollTrigger)

// useGSAP(() => {
//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: '.section',
//       start: 'top top',
//       end: '+=100%',
//       scrub: true,
//       pin: true
//     }
//   })

//   tl.from('.section-content', {
//     opacity: 0,
//     y: 100,
//     stagger: 0.2
//   })
// })
// document.querySelectorAll('.section').forEach((section) => {
//   gsap.from(section.querySelectorAll('.item'), {
//     scrollTrigger: {
//       trigger: section,
//       start: 'top 80%',
//       end: 'bottom top',
//       scrub: true
//     },
//     y: 50,
//     opacity: 0,
//     stagger: 0.3
//   })
// })


// ScrollTrigger.defaults({
//   snap: {
//     snapTo: 1 / 3, // snap every third of the viewport
//     duration: 0.5,
//     ease: 'power1.inOut'
//   }
// })




  return (
    <div className='lg:p-4 p-2 mb-[100vh]'>
      <div className=' pt-[45vh]'>
        <h2 className='font-[font2] lg:text-[9.5vw] text-7xl uppercase'> NEW ARRIVALS CLUBS</h2>
      </div>
      <div className='-lg:mt-20 lol'>
        {projects.map(function (elem, idx) {
          return <div key={idx} className='hero w-full lg:h-full  mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
            <ProjectCard image1={elem.image1} image2={elem.image2} /> 
            
          </div>
        })}

      </div>
    </div>
  )
}

export default Projects