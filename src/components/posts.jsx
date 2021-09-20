import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Post from './post';
import {Link} from 'react-router-dom';
import '../styles/bootstrap.min.css';
import '../styles/spacestagram.css';
import loading from '../images/rocketLoading.gif';

const nasa_api_key = 'Y93n9T7rh6NZgeJsIutqadSKxKbJrxN8lExbZdEU';

function formatMilsecs(milliseconds) {
    return new Date(milliseconds).toJSON().slice(0,10);
}

function daysToMilsecs(days) {
    return days * 24 * 60 * 60 * 1000;
}

function Posts() {
    const [posts, setPosts] = useState([]);

    let end = Date.now() // milliseconds
    let start = end - daysToMilsecs(30); // milliseconds 50 days ago
    let endParsed = formatMilsecs(end) // YYYY-MM-DD
    let startParsed = formatMilsecs(start); // YYYY-MM-DD 50 days ago

    // eslint-disable-next-line no-unused-vars
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${nasa_api_key}&start_date=${startParsed}&end_date=${endParsed}`)
            .then(res => {
                setPosts(res.data.reverse());
            })
            .catch(err => {
                console.log(err);
            })
    },[startParsed, endParsed])

    useEffect(() => {
        const loading = setInterval(() => {
            if (document.getElementsByClassName('like-button').length > 15) { // more than half loaded
                document.getElementById('loading').style.display = 'none';
            }
            let loadingText = document.getElementById('loadingText')

            if (loadingText != null) {
                loadingText = loadingText.innerHTML;
                if (loadingText === 'loading') {
                    document.getElementById('loadingText').innerHTML = 'loading.'
                } else if (loadingText === 'loading.') {
                    document.getElementById('loadingText').innerHTML = 'loading..'
                } else if (loadingText === 'loading..') {
                    document.getElementById('loadingText').innerHTML = 'loading...'
                } else if (loadingText === 'loading...') {
                    document.getElementById('loadingText').innerHTML = 'loading'
                }            
            }
        }, 500);
        return () => clearInterval(loading);
    }, [start, end, posts, setPosts]);
    
    return (
        <div>
            <br/>
            <button className="btn btn-outline-primary" id="title">
                <Link to="/" style={{textDecoration: 'none'}}>Spacestagram 🌌</Link>
            </button>
            <div id='loading' style={{position: 'absolute', textAlign: 'center'}}>
                <img src={loading} alt="loading" style={{width: '15vw'}}/>
                <br></br><br></br>
                <div style={{fontSize: '25px'}} id="loadingText">loading...</div>
            </div>
            {posts.map(post => (
                <Post props={post}/>
            ))}
        </div>
    )
}

export default Posts;