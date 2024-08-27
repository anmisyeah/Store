import styles from './News.module.scss';



const News = () => {
    return (
        <div className={styles.news}>
            <div className={styles.newsWrapper}>
                <h3 className={styles.newsTitle}>Subscribe to Newsletter</h3>
                <p className={styles.newsText}>Be the first to know about new IT books, upcoming releases, exclusive offers and more.</p>
                <div className={styles.searchForm}>
                <input className={styles.searchFormTxt} type="text" placeholder='Your email' />
                <button className={styles.searchFormBtn}>SUBSCRIBE</button>
            </div>
            </div>
            
        </div>
    )
}

export default News