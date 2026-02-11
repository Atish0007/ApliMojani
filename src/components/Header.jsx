import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
// import apli_mojaniLogo from "../assets/images/apli_mojaniLogo.png";
import "../assets/css/header.css";
import Offcanvas from "bootstrap/js/dist/offcanvas";


function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasTriggered, setHasTriggered] = useState(false);
  const offcanvasRef = useRef(null);
  const offcanvasInstance = useRef(null);

  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? "nav-link active" : "nav-link";

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > 300 && !hasTriggered) {
        setIsSticky(true);
        setHasTriggered(true);
      }

      if (currentScroll <= 300) {
        setIsSticky(false);
        setHasTriggered(false);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, hasTriggered]);


  useEffect(() => {
  const togglers = document.querySelectorAll(".custom-toggler");

  togglers.forEach((btn) => {
    const targetSelector = btn.getAttribute("data-bs-target");
    const targetEl = document.querySelector(targetSelector);

    if (!targetEl) return;

    // When menu opens
    targetEl.addEventListener("shown.bs.collapse", () => {
      btn.classList.add("active");
    });

    targetEl.addEventListener("shown.bs.offcanvas", () => {
      btn.classList.add("active");
    });

    // When menu closes
    targetEl.addEventListener("hidden.bs.collapse", () => {
      btn.classList.remove("active");
    });

    targetEl.addEventListener("hidden.bs.offcanvas", () => {
      btn.classList.remove("active");
    });
  });
}, []);


/* ================= Init Offcanvas ONCE ================= */
  useEffect(() => {
    if (offcanvasRef.current) {
      offcanvasInstance.current = new Offcanvas(offcanvasRef.current, {
        backdrop: true,
        scroll: false,
      });
    }
  }, []);

  /* ================= Close sidebar on route change ================= */
  useEffect(() => {
    if (offcanvasInstance.current) {
      offcanvasInstance.current.hide();
    }

    // Force remove leftover backdrop
    document.querySelectorAll(".offcanvas-backdrop").forEach(el => el.remove());
    document.body.classList.remove("offcanvas-backdrop", "modal-open");
  }, [location]);

  const openSidebar = () => {
    offcanvasInstance.current?.show();
  };

  const closeSidebar = () => {
    offcanvasInstance.current?.hide();
  };



  return (
    <>
      {/* NAVBAR */}
      <nav className={`navbar navbar-bg ${isSticky ? "sticky-nav" : ""}`}>
        <div className="container">

          {/* LOGO */}
          <Link className="aplimojani-brand text-decoration-none" to="/">
            {/* <img src={apli_mojaniLogo} alt="Apli-Mojani" height="90" /> */}
            <svg width="900" height="300" viewBox="0 0 900 300">
                <defs>
                    <linearGradient id="field" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6FCF97" />
                    <stop offset="100%" stopColor="#219653" />
                    </linearGradient>
                </defs>
                <ellipse cx="230" cy="200" rx="200" ry="80" fill="url(#field)" />
                <path d="M40 200 Q230 140 420 200" fill="#F2C94C" />
                <rect x="300" y="150" width="45" height="40" fill="#F2994A" />
                <polygon points="300,150 323,130 345,150" fill="#EB5757" />
                <rect x="160" y="110" width="40" height="60" rx="6" fill="#2D9CDB" />
                <circle cx="180" cy="135" r="7" fill="#fff" />
                <circle cx="180" cy="135" r="3" fill="#EB5757" />
                <rect x="170" y="170" width="20" height="25" fill="#2D9CDB" />
                <circle cx="240" cy="120" r="22" fill="#F2C94C" />
                <line x1="240" y1="80" x2="240" y2="60" stroke="#F2C94C" strokeWidth="4" />
                <line x1="270" y1="90" x2="290" y2="75" stroke="#F2C94C" strokeWidth="4" />
                <line x1="210" y1="90" x2="190" y2="75" stroke="#F2C94C" strokeWidth="4" />
                <text
                    x="470"
                    y="165"
                    fontSize="78"
                    fontFamily="Noto Sans Devanagari, Mangal"
                    fontWeight="700"
                    fill="#fff"
                    style={{'fontSize': '85px'}}
                >
                    आपली मोजणी
                </text>
                <rect x="470" y="185" width="330" height="4" fill="#0B3C8C" />
                </svg>

          </Link>

    {/* TOGGLER + CALL BUTTON WRAPPER */}
    <div className="d-flex align-items-center gap-5 ms-auto">

        {/* CALL BUTTON */}
        <a
            href="tel:1800123"
            className="btn btn-success btn-md d-none d-sm-inline-flex align-items-center fs-6"
        >
          <i className="fa-solid fa-phone mb-1 me-1"></i> मदतीसाठी कॉल करा
        </a>

          {/* MOBILE TOGGLER (UNCHANGED) */}
          <button
            className="navbar-toggler custom-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation"
          >
             <div className="toggler-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
          </button>

          {/* DESKTOP TOGGLER (NEW) */}
          <button
            className="navbar-toggler custom-toggler d-none d-lg-block"
            type="button"
          onClick={openSidebar}
          >
             <div className="toggler-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
          </button>
    </div>

          {/* MOBILE MENU (SAME AS BEFORE) */}
          <div className="collapse navbar-collapse d-lg-none ms-4" id="navbarNav">
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <Link to="/" className={isActive("/")}>मुखपृष्ठ</Link>
              </li>

              <li className="nav-item">
                <Link to="/about" className={isActive("/about")}>आपली मोजणी</Link>
              </li>

              <li className="nav-item">
                <Link to="/whoapply" className={isActive("/whoapply")}>अर्ज तपास</Link>
              </li>

              <li className="nav-item">
                <Link to="/problems" className={isActive("/problems")}>समस्या</Link>
              </li>

              <li className="nav-item">
                <Link to="/services" className={isActive("/services")}>सेवा</Link>
              </li>

              <li className="nav-item">
                <Link to="/process" className={isActive("/process")}>प्रक्रिया</Link>
              </li>

              <li className="nav-item">
                <Link to="/contact" className={isActive("/contact")}>संपर्क</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      {/* DESKTOP SIDEBAR (NEW) d-none d-lg-block */}

      <div 
        ref={offcanvasRef}
        className="offcanvas offcanvas-start cstmSideBarColr" /* Menu set left right = start end*/
        tabIndex="-1"
        id="desktopSidebar"
      >
        <div className="offcanvas-header text-white">
          <h5 className="offcanvas-title ms-5"></h5> {/* मेनू*/}
          <button
            type="button"
            className="btn-close bg-white"
           onClick={closeSidebar}
          ></button>
        </div>

        <div className="offcanvas-body ms-5">
          <ul className="navbar-nav">

            <li className="nav-item">
              <Link to="/" className={isActive("/")} onClick={closeSidebar}>
                मुखपृष्ठ
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className={isActive("/about")} onClick={closeSidebar}>
                आपली मोजणी
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/whoapply" className={isActive("/whoapply")} onClick={closeSidebar}>
                अर्ज तपास
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/problems" className={isActive("/problems")} onClick={closeSidebar}>
                समस्या
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/services" className={isActive("/services")} onClick={closeSidebar}>
                सेवा
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/process" className={isActive("/process")} onClick={closeSidebar}>
                प्रक्रिया
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className={isActive("/contact")} onClick={closeSidebar}>
                संपर्क
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
