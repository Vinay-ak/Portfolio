// modules
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
    const lastActiveLink = useRef(null);
    const activeBox = useRef(null);

    const initActiveBox = () => {
        if (activeBox.current && lastActiveLink.current) {
            activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
            activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
            activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
            activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
        }
    };

    useEffect(() => {
        initActiveBox();
        window.addEventListener('resize', initActiveBox);

        return () => {
            window.removeEventListener('resize', initActiveBox);
        };
    }, []);

    const activeCurrentLink = (event) => {
        lastActiveLink.current?.classList.remove('active');
        event.target.classList.add('active');
        lastActiveLink.current = event.target;

        if (activeBox.current) {
            activeBox.current.style.top = event.target.offsetTop + 'px';
            activeBox.current.style.height = event.target.offsetHeight + 'px';
            activeBox.current.style.width = event.target.offsetWidth + 'px';
            activeBox.current.style.left = event.target.offsetLeft + 'px';
        }
    };

    const navItems = [
        {
            label: 'Home',
            link: '#home',
            className: 'nav-link active',
        },
        {
            label: 'About',
            link: '#about',
            className: 'nav-link',
        },
        {
            label: 'Work',
            link: '#work',
            className: 'nav-link',
        },
        {
            label: 'Contact',
            link: '#contact',
            className: 'nav-link md:hidden',
        },
    ];

    return (
        <nav className={'navbar ' + (navOpen ? 'active' : '')}>
            {navItems.map(({ label, link, className }, key) => (
                <a
                    href={link}
                    key={key}
                    className={className}
                    onClick={activeCurrentLink}
                    ref={label === 'Home' ? lastActiveLink : null} // Assign ref only to the "Home" link
                >
                    {label}
                </a>
            ))}
            <div className="active-box" ref={activeBox}></div>
        </nav>
    );
};

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
