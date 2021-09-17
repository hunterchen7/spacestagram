import './App.css';
import Landing from './components/landing';
import Posts from './components/posts'
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Landing}/>
      <Route path="/posts" component={Posts}/>
    </BrowserRouter>
  );
}

export default App;
