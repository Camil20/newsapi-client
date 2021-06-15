import React, { Component } from 'react';

export default class Search extends Component { 

    constructor(props){
        super(props)
    }

    handlerFormSubmit = (event) => {
        event.preventDefault()
        this.props.onSearch(event.target.elements['Search'].value)
    }

    render() {
        return (
            <form className='d-flex' onSubmit={this.handlerFormSubmit}> 
                <div className='flex-grow-1'>
                    <input type='text' className='form-control' placeholder='Search news...' name='Search'/>
                </div>
                <div style={{width:'72px'}} className='d-grid-gap-2 ms-3'>
                    <button className='btn btn-primary d-block' type='submit'>
                        Search
                    </button>
                </div>
            </form>
        )
    }
}

