// // import React, { useEffect, useState } from 'react'
// // import cardImg1 from '../assets/card_img1.png'
// // import cardImg2 from '../assets/card_img2.png'
// // import cardImg3 from '../assets/card_img3.png'
// // import cardImg4 from '../assets/card_img4.png'
// // import cardImg5 from '../assets/card_img5.png'
// // import cardImg6 from '../assets/card_img6.png'
// // import Magazine from '../assets/Magazine.png'
// // import MagazineWhite from '../assets/Magazine_white.png'
// // import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
// // import MagzineCards from '../components/PodcastCards'
// // import { useDarkMode } from '../hooks/DarkModeContext'
// // import { useData } from '../hooks/DataContext'

// // const Magzine = () => {

// //   const data = useData();
// //   const allArticles = data.flatMap(article => article.magazines);

// //   useEffect(()=>{
// //     const scrollToTop = () => {
// //       window.scrollTo({
// //         top: 0,
// //         behavior: "smooth",
// //       });
// //     };

// //     scrollToTop()
// //   },[])

// //   const {darkMode} = useDarkMode()
// //   return (
// //     <div>
// //       <img
// //         src={darkMode ? MagazineWhite : Magazine}
// //         alt="Magazine"
// //         className="w-full h-auto object-cover py-6 lg:py-12"
// //       />
// //       <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center lg:py-6 gap-6">
// //         <h2 className="font-black text-lg sm:text-xl lg:text-2xl">Categories</h2>
// //         <div className="flex flex-wrap justify-start lg:justify-center items-center gap-4">
// //           <p className="px-4 py-1 border border-black dark:border-white rounded-full text-sm sm:text-base lg:text-lg">
// //             All
// //           </p>
// //           <p className="px-4 py-1 border border-black dark:border-white rounded-full text-sm sm:text-base lg:text-lg">
// //             Arts
// //           </p>
// //           <p className="px-4 py-1 border border-black dark:border-white rounded-full text-sm sm:text-base lg:text-lg">
// //             Street Art
// //           </p>
// //           <p className="px-4 py-1 border border-black dark:border-white rounded-full text-sm sm:text-base lg:text-lg">
// //             Sculptures
// //           </p>
// //         </div>
// //       </div>

// //       <MagzineCards cardData={allArticles} limit={9}/>
// //       <div className="flex justify-between my-14 gap-4 sm:gap-0">
// //         <p className="font-bold flex items-center gap-2">
// //           <FaArrowLeftLong /> PREVIOUS
// //         </p>
// //         <p className="font-bold flex items-center gap-2">
// //           NEXT <FaArrowRightLong />
// //         </p>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Magzine



// import React, { useEffect, useState } from 'react';
// import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
// import Magazine from '../assets/Magazine.png';
// import MagazineWhite from '../assets/Magazine_white.png';
// import MagzineCards from '../components/PodcastCards';
// import { useDarkMode } from '../hooks/DarkModeContext';
// import { useData } from '../hooks/DataContext';

// const Magzine = () => {
//   const data = useData();
//   const allArticles = data.flatMap(article => article.magazines);
//   const { darkMode } = useDarkMode();

//   // Pagination state
//   const [currentPage, setCurrentPage] = useState(1);
//   const articlesPerPage = 9;

//   // Calculate the index range for articles
//   const startIndex = (currentPage - 1) * articlesPerPage;
//   const currentArticles = allArticles.slice(startIndex, startIndex + articlesPerPage);

//   // Scroll to top on page change
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, [currentPage]);

//   // Pagination handlers
//   const handlePrevious = () => {
//     if (currentPage > 1) {
//       setCurrentPage(prevPage => prevPage - 1);
//     }
//   };

//   const handleNext = () => {
//     if (startIndex + articlesPerPage < allArticles.length) {
//       setCurrentPage(prevPage => prevPage + 1);
//     }
//   };

//   return (
//     <div>
//       <img
//         src={darkMode ? MagazineWhite : Magazine}
//         alt="Magazine"
//         className="w-full h-auto object-cover py-6 lg:py-12"
//       />
//       <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center lg:py-6 gap-6">
//         <h2 className="font-black text-lg sm:text-xl lg:text-2xl">Categories</h2>
//         <div className="flex flex-wrap justify-start lg:justify-center items-center gap-4">
//           <p className="px-4 py-1 border border-black dark:border-white rounded-full text-sm sm:text-base lg:text-lg">
//             All
//           </p>
//           <p className="px-4 py-1 border border-black dark:border-white rounded-full text-sm sm:text-base lg:text-lg">
//             Arts
//           </p>
//           <p className="px-4 py-1 border border-black dark:border-white rounded-full text-sm sm:text-base lg:text-lg">
//             Street Art
//           </p>
//           <p className="px-4 py-1 border border-black dark:border-white rounded-full text-sm sm:text-base lg:text-lg">
//             Sculptures
//           </p>
//         </div>
//       </div>

//       <MagzineCards cardData={currentArticles} />

//       <div className="flex justify-between my-14 gap-4 sm:gap-0">
//         <button
//           className="font-bold flex items-center gap-2 disabled:opacity-50"
//           onClick={handlePrevious}
//           disabled={currentPage === 1}
//         >
//           <FaArrowLeftLong /> PREVIOUS
//         </button>
//         <button
//           className="font-bold flex items-center gap-2 disabled:opacity-50"
//           onClick={handleNext}
//           disabled={startIndex + articlesPerPage >= allArticles.length}
//         >
//           NEXT <FaArrowRightLong />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Magzine;


import React, { useEffect, useState } from 'react';
import Magazine from '../assets/Magazine.png';
import MagazineWhite from '../assets/Magazine_white.png';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import MagzineCards from '../components/PodcastCards';
import { useDarkMode } from '../hooks/DarkModeContext';
import { useData } from '../hooks/DataContext';

const Magzine = () => {
  const data = useData();
  const allArticles = data.flatMap(article => article.magazines);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  const filteredArticles = selectedCategory === 'All'
    ? allArticles
    : allArticles.filter(article => article.cta === selectedCategory);

  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const { darkMode } = useDarkMode();

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to the first page when changing categories
  };

  return (
    <div>
      <img
        src={darkMode ? MagazineWhite : Magazine}
        alt="Magazine"
        className="w-full h-auto object-cover py-6 lg:py-12"
      />
      <div className="flex flex-col md:flex-row justify-between items-start lg:items-center lg:py-6 gap-6">
        <h2 className="font-black text-lg sm:text-xl lg:text-2xl">Categories</h2>
        <div className="flex flex-wrap justify-start lg:justify-center items-center gap-4">
          {['All', 'Art', 'Nature', 'Sculptures', 'Photography'].map((category) => (
            <p
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-1 border rounded-full text-sm sm:text-base lg:text-lg cursor-pointer ${
                selectedCategory === category
                  ? 'bg-black text-white dark:bg-white dark:text-black'
                  : 'border-black dark:border-white'
              }`}
            >
              {category}
            </p>
          ))}
        </div>
      </div>

      <MagzineCards cardData={paginatedArticles} limit={articlesPerPage} />

      <div className="flex justify-between my-14 gap-4 sm:gap-0">
        <p
          className={`font-bold flex items-center gap-2 cursor-pointer ${
            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
        >
          <FaArrowLeftLong /> PREVIOUS
        </p>
        <p
          className={`font-bold flex items-center gap-2 cursor-pointer ${
            currentPage * articlesPerPage >= filteredArticles.length
              ? 'opacity-50 cursor-not-allowed'
              : ''
          }`}
          onClick={() =>
            currentPage * articlesPerPage < filteredArticles.length &&
            setCurrentPage(currentPage + 1)
          }
        >
          NEXT <FaArrowRightLong />
        </p>
      </div>
    </div>
  );
};

export default Magzine;
