import Link from 'next/link';
import type { Metadata } from 'next';
import VideoCard from '@/components/VideoCard';
import Disclaimer from '@/components/Disclaimer';

export const metadata: Metadata = {
    title: 'Hypertrophy Training Program (70-80% 1RM) | Muscle Growth Guide',
    description: 'The ultimate guide to hypertrophy training. Learn why 8-12 reps at 70-80% 1RM is best for muscle growth, with sample workout routines and science-based programming.',
    keywords: ['hypertrophy training', 'muscle growth program', 'bodybuilding routines', '70% 1rm', 'rep ranges for mass', 'volume training'],
};

import ArticleSchema from '@/components/ArticleSchema';

export default function HypertrophyPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-green-600 selection:text-white overflow-hidden pb-20">
            <ArticleSchema
                title="Hypertrophy Training Program (70-80% 1RM) | Muscle Growth Guide"
                description="The ultimate guide to hypertrophy training. Learn why 8-12 reps at 70-80% 1RM is best for muscle growth, with sample workout routines and science-based programming."
                datePublished="2024-01-01"
            />

            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-900/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 space-y-12">
                <nav className="flex items-center justify-between text-sm">
                    <Link href="/" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                        <span aria-hidden="true">&larr;</span> Back to 1RM Calculator
                    </Link>
                    <div className="hidden sm:flex gap-4">
                        <Link href="/training/strength" className="text-gray-500 hover:text-blue-400 transition-colors">Strength Phase &rarr;</Link>
                    </div>
                </nav>

                <header className="space-y-6 text-center sm:text-left">
                    {/* Header Content Omitted for Brevity - Same as before */}
                    <div className="inline-flex items-center space-x-2 bg-green-900/20 border border-green-800/50 rounded-full px-4 py-1.5 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-sm font-medium text-green-300">Phase 1: Accumulation</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                        Hypertrophy Training <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">for Maximum Muscle Growth</span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                        A science-based approach to building mass using Percentage-Based Training (PBT).
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4 justify-center sm:justify-start">
                        <Link href="#program" className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-green-900/20">
                            View Sample Program
                        </Link>
                        <Link href="/" className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-xl border border-gray-700 transition-all">
                            Calculate Your 1RM First
                        </Link>
                    </div>
                </header>

                <article className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-green-400 hover:prose-a:text-green-300 prose-strong:text-white prose-li:marker:text-green-500">

                    <div className="bg-gray-900/50 border-l-4 border-green-500 p-6 my-8 rounded-r-xl">
                        {/* Protocol Content Omitted - Same as before */}
                        <h3 className="mt-0 text-white">The Hypertrophy Protocol</h3>
                        <ul className="my-0 space-y-2">
                            <li><strong>Intensity Zone:</strong> 65% - 80% of 1RM</li>
                            <li><strong>Rep Range:</strong> 8 - 12 Reps</li>
                            <li><strong>Rest Periods:</strong> 60 - 90 Seconds</li>
                            <li><strong>Primary Driver:</strong> Metabolic Stress & Mechanical Tension</li>
                        </ul>
                    </div>

                    <h2>The Science of Muscle Growth</h2>
                    {/* Science Content Omitted - Same as before */}
                    <p>
                        Hypertrophy is not just about "feeling the burn." It is a physiological adaptation driven by three main mechanisms: <strong>Mechanical Tension</strong>, <strong>Muscle Damage</strong>, and <strong>Metabolic Stress</strong>.
                    </p>
                    <p>
                        Research indicates that the <strong>70-80% 1RM range</strong> is the "sweet spot" for hypertrophy because it allows for a high volume of work to be performed with sufficiently heavy loads.
                    </p>
                    <h3>Why Percentage-Based Training Matters</h3>
                    <p>
                        Many lifters train by "feel" (RPE), which is valid, but using accurate percentages ensures you are objectively overloading the muscle.
                        If your Bench Press 1RM is 100kg, performing sets of 10 reps at 70kg forces a specific adaptation that 50kg (too light) or 90kg (too heavy for volume) cannot replicate.
                    </p>

                    <h2 id="program">4-Week Hypertrophy Block Example</h2>

                    {/* Table Content Omitted - Same as before */}
                    <div className="not-prose grid gap-6 md:grid-cols-2 my-8">
                        {/* Left Column */}
                        <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="text-green-500">Day 1</span> Upper Body Push
                            </h3>
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="text-gray-500 border-b border-gray-800">
                                        <th className="pb-2 text-left">Exercise</th>
                                        <th className="pb-2 text-center">Sets</th>
                                        <th className="pb-2 text-center">Reps</th>
                                        <th className="pb-2 text-right">Intensity</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-800/50">
                                    <tr>
                                        <td className="py-2 text-white font-medium">Bench Press</td>
                                        <td className="py-2 text-center">4</td>
                                        <td className="py-2 text-center">10</td>
                                        <td className="py-2 text-right text-green-400">70% 1RM</td>
                                    </tr>
                                    {/* ... other rows */}
                                    <tr>
                                        <td className="py-2 text-gray-300">Overhead Press</td>
                                        <td className="py-2 text-center">3</td>
                                        <td className="py-2 text-center">12</td>
                                        <td className="py-2 text-right text-gray-400">RPE 8</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Right Column */}
                        <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="text-green-500">Day 2</span> Lower Body
                            </h3>
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="text-gray-500 border-b border-gray-800">
                                        <th className="pb-2 text-left">Exercise</th>
                                        <th className="pb-2 text-center">Sets</th>
                                        <th className="pb-2 text-center">Reps</th>
                                        <th className="pb-2 text-right">Intensity</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-800/50">
                                    {/* ... rows */}
                                    <tr>
                                        <td className="py-2 text-white font-medium">Squat</td>
                                        <td className="py-2 text-center">4</td>
                                        <td className="py-2 text-center">8</td>
                                        <td className="py-2 text-right text-green-400">75% 1RM</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 text-gray-300">RDL</td>
                                        <td className="py-2 text-center">3</td>
                                        <td className="py-2 text-center">10</td>
                                        <td className="py-2 text-right text-green-400">65% 1RM</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* NEW VISUAL SECTION */}
                    <h2>Technique Library</h2>
                    <p>Proper form is critical when performing high-volume hypertrophy work to prevent overuse injuries.</p>
                    <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
                        <VideoCard
                            title="Barbell Squat Technique"
                            description="Keep spine neutral and hit full depth. Focus on controlling the descent."
                            thumbnailSrc="/generated/squat_technique_dark.png"
                            videoSrc="/generated/squat_technique_dark.mp4"
                        />
                        <VideoCard
                            title="Bench Press Setup"
                            description="Retract scapula and drive feet into the floor. Touch the chest under control."
                            thumbnailSrc="/generated/bench_press_setup_dark.png"
                            videoSrc="/generated/bench_press_setup_dark.mp4"
                        />
                    </div>

                    <h2>Frequently Asked Questions</h2>
                    {/* FAQ Content Omitted - Same as before */}
                    <div className="space-y-6">
                        <details className="group bg-gray-900/30 p-4 rounded-lg border border-gray-800 cursor-pointer">
                            <summary className="font-bold text-white list-none flex justify-between items-center group-hover:text-green-400 transition-colors">
                                Is 3x10 the only way to build muscle?
                                <span className="text-green-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-4 text-gray-400 text-sm">
                                No. While 3x10 is a classic hypertrophy scheme, muscle growth can occur in any rep range (5-30 reps) as long as you are approaching failure. However, the 8-12 rep range is generally most efficient for balancing volume and fatigue.
                            </p>
                        </details>
                        {/* ... */}
                    </div>

                    {/* Next Phase Navigation */}
                    <div className="mt-12 p-6 bg-gradient-to-r from-gray-900 to-blue-900/20 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all group not-prose">
                        <h3 className="text-xl font-bold text-white mt-0 mb-2">Next Phase: Strength &rarr;</h3>
                        <p className="text-gray-400 mb-4">You've built the muscle (Engine). Now learn how to make it stronger (Horsepower) with high-intensity training.</p>
                        <Link href="/training/strength" className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded-lg transition-colors no-underline">
                            Start Strength Phase
                        </Link>
                    </div>

                    <hr className="border-gray-800 my-12" />

                    {/* Footer Omitted - Same as before */}
                    <div className="flex flex-col md:flex-row gap-8 text-sm text-gray-500">
                        <div className="flex-1">
                            <h4 className="text-white font-semibold mb-2">About the Author</h4>
                            {/* ... */}
                        </div>
                        {/* ... */}
                    </div>
                    <Disclaimer />
                </article>
            </div>
        </main>
    );
}
