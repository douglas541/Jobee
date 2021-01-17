import React, { Profiler } from 'react';

import './styles.css'

function Rank(props) {
   const { position, area, content, topics } = props;

   return (
      <div id="container-rank">
         <p1>{position}. {area}</p1><br/>
         <p2>{content}</p2><br/>
         <p3>Tópicos sobre o assunto: {topics}</p3>
      </div>
   )
}



export default Rank;