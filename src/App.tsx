import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Production } from "./components/Production";
import "./App.css";
import { Stock } from "./components/Stock";
import { NotFount } from "./components/NotFound";
import { Login } from "./components/Login";
import { ProtectedRoute } from "./components/ProtectedRouter";
import { Recipe } from "./components/Recipe";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/production" />} />

          <Route path="/production" element={<Production />}>
            <Route path=":selectedProduct" element={<Recipe />} />
          </Route>

          <Route
            path="/stock"
            element={
              <ProtectedRoute>
                <Stock />
              </ProtectedRoute>
            }
          />

          <Route path="/login" element={<Login />} />

          <Route path="*" element={<NotFount />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
