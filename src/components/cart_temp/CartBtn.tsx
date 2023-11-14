import {Product} from "../../interface-test";
import {FaCartShopping} from "react-icons/fa6";
import {useAppSelector} from "../../store/store";
import {totalCartItemSelector, totalCartPriceSelector} from "../../store/cartSlice";


interface Props {
    className?: string;
}

const CartBtn = (props: Props) => {
    const totalItems = useAppSelector(totalCartItemSelector);
    const totalPrice = useAppSelector(totalCartPriceSelector);

    return (
        <div className={`${props.className} relative`}>
            <FaCartShopping className={"w-9 text-slate-600"}/>
            {!!totalItems && <div className={"bg-red-500 flex justify-center items-center rounded-full w-6 absolute -top-2 -right-2 text-white"}>{totalItems}</div>}
            {!!totalPrice && <div>{totalPrice}</div>}
        </div>
);

}

export default CartBtn;
