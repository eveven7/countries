import { useEffect, useState } from 'react';

export const Navigation = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset && !isScrolled) {
        setIsScrolled(true);
        return;
      }
      if (!window.pageYOffset) {
        setIsScrolled(false);
        return;
      }
    })
  }, [])

  return (

    <nav className={isScrolled ? 'main-nav scrolled' : 'main-nav'}>
      <div className="container">
        <h2>Visualized representation of countries </h2>
        <div className={isCollapsed ? 'main-nav__links collapsed' : 'main-nav__links'}>
                    <a href="https://restcountries.com/v2/all?fields=name,region,area" className="button button--primary button--sm">Data source</a>
        </div>
        <button type='button' id="burger" className={isCollapsed ? 'main-nav__toggler collapsed' : 'main-nav__toggler'} onClick={() => { setIsCollapsed(!isCollapsed) }}>
          <label htmlFor="burger">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </button>
      </div>
    </nav>
  )
}

