import './App.css'
import { useState } from 'react'
import ViewEntries from './Components/ViewEntries/ViewEntries';
import AddEntry from './Components/AddEntry/AddEntry';
function App() {
  const [isView, setIsView] = useState(true);
  function handleChangeClick() {
    setIsView(prev => !prev)
  }
  return (
    <div id="main">
      {isView
        ?
        <ViewEntries />
        :
        <AddEntry setIsView={setIsView}/>

      }
      <button id='switch-button' onClick={handleChangeClick}>
        {isView ? 'Add new entry' : 'Return to view all keys'}
      </button>
    </div>
  )
}

export default App
