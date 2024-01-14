import { useState } from 'react'
import CodeEditor from './Components/CodeEditor';
import DefaultCodes from './Constants/DefaultCode';
import { LiaSpinnerSolid } from "react-icons/lia";
import execution from './Func/execution';
import './App.css'

function App() {
  const [isDarkTheme, setTheme] = useState(true);
  const [language, setLanguage] = useState('0');
  const [code, setCode] = useState (DefaultCodes[language].default)
  const [isExecuting, setExecuting] = useState(false)
  const [outputStyle, setOutputStyle] = useState ({})
  const [inputString, setInput] = useState('')
  const [outputString, setOutput] = useState('')

  const handleTheme = () => (
    isDarkTheme === true ? setTheme(false) : setTheme(true)
  )

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    setCode(DefaultCodes[event.target.value].default)
  };

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleCode = (value) => {
    setCode(value);
  };

  const handleExecution = async () => {
    setExecuting(true);

    const result = await execution(code, DefaultCodes[language].ext, inputString);
    setExecuting(false);

    if (result.error == '') {
      setOutputStyle({color : '#00A36C'})
      setOutput(result.output)
    }else {
      setOutputStyle({color : '#C70039'})
      setOutput(result.error)
    }
};

  return (
    <div className={`${isDarkTheme === true ? "dark-theme" : "light-theme"}`}>
      <nav className={`navbar`}>
        <div className="title">
          <a href="#">
            Quick
            <span> compiler &#10022;</span>
          </a>
        </div>
        <div className="settings">
          <button
            onClick={handleTheme}
            className={`${isDarkTheme === true ? "dark-btn" : "light-btn"}`}
          >
            &#9728;
          </button>
          <select
            className="fn-btn"
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="0">C</option>
            <option value="1">C++</option>
            <option value="2">Java</option>
            <option value="3">C#</option>
            <option value="4">Python</option>
            <option value="5">GoLang</option>
            <option value="6">NodeJs</option>
          </select>
        </div>
      </nav>
      <div
        className={`body-box ${
          isDarkTheme === true ? "sec-dark-theme" : "sec-light-theme"
        }`}
      >
        <div
          className="text-editor"
          style={{
            backgroundColor: isDarkTheme === true ? "#001726" : "#FFFEFF",
          }}
        >
          <CodeEditor
            theme={isDarkTheme}
            language={DefaultCodes[language].language}
            value={code}
            onChange={handleCode}
            fileExtention={DefaultCodes[language].ext}
          />
        </div>
        <div className="in-out">
          <div className="heading">
            <div className="head-text">
              Output
            </div>
            <button 
              className="fn-btn"
              onClick={handleExecution}
            >
              {isExecuting === true? <LiaSpinnerSolid className='spin'/> : 'Run'}
            </button>
          </div>
          <div className={`out-box ${isDarkTheme === true ? 'dark-editor' : 'light-editor'}`}>
            <textarea 
              className={isDarkTheme === true ? 'dark-editor' : 'light-editor'}
              value={outputString}
              style={outputStyle}
              readOnly
            />
          </div>
          <div className={`in-box ${isDarkTheme === true ? 'dark-editor' : 'light-editor'}`}>
            <textarea 
              className={isDarkTheme === true ? 'dark-editor' : 'light-editor'}
              placeholder='Insert your custom input here'
              value={inputString}
              onChange={handleInput}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
