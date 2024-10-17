import './App.css';
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

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
       <ul className='pizzas'>
         {  pizzaData.map((pizza)=>{
          return  <Pizza pizza={pizza}/>
          })}
       </ul>
    </main>
  )
}

function Pizza({pizza}){
  return (
    <li className='pizza'>
      <img src={pizza.photoName} alt={pizza.photoName}/>
     <div>
       <h3>{pizza.name}</h3>
      <p>{pizza.ingredients}</p>
      <span>{pizza.price}</span>
     </div>
    </li>
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
