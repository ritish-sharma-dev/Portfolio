import React from "react";
import { NavLink } from "react-router";
import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

const Footer = () => {
    const { pageLinks, socialLinks } = useContext(PortfolioContext);

    return (
        <>
            {/* FOOTER START */}
            <footer className="w-full border-t border-primary/10 bg-brand-dark pt-15 pb-10">
                <div className="max-w-full mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
                        {/* FOOTER LEFT START*/}
                        <div className="lg:col-span-4 flex flex-col gap-6">
                            <div className="flex items-center gap-3">
                                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary">
                                    <span className="material-symbols-outlined text-[20px] font-bold">
                                        terminal
                                    </span>
                                </div>
                                <span className="text-xl font-bold tracking-tight text-white">
                                    Ritish_Sharma
                                    <span className="text-primary">.dev</span>
                                </span>
                            </div>
                            <p className="lg:text-md text-slate-400 text-base leading-relaxed max-w-sm">
                                Software Engineer specializing in building
                                high-performance digital infrastructure and
                                modern web applications.
                            </p>
                        </div>
                        {/* FOOTER LEFT END */}
                        {/* LINKS SECTION START*/}
                        <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 gap-8">
                            {/* PAGE LINKS */}
                            <div className="flex flex-col gap-5">
                                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                                    Explore
                                </h4>
                                <ul className="flex flex-col gap-3">
                                    {pageLinks.map((link, index) => {
                                        return (
                                            <NavLink
                                                className="text-slate-400 hover:text-primary transition-colors text-sm"
                                                key={index}
                                                to={link.href}
                                            >
                                                {link.name}
                                            </NavLink>
                                        );
                                    })}
                                </ul>
                            </div>
                            {/* SOCIAL MEDIA LINKS */}
                            <div className="flex flex-col gap-5">
                                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                                    Connect
                                </h4>
                                <ul className="flex flex-col gap-3">
                                    {socialLinks.map((link, index) => {
                                        return (
                                            <a
                                                className="text-slate-400 hover:text-primary transition-colors text-sm"
                                                key={index}
                                                href={link.url}
                                            >
                                                {link.name}
                                            </a>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                        {/* LINKS SECTION END */}
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
                                    <span className="material-symbols-outlined text-xl">
                                        send
                                    </span>
                                </NavLink>
                            </div>
                        </div>
                        {/* CONTACT CARD END */}
                    </div>
                    <div className="pt-4 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full border border-white/5 text-[11px] font-medium text-text-grey">
                                <span>Made with</span>
                                <span className="material-symbols-outlined text-rose-500 text-xs fill-icon">
                                    favorite
                                </span>
                                <span>and</span>
                                <span className="material-symbols-outlined text-primary text-xs fill-icon">
                                    coffee
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* FOOTER END */}
        </>
    );
};

export default Footer;
