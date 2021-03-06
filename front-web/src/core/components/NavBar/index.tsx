import './style.scss'
import  {Link, NavLink } from 'react-router-dom'
import { getTokenDecoded, makeLogout } from 'core/utils/requests';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'

const NavBar = () => {
    const [currentUser, setCurrentUser] = useState('')
    const location = useLocation()

    const handleLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        makeLogout()

    }

    useEffect(() => {
        const token = getTokenDecoded();
        setCurrentUser(token.user_name)

    },[location])

    return (<nav className="row bg-primary main-nav">
        <div className="col-3">
            <Link to="/" className="nav-logo-text">
                <h4>DS Catalog</h4>
            </Link>
        </div>
        <div className="col-6">
            <ul className="main-menu">
                <li>
                    <NavLink to="/" activeClassName="active" exact className="nav-link">HOME</NavLink>
                </li>
                <li>
                    <NavLink to="/products" activeClassName="active" className="nav-link">CATÁLOGO</NavLink>
                </li>
                <li>
                    <NavLink to="/admin" activeClassName="active" className="nav-link">ADMINISTRADOR</NavLink>
                </li>
            </ul>
        </div>
        <div className="col-3 text-right">
            {currentUser && (
                <>
                {currentUser}
                <a href='#logout' className="nav-link active d-inline" onClick={handleLogout}> SAIR </a>
                </>
            )}
            {!currentUser && (
                <Link to="/auth/login" className="nav-link active">LOGIN</Link>
            )}          
        </div>
    </nav>)

}

export default NavBar
