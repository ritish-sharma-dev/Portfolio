import React from "react";
import { NavLink } from "react-router";
import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";
import { Send, Terminal } from "lucide-react";

const Footer = () => {
    const { pageLinks } = useContext(PortfolioContext);

    return (
        <>
            {/* FOOTER START */}
            <footer className="w-full border-t border-primary/10 bg-brand-dark pt-8 pb-4">
                <div className="max-w-full mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-6">
                        {/* FOOTER LEFT START*/}
                        <div className="lg:col-span-4 flex flex-col gap-6">
                            <div className="flex items-center gap-3">
                                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary">
                                    <Terminal className="h-5 w-5" aria-hidden="true" />
                                </div>
                                <span className="text-xl font-bold tracking-tight text-white">
                                    Ritish_Sharma
                                    <span className="text-primary">.dev</span>
                                </span>
                            </div>
                        </div>
                        {/* FOOTER LEFT END */}
                        {/* EXPLORE LINKS START */}
                        <div className="hidden lg:col-span-4 lg:block">
                            <div className="flex flex-col gap-5">
                                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                                    Explore
                                </h4>
                                <ul className="flex flex-col gap-3">
                                    {pageLinks.map((link, index) => (
                                        <li key={index}>
                                            <NavLink
                                                className="text-sm text-slate-400 transition-colors hover:text-primary"
                                                to={link.href}
                                            >
                                                {link.name}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        {/* EXPLORE LINKS END */}
                        {/* CONTACT CARD START */}
                        <div className="lg:col-span-4">
                            <div className="bg-[#ffffff08] rounded-xl p-8 border border-white/5 flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-lg font-bold text-white">
                                        Let's collaborate
                                    </h4>
                                    <p className="text-sm text-slate-400">
                                        Interested in working together or just
                                        want to talk tech ?
                                    </p>
                                </div>

                                <NavLink
                                    to="/contact"
                                    className="w-full text-black bg-primary hover:bg-[#0da371] text-brand-dark font-bold py-3 rounded-lg transition-all transform active:scale-[0.98] flex items-center justify-center gap-2"
                                    type="submit"
                                >
                                    Get in touch
                                    <Send className="h-5 w-5" aria-hidden="true" />
                                </NavLink>
                            </div>
                        </div>
                        {/* CONTACT CARD END */}
                    </div>
                </div>
            </footer>
            {/* FOOTER END */}
        </>
    );
};

export default Footer;
