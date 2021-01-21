import React from 'react';

/*
const Cards = (props) => {
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt={`${props.id} - ${props.name}`}  title={`${props.id} - ${props.name}`} src={`https://robohash.org/${props.id}?200x200`} />
                <div>
                    <h2>{props.name}</h2>
                    <p>{props.email}</p>
                </div>
        </div>
    )
}
*/

//deconstructed using props constant
const Cards = ({ id, name, email }) => { // avoids adding props.x to all vars
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt={`${id} - ${name}`}  title={`${id} - ${name}`} src={`https://robohash.org/${id}?200x200`} />
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
        </div>
    )
}


export default Cards