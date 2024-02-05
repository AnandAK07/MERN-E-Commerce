import axios from 'axios';
import React, { useState, useEffect } from 'react';

const PaginationExample = () => {
    const [products, setProducts] = useState([])

    const [currentPage, setCurrentPage] = useState(1);
    const data = Array.from({ length: 12 }).map((_, index) => `Item ${index + 1}`);

    // Function to calculate items per page and per row based on screen size
    const calculateItemsPerPage = () => {
        if (window.innerWidth >= 1024) {
            return { perPage: 4, perRow: 4 }; // Large screen - 4 divs per page & per row
        } else if (window.innerWidth >= 768) {
            return { perPage: 2, perRow: 2 }; // Medium screen - 2 divs per page & per row
        } else {
            return { perPage: 1, perRow: 1 }; // Small screen - 1 div per page & per row
        }
    };

    // State to manage items per page and per row
    const [itemsPerPage, setItemsPerPage] = useState(calculateItemsPerPage());

    // Update items per page and per row on window resize
    useEffect(() => {
        const handleResize = () => {
            setItemsPerPage(calculateItemsPerPage());
            setCurrentPage(1); // Reset current page on resize
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Calculate total number of pages
    const totalPages = Math.ceil(data.length / itemsPerPage.perPage);

    // Calculate index range for the current page
    const startIndex = (currentPage - 1) * itemsPerPage.perPage;
    const endIndex = Math.min(startIndex + itemsPerPage.perPage, data.length);

    // Function to handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Render the divs for the current page
    const renderDivs = () => {
        return data.slice(startIndex, endIndex).map((item, index) => (
            <div key={index} className={`col-span-${itemsPerPage.perRow}`}>
                {/* Your div structure goes here */}

                <a className="group">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                        <img
                            src={products.thumbnail}
                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                    </div>
                    {/* <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3> */}
                    {/* <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p> */}
                </a>

            </div>
        ));
    };



    const handleProduct = async () => {
        try {
            const data = await axios(`https://dummyjson.com/products`)
            console.log(data.data)
            console.log(data.data.products)
            setProducts(data.data.products);
        } catch (error) {
            console.log(error)
        }
    }
    console.log(products, "products")
    useEffect(() => {
        handleProduct();
    }, [])
    return (
        <div>
            {/* Grid container */}
            <div className={`grid grid-cols-${itemsPerPage.perRow}  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8`}>
                {renderDivs()}
            </div>

            {/* Pagination controls */}
            <div>
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>{`Page ${currentPage} of ${totalPages}`}</span>
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default PaginationExample;
