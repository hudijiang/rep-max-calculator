import Link from 'next/link';
import type { Metadata } from 'next';
import Disclaimer from '@/components/Disclaimer';

export const metadata: Metadata = {
    title: 'Strength Training Program (85% 1RM) | Max Strength Guide',
    description: 'Build raw strength with the 85-90% 1RM zone. A complete guide to strength blocks, low-rep training, and CNS adaptation for powerlifters.',
    keywords: ['strength training program', 'powerlifting routine', 'increase bench press', '85% 1rm', 'strength block', 'low rep training', 'CNS adaptation'],
};

import ArticleSchema from '@/components/ArticleSchema';

export default function StrengthPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-blue-600 selection:text-white overflow-hidden pb-20">
            <ArticleSchema
                title="Strength Training Program (85% 1RM) | Max Strength Guide"
                description="The core of powerlifting. Train in the 85% 1RM zone to maximize force production and neural efficiency. Includes 5x5 programming structure."
                datePublished="2024-01-01"
            />

            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 space-y-12">
                <nav className="flex items-center justify-between text-sm">
                    <Link href="/" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                        <span aria-hidden="true">&larr;</span> Back to 1RM Calculator
                    </Link>
                    <div className="hidden sm:flex gap-4">
                        <Link href="/training/peaking" className="text-gray-500 hover:text-purple-400 transition-colors">Peaking Phase &rarr;</Link>
                    </div>
                </nav>

                <header className="space-y-6 text-center sm:text-left">
                    <div className="inline-flex items-center space-x-2 bg-blue-900/20 border border-blue-800/50 rounded-full px-4 py-1.5 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        <span className="text-sm font-medium text-blue-300">Phase 2: Intensification</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                        Strength Training <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">for Maximum Force</span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                        Transition from building size to expressing power. Optimize your neural drive with heavy loads.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4 justify-center sm:justify-start">
                        <Link href="#strength-plan" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-blue-900/20">
                            See Strength Routine
                        </Link>
                        <Link href="/" className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-xl border border-gray-700 transition-all">
                            Check 1RM Numbers
                        </Link>
                    </div>
                </header>

                <article className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-strong:text-white prose-li:marker:text-blue-500">

                    <div className="bg-gray-900/50 border-l-4 border-blue-500 p-6 my-8 rounded-r-xl">
                        <h3 className="mt-0 text-white">The Strength Protocol</h3>
                        <ul className="my-0 space-y-2">
                            <li><strong>Intensity Zone:</strong> 80% - 90% of 1RM</li>
                            <li><strong>Rep Range:</strong> 3 - 5 Reps</li>
                            <li><strong>Rest Periods:</strong> 3 - 5 Minutes</li>
                            <li><strong>Primary Driver:</strong> Neural Adaptation & Motor Unit Recruitment</li>
                        </ul>
                    </div>

                    <h2>Neural Adaptation vs. Hypertrophy</h2>
                    <p>
                        While hypertrophy training builds the "engine" (muscle size), strength training tunes the "software" (central nervous system).
                        At intensities above <strong>85% 1RM</strong>, your body learns to:
                    </p>
                    <ol>
                        <li><strong>Recruit High-Threshold Motor Units:</strong> These are the fast-twitch fibers capable of generating the most force.</li>
                        <li><strong>Rate Coding:</strong> Send signals from the brain to the muscle faster.</li>
                        <li><strong>Inter-muscular Coordination:</strong> Coordinate multiple muscle groups to fire synchronously.</li>
                    </ol>

                    <h3>The Specificity of Heavy Lifting</h3>
                    <p>
                        To get better at lifting heavy weights, you must lift heavy weights. A common mistake is staying in the "comfortable" 10-rep range for too long.
                        <strong>Strength is a skill</strong> that needs to be practiced at relevant intensities.
                    </p>

                    <h2 id="strength-plan">Typical Strength Block Structure</h2>
                    <p>
                        This phase usually follows a hypertrophy block. The volume (total reps) decreases, but the intensity (weight on bar) increases significantly.
                    </p>

                    <div className="not-prose grid gap-6 md:grid-cols-2 my-8">
                        <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="text-blue-500">Day 1</span> Squat Focus
                            </h3>
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="text-gray-500 border-b border-gray-800">
                                        <th className="pb-2 text-left">Exercise</th>
                                        <th className="pb-2 text-center">Sets</th>
                                        <th className="pb-2 text-center">Reps</th>
                                        <th className="pb-2 text-right">Target</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-800/50">
                                    <tr>
                                        <td className="py-2 text-white font-medium">Low Bar Squat</td>
                                        <td className="py-2 text-center">5</td>
                                        <td className="py-2 text-center">5</td>
                                        <td className="py-2 text-right text-blue-400">80% 1RM</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 text-gray-300">Paused Squat</td>
                                        <td className="py-2 text-center">3</td>
                                        <td className="py-2 text-center">4</td>
                                        <td className="py-2 text-right text-gray-400">75% 1RM</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 text-gray-300">Box Jumps</td>
                                        <td className="py-2 text-center">5</td>
                                        <td className="py-2 text-center">3</td>
                                        <td className="py-2 text-right text-gray-400">Max Height</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="text-blue-500">Day 2</span> Bench Focus
                            </h3>
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="text-gray-500 border-b border-gray-800">
                                        <th className="pb-2 text-left">Exercise</th>
                                        <th className="pb-2 text-center">Sets</th>
                                        <th className="pb-2 text-center">Reps</th>
                                        <th className="pb-2 text-right">Target</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-800/50">
                                    <tr>
                                        <td className="py-2 text-white font-medium">Competition Bench</td>
                                        <td className="py-2 text-center">5</td>
                                        <td className="py-2 text-center">3</td>
                                        <td className="py-2 text-right text-blue-400">85% 1RM</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 text-gray-300">Close Grip Bench</td>
                                        <td className="py-2 text-center">3</td>
                                        <td className="py-2 text-center">6</td>
                                        <td className="py-2 text-right text-gray-400">RPE 8</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 text-gray-300">Barbell Rows</td>
                                        <td className="py-2 text-center">4</td>
                                        <td className="py-2 text-center">8</td>
                                        <td className="py-2 text-right text-gray-400">Heavy</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <h2>Common Questions</h2>
                    <div className="space-y-6">
                        <details className="group bg-gray-900/30 p-4 rounded-lg border border-gray-800 cursor-pointer">
                            <summary className="font-bold text-white list-none flex justify-between items-center group-hover:text-blue-400 transition-colors">
                                How long should I rest between sets?
                                <span className="text-blue-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-4 text-gray-400 text-sm">
                                For strength training, rest periods of <strong>3-5 minutes</strong> are optimal. You need your ATP-PC energy system to fully replenish (which takes about 3 mins) so you can exert maximum force on every set.
                            </p>
                        </details>
                        <details className="group bg-gray-900/30 p-4 rounded-lg border border-gray-800 cursor-pointer">
                            <summary className="font-bold text-white list-none flex justify-between items-center group-hover:text-blue-400 transition-colors">
                                Will I lose muscle mass if I only do low reps?
                                <span className="text-blue-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-4 text-gray-400 text-sm">
                                Not necessarily. As long as the volume is sufficient and the intensity is high, you can maintain muscle mass. However, strength blocks are usually shorter (4-8 weeks) compared to hypertrophy blocks to prevent burnout.
                            </p>
                        </details>
                    </div>

                    {/* Phase Navigation */}
                    <div className="grid md:grid-cols-2 gap-6 mt-12 not-prose">
                        <Link href="/training/hypertrophy" className="group p-6 bg-gray-900/40 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all block">
                            <h3 className="text-lg font-bold text-gray-400 group-hover:text-green-400 mb-2 transition-colors">&larr; Previous: Phase 1</h3>
                            <p className="text-white font-bold text-xl">Hypertrophy</p>
                            <p className="text-sm text-gray-500 mt-2">Build the muscle base.</p>
                        </Link>
                        <Link href="/training/peaking" className="group p-6 bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all block">
                            <h3 className="text-lg font-bold text-blue-400 group-hover:text-purple-400 mb-2 transition-colors">Next: Phase 3 &rarr;</h3>
                            <p className="text-white font-bold text-xl">Peaking</p>
                            <p className="text-sm text-gray-500 mt-2">Realize your max strength.</p>
                        </Link>
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
                                <li>Zatsiorsky, V. M., & Kraemer, W. J. (2006). <em>Science and Practice of Strength Training</em>.</li>
                                <li>Rippetoe, M. (2011). <em>Starting Strength: Basic Barbell Training</em>.</li>
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
