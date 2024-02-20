import b from './button.module.scss';


const WhiteButton = (props) => {
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
        <div className={b.whiteButton__wrapper} style={styled}>
           {props.text}
        </div>
    )
}
export default WhiteButton;