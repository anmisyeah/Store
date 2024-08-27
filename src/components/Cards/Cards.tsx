import styles from './cards.module.scss'

interface Props {
    imageUrl: string;
    title: string;
    rating: number;
}

const Card = (props: Props) => {
    return   <div className={styles.card}>
        <img src={props.imageUrl} alt='' className={styles.cardImg} />
        <h3 className={styles.cardTitle}>{props.title}</h3>
        <div className={styles.cardRating}>
        {'⭐'.repeat(props.rating)}{props.rating < 5 ? '☆'.repeat(5 - props.rating) : ''}
      </div>
    </div>
}


export default Card;