import { NavLink } from 'react-router-dom';
import { headerStore } from '../../store/headerStore';

function Tabs() {
  const { locations } = headerStore();

  return (
    <div className="md:flex hidden">
      {locations.map((location) => (
        <NavLink
          key={location.label}
          className={({ isActive }) =>
            isActive ? 'headertab active' : 'headertab inactive '
          }
          to={location.url}
        >
          {location.label}
        </NavLink>
      ))}
    </div>
  );
}

export default Tabs;
