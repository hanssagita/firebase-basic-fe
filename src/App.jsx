import Auth from './components/Auth'
import Firestore from './components/Firestore'
import Storage from './components/Storage'
import Database from './components/Database'
function App() {

  return (
    <div className="App">
      <h1 className="text-5xl">Firebase Tutorial</h1>
      <Auth />
      <Firestore />
      <Storage />
      <Database />
    </div>
  )
}

export default App
