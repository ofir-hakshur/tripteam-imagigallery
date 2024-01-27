import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./Header";
import { AppRoutes } from "./AppRoutes";

function App() {
  return (
    <Router>
      <Screen>
        <Header />
        <AppRoutes />
      </Screen>
    </Router>
  );
}

export default App;

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  gap: 20px;
`;
