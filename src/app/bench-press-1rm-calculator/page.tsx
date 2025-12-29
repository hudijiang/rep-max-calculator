import Link from 'next/link';
import type { Metadata } from 'next';
import Calculator from '@/components/Calculator';
import ArticleSchema from '@/components/ArticleSchema';
import Disclaimer from '@/components/Disclaimer';

export const metadata: Metadata = {
    title: 'Bench Press 1RM Calculator | Accurate Chest Strength Estimate',
    description: 'Calculate your Bench Press One Rep Max safely. Optimized for powerlifting and bodybuilding chest training. Includes percentage charts for hypertrophy and strength.',
    keywords: ['bench press 1rm calculator', 'bench max calculator', 'chest workout calculator', 'powerlifting bench press', 'epley formula bench', 'how much can i bench'],
    alternates: {
        canonical: 'https://www.onerepmaxcalculator.org/bench-press-1rm-calculator',
    },
    openGraph: {
        title: 'Bench Press 1RM Calculator | Accurate Chest Strength Estimate',
        description: 'Stop guessing your bench max. Calculate your true 1RM and training percentages accurately.',
        url: 'https://www.onerepmaxcalculator.org/bench-press-1rm-calculator',
        siteName: '1RM Calculator',
        locale: 'en_US',
        type: 'website',
    },
};

export default function BenchPressCalculatorPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-blue-600 selection:text-white overflow-hidden pb-20">
            <ArticleSchema
                title="Bench Press 1RM Calculator | Accurate Chest Strength Estimate"
                description="Calculate your Bench Press One Rep Max safely. Optimized for powerlifting and bodybuilding chest training."
                datePublished="2024-01-01"
            />

            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-900/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 space-y-12">

                <header className="space-y-6 text-center sm:text-left">
                    <div className="inline-flex items-center space-x-2 bg-blue-900/20 border border-blue-800/50 rounded-full px-4 py-1.5 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        <span className="text-sm font-medium text-blue-300">Upper Body King</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                        Bench Press <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">1RM Calculator</span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                        The gold standard for upper body strength. Estimate your Bench Press max without the risk of getting pinned.
                    </p>
                </header>

                {/* Calculator Instance */}
                <div className="my-12">
                    <Calculator title="Bench Press 1RM Calculator" />
                </div>

                <article className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-strong:text-white prose-li:marker:text-blue-500">
                    <h2>Why not just test your 1RM?</h2>
                    <p>
                        The Bench Press is the most popular lift in the gym, but it's also where the most accidents happen. Getting stuck under a max-effort barbell is dangerous without a competent spotter.
                    </p>
                    <p>
                        A <strong>Bench Press 1RM Calculator</strong> lets you:
                    </p>
                    <ul>
                        <li>Project your max strength from a safer 5-rep or 8-rep set.</li>
                        <li>Plan your <strong>Smolov Jr.</strong> or 5/3/1 cycles with precision.</li>
                        <li>Avoid shoulder impingement by limiting testing frequency.</li>
                    </ul>

                    <div className="bg-gray-900/50 border-l-4 border-blue-500 p-6 my-8 rounded-r-xl">
                        <h3 className="mt-0 text-white">Technique Tip: The Arch</h3>
                        <p>
                            A purely flat back is dangerous for your shoulders. A slight arch (retracting your scapula) protects the rotator cuff and reduces the range of motion legally, helping you lift more weight safely.
                        </p>
                        <Link href="/guides/bench-press-1rm-tips">See our full guide on Bench Press Technique &rarr;</Link>
                    </div>

                    <h2>How to Boost Your Bench Press</h2>
                    <p>
                        Stuck at a plateau? Focus on these two areas:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 not-prose my-6">
                        <div className="bg-gray-900/30 p-4 rounded-xl border border-gray-800">
                            <h4 className="text-white font-bold mb-2">Weak off the Chest?</h4>
                            <p className="text-sm text-gray-400">Train **Paused Bench Press**, **Spoto Press**, and **Dumbbell Presses** to build starting power.</p>
                        </div>
                        <div className="bg-gray-900/30 p-4 rounded-xl border border-gray-800">
                            <h4 className="text-white font-bold mb-2">Weak at Lockout?</h4>
                            <p className="text-sm text-gray-400">Your triceps are the bottleneck. Add **Close-Grip Bench**, **Floor Press**, and **Weighted Dips**.</p>
                        </div>
                    </div>

                    <p>
                        Need a structured plan? Our <Link href="/training/hypertrophy">Phase 1: Hypertrophy</Link> guide is great for building the chest and tricep mass needed for a big bench.
                    </p>

                    <Disclaimer />
                </article>
            </div>
        </main>
    );
}
