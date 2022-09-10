import Link from '../../node_modules/next/link';
import styles from './Header.module.scss';

interface IHeaderProps {
    children: React.ReactNode;
}

const Header: React.FC<IHeaderProps> = ({ children }) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">FFB</a>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" href="/orders/orders">Orders</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/backoffice/backoffice">Backoffice</Link>
                    </li>
                </ul>
            </nav>
            <main className='container'>
                <div>
                    {children}
                </div>
            </main>
        </>
    );
};

export default Header;