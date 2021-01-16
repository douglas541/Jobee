import React from 'react';
import ProfileImg from '../ProfileImg'
import ArrowUp from '../../assets/images/arrowUp.svg'

import './styles.css'

function Post(props) {
    const { username, numLike, content, url } = props;

    return (
        <div id="container-post">
            <div id="image-profile-post">

                <ProfileImg
                    url={url}
                    size="2"
                    link="#"
                />

            </div>

            <div id="username-post">
                <p>{username}</p>
            </div>

            <div id="like-post">
                <div id="icon-like-post">
                    <img src={ArrowUp} />
                </div>
                <label>{numLike}</label>
            </div>

            <div id="content-post">
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Post;