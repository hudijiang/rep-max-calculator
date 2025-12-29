import Link from 'next/link';
import type { Metadata } from 'next';
import Calculator from '@/components/Calculator';
import ArticleSchema from '@/components/ArticleSchema';
import Disclaimer from '@/components/Disclaimer';

export const metadata: Metadata = {
    title: 'Squat 1RM Calculator | Leg Strength & Max Estimate',
    description: 'Accurate Squat 1RM calculator for High Bar and Low Bar squats. Determine your leg strength potential and planned working sets safely.',
    keywords: ['squat 1rm calculator', 'squat max calculator', 'leg day calculator', 'back squat 1rm', 'powerlifting squat', 'leg strength standards'],
    alternates: {
        canonical: 'https://www.onerepmaxcalculator.org/squat-1rm-calculator',
    },
    openGraph: {
        title: 'Squat 1RM Calculator | Leg Strength & Max Estimate',
        description: 'Calculate your Squat 1RM safely. Perfect for planning leg day intensity and powerlifting peaks.',
        url: 'https://www.onerepmaxcalculator.org/squat-1rm-calculator',
        siteName: '1RM Calculator',
        locale: 'en_US',
        type: 'website',
    },
};

export default function SquatCalculatorPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-green-600 selection:text-white overflow-hidden pb-20">
            <ArticleSchema
                title="Squat 1RM Calculator | Leg Strength & Max Estimate"
                description="Accurate Squat 1RM calculator for High Bar and Low Bar squats. Determine your leg strength potential and planned working sets safely."
                datePublished="2024-01-01"
            />

            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-900/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 space-y-12">

                <header className="space-y-6 text-center sm:text-left">
                    <div className="inline-flex items-center space-x-2 bg-green-900/20 border border-green-800/50 rounded-full px-4 py-1.5 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-sm font-medium text-green-300">The King of Exercises</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                        Squat <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">1RM Calculator</span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                        Never miss a rep in the hole again. Calculate your Squat max accurately to dominate leg day.
                    </p>
                </header>

                {/* Calculator Instance */}
                <div className="my-12">
                    <Calculator title="Squat 1RM Calculator" />
                </div>

                <article className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-green-400 hover:prose-a:text-green-300 prose-strong:text-white prose-li:marker:text-green-500">
                    <h2>The Importance of Squat Calculations</h2>
                    <p>
                        The Squat is a complex movement that involves the entire posterior chain. Testing a true 1RM requires perfect form and neural readiness.
                    </p>
                    <p>
                        Using a <strong>Squat 1RM Calculator</strong> allows you to:
                    </p>
                    <ul>
                        <li>Estimate performance for both <strong>High Bar</strong> (Olympic) and <strong>Low Bar</strong> (Powerlifting) squats.</li>
                        <li>Calculate volume loads for programs like <strong>Smolov</strong> or <strong>Texas Method</strong>.</li>
                        <li>Determine safely if you are ready to attempt a new PR (Personal Record).</li>
                    </ul>

                    <div className="bg-gray-900/50 border-l-4 border-green-500 p-6 my-8 rounded-r-xl">
                        <h3 className="mt-0 text-white">Depth Check ✅</h3>
                        <p>
                            A partial squat is not a full rep. For accurate 1RM calculations, ensure you are hitting at least parallel (hight joint below knee) on your test reps. Half-reps will artificially inflate your number and lead to injury at heavier weights.
                        </p>
                    </div>

                    <h2>High Bar vs. Low Bar?</h2>
                    <div className="grid md:grid-cols-2 gap-6 not-prose my-6">
                        <div className="bg-gray-900/30 p-4 rounded-xl border border-gray-800">
                            <h4 className="text-white font-bold mb-2">High Bar</h4>
                            <p className="text-sm text-gray-400">Rest the bar on your traps. Torso stays more upright. Focuses more on **Quads**. Great for general athleticism.</p>
                        </div>
                        <div className="bg-gray-900/30 p-4 rounded-xl border border-gray-800">
                            <h4 className="text-white font-bold mb-2">Low Bar</h4>
                            <p className="text-sm text-gray-400">Result the bar on your rear delts. More forward lean. Focuses more on **Hips and Glutes**. Usually allows for 5-10% more weight.</p>
                        </div>
                    </div>

                    <p>
                        Want to build massive legs? Start with our <Link href="/training/periodization">Periodization Guide</Link> to structure your leg training blocks.
                    </p>

                    <Disclaimer />
                </article>
            </div>
        </main>
    );
}
