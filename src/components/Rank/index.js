import React, { Profiler } from 'react';

import './styles.css'

function Rank(props) {
   const { content } = props;

   return (
         <div id="container-rank">
            <p>• { content }</p>
         </div>
   )
}



export default Rank;