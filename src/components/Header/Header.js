import React, { useState, useCallback } from 'react';

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  // Utilizando useCallback para otimizar a função
  const toggleNav = useCallback(() => {
    setIsNavVisible(prevState => !prevState);
  }, []);

  return (
    <section id='header'>
      <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.4783 25.3684C26.2792 25.3684 27.7391 23.8957 27.7391 22.0789C27.7391 20.2622 26.2792 18.7895 24.4783 18.7895C22.6773 18.7895 21.2174 20.2622 21.2174 22.0789C21.2174 23.8957 22.6773 25.3684 24.4783 25.3684ZM24.4783 25.3684C21.5968 25.3684 19.2609 27.7248 19.2609 30.6316H29.6957C29.6957 27.7248 27.3597 25.3684 24.4783 25.3684ZM12.7391 8.92105C12.7391 12.1912 10.1112 14.8421 6.86957 14.8421C3.62789 14.8421 1 12.1912 1 8.92105C1 5.65095 3.62789 3 6.86957 3C10.1112 3 12.7391 5.65095 12.7391 8.92105ZM1 18.7895H12.7391V30.6316H1V18.7895ZM24.4783 3L31 14.8421H17.9565L24.4783 3Z" stroke="#333333" strokeWidth="2" strokeLinecap="square"/>
      </svg>
      <h1>Controle financeiro</h1>
      <button
        className="navbar-toggle"
        aria-label="menu icon"
        aria-expanded={isNavVisible} // Adiciona a propriedade aria-expanded
        onClick={toggleNav}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="menu-icon"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <nav className={`navbar ${isNavVisible ? 'visible' : ''}`} role="navigation">
        <button className="close-btn" aria-label='exit' onClick={toggleNav}> 
          &times;
        </button>
        <ul>
          <li><a href="#home">Resumo</a></li>
          <li><a href="#about">Dashboard</a></li>
          <li><a href="#contact">Configurações</a></li>
        </ul>
      </nav>
      <div className="navbar-links">
        <a href="#home">Resumo</a>
        <a href="#about">Dashboard</a>
        <a href="#contact">Configurações</a>
      </div>
    </section>
  );
};

export default Header;
