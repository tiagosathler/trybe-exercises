// import logo from './logo.svg';
import './App.css';
import Image from './components/Image';
import Album from './components/Album';
import UserProfile from './components/UserProfile';
import Order from './components/Order';
import { album01, album02, joao, amelia, headphone, energyDrink, shoppingList } from './data';



function App() {
  const items = shoppingList.map((item, index) => {
    console.log("item: ", item);
    return (<li key={ index }> { item }</li>);
  });

  const users = [ joao, amelia ];

  return (
    <>
      <section>
        <h1>Exercícios pré-aula</h1>
        <p>Exercise 1:</p>
        <Image source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alternativeText='Cute cat staring' />
        <hr></hr>

        <p>Exercise 2:</p>
        <Album album={ album01 } />
        <Album album={ album02 } />
        <hr></hr>
        <p>Exercise 3:</p>

        <UserProfile user={joao} />
        <UserProfile user={amelia} />
        <hr></hr>

        <p>Exercise 4:</p>
        <Order order={headphone} />
        <Order order={energyDrink} />
        <hr></hr>

        <p>Exercise 5:</p>
        <div>
          <h2>Lista de compras</h2>
          <ul>
            { items }
          </ul>
        </div>
        <hr></hr>

        <p>Exercise 6:</p>
        <div className='App'>
          {users.map((user, index) => <UserProfile user={user} key={index.toString()} />)}
        </div>
      </section>
    </>
  );
}

export default App;
