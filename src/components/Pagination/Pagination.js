import React from 'react'
import ReactPaginate from 'react-paginate'
import './Pagination.scss'
function Pagination({pageCount, handlePageClick}) {
  return (
    <div className='pagination'>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< Previous"
        renderOnZeroPageCount={null}
      />
    </div>
  )
}

export default Pagination
