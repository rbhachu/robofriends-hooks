import React from 'react';
import Cards from '../components/Cards'; // imports Cards.js


const CardsList = ({ robots }) => {
/*
if (true) { // test ErrorBoundary error check
    throw new Error('NOOOOOO');
}
*/

return (
        <div>
            {robots.map((user, i) => { // loops robot array list from /src/robots.js
                return ( // comma added as code changed to multi-line
                    <Cards 
                        key={robots[i].id} 
                        id={robots[i].id} 
                        name={robots.[i].name} 
                        email={robots[i].email} 
                    />
                );
                }
            )}
        </div>
    );
}

export default CardsList;