import logo from './logo.svg';
import './App.css';
import 'tachyons'

import UserFavoriteAnimals  from './UserFavoriteAnimals';
import Exercise from './Exercise3'

const myelement = <h1>I Love JSX!</h1>
const sum = 5 + 5

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};


function App() {
  return (
    <div>
      {/* Exercise 1 */}
      {myelement}
      <p>React is {sum} times better with JSX</p>

      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>

      {/* Exercise 2 */}
      <UserFavoriteAnimals array={user} />


      {/* Exercise 3 */}

      <Exercise />

    </div>
    
    );
}

export default App;
