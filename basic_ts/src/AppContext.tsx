import { useContext } from "react";
import "./AppContext.css";
import {
  ThemeContext,
  ThemeContextProvider,
} from "./context/ThemeContext.tsx";

export default function AppTheme() {
  return (
    <ThemeContextProvider>
      <Header />
      <Main />
      <Footer />
    </ThemeContextProvider>
  );
}

function Header() {
  return <header className="header">Header</header>;
}

function Main() {
  return (
    <main className="main">
      Main
      <Profile />
      <Products />
    </main>
  );
}

function Profile() {
  return (
    <div>
      Profile
      <User />
    </div>
  );
}

function User() {
  return <div>User</div>;
}

function Products() {
  return (
    <div>
      Products
      <ProductDetail />
    </div>
  );
}

function ProductDetail() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      Product Detail
      <p>
        DarkMode:
        {theme === 'dark' ? (
          <span style={{ backgroundColor: "black", color: "white" }}>
            Dark Mode
          </span>
        ) : (
          <span>Light Mode</span>
        )}
      </p>
      <button onClick={() => toggleTheme()}>Toggle</button>
    </div>
  );
}

function Footer() {
  return <footer className="footer">Footer</footer>;
}
