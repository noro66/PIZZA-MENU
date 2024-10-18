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
         {pizzaData.length > 0 ?    (pizzaData.map((pizza, index)=>{
          return  <Pizza pizza={pizza} key={pizza.name}/>
          })) : <p>We're still working on our menu please come back later ;)</p>}
       </ul>
    </main>
  )
}

function Pizza({pizza}){
  // if(pizza.soldOut) return null;
  return (
    <li className={`pizza ${pizza.soldOut ? 'sold-out' : ''}`} >
      <img src={pizza.photoName} alt={pizza.photoName}/>
     <div>
       <h3>{pizza.name}</h3>
      <p>{pizza.ingredients}</p>
      <span>{pizza.soldOut ? "SOLD OUT!" : pizza.price}</span>
     </div>
    </li>
  )
}

function Footer(){
const hour = new Date().getHours();
const openHour = 9;
const closeHour = 21;
const isOpen = hour >= openHour && hour <= closeHour;
  return <footer className='footer'>
   {isOpen ?  (
    <div className='order'>
        <p>{new Date().toLocaleString()}, We're currently open Entil {closeHour}:00</p>
        <button className='btn'>Order</button>
    </div>
   ) : <p>we are happy to welcome you between {openHour}:00 and  {closeHour}:00 </p>}
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
