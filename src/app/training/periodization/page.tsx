import Link from 'next/link';
import type { Metadata } from 'next';
import Disclaimer from '@/components/Disclaimer';

export const metadata: Metadata = {
    title: 'Periodization for Powerlifting: A Practical Guide | 1RM Calculator',
    description: 'Master the science of periodization. Learn how to structure microcycles, mesocycles, and macrocycles using your One Rep Max for continuous progress.',
    keywords: ['periodization for powerlifting', 'strength training cycles', 'mesocycle examples', 'macrocycle planning', 'linear periodization', 'block periodization'],
};

import ArticleSchema from '@/components/ArticleSchema';

export default function PeriodizationPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-blue-600 selection:text-white overflow-hidden pb-20">
            <ArticleSchema
                title="Periodization for Powerlifting: A Practical Guide"
                description="Master the art of periodization. Learn how to structure your training blocks (Hypertrophy, Strength, Peaking) based on 1RM percentages for long-term gains."
                datePublished="2024-01-01"
            />

            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
                <nav className="flex items-center justify-between text-sm">
                    <Link href="/" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                        <span aria-hidden="true">&larr;</span> Back to 1RM Calculator
                    </Link>
                    <div className="hidden sm:flex gap-4">
                        <Link href="/training/hypertrophy" className="text-gray-500 hover:text-blue-400 transition-colors">Start Phase 1: Hypertrophy &rarr;</Link>
                    </div>
                </nav>

                <header className="space-y-6 text-center sm:text-left">
                    <div className="inline-flex items-center space-x-2 bg-blue-900/20 border border-blue-800/50 rounded-full px-4 py-1.5 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        <span className="text-sm font-medium text-blue-300">The Big Picture</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                        Strength <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Periodization</span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                        The roadmap to your strongest self. Learn to manipulate volume and intensity over time.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4 justify-center sm:justify-start">
                        <Link href="#structure" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-blue-900/20">
                            See The Roadmap
                        </Link>
                        <Link href="/" className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-xl border border-gray-700 transition-all">
                            Calculate Your 1RM
                        </Link>
                    </div>
                </header>

                <article className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-strong:text-white prose-li:marker:text-blue-500">

                    <div className="bg-gray-900/50 border-l-4 border-blue-500 p-6 my-8 rounded-r-xl">
                        <p className="mt-0 italic text-lg text-gray-300">
                            "If you fail to plan, you are planning to fail." — Benjamin Franklin
                        </p>
                        <p className="mb-0 text-sm text-gray-500">
                            Periodization applies this concept to lifting: it is the organization of training into blocks to peak for a specific event.
                        </p>
                    </div>

                    <h2>The Hierarchy of Training Cycles</h2>
                    <p>
                        Effective training is broken down into three timeframes. Understanding these allows you to zoom out and see your long-term progress.
                    </p>

                    <div className="grid gap-6 md:grid-cols-3 not-prose my-8">
                        <div className="bg-gray-900/40 border border-gray-800 p-6 rounded-2xl relative overflow-hidden group hover:border-blue-500/50 transition-colors">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-[40px]"></div>
                            <h3 className="text-xl font-bold text-white mb-2">1. Microcycle</h3>
                            <p className="text-sm font-bold text-blue-400 mb-4 uppercase tracking-wider">1 Week</p>
                            <p className="text-sm text-gray-400">The smallest unit. Your weekly training schedule. Focuses on managing acute fatigue and hitting specific sets/reps.</p>
                        </div>
                        <div className="bg-gray-900/40 border border-gray-800 p-6 rounded-2xl relative overflow-hidden group hover:border-purple-500/50 transition-colors">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-[40px]"></div>
                            <h3 className="text-xl font-bold text-white mb-2">2. Mesocycle</h3>
                            <p className="text-sm font-bold text-purple-400 mb-4 uppercase tracking-wider">4-8 Weeks</p>
                            <p className="text-sm text-gray-400">A dedicated block of training focusing on one attribute (e.g., a "Strength Block"). Accumulates significant workload.</p>
                        </div>
                        <div className="bg-gray-900/40 border border-gray-800 p-6 rounded-2xl relative overflow-hidden group hover:border-pink-500/50 transition-colors">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/5 rounded-full blur-[40px]"></div>
                            <h3 className="text-xl font-bold text-white mb-2">3. Macrocycle</h3>
                            <p className="text-sm font-bold text-pink-400 mb-4 uppercase tracking-wider">6-12 Months</p>
                            <p className="text-sm text-gray-400">The yearly plan. Connects multiple mesocycles together to peak for a competition or major goal.</p>
                        </div>
                    </div>

                    <h2 id="structure">Constructing Your Macrocycle</h2>
                    <p>
                        Linear Periodization is the most common model for intermediates. It starts with high volume and low intensity, and gradually shifts to low volume and high intensity.
                    </p>

                    <div className="relative border-l-2 border-gray-800 ml-3 md:ml-6 space-y-8 my-12">
                        <div className="relative pl-8 md:pl-12">
                            <span className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-green-500 border-4 border-[#050505]"></span>
                            <h3 className="text-2xl font-bold text-white mt-0 mb-2">Phase 1: Hypertrophy</h3>
                            <p className="text-green-400 font-mono text-sm mb-2">Weeks 1-4 • 65-75% 1RM</p>
                            <p className="text-gray-400 text-sm">Build the muscle base. High reps, isolation movements, metabolic focus. <Link href="/training/hypertrophy" className="text-green-400 underline">Read more</Link>.</p>
                        </div>
                        <div className="relative pl-8 md:pl-12">
                            <span className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#050505]"></span>
                            <h3 className="text-2xl font-bold text-white mt-0 mb-2">Phase 2: Strength</h3>
                            <p className="text-blue-400 font-mono text-sm mb-2">Weeks 5-8 • 80-90% 1RM</p>
                            <p className="text-gray-400 text-sm">Teach the muscle to fire. Heavier compounds, lower reps, neural focus. <Link href="/training/strength" className="text-blue-400 underline">Read more</Link>.</p>
                        </div>
                        <div className="relative pl-8 md:pl-12">
                            <span className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-purple-500 border-4 border-[#050505]"></span>
                            <h3 className="text-2xl font-bold text-white mt-0 mb-2">Phase 3: Peaking</h3>
                            <p className="text-purple-400 font-mono text-sm mb-2">Weeks 9-10 • 90-100% 1RM</p>
                            <p className="text-gray-400 text-sm">Test preparation. Heavy singles, specific practice, tapering. <Link href="/training/peaking" className="text-purple-400 underline">Read more</Link>.</p>
                        </div>
                        <div className="relative pl-8 md:pl-12">
                            <span className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-gray-500 border-4 border-[#050505]"></span>
                            <h3 className="text-2xl font-bold text-white mt-0 mb-2">Phase 4: Deload</h3>
                            <p className="text-gray-400 font-mono text-sm mb-2">Week 11 • 50% 1RM</p>
                            <p className="text-gray-400 text-sm">Active recovery. Wash away fatigue before starting the next cycle.</p>
                        </div>
                    </div>

                    <h2>Types of Periodization</h2>
                    <p>
                        While we focused on <strong>Linear Periodization</strong>, there are other methods:
                    </p>
                    <ul>
                        <li><strong>Block Periodization:</strong> Strictly compartmentalized phases (what we outlined above). Highly effective for elite athletes.</li>
                        <li><strong>Undulating Periodization (DUP):</strong> Changing volume/intensity daily (e.g., Monday Hypertrophy, Wednesday Strength, Friday Power). Great for keeping training fresh.</li>
                        <li><strong>Conjugate Method:</strong> Training multiple traits simultaneously (e.g., Westside Barbell).</li>
                    </ul>

                    <hr className="border-gray-800 my-12" />

                    <div className="flex flex-col md:flex-row gap-8 text-sm text-gray-500">
                        <div className="flex-1">
                            <h4 className="text-white font-semibold mb-2">About the Author</h4>
                            <p>
                                Written by the 1RM Calculator Team, reviewed by certified strength and conditioning coaches (CSCS). We specialize in evidence-based training tools for powerlifters and bodybuilders.
                            </p>
                        </div>
                        <div className="flex-1">
                            <h4 className="text-white font-semibold mb-2">References</h4>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Bompa, T. O., & Haff, G. G. (2009). <em>Periodization: Theory and Methodology of Training</em>.</li>
                                <li>Haff, G. G. (2004). Periodization strategies for strength assessment. <em>NSCA Strength and Conditioning Journal</em>.</li>
                            </ul>
                        </div>
                    </div>

                    <Disclaimer />

                </article>
            </div>
        </main>
    );
}
