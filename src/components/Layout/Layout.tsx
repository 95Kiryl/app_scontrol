import { NavLink, Link, Outlet } from 'react-router-dom';
import { FC, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

const Layout: FC = () => {
  const [isOpenMenu, setOpenMenu] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setOpenMenu(!isOpenMenu);
  };

  return (
    <>
      <header className="header">
        <div className="header-wrapper">
          <div className="logo">
            <Link to="/">
              <img
                src="https://5scontrol.com/images/main/logo.svg"
                alt="logo"
              />
            </Link>
          </div>
          <div className={`menu-items ${isOpenMenu ? 'active' : ''}`}>
            <NavLink to="/" onClick={handleOpenMenu}>
              Главная
            </NavLink>
            <NavLink to="task" onClick={handleOpenMenu}>
              Задачи 5S
            </NavLink>
            <NavLink to="contacts" onClick={handleOpenMenu}>
              Контакты
            </NavLink>
          </div>
          <button className="menu-items__button" onClick={handleOpenMenu}>
            <RxHamburgerMenu />
          </button>
        </div>
      </header>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
