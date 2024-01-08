import b from './button.module.scss';
import { Roboto } from "next/font/google";


const Button = (props) => {
    const styled = {
        width: props.width,
        height: props.height,
        backgroundColor: props.bg,
        color: props.color,
        borderRadius: props.borderRadius,
        fontSize: props.fontSize,
        fontFamily: props.fontFamily
         }
    return (
        <div className={b.wrapper} style={styled}>
           {props.text}
        </div>
    )
}
export default Button;