import styles from './styles.module.scss'

export default function PageTitle(props) {
    const { title, children } = props;

    return (
        <div className={styles.titles}>
            <span>{title}</span>
            <p>{children}</p>
        </div>
    )
}