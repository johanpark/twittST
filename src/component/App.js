import React, { useState } from "react";
import AppRouter from "component/Router";
import {authService} from "fbase";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser); //check Login 
  return (
  <>
    <AppRouter isLoggedIn={isLoggedIn}/>
    <footer>&copy; {new Date().getFullYear()} JHtwitt</footer>
  </>
  );
}

export default App;
