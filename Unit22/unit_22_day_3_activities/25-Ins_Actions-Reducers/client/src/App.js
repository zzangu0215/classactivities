import './App.css';
import AccountDisplay from './components/AccountDisplay';
import { AccountProvider } from './utils/GlobalState';

// App renders all components as descendants of AccountProvider making the
// state and dispatch globally available.
function App() {
  return (
    <AccountProvider> 
      <div className="App">
        <header className="App-header">
          <AccountDisplay />
        </header>
      </div>
    </AccountProvider>
  );
}

export default App;
