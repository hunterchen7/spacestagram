import React from 'react';

const list = [1, 2, 3, 4, 5, 6];

function Test() {
    return (<SimpleList list={list}></SimpleList>)
}

const SimpleList = ({list}) => (
    <ul>
        {list.map(item => (
            <li key={item}>{item}</li>
        ))}
    </ul>
)

export default Test;