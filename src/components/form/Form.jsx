import React from "react";
import styles from "./form.module.scss";

const Form = ({ handleClick, title }) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const onSubmit = event => {
        event.preventDefault();
        handleClick(email, password);
    }

    return (
        <form className={styles.form} onSubmit={onSubmit} onKeyDown={event => {
            if (event.key === "Enter") {
                event.preventDefault();
                handleClick(email, password);
            }
        }}>
            <div className={styles.formWrapper}>
                <label className={styles.formLabel} htmlFor="email">
                    <span>
                        email:
                    </span>
                    <input
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        className={styles.formInput}
                        type="email"
                        id="email"
                        placeholder="Wpisz swój email"
                        required />
                </label>
                <label className={styles.formLabel} htmlFor="password">
                    <span>
                        hasło:
                    </span>
                    <input
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        className={styles.formInput}
                        type="password"
                        id="password"
                        placeholder="Wpisz swoje hasło"
                        required />
                </label>
            </div>

            <button
                className={styles.formSubmitBtn}
                type="submit">
                {title}
            </button>
        </form>
    )
}

export default Form;