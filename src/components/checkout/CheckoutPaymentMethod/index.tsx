import styles from "./styles.module.scss";

export default function CheckoutPaymentMethod({paymentMethod, setPaymentMethod}) {

    const availablePaymentMethods= [
        {
            name: "Thanh toán bằng thẻ nội địa và quốc tế",
            id: "vnpay",
            description:
                "If you don't have a vnpay account,you can also pay via vnpay with your credit card or bank debit card.",
            images: [
                "visa",
                "mastercard",
                "jcb",
                "american_express"
            ],
        },
        {
            name: "Thanh toán khi giao hàng",
            id: "cash",
            description: "",

            images: [],
        },
    ];

    return (<div className={styles.payment}>
        <div className={styles.header}>
            <h3>Payment Method</h3>
        </div>
        {
            availablePaymentMethods.map((pm)=>(
                <label
                    htmlFor={pm.id}
                    key={pm.id}
                    className={styles.payment__item}
                    onClick={() => setPaymentMethod(pm.id)}
                    style={{ background: `${paymentMethod == pm.id ? "#f5f5f5" : ""}` }}
                >
                    <input type={"radio"} name={"payment"} id={pm.id} checked={paymentMethod == pm.id}/>
                    <img src={`../../../images/checkout/${pm.id}.webp`} alt={pm.name} />
                    <div className={styles.payment__item_col}>
                        <span>{pm.name}</span>
                        <p>
                            {pm.images.length > 0
                                ? pm.images.map((img) => (
                                    <img src={`../../../images/payment/${img}.webp`} alt="" />
                                ))
                                : pm.description}
                        </p>
                    </div>
                </label>
            ))
        }
    </div>);
}
