import styles from "./mainTitle.module.scss";

const MainTitle = ({ text }) => {
    return (
        <h1 className={styles.mainTitle}>{text}</h1>
    )
}

export default MainTitle;