

// Modules
import PropTypes from "prop-types"


//Primary Button
const ButtonPrimary = ({
    lable,
    href,
    target = '_self',
    icon,
    classes,
}) => {
    if (href) {
        return (
            <a 
            href={href}
            target={target}
            className={"btn btn-primary " + classes}
            >
                {lable}

                {icon ? 
                <span className="material-symbols-rounded" aria-hidden='true'>{icon}
                </span> 
                : undefined
                }
            </a>
        )
}else {
    return (
        <button className={"btn btn-primary " + classes}>
            {lable}

            {icon ? 
                <span className="material-symbols-rounded" aria-hidden='true'>{icon}
                </span> 
                : undefined
                }
        </button>
    )
}
}

ButtonPrimary.propTypes = {
    lable: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string,
}


//Outline Button
const ButtonOutline = ({
    lable,
    href,
    target = '_self',
    icon,
    classes,
}) => {
    if (!href) {
        return (
            <a 
            href={'#about'}
            target={target}
            className={"btn btn-outline " + classes}
            >
                {lable}

                {icon ? 
                <span className="material-symbols-rounded" aria-hidden='true'>{icon}
                </span> 
                : undefined
                }
            </a>
        )
}else {
    return (
        <button className={"btn btn-outline " + classes}>
            {lable}

            {icon ? 
                <span className="material-symbols-rounded" aria-hidden='true'>{icon}
                </span> 
                : undefined
                }
        </button>
    )
}
}

ButtonOutline.propTypes = {
    lable: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string,
}



export {
    ButtonPrimary,
    ButtonOutline
}