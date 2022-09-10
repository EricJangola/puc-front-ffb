import Header from "../header/Header";
import styles from './Backoffice.module.scss';

export const Backoffice: React.FC = () => {
    return (
        <Header>
            <div className={styles.container}>
                <h1>Backoffice</h1>
            </div>
        </Header>
    );
}