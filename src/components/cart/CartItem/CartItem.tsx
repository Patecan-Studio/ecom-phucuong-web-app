import styles from "./styles.module.scss";
import {BsHeart} from "react-icons/bs";
import {AiOutlineDelete} from "react-icons/ai";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import {useAppDispatch} from "@/store/store";
import {addToCart, deleteProduct, removeFromCart} from "@/store/cartSlice";
import {Dispatch, SetStateAction, useEffect, useState} from "react";

interface CartItemProps {
    product: any;
    qty: number;
    selected: any[];
    setSelected: Dispatch<SetStateAction<any[]>>;
}

export default function CartItem({product, qty, selected, setSelected}: CartItemProps) {

    const [active, setActive] = useState(selected.find((p) => p._uid == product._uid));

    useEffect(() => {
        const check = selected.find((p) => p._uid == product._uid);
        setActive(check);
    }, [selected]);



    const dispatch = useAppDispatch();
    const updateQty = (type: string) => {

        if (type === "minus") {
            dispatch(removeFromCart({
                ...product,
                _uid: product._uid,
            }))
        } else if (type === "plus") {
            dispatch(addToCart({
                ...product,
                _uid: product._uid,
            }))
        }

        if(active){
            setSelected(selected.map((p) => {
                if(p._uid == product._uid){
                    return {...p, qty: type === "minus" ? qty - 1 : qty + 1}
                }
                return p;
            }))
        }
    }

    const handleSelect = () => {
        if (active) {
            setSelected(selected.filter((p) => p._uid !== product._uid));
        } else {
            setSelected([...selected, {...product, qty}]);
        }
    };

    function deleteProductFromCart(_uid: string) {
        dispatch(deleteProduct(_uid));
        setSelected(selected.filter((p) => p._uid !== _uid));
    }

    return (
        <div className={`${styles.card} ${styles.product}`}>
            {product.quantity < 1 && <div className={styles.blue}></div>}
            <div className={styles.product__header}>
                {/*<img src={"../../../images/store.webp"} alt={""}/>*/}
                ABC Store
            </div>
            <div className={styles.product__image}>
                <div
                    className={`${styles.checkbox} ${active ? styles.active : ""}`}
                    onClick={() => handleSelect()}
                ></div>

                <img src={product.variant.image_list[0].imageUrl}/>
                <div className={styles.col}>
                    <div className={styles.grid}>
                        <h1>
                            {product.product_name.length > 50 ? `${product.product_name.slice(0, 50)}...` : product.product_name}
                        </h1>
                        <div style={{zIndex: '2'}}>
                            <BsHeart></BsHeart>
                        </div>
                        <div
                            style={{zIndex: '2'}}
                            onClick={()=> deleteProductFromCart(product._uid)}>
                            <AiOutlineDelete/>
                        </div>
                    </div>
                    <div className={styles.product__color}>
                        <img src={product.variant.image_list[0].imageUrl} alt={""}/>
                        {
                            product.variant.material && <span>{product.variant.material}</span>
                        }
                        <MdOutlineKeyboardArrowRight/>
                    </div>
                    <div className={styles.product__priceQty}>
                        <div className={styles.product__priceQty_price}>
                      <span className={styles.price}>
                        {(product.variant.discount_price * qty).toFixed(2)}$
                      </span>
                            {product.variant.discount_price !== product.variant.price &&
                                (<span className={styles.priceBefore}>
                                    {product.variant.price}$
                                </span>)
                            }
                            {product.variant.discount_percentage > 0 && (
                                <span className={styles.discount}>-{product.variant.discount_percentage}%</span>
                            )}
                        </div>
                        <div className={styles.product__priceQty_qty}>
                            <button
                                disabled={qty < 2}
                                onClick={() => updateQty("minus")}>
                                -
                            </button>
                            <span>{qty}</span>
                            <button
                                disabled={qty == product.quantity}
                                onClick={() => updateQty("plus")}>
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
