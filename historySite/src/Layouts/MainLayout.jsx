import { Outlet } from "react-router-dom";
import './MainLayout.scss'

export function MainLayout() {
    return(
        <>
        <main>
        <Outlet></Outlet>
        </main>
        </>
    )
}