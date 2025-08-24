// import React from 'react'

// const Home = () => {
//   return (
//     <>
//       {/* <div
//   className="hero h-screen w-screen bg-center items-center justify-center"
//   style={{
   
//     backgroundImage:
//       "url(https://www.gstatic.com/webp/gallery/2.jpg)",
//   }}
// >
//   <div className="hero-overlay"></div>
//   <div className="hero-content text-neutral-content text-center">
//     <div className=" bg-green-700 w-4/5 max-w-xl   text-center ">
//       <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
//       <p className="mb-5">
//         Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
//         quasi. In deleniti eaque aut repudiandae et a id nisi.
//       </p>
//       <button className="btn btn-primary">Get Started</button>
//     </div>
//   </div>
// </div>     */}

//  <div
//       className="hero relative h-screen w-screen bg-cover bg-center flex items-center justify-center"
//       style={{
//         backgroundImage: "url('https://championskit.in/cdn/shop/articles/best-football-club-kits-of-all-time.webp?v=1736862752')",
//       }}
//     >
//       <div className=" absolute inset-0 flex items-center justify-center z-10">
//         <h1 className="mb-5 text-4xl text-center font-bold">Welcome to JERSIFY </h1>
//         <p className="mb- text-2xl text-center items-center">
//           Built for fans. Crafted for durability. Our story began when lifelong supporters wanted jerseys that stood up to every chant, every goal celebration, every proud moment. Explore our collection and find the one that speaks to your team spirit.
//         </p>
//         <button className="border  hover:bg-gray-600 rounded mt-3 px-4 py-4">Get Started</button>
//       </div>
//     </div>
    
    
//     </>
//   )
// }

// export default Home


import React from 'react';

const Home = () => {
  return (
    // <div className="relative h-screen w-screen bg-cover bg-center"
    //      style={{ backgroundImage: "url('https://championskit.in/cdn/shop/articles/best-football-club-kits-of-all-time.webp?v=1736862752')" }}>
    //   {/* Optional: dark overlay for better contrast */}
    //   <div className="absolute inset-0 bg-black opacity-40"></div>

    //   {/* Centered content */}
    //   <div className="absolute inset-0 flex items-center justify-center z-10">
    //     <div className="w-4/5 max-w-lg shadow-lg text-center p-8 rounded-lg">
    //       <h1 className="mb-5 text-4xl font-bold">Welcome to JERSIFY</h1>
    //       <p className="mb-5 text-2xl font-semibold text-black text-shadow-[4px_4px_8px_white] font-serif ">
    //         Built for fans. Crafted for durability. Our story began when lifelong supporters wanted jerseys that stood up to every chant, every goal celebration, every proud moment. Explore our collection and find the one that speaks to your team spirit.
    //       </p>
    //       <button className="border-4 border-gray-900 text-xl text-white rounded-2xl hover:bg-blue-300 font-semibold mt-3 px-4 py-2">Get Started</button>
    //     </div>
    //   </div>
    // </div>
    <div className='flex flex-col items-center mt-6 lg:mt-20'>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          JERSIFY: Where Club Passion Meets Global Style
          “Wear Your Loyalty. Rep Your Club. Rule the Streets.”
        <span className='bg-gradient-to-r from-red-600 to-[#FFCAD4] text-transparent bg-clip-text'>
          {" "}
          From Manchester to Madrid—Jerseys That Speak Your Soul</span>
      </h1>
      <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
        Whether you're chanting in the stands or streaming the match at 2 AM, your loyalty deserves to be worn loud and proud. At JERSIFY, we bring you authentic, high-quality club jerseys from every corner of the footballing world—Premier League icons, La Liga legends, Serie A classics, and more. This isn’t just merch. It’s a badge of honor. A statement of passion. A way to connect with millions who live and breathe the beautiful game. Gear up, represent your colors, and let your jersey do the talking.
      </p>
       <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Explore
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border hover:bg-blue-700 transition duration-500">
          Shop Now
        </a>
      </div>


    </div>
  );
};

export default Home;
