import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Главная</NavLink>
          </li>
          <li>
            <NavLink to="/about">Обо мне</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Проекты</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Контакты</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
