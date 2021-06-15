import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

export default function News(props) {

    const[pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 9
    const pageVisited = pageNumber * usersPerPage
    
    const paginatedchange = Math.ceil(props.articles.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
      };

    return (
        <div className='mt-3'>
            {/*Condition Rendering */}

            {props.loading ? <div className='loading'>
                <img src="/loading.gif" />
            </div> : null}

            <div className="row">
                {
                    props.articles.slice(pageVisited,pageVisited + usersPerPage)
                    .map(item => {
                        return (
                            <div className='col-md-4'>

                                <div className='card mb-4'>
                                    <img src={item.urlToImage ?? '/default.jpg'} className="card-img-top imagenCard" alt={item.title} />
                                    <div className="card-body cdbody">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.content}</p>
                                        <h6 className="card-text"><small className="text-muted">Author: {item.author}</small></h6>
                                        <h6 className="card-text"><small className="text-muted">Publication date: {item.publishedAt}</small></h6>

                                    </div>
                                    <div className='card-footer'>
                                        <a href={item.url} target='_blank' className="btn btn-primary">Show full news</a>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                    
                }
                <div className= "pagination justify-content-center mt-4">
                    <ReactPaginate color="primary" previousLabel={"Previous"} 
                        nextLabel={"Next"} 
                        pageCount={paginatedchange} 
                        onPageChange={changePage} 
                        containerClassName={"buttonPaginate"} 
                        previousLinkClassName={"previusBttn"}
                        nextLinkClassName={"nextBttn"} 
                        disabledClassName={"paginationDisabled"} 
                        activeClassName={"paginationActive"}
                        className="nav" />
                </div>
            </div>

        </div>

    )
}

