import styles from './Footer.module.scss';



const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerWrapper}>
                <p>©2022 Bookstore</p>
                <p>All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer;