"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function LandingPage() {
    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-50 flex flex-col font-sans selection:bg-teal-500/30">

            {/* Navbar */}
            <nav className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-transparent backdrop-blur-md sticky top-0 z-50">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                        <span className="text-neutral-950 font-bold text-lg">H</span>
                    </div>
                    <span className="text-xl font-semibold tracking-tight">Horizon</span>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="ghost" className="text-neutral-300 hover:text-white hover:bg-white/10">Log in</Button>
                    <Button className="bg-white text-black hover:bg-neutral-200">Sign up</Button>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center p-6 relative overflow-hidden">

                {/* Background Effects */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" />
                    <div className="absolute top-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.05),rgba(255,255,255,0))]" />
                </div>

                <div className="z-10 w-full max-w-3xl flex flex-col items-center gap-8 mt-12 mb-20">
                    <h1 className="text-5xl md:text-6xl font-bold text-center tracking-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                        What will you build today?
                    </h1>
                    <p className="text-neutral-400 text-lg md:text-xl text-center max-w-xl">
                        Describe your application in plain text, and we'll generate the code, setup the environment, and deploy it for you.
                    </p>

                    <div className="w-full relative mt-4 group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 via-indigo-500/20 to-teal-500/20 rounded-3xl blur-md opacity-50 group-hover:opacity-100 transition duration-500"></div>
                        <div className="relative bg-neutral-900 border border-white/10 rounded-3xl shadow-2xl p-4 flex flex-col gap-2 transition-all duration-300 focus-within:border-white/20 focus-within:bg-neutral-900/80">
                            <Textarea
                                placeholder="Build me a modern dashboard with a sidebar and a charts area..."
                                className="w-full min-h-[140px] resize-none bg-transparent border-0 focus-visible:ring-0 p-3 text-lg text-neutral-100 placeholder:text-neutral-600 shadow-none focus-visible:shadow-none"
                            />
                            <div className="flex items-center justify-between pt-2 px-1">
                                <div className="flex gap-2">
                                    <Button variant="ghost" size="icon" className="h-9 w-9 text-neutral-500 hover:text-white rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>
                                    </Button>
                                    <Button variant="ghost" size="icon" className="h-9 w-9 text-neutral-500 hover:text-white rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                                    </Button>
                                </div>
                                <Button size="icon" className="h-10 w-10 rounded-full bg-white text-black hover:bg-neutral-200 transition-transform active:scale-95 shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3 mt-4 text-sm text-neutral-500">
                        <span>Try:</span>
                        <button className="px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 hover:text-white transition-colors border border-white/5">
                            "A todo app with auth"
                        </button>
                        <button className="px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 hover:text-white transition-colors border border-white/5">
                            "A weather dashboard"
                        </button>
                        <button className="px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 hover:text-white transition-colors border border-white/5">
                            "A personal portfolio"
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
