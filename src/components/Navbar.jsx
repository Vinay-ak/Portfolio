
// modules
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
    const lastActiveLink = useRef();
    const acticveBox = useRef();

    const initActiveBox = () => {
        acticveBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
        acticveBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
        acticveBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
        acticveBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
    };

    useEffect(initActiveBox, []);
    window.addEventListener('resize', initActiveBox);

    const activeCurrentLink = (event) => {
        lastActiveLink.current?.classList.remove('active');
        event.target.classList.add('active');
        lastActiveLink.current = event.target;

        acticveBox.current.style.top = event.target.offsetTop + 'px';
        acticveBox.current.style.height = event.target.offsetHeight + 'px';
        acticveBox.current.style.width = event.target.offsetWidth + 'px';
        acticveBox.current.style.left = event.target.offsetLeft + 'px';
    };

    const navItems = [
        {
          label: 'Home',
          link: '#home',
          className: 'nav-link active',
          ref: lastActiveLink
        },
        {
          label: 'About',
          link: '#about',
          className: 'nav-link'
        },
        {
          label: 'Work',
          link: '#work',
          className: 'nav-link'
        },
        {
          label: 'Reviews',
          link: '#reviews',
          className: 'nav-link'
        },
        {
          label: 'Contact',
          link: '#contact',
          className: 'nav-link md:hidden'
        }
      ];

  return (
    <nav className={'navbar ' + (navOpen ? 'active' : '')}>
        {
            navItems.map(({ label, link, className, ref }, key) => (
                <a 
                href={link}
                key={key}
                ref={ref}
                className={className}
                onClick={activeCurrentLink}
                >
                    {label}
                </a>
            ))
        }
        <div 
        className="active-box"
        ref={acticveBox}
        ></div>
    </nav>
  )
}

Navbar.PropTypes = {
    navOpen: PropTypes.bool.isRequired
}

export default Navbar