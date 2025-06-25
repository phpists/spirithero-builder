import MainPage from './pages/MainPage';
import MyStorePage from './pages/MyStorePage';

function App() {
  if (window.location.pathname === '/my-store') {
    return <MyStorePage />;
  }
  return <MainPage />;
}

export default App;