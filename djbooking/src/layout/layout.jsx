import React from 'react';
import Home from '../pages/Home';

function Layout() {
  return (
    <div className="layout">
      {/* Header */}
      <header className="header bg-primary text-white p-4">
        <h1>Website Title</h1>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Sidebar */}
      <aside className="sidebar bg-secondary text-white p-4">
        <ul>
          <li><a href="#home" className="text-white">Home</a></li>
          <li><a href="#about" className="text-white">About</a></li>
          <li><a href="#contact" className="text-white">Contact</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content p-4">
        <section>
          <Home />
        </section>
      </main>

      {/* Footer */}
      <footer className="footer bg-dark text-white text-center p-3">
        <p>&copy; 2024 Your Website</p>
      </footer>
    </div>
  );
}

export default Layout;
