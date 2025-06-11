import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

const Pagination = () => {

    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);


    const PAGE_SIZE = 10;

    const fetchData = async () => {
        try {
            const data = await fetch("https://dummyjson.com/products?limit=500");
            const response = await data.json();
            setProducts(response.products)
        } catch (error) {
            console.log(`Error in fetching the data`, error)
        }
    }

    useEffect(() => {
        fetchData();
        return () => {
            console.log("Clean up")
        }
    }, [])

    //Pagination Logic
    const totalProducts = products.length; // it will return the total products
    const numberOfPages = Math.ceil(totalProducts / PAGE_SIZE); // if 200/10 = 20 page
    const start = currentPage * PAGE_SIZE; // 0 * 10 = 0th page
    const end = start + PAGE_SIZE;

    function handlePageChange(n) {
        setCurrentPage(n)
    }

    const handleNextButton = () => {
        setCurrentPage((prev) => prev + 1)
    }

    const handlePreviousButton = () => {
        setCurrentPage((prev) => prev - 1)
    }


    return !products.length ? (
        <h1 className='error'>No products found</h1>
    ) : (
        <div >

            <h1 className='pagination'>Pagination</h1>

            <div className='pagination-container'>


                <div className='page-number-container'>

                    <button disabled={currentPage === 0} className='page-number prev' onClick={handlePreviousButton}>Previous</button>
                    {[...Array(numberOfPages).keys()].map((n) => (<button className={`page-number ${n === currentPage ? "active" : ""}`}
                        key={n} onClick={() => handlePageChange(n)}>{n}</button>))}
                    <button disabled={currentPage === numberOfPages - 1} onClick={handleNextButton} className='page-number next'>Next</button>
                </div>
            </div>

            <div className='products-container'>
                {products.slice(start, end).map(p => <ProductCard key={p.id} image={p.thumbnail} title={p.title} />)}
            </div>
        </div>
    )
}

export default Pagination
