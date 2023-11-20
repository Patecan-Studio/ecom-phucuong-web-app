import styles from "./styles.module.scss";
import { useField, ErrorMessage } from "formik";
import { useEffect, useState, useRef } from "react";


export default function ShippingInput({ placeholder, type,...props }: any) {
    const inputRef = useRef(null);
    const [field, meta] = useField(props);
    const [move, setMove] = useState(false);
    useEffect(() => {
        if(field.value){
            if (field.value.length > 0) {
                setMove(true);
            } else {
                setMove(false);
            }
        }
    }, [field.value]);
    // @ts-ignore
    return (
        <div
            className={`${styles.input} ${
                meta.touched && meta.error && styles.error__shipping
            }`}
        >
            <div
                className={styles.input__wrapper}
                onFocus={() => setMove(true)}
                onBlur={() => setMove(field.value && (field.value.length > 0 ? true : false))}
            >
                <input
                    ref={inputRef}
                    type={type}
                    {...field}
                    {...props}
                />
                <span
                    className={move ? styles.move : ""}
                    onClick={() => {
                        // @ts-ignore
                        inputRef.current.focus();
                        setMove(true);

                    }}
                >
          {placeholder}
        </span>
            </div>
            <p>{meta.touched && meta.error && <ErrorMessage name={field.name} />}</p>
        </div>
    );
}
