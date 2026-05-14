

export default function Footer() {
    return (
        <footer className="relative overflow-hidden border-t bg-[#f5f5f5]">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                    
                    {/* LEFT */}
                    <div className="space-y-8">
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full border border-neutral-300 bg-white px-4 py-3 text-sm outline-none"
                            />

                            <button className="border border-l-0 border-neutral-300 bg-white px-6 text-sm font-medium hover:bg-neutral-100">
                                Stay updated
                            </button>
                        </div>

                        <p className="max-w-sm text-sm text-neutral-500">
                            By submitting this form, you agree to our terms.
                            You can opt-out anytime.
                        </p>

                        <div className="flex items-center gap-5 text-neutral-500">
                            <a href="#">GitHub</a>
                            <a href="#">X</a>
                            <a href="#">YouTube</a>
                            <a href="#">Discord</a>
                        </div>

                        <div className="flex gap-6 text-sm text-neutral-500">
                            <span>© 2026 Inpsir</span>
                            <a href="#">Legal</a>
                            <a href="#">Status</a>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
                            <div className="space-y-4">
                                <h4 className="font-medium">Products</h4>

                                <div className="space-y-3 text-neutral-600">
                                    <a href="#" className="block">
                                        Dashboard
                                    </a>

                                    <a href="#" className="block">
                                        Analytics
                                    </a>

                                    <a href="#" className="block">
                                        API
                                    </a>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-medium">Resources</h4>

                                <div className="space-y-3 text-neutral-600">
                                    <a href="#" className="block">
                                        Blog
                                    </a>

                                    <a href="#" className="block">
                                        Docs
                                    </a>

                                    <a href="#" className="block">
                                        Learn
                                    </a>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-medium">Company</h4>

                                <div className="space-y-3 text-neutral-600">
                                    <a href="#" className="block">
                                        Careers
                                    </a>

                                    <a href="#" className="block">
                                        Community
                                    </a>

                                    <a href="#" className="block">
                                        Contact
                                    </a>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-medium">Social</h4>

                                <div className="space-y-3 text-neutral-600">
                                    <a href="#" className="block">
                                        GitHub
                                    </a>

                                    <a href="#" className="block">
                                        Twitter
                                    </a>

                                    <a href="#" className="block">
                                        Discord
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* HUGE BACKGROUND TEXT */}
            <div className="pointer-events-none select-none overflow-hidden">
                <h1 className="translate-y-28 text-center text-[220px] font-black leading-none tracking-[-0.08em] text-orange-600 opacity-100 md:text-[420px]">
                    Inpsir
                </h1>
            </div>
        </footer>
    );
}
