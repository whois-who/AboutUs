import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <p>Hello  Hello  Hello  Hello  Hello  Hello  Hello </p>
      <Header/>


      <Footer/>

      <AboutUs/>
    </div>
    

  );
}

function Header() {
  return(
    <ul>
      <li>Main</li>
    </ul>
  )
}

function Logo() {
  return(
    <div>
      <ul><li>Logo</li></ul>
    </div>
  )
}

function AboutUs() {
  return(
    <div>
      <h1>About Us</h1>
      <p>SomethingList, SomethingList, SomethingList, SomethingList</p>
    </div>
  )
}

function Footer() {
  return(
    <div>
        <h1>i am Footer</h1>
      <Logo/>

    </div>
  )
}

export default App;

