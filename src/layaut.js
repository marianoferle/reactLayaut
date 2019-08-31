import React from 'react';

function Layaut(props) {

  const {children} = props;

  return (
      <React.Fragment>

          <div>
             { children }
          </div>

          <div>
             contenido 1
          </div>        

      </React.Fragment>
  );
}

export default Layaut;