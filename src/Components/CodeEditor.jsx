import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { MdTextIncrease, MdTextDecrease, MdDownload } from "react-icons/md";
import { Editor, loader } from '@monaco-editor/react';

function CodeEditor(props) {
    const [fontsize, setFontsize] = useState(15);


    const increaseFontsize = () => {
        setFontsize(fontsize + 1);
    };
    
    const decreaseFontsize = () => {
        setFontsize(fontsize - 1);
    };

    const handleDownload = () => {
      const element = document.createElement("a");
      const file = new Blob([props.value], {
        type: "text/plain",
      });
      element.href = URL.createObjectURL(file);
      element.download = `QuickCompiler.${props.fileExtention}`;
      element.click();
    };

    loader.init().then((monaco) => {
        monaco.editor.defineTheme('dark-theme', {
            base: 'vs-dark',
            inherit: true,
            rules: [],
            colors: {
                'editor.background': '#001726',
            },
        });
        monaco.editor.defineTheme('light-theme', {
            base: 'vs',
            inherit: true,
            rules: [],
            colors: {
                'editor.background': '#FFFEFF',
            },
        });
    });
    
  return (
    <>
    <Editor
        height="95%"
        width="100%"
        theme= {props.theme === true ? 'dark-theme' : 'light-theme'}
        language={props.language}
        value={props.value}
        onChange={props.onChange}
        options={{
          fontSize: fontsize,
          scrollbar: {
            useShadows: false, 
            verticalHasArrows: true,
            horizontalHasArrows: true,
            verticalScrollbarSize: 12,
            horizontalScrollbarSize: 12,
            arrowSize: 12,
            handleMouseWheel: true,
            handleMouseWheelSmooth: true,
          },
        }}
      />
      <div className="editor-setting">
        <button
            className='fn-btn'
            onClick={increaseFontsize}
        >
            <MdTextIncrease />
        </button>
        <button
            className='fn-btn'
            onClick={decreaseFontsize}
        >
            <MdTextDecrease />
        </button>
        <button
            className='fn-btn'
            onClick={handleDownload}
        >
            <MdDownload />
        </button>
      </div>
    </>
  )
}

CodeEditor.propTypes = {
    theme: PropTypes.bool,
    language: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    fileExtention: PropTypes.string
}

export default CodeEditor
