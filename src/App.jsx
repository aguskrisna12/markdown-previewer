import { useState } from "react"
import Markdown from 'react-markdown'
import './App.css';


const markdown = '# Hi, *Pluto*!'

function App() {

  const [markdownText, setMarkdownText] = useState(markdown)
  return (
    <>
      <div>
        <h1>Markdown Previewer</h1>
        <div className="boxes-container">
          <textarea name="editor" id="editor" value={markdownText} onChange={e => setMarkdownText(e.target.value)}></textarea>
          <div id="preview">
          <Markdown>{markdownText}</Markdown>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
