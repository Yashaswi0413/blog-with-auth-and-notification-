import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <nav className = 'navbar'>
                <Link to ='/' className = 'logo'>
                    <h2>My Blog</h2>
                </Link>
                <div style = {{display : "flex" , alignItems : "center"}}>
                    <Link to = '/post/new' className='newPostBtn'>New Post</Link>
                </div>
            </nav>
            <main className = 'main'>
                <h2 className = 'heading'>Latest Posts</h2>
                <div className='posts_container'>
                    <Link to={`/post/details`} className='post'>
                        <h2 className='post_title'>
                            Building a chat app with React, Novu and Websockets
                        </h2>
                    </Link>
                    <Link to={`/post/details`} className='post'>
                        <h2>How to react novu in react</h2>
                    </Link>
                </div>
            </main>
        </div>
    )
}

export default Home