import style from './Circle.module.scss'

export function Circle({placement, size, theme}){

    return(
        <div className={`${style.circle} ${style[placement]} ${style[size]} ${style[theme]}`}></div>
    )
}