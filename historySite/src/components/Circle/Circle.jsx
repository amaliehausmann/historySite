import style from './Circle.module.scss'

export function Circle({placement, size}){

    return(
        <div className={`${style.circle} ${style[placement]} ${style[size]}`}></div>
    )
}