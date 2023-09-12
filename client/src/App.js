import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        {isAuthenticated ? (
          <>
            <h1>Hello, {user.name}!</h1>
            <button onClick={() => logout()}>Log Out</button>
          </>
        ) : (
          <>
            <h1>Welcome to My App</h1>
            <button onClick={() => loginWithRedirect()}>Log In</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
