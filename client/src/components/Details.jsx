import React from 'react'
import {AiTwotoneLike , AiTwotoneDislike} from 'react-icons/ai'

const Details = () => {
    return (
        <div>
            <header className = 'details_header'>
                <h1 className = 'details_heading'>How to install Novu in React</h1>
                <div>
                    <p className='details_date'>Posted on 30th July</p>
                </div>
                <div className='reactions-group'>
                    <button className='reactBtn'>
                        Like <AiTwotoneLike/> <span style = {{marginLeft:5}}>2</span>
                    </button>
                    <button className='reactBtn unlikeBtn'>
                        Dislike <AiTwotoneDislike/> <span style = {{marginLeft :5}}>1</span>
                    </button>
                </div>
            </header>
            <main className='details_body'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem explicabo, itaque provident deserunt maiores quas et at beatae fugit deleniti praesentium magni. Dignissimos fuga nulla alias exercitationem omnis vel facilis.
            </main>
        </div>
    )
}

export default Details