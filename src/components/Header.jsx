import { NavLink } from 'react-router-dom'
import './Header.css'

const NAV_ITEMS = [
  { to: '/notice', label: '공지사항' },
  { to: '/join', label: '협회가입' },
  { to: '/drone-education', label: '드론자격증교육신청' },
  { to: '/talent-pool', label: '인력풀 가입' },
]

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink to="/" className="site-title">
          한국드론앤데이터협회
        </NavLink>
        <nav className="site-nav">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive ? 'site-nav__link is-active' : 'site-nav__link'
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
