import './App.css';
import Users from './components/Users';
// import Paragraph from './components/Paragraph';
// import User from './components/User';

const users = [
  {
    id: 1,
    name: 'Ahmet',
  },
  {
    id: 2,
    name: 'Mehmet',
  },
  {
    id: 3,
    name: 'Ayşe',
  },
];

function App() {
  return (
    <div>
      {/* <Paragraph
        text='Deneme'
        color='yellow'
        numberOfLines={2}
        isHidden={false}
      /> */}

      {/* <User data={{ id: 1, name: 'Filiz' }} /> */}

      <Users data={users} />
    </div>
  );
}

export default App;
