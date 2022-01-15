import type { NextPage } from "next";
import styles from '../styles/Button.module.scss';

export interface ButtonClickHandler {
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

interface Props {
    text: string;
    onClick?: ButtonClickHandler
}

const Button: NextPage<Props> = ({text, onClick}) => {
    return (
        <button className={styles.button} onClick={onClick}>{text}</button>
    )
}

export default Button;