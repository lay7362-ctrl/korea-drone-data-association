import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__name">한국드론앤데이터협회</p>
        <p>세종시 갈매로 353 세종에비뉴힐 A동 5018호</p>
        <p>문의: kdda.office1@gmail.com · 전화: 044-864-0694</p>
        <p className="site-footer__copy">
          © {new Date().getFullYear()} Korea Drone &amp; Data Association. All
          rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
