import styles from "./styles.module.scss";
import {FaStaylinked} from "react-icons/fa";

export default function CheckoutProductsCart({cart}: any) {
    console.log("#CheckoutProductsCart", JSON.stringify(cart))
    return (<div className={styles.products}>
        <div className={styles.products__header}>
            <h1>Cart</h1>
            <span>
          {cart.productsList.length == 1
              ? "1 item"
              : `${cart.productsList.length} items`}
        </span>
        </div>
        <div className={styles.products__wrap}>
            {cart.productsList.map((product: any) => (

                <div key={product.product_id} className={styles.product}>
                    <div className={styles.product__img}>
                        <img src={product.product_variant_image} alt=""/>
                        <div className={styles.product__infos}>
                            <img src={product.product_variant_image} alt=""/>
                            <span>{`${product.variant.metadata.color.label}`}</span>
                            <span>{`${product.variant.metadata.material}`}</span>
                            <span>x{product.qty}</span>
                        </div>
                    </div>
                    <div className={styles.product__name}>
                        {product.product_name.length > 20
                            ? `${product.product_name.substring(0, 20)}...`
                            : product.product_name}
                    </div>
                    <div className={styles.product__price}>
                        {(product.price * product.qty).toFixed(2)}$
                    </div>
                </div>
            ))}
        </div>
        <div className={styles.products__total}>
            Subtotal : <b>{cart.cartTotal}$</b>
        </div>
    </div>);
}
