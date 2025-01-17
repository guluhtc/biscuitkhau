import Image from "next/image";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const transformations = [
  {
    before: "/empty.png",
    after: "/empty-gen.png",
    title: "Empty Room to Modern Living Space"
  },
  {
    before: "/sketch.jpg",
    after: "/sketch-gen.jpg",
    title: "Sketch to Reality"
  },
  {
    before: "/1.jpg",
    after: "/1-new.jpg",
    title: "Living Room Transformation"
  },
  {
    before: "/empty.png",
    after: "/empty-gen.png",
    title: "Empty Room to Modern Living Space 2"
  },
  {
    before: "/sketch.jpg",
    after: "/sketch-gen.jpg",
    title: "Sketch to Reality 2"
  },
  {
    before: "/1.jpg",
    after: "/1-new.jpg",
    title: "Living Room Transformation 2"
  },
  {
    before: "/empty.png",
    after: "/empty-gen.png",
    title: "Empty Room to Modern Living Space 3"
  },
  {
    before: "/sketch.jpg",
    after: "/sketch-gen.jpg",
    title: "Sketch to Reality 3"
  },
  {
    before: "/1.jpg",
    after: "/1-new.jpg",
    title: "Living Room Transformation 3"
  }
];

const ITEMS_PER_PAGE = 3;

export default function PortfolioGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(transformations.length / ITEMS_PER_PAGE);

  // Get current items
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = transformations.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Generate page numbers array
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    const halfMaxPages = Math.floor(maxPagesToShow / 2);
    
    let startPage = Math.max(1, currentPage - halfMaxPages);
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
    
    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    
    return pageNumbers;
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 gap-12">
        {currentItems.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative aspect-square">
                <div className="absolute top-4 left-4 bg-black/50 px-3 py-1 rounded-full text-sm font-medium text-white z-10">
                  Before
                </div>
                <Image
                  src={item.before}
                  alt="Before transformation"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative aspect-square">
                <div className="absolute top-4 left-4 bg-black/50 px-3 py-1 rounded-full text-sm font-medium text-white z-10">
                  After
                </div>
                <Image
                  src={item.after}
                  alt="After transformation"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mt-4 text-center">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center items-center mt-12">
        <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`relative inline-flex items-center rounded-l-md px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
              currentPage === 1 ? 'cursor-not-allowed' : 'cursor-pointer'
            }`}
          >
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          
          {getPageNumbers().map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                currentPage === number
                  ? 'z-10 bg-purple-600 text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600'
                  : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
              }`}
            >
              {number}
            </button>
          ))}
          
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`relative inline-flex items-center rounded-r-md px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
              currentPage === totalPages ? 'cursor-not-allowed' : 'cursor-pointer'
            }`}
          >
            <span className="sr-only">Next</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </nav>
      </div>
      
      {/* Page indicator */}
      <div className="text-center mt-4 text-gray-500">
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
}