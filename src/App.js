import './App.css';
import AboutMe from './components/AboutMe/AboutMe';


const myData = {
 picture: "/assets/img/kucingkardus.jpg",
 name: "Jungkook BTS",
 description: "I'm a member of BTS"
}

const myData2 = {
 picture: "/assets/img/kucingkardus.jpg",
 name: "Jamal bin Meng",
 description: "Aku kucing loh"
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <AboutMe user={myData} />
       <AboutMe user={myData2} />
      </header>
    </div>
  );
 }


export default App;
