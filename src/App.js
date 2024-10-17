import './App.css';

function Header(){
  return <header>
    <h1>
    Fast React  Pizza ! 
  </h1>
  </header>
}



function Menu(){
  return (
    <main className='menu'>
          <h2>
            Our Menu.
          </h2>
            <Pizza/>
            <Pizza/>
            <Pizza/>
            <Pizza/>
    </main>
  )
}

function Pizza(){
  return (
    <div>
      <img src='./pizzas/focaccia.jpg' alt='focaccia pizza'/>
      <h3>Pizza Spinaci</h3>
      <p>Tomato, mozarela, spinach, and ricotta cheese</p>
    </div>
  )
}

function Footer(){
  return <footer className='footer'>
   {new Date().toLocaleString()}, We're currently open.
  </footer >
}

function App() {

  return (
    <div className="container">
        <Header/>
        <Menu/>
        <Footer/>
    </div>
  );
}

export default App;
