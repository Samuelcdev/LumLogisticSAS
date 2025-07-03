import { Outlet, Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="flex fixed top-0 left-0 w-full max-w-[1140px] h-16 mx-[62px] z-50 ">
            <img
                src="/assets/LUM-neg-logo-transp.png"
                alt="Logo de Lum Logistic"
                className="w-[163px] h-[95px] mt-[20px]"
            />
        </header>
    );
}
