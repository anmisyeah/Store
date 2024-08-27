import searchIMg from '../../images/Icon-Search.svg';
import styles from '../Header/header.module.scss'
import logo from '../../images/Bookstore.svg'
import heartImg from '../../images/heart.svg';
import shoppingBagImg from '../../images/shopping-bag.svg';
import userImg from '../../images/user.svg';





const Header: React.FC = () => {
    return <div className={styles.headerWrapper}>

        <div className={styles.header}>

            <h1><img src={logo} alt="logo" /></h1>

            <div className={styles.searchForm}>
                <input className={styles.searchFormTxt} type="text" placeholder='Search' />
                <button className={styles.searchFormBtn}><img className='search-form-img' src={searchIMg} alt="search" /></button>
            </div>

            <div className={styles.icons}>
                <div><img className={styles.heartImg} src={heartImg} alt="heartImg" /></div>
                <div><img className={styles.shoppingBagImg} src={shoppingBagImg} alt="shoppingBagImg" /></div>
                <div><img className={styles.userImg} src={userImg} alt="userImg" /></div>
            </div>
        </div>
    </div>
}

export default Header;