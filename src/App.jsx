import Auth from './components/Auth'
import Firestore from './components/Firestore'
import Storage from './components/Storage'
function App() {

  return (
    <div className="App">
      <h1 className="text-5xl">Firebase Tutorial</h1>
      <Auth />
      <Firestore />
      <Storage />
    </div>
  )
}

export default App
