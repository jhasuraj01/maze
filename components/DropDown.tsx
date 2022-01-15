import type { NextPage } from "next";
import styles from '../styles/DropDown.module.scss';
import { useState } from "react";

export interface SelectChangeHandler {
    (event: React.ChangeEvent<HTMLSelectElement>): void;
}

export interface SelectionOption {
    value: string,
    label: string
}

interface Props {
    options: SelectionOption[];
    defaultValue?: string;
    title: string;
    onChange?: SelectChangeHandler
}

const DropDown: NextPage<Props> = ({ options, defaultValue = options[0].value, title, onChange }) => {

    const [value, setValue] = useState(defaultValue);

    const changeHandler: SelectChangeHandler = (event) => {
        setValue(event.target.value);
        if (onChange) {
            onChange(event);
        }
    }

    const id = String(Math.round(Math.random()*1e6));
    return (
        <label className={styles.dropdown} htmlFor={id}>
            <label className={styles.title}>{title}</label>
            <select name={id} id={id} value={value} onChange={changeHandler}>
                { options.map(option => <option key={option.value} value={option.value}>{option.label}</option>) }
            </select>
        </label>
    )
}

export default DropDown;