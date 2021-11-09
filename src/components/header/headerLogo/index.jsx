import logo from '../../../img/logo.svg'

import '../header.scss'

const HeaderLogo = () => {
    return (
        <div className="logo">
            <img src={logo} alt="" />
            <p>React todo</p>
        </div>
    )
}

export default HeaderLogo
