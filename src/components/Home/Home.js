import { useState } from 'react';

import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('< Insert Title >');
  const [subTitle, setSubTitle] = useState('< Insert SubTitle >');
  const [font, setFont] = useState('');

  return (
    <main>
      <Preview title={title} subTitle={subTitle} font={font} />
      <Editor
        title={title}
        setTitle={setTitle}
        subTitle={subTitle}
        setSubTitle={setSubTitle}
        Font={font}
        setFont={setFont}
      />
    </main>
  );
}
