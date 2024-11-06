import { BrowserRouter } from 'react-router-dom';
import Portfolio from './portfolio/portfolio';

function App() {
  return (
    <BrowserRouter basename="/portfolio_react">
      <Portfolio />
    </BrowserRouter>
  );
}

export default App;
