import { useState } from "react";
import { NavLink } from "react-router";
import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

const Navbar = () => {
    let { pageLinks } = useContext(PortfolioContext);
    const [open, setOpen] = useState(false);
    const navLinks = open ? [...pageLinks, { name: "Contact Us", href: "/contact" }] : pageLinks;

    return (
        <>
            {/* NAVBAR START */}
            <nav className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-dark/80 glass-nav">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* LEFT: LOGO */}
                        <NavLink
                            to="/"
                            className="flex items-center gap-2 shrink-0"
                        >
                            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary">
                                <span className="material-symbols-outlined text-[20px] font-bold">
                                    terminal
                                </span>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-slate-100">
                                Ritish_Sharma
                                <span className="text-primary">.dev</span>
                            </span>
                        </NavLink>
                        {/* CENTER: NAVIGATION LINKS */}
                        <div
                            className={`${open ? "flex flex-col align-center absolute top-16 left-0 right-0 bg-background-dark py-6 gap-2" : "hidden"} lg:flex items-center gap-1 `}
                        >
                            {navLinks.map((link) => {
                                return (
                                    <NavLink
                                        to={link.href}
                                        key={link.name}
                                        className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-primary transition-colors duration-200"
                                    >
                                        {link.name}
                                    </NavLink>
                                );
                            })}
                        </div>
                        {/* RIGHT: SEARCH AND CONTACT */}
                        <div className="flex items-center gap-4">
                            {/* Search Bar */}
                            <div className="hidden lg:flex items-center relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 group-focus-within:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-[20px]">
                                        search
                                    </span>
                                </div>
                                <input
                                    className="block w-64 pl-10 pr-12 py-1.5 bg-primary/5 border border-primary/10 rounded-lg text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all"
                                    placeholder="Search ..."
                                    type="text"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-semibold text-slate-500 bg-background-dark border border-primary/20 rounded shadow-sm">
                                        ⌘K
                                    </kbd>
                                </div>
                            </div>
                            {/* CONTACT BUTTONS */}
                            <div className="max-lg:hidden flex items-center gap-3 ml-2">
                                <NavLink
                                    to="/contact"
                                    className="bg-primary hover:bg-primary/90 text-background-dark text-sm font-bold px-4 py-2 rounded-lg transition-all shadow-lg shadow-primary/20 active:scale-95"
                                >
                                    Get in Touch
                                </NavLink>
                            </div>
                            {/* MOBILE MENU TOGGLE */}
                            <button
                                onClick={() =>
                                    open ? setOpen(false) : setOpen(true)
                                }
                                className="lg:hidden flex align-center text-slate-300"
                            >
                                {open ? (
                                    <span className="material-symbols-outlined">
                                        close
                                    </span>
                                ) : (
                                    <span className="material-symbols-outlined">
                                        menu
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            {/* NAVBAR END */}
        </>
    );
};

export default Navbar;
