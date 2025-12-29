import Link from 'next/link';
import type { Metadata } from 'next';
import Disclaimer from '@/components/Disclaimer';

export const metadata: Metadata = {
    title: 'Peaking Program & 1RM Testing (95% 1RM) | Strength Training',
    description: 'How to peak for a powerlifting competition or 1RM test day. Learn the art of tapering, intensity management, and testing your true max safely.',
    keywords: ['peaking program', 'powerlifting taper', '1rm test day', 'peaking for competition', '95% 1rm', 'heavy singles'],
};

import ArticleSchema from '@/components/ArticleSchema';

export default function PeakingPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-purple-600 selection:text-white overflow-hidden pb-20">
            <ArticleSchema
                title="Peaking Program & 1RM Testing (95% 1RM) | Strength Training"
                description="The final countdown. Learn how to taper volume and increase intensity to 95%+ 1RM to dominate your competition or test day."
                datePublished="2024-01-01"
            />

            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-900/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
                <nav className="flex items-center justify-between text-sm">
                    <Link href="/" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                        <span aria-hidden="true">&larr;</span> Back to 1RM Calculator
                    </Link>
                    <div className="hidden sm:flex gap-4">
                        <Link href="/training/periodization" className="text-gray-500 hover:text-blue-400 transition-colors">Periodization Guide &rarr;</Link>
                    </div>
                </nav>

                <header className="space-y-6 text-center sm:text-left">
                    <div className="inline-flex items-center space-x-2 bg-purple-900/20 border border-purple-800/50 rounded-full px-4 py-1.5 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                        <span className="text-sm font-medium text-purple-300">Phase 3: Realization</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                        Peaking & <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Performance</span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                        The art of realizing your strength potential. Taper fatigue to unleash maximum performance.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4 justify-center sm:justify-start">
                        <Link href="#taper-strategy" className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-purple-900/20">
                            View Taper Strategy
                        </Link>
                        <Link href="/" className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-xl border border-gray-700 transition-all">
                            Calculate Attempts
                        </Link>
                    </div>
                </header>

                <article className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-purple-400 hover:prose-a:text-purple-300 prose-strong:text-white prose-li:marker:text-purple-500">

                    <div className="bg-gray-900/50 border-l-4 border-purple-500 p-6 my-8 rounded-r-xl">
                        <h3 className="mt-0 text-white">The Peaking Protocol</h3>
                        <ul className="my-0 space-y-2">
                            <li><strong>Intensity Zone:</strong> 90% - 100%+ of 1RM</li>
                            <li><strong>Rep Range:</strong> 1 - 3 Reps</li>
                            <li><strong>Volume:</strong> Low (Reduced by 50-70%)</li>
                            <li><strong>Primary Goal:</strong> Fatigue Dissipation & Technical Perfection</li>
                        </ul>
                    </div>

                    <h2>The Taper: Shedding Fatigue</h2>
                    <p>
                        Training hard builds fitness, but it also accumulates fatigue. <strong>Performance = Fitness - Fatigue.</strong>
                    </p>
                    <p>
                        To express your true 1RM capabilities, you must reduce (taper) the training volume significantly in the final 1-2 weeks before a test. This allows your nervous system to fully recover without losing strength (detraining).
                    </p>

                    <h2 id="taper-strategy">2-Week Peaking Microcycle</h2>
                    <p>
                        This plan is for the final 14 days before a competition or a gym PR day.
                    </p>

                    <div className="not-prose grid gap-6 md:grid-cols-2 my-8">
                        <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="text-purple-500">Week 1</span> Heavy Singles
                            </h3>
                            <p className="text-gray-400 text-sm mb-4">Goal: Acclimate to heavy loads with low fatigue.</p>
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="text-gray-500 border-b border-gray-800">
                                        <th className="pb-2 text-left">Day</th>
                                        <th className="pb-2 text-left">Exercise</th>
                                        <th className="pb-2 text-right">Intensity</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-800/50">
                                    <tr>
                                        <td className="py-2 text-gray-400">Mon</td>
                                        <td className="py-2 text-white">Squat</td>
                                        <td className="py-2 text-right text-purple-400">1x90%, 1x92.5%</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 text-gray-400">Wed</td>
                                        <td className="py-2 text-white">Bench</td>
                                        <td className="py-2 text-right text-purple-400">1x90%, 1x92.5%</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 text-gray-400">Fri</td>
                                        <td className="py-2 text-white">Deadlift</td>
                                        <td className="py-2 text-right text-purple-400">1x85% (Last Heavy Pull)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="text-pink-500">Week 2</span> The Deload & Test
                            </h3>
                            <p className="text-gray-400 text-sm mb-4">Goal: Active recovery and mental prep.</p>
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="text-gray-500 border-b border-gray-800">
                                        <th className="pb-2 text-left">Day</th>
                                        <th className="pb-2 text-left">Exercise</th>
                                        <th className="pb-2 text-right">Intensity</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-800/50">
                                    <tr>
                                        <td className="py-2 text-gray-400">Mon</td>
                                        <td className="py-2 text-white">Squat/Bench</td>
                                        <td className="py-2 text-right text-gray-400">3x3 @ 50% (Speed Work)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 text-gray-400">Wed</td>
                                        <td className="py-2 text-white">Mobility</td>
                                        <td className="py-2 text-right text-gray-400">Very Light</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 text-gray-400">Sat</td>
                                        <td className="py-2 text-white font-bold">TEST DAY</td>
                                        <td className="py-2 text-right text-purple-400 font-bold">100% - 105%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <h2>Selecting Your Attempts</h2>
                    <p>
                        On test day, you should plan for three specific attempts:
                    </p>
                    <ul>
                        <li><strong>Opener (90-93%):</strong> A weight you can hit for a triple on a bad day. Builds confidence.</li>
                        <li><strong>Second (97-100%):</strong> Either matches your current PR or sets a very small PR.</li>
                        <li><strong>Third (102-105%):</strong> The goal weight. "Go for glory."</li>
                    </ul>

                    <h2>Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <details className="group bg-gray-900/30 p-4 rounded-lg border border-gray-800 cursor-pointer">
                            <summary className="font-bold text-white list-none flex justify-between items-center group-hover:text-purple-400 transition-colors">
                                Should I do cardio during peak week?
                                <span className="text-purple-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-4 text-gray-400 text-sm">
                                Minimize or eliminate it. You want every calorie of energy going towards recovery and force production. Light walking is fine for blood flow.
                            </p>
                        </details>
                        <details className="group bg-gray-900/30 p-4 rounded-lg border border-gray-800 cursor-pointer">
                            <summary className="font-bold text-white list-none flex justify-between items-center group-hover:text-purple-400 transition-colors">
                                What if I miss my opener?
                                <span className="text-purple-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-4 text-gray-400 text-sm">
                                If the miss was technical, retake the same weight. If it felt impossibly heavy, reduce the weight for the next attempt (if rules allow) or accept that it is not your day and drop intensity to secure a total.
                            </p>
                        </details>
                    </div>

                    {/* Cycle Navigation */}
                    <div className="mt-12 p-8 bg-gray-900/30 rounded-2xl border border-gray-800 text-center not-prose">
                        <h3 className="text-2xl font-bold text-white mt-0 mb-4">What's Next?</h3>
                        <p className="text-gray-400 mb-6">After testing your 1RM, take a deload week and then start a new cycle to continue making gains.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/training/hypertrophy" className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-xl transition-colors no-underline border border-gray-700">
                                Restart: Phase 1 (Hypertrophy)
                            </Link>
                            <Link href="/training/strength" className="inline-block bg-transparent hover:bg-gray-800/50 text-blue-400 hover:text-blue-300 font-bold py-3 px-8 rounded-xl transition-colors no-underline border border-blue-900/30">
                                Review Phase 2 (Strength)
                            </Link>
                        </div>
                    </div>

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
                                <li>Israetel, M., et al. (2015). <em>Scientific Principles of Strength Training</em>.</li>
                                <li>Pritchard, H. J., et al. (2015). Effects of tapering on upper and lower body strength and power. <em>Journal of Strength and Conditioning Research</em>.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-gray-900 rounded-lg p-4 text-xs text-gray-600 border border-gray-800 mt-8">
                        <strong>About the Author:</strong> The 1RM Calculator Team provides evidence-based training tools. Content reviewed by certified coaches.
                    </div>

                    <Disclaimer />
                </article>
            </div>
        </main>
    );
}
