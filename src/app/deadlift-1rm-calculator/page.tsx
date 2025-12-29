import Link from 'next/link';
import type { Metadata } from 'next';
import Calculator from '@/components/Calculator';
import ArticleSchema from '@/components/ArticleSchema';
import Disclaimer from '@/components/Disclaimer';

export const metadata: Metadata = {
    title: 'Deadlift 1RM Calculator | Calculate Your Max Pull Safely',
    description: 'Specialized Deadlift 1RM calculator. Estimate your one rep max for Conventional and Sumo deadlifts without testing failure. Includes deadlift-specific strength standards.',
    keywords: ['deadlift 1rm calculator', 'calculate deadlift max', 'sumo deadlift calculator', 'conventional deadlift 1rm', 'deadlift strength standards', 'powerlifting deadlift'],
    alternates: {
        canonical: 'https://www.onerepmaxcalculator.org/deadlift-1rm-calculator',
    },
    openGraph: {
        title: 'Deadlift 1RM Calculator | Calculate Your Max Pull Safely',
        description: 'Accurately estimate your Deadlift 1RM. Perfect for Conventional and Sumo pullers.',
        url: 'https://www.onerepmaxcalculator.org/deadlift-1rm-calculator',
        siteName: '1RM Calculator',
        locale: 'en_US',
        type: 'website',
    },
};

export default function DeadliftCalculatorPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-purple-600 selection:text-white overflow-hidden pb-20">
            <ArticleSchema
                title="Deadlift 1RM Calculator | Calculate Your Max Pull Safely"
                description="Specialized Deadlift 1RM calculator. Estimate your one rep max for Conventional and Sumo deadlifts without testing failure."
                datePublished="2024-01-01"
            />

            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 space-y-12">

                <header className="space-y-6 text-center sm:text-left">
                    <div className="inline-flex items-center space-x-2 bg-purple-900/20 border border-purple-800/50 rounded-full px-4 py-1.5 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                        <span className="text-sm font-medium text-purple-300">Deadlift Specialist</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                        Deadlift <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">1RM Calculator</span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                        Stop guessing your pull. Estimate your Deadlift One Rep Max precisely for percentage-based training.
                    </p>
                </header>

                {/* Calculator Instance */}
                <div className="my-12">
                    <Calculator title="Deadlift 1RM Calculator" />
                </div>

                <article className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-purple-400 hover:prose-a:text-purple-300 prose-strong:text-white prose-li:marker:text-purple-500">
                    <h2>Why Use a Deadlift-Specific 1RM Calculator?</h2>
                    <p>
                        The <strong>Deadlift</strong> is notoriously taxing on the Central Nervous System (CNS). Unlike the Bench Press, testing a "True 1RM" on Deadlift can take weeks to recover from.
                    </p>
                    <p>
                        Using a <strong>Deadlift 1RM Calculator</strong> allows you to:
                    </p>
                    <ul>
                        <li>Estimate your max using safer, sub-maximal loads (e.g., a 3-rep or 5-rep max).</li>
                        <li>Plan your training cycles without "burning out" on heavy singles.</li>
                        <li>Switch between <strong>Conventional</strong> and <strong>Sumo</strong> stances without risking injury from form breakdown at 100% intensity.</li>
                    </ul>

                    <div className="bg-gray-900/50 border-l-4 border-purple-500 p-6 my-8 rounded-r-xl">
                        <h3 className="mt-0 text-white">Pro Tip: Deadlift Formulas</h3>
                        <p>
                            For Deadlifts, the <strong>Epley Formula</strong> (default in our calculator) is generally very accurate for reps below 5.
                            If you are doing high-rep deadlifts (Touch-and-Go), the estimate may be inflated. We recommend performing dead reps (full stop) for the most accurate calculation.
                        </p>
                    </div>

                    <h2>How to Increase Your Deadlift 1RM</h2>
                    <p>
                        Once you have your number, focus on these accessories to drive it up:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 not-prose my-6">
                        <div className="bg-gray-900/30 p-4 rounded-xl border border-gray-800">
                            <h4 className="text-white font-bold mb-2">Weak off the Floor?</h4>
                            <p className="text-sm text-gray-400">Incorporated **Deficit Deadlifts** (1-2 inches) and **Paused Deadlifts** (pause at shin).</p>
                        </div>
                        <div className="bg-gray-900/30 p-4 rounded-xl border border-gray-800">
                            <h4 className="text-white font-bold mb-2">Weak at Lockout?</h4>
                            <p className="text-sm text-gray-400">Add **Block Pulls**, **Rack Pulls**, and **Glute Bridges** to strengthen the hips and upper back.</p>
                        </div>
                    </div>

                    <p>
                        Ready to build a program? Check out our <Link href="/training/strength">Strength Training Phase</Link> which is perfect for increasing your Deadlift.
                    </p>

                    <Disclaimer />
                </article>
            </div>
        </main>
    );
}
