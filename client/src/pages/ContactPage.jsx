import React from "react";
import ECard1 from "../components/cards/EducationPageCards/ECard1";
import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

const ContactPage = () => {
    const { socialLinks } = useContext(PortfolioContext);

    return (
        <>
            {/* CONTACT PAGE START */}
            <div className=" flex overflow-hidden">
                <section className="flex-1 max-w-3xl px-4 py-12 lg:px-12 overflow-y-auto">
                    {/* HEADER START */}
                    <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400  mb-4">
                        <span>Docs</span>
                        <span className="material-symbols-outlined text-sm">
                            chevron_right
                        </span>
                        <span className="text-primary">Contact</span>
                    </nav>
                    {/* HEADER END */}
                    {/* PAGE HEADING START */}
                    <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
                        Contact Support
                    </h1>
                    {/* PAGE HEADING END */}
                    {/* HEADING DESCRIPTION START */}
                    <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                        Want to collaborate on a project? Reach out through our
                        contact endpoint or find us on social media.
                    </p>
                    {/* HEADING DESCRIPTION END */}
                    <div className="space-y-12">
                        {/* FORM SECTION START*/}
                        <div className="bg-[#161c1b80] p-8 rounded-2xl border border-[#1e2927] shadow-xl">
                            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">
                                    send
                                </span>
                                Send a Message
                            </h2>
                            {/* FORM START */}
                            <form className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-400">
                                            Full Name
                                        </label>
                                        <input
                                            className="w-full bg-[#161C1B] border border-[#1e2927] rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                            placeholder="Ritish Sharma"
                                            type="text"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-400">
                                            Email Address
                                        </label>
                                        <input
                                            className="w-full  bg-[#161C1B] border border-[#1e2927] rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                            placeholder="ritish@gmail.com"
                                            type="email"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-400">
                                        Subject
                                    </label>
                                    <input
                                        className="w-full  bg-[#161C1B] border border-[#1e2927] rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                        placeholder="Subject"
                                        type="email"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-400">
                                        Message
                                    </label>
                                    <textarea
                                        className="w-full  bg-[#161C1B] border border-[#1e2927] rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                                        placeholder="How can we help?"
                                        rows="4"
                                    ></textarea>
                                </div>
                                <button
                                    className="w-full bg-primary hover:bg-primary/90 text-background-dark font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
                                    type="submit"
                                >
                                    Send Message
                                    <span className="material-symbols-outlined text-sm">
                                        rocket_launch
                                    </span>
                                </button>
                            </form>
                            {/* FORM END */}
                        </div>
                        {/* FORM SECTION END*/}
                        {/* SOCIAL LINKS SECTION START*/}
                        <div>
                            {/* HEADING START*/}
                            <h2 className="text-xl font-bold text-white mb-6">
                                Social Channels
                            </h2>
                            {/* HEADING END */}
                            {/* LINKS START */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {/* LINK  */}
                                {socialLinks.map((link) => {
                                    return (
                                        <a
                                            className="flex flex-col items-center justify-center p-6 rounded-xl border border-[#1e2927] bg-[#161c1b4d] hover:bg-[#161C1B] transition-all group"
                                            href={link.url}
                                        >
                                            <span className="text-sm font-medium text-white">
                                                {link.name}
                                            </span>
                                        </a>
                                    );
                                })}
                            </div>
                            {/* LINKS END */}
                        </div>
                        {/* SOCIAL LINKS SECTION END */}
                    </div>
                </section>
                <ECard1 />
            </div>
            {/* CONTACT PAGE END */}
        </>
    );
};

export default ContactPage;
