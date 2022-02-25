import Todo from './components/Todo'
function App() {

  return ( // looks like html but in behind it's standard js
    <div>
      <h1>My Todos</h1>
      <Todo text ='learn'/>
      <Todo text = 'master'/>
      <Todo text = 'explore'/>
    </div>
  );
}

export default App;
