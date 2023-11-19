import styles from "./styles.module.scss";

interface CheckoutSummaryProps {
    subTotal: number;
    total: number;
    selected: any[];
    saveCart: () => void;
}

export default function CheckoutSummary({subTotal, total, selected, saveCart}: CheckoutSummaryProps) {
    return (
        <div className={`${styles.cart__checkout} ${styles.cart}`}>
            <h2>Order Summary</h2>
            <div className={styles.cart__checkout_line}>
                <span>Subtotal</span>
                <span>{subTotal} vnđ</span>
            </div>
            <div className={styles.cart__checkout_total}>
                <span>Total</span>
                <span>{total} vnđ</span>
            </div>
            <div className={styles.submit}>
                <button
                    disabled={selected.length == 0}
                    style={{
                        background: `${selected.length == 0 ? '#eee' : ''}`,
                        cursor: `${selected.length == 0 ? 'not-allowed' : 'pointer'}`
                    }}
                    onClick={() => saveCart()}
                >Continue
                </button>
            </div>
        </div>
    );
}
