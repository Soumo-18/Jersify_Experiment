// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap'
// import { useRef } from 'react'
// import { useLocation } from 'react-router-dom'

// const Stairs = (props) => {

//     const currentPath = useLocation().pathname

//     const stairParentRef = useRef(null)
//     const pageRef = useRef(null)

//     useGSAP(function () {
//         const tl = gsap.timeline()
//         tl.to(stairParentRef.current, {
//             display: 'block',
//         })
//         tl.from('.stair', {
//             height: 0,
//             stagger: {
//                 amount: -0.2
//             }
//         })
//         tl.to('.stair', {
//             y: '100%',
//             stagger: {
//                 amount: -0.25
//             }
//         })
//         tl.to(stairParentRef.current, {
//             display: 'none'
//         })
//         tl.to('.stair', {
//             y: '0%',
//         })

//         gsap.from(pageRef.current,{
//             opacity:0,
//             delay:1.3,
//             scale:1.2
//         })
//     }, [currentPath])
    

//     return (
//         <div>
//             <div ref={stairParentRef} className='h-screen w-full fixed z-20 top-0'>
//                 <div className='h-full w-full flex'>
//                     <div className='stair h-full w-1/5 bg-black'></div>
//                     <div className='stair h-full w-1/5 bg-black'></div>
//                     <div className='stair h-full w-1/5 bg-black'></div>
//                     <div className='stair h-full w-1/5 bg-black'></div>
//                     <div className='stair h-full w-1/5 bg-black'></div>
//                 </div>
//             </div>
//             <div ref={pageRef}>
//                 {props.children}
//             </div>
//         </div>
//     )
// }

// export default Stairs


//trying  stairs when page loads 
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Stairs = (props) => {
    const currentPath = useLocation().pathname
    const stairParentRef = useRef(null)
    const pageRef = useRef(null)

    // Set initial styles
    useEffect(() => {
        if (stairParentRef.current) {
            gsap.set(stairParentRef.current, {
                display: 'block',
                visibility: 'visible'
            });
            gsap.set('.stair', {
                height: '0%',
                y: '0%'
            });
        }
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: { ease: 'power2.inOut' }
        });

        // Initial state
        tl.set(pageRef.current, { opacity: 0 });

        // Animate stairs
        tl.to('.stair', {
            height: '100%',
            duration: 0.5,
            stagger: {
                amount: 0.3,
                from: 'start'
            }
        })
        .to('.stair', {
            y: '100%',
            duration: 0.5,
            stagger: {
                amount: 0.3,
                from: 'start'
            }
        })
        .to(stairParentRef.current, {
            display: 'none',
            duration: 0.1
        })
        .to(pageRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: 'power2.out'
        });

    }, [currentPath]);

    return (
        <div className="relative">
            <div 
                ref={stairParentRef} 
                className="fixed inset-0 z-50 bg-transparent"
                style={{ visibility: 'hidden' }}
            >
                <div className="h-full w-full flex">
                    <div className="stair h-full w-1/5 bg-black"></div>
                    <div className="stair h-full w-1/5 bg-black"></div>
                    <div className="stair h-full w-1/5 bg-black"></div>
                    <div className="stair h-full w-1/5 bg-black"></div>
                    <div className="stair h-full w-1/5 bg-black"></div>
                </div>
            </div>
            <div ref={pageRef}>
                {props.children}
            </div>
        </div>
    );
};

export default Stairs;