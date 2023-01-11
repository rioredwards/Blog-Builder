import React from 'react';

import './Preview.css';

export default function Preview({ title, subTitle, font }) {
  // implement a Preview screen here
  //  Note - the HTML should have the following structure
  //  the main div should have a class of preview and the font-name prop
  //  and should have style interpolated using the alignment prop

  return (
    <>
      <div className={`preview ${font}`} style={{ textAlign: `center` }}>
        <h1 key={'title'}>{title}</h1>
        <h3 key={'subTitle'}>{subTitle}</h3>
        <p>This is some blog text. </p>
      </div>
    </>
  );
}
