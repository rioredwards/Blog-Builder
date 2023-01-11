import { useState } from 'react';

import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [font, setFont] = useState('');
  const [align, setAlign] = useState('center');
  const [text, setText] = useState('');

  return (
    <main>
      <Preview title={title} subTitle={subTitle} font={font} align={align} text={text} />
      <Editor
        title={title}
        setTitle={setTitle}
        subTitle={subTitle}
        setSubTitle={setSubTitle}
        Font={font}
        setFont={setFont}
        align={align}
        setAlign={setAlign}
        text={text}
        setText={setText}
      />
    </main>
  );
}
