import React from 'react';
import '../styles/spacestagram.css';
import '../styles/bootstrap.min.css';

function getLikedPosts() {
    let likedPosts = localStorage.getItem('SpacestagramLikedPosts');

    if (likedPosts === undefined || likedPosts === null) {
        localStorage.setItem('SpacestagramLikedPosts', JSON.stringify([]));
    }

    return JSON.parse(localStorage.getItem('SpacestagramLikedPosts'));
}

function liked(title) {
    return getLikedPosts().includes(title);
}

function likePost(post) {
    const button = document.getElementById(post.title.replace(/\s/g, '') + 'Like');
    if (button != null) {
        if (button.classList.contains('liked')) {
            button.classList.remove('liked');
        } else {
            button.classList.add('liked');
        }        
    }

    let likedPosts = getLikedPosts();
    if (likedPosts.includes(post.title)) {
        likedPosts = likedPosts.filter(p => p !== post.title);
    } else {
        likedPosts.push(post.title);
    }
    
    localStorage.setItem('SpacestagramLikedPosts', JSON.stringify(likedPosts));
}

function copyURL(post) {
    navigator.clipboard.writeText(post.url);
}

function Post(props) {
    props = props.props;
    return (
        <div className="post" id={ props.title.replace(/\s/g, '') }>
            <div className="post_title">{ props.title }</div>
            <br></br>
                { props.media_type === 'image'
                    ? <img src={ props.url } className="image" alt="oops, looks like this post couldn't load"/>
                    : <iframe title={ props.title } src={ props.url } width="720" height="400"/>
                }
                <div id='buttons'>
                    <div className={"like-button button" + (liked(props.title) ? ' liked' : '')}
                        id={ props.title.replace(/\s/g, '') + 'Like'}
                        onClick={() => likePost(props)}/>
                    <div className="share-button button" id={ props.title.replace(/\s/g, '') + 'Share'}
                            onClick={() => copyURL(props)}>
                    📋</div>
                </div>
                <br/>
            <h5 className="post_info">- { props.date } - { props.copyright ? props.copyright + ' -' : ''} </h5>
            <br></br>
            <h5 className="post_desc">{ props.explanation }</h5>
        </div>
    )
}

export default Post;