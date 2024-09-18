import style from './Button.module.scss'

export function Button({action, theme}){
    return(
        <button onClick={action} className={`${style.buttonStyling} ${style[theme]}`}>Change theme</button>
    )
}