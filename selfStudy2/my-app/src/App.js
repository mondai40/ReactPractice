import React from 'react';

const App = ({lakes}) => {
  return(
      <ul>
          {lakes.map((lake) => {
              return(
                  <li key={lake.id}>{lake.name} | Trailhead: {lake.trailhead} </li>
              );
          })}
      </ul>
  );
}

export default App;
