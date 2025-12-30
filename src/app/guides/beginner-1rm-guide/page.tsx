import Link from 'next/link';
import type { Metadata } from 'next';
import Disclaimer from '@/components/Disclaimer';

export const metadata: Metadata = {
    title: 'Beginner’s Guide to 1RM – Safe One Rep Max Testing for New Lifters',
    description: 'New to lifting? Learn strictly safe methods to estimate your 1RM, avoid injury, and start a 1RM-based beginner program.',
    keywords: ['beginner 1rm guide', 'how to test 1rm safely', 'estimate 1rm', 'beginner strength program', '1rm calculator guide'],
};

import ArticleSchema from '@/components/ArticleSchema';

export default function BeginnerGuidePage() {
    return (
        <main className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-blue-600 selection:text-white overflow-hidden pb-20">
            <ArticleSchema
                title="Beginner’s Guide to 1RM – Safe One Rep Max Testing for New Lifters"
                description="New to lifting? Don't test your 1RM yet. Learn how to safely estimate your max using the 3-5 rep range method and build a solid foundation."
                datePublished="2024-01-01"
            />

            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal-900/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 space-y-12">
                <nav className="flex items-center justify-between text-sm">
                    <Link href="/" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                        <span aria-hidden="true">&larr;</span> Back to Calculator
                    </Link>
                    <div className="hidden sm:flex gap-4">
                        <Link href="/guides/bench-press-1rm-tips" className="text-gray-500 hover:text-blue-400 transition-colors">Next: Bench Press Tips &rarr;</Link>
                    </div>
                </nav>

                <header className="space-y-6 text-center sm:text-left">
                    <div className="inline-flex items-center space-x-2 bg-blue-900/20 border border-blue-800/50 rounded-full px-4 py-1.5 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        <span className="text-sm font-medium text-blue-300">New Lifter's Handbook</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                        Beginner’s Guide to <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">1RM Testing</span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                        Testing your limits is exciting, but safety comes first. Learn how to estimate your strength without risking injury.
                    </p>

                    <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-6 backdrop-blur-sm max-w-3xl">
                        <p className="text-gray-300 mb-4">
                            <strong>Pro Tip:</strong> You don't need to lift your absolute max to know your 1RM.
                            First, calculate your 1RM using our <Link href="/" className="text-blue-400 font-bold hover:underline">1RM calculator</Link> by testing a safe 3RM or 5RM.
                        </p>
                    </div>
                </header>

                <article className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-strong:text-white prose-li:marker:text-blue-500">

                    <h2>What is a 1RM and Do You Need It?</h2>
                    <p>
                        A <strong>One Rep Max (1RM)</strong> is the maximum weight you can lift for a single, full-range repetition with proper form.
                        For beginners (less than 6 months of training), finding a specific "True 1RM" is often unstable because your nervous system is still learning the movement patterns.
                    </p>
                    <p>
                        Instead of testing a grindy, dangerous single rep, we recommend finding a <strong>Technical Max</strong> or an <strong>Estimated 1RM</strong>.
                    </p>

                    <h2>Step-by-Step: How to Estimate Your 1RM</h2>
                    <ol>
                        <li><strong>Warm-up Thoroughly:</strong> Do 5-10 minutes of light cardio followed by dynamic stretching.</li>
                        <li><strong>Ramp Up Sets:</strong>
                            <ul>
                                <li>Empty Bar x 10 reps</li>
                                <li>50% of estimated usage x 5 reps</li>
                                <li>70% of estimated usage x 3 reps</li>
                            </ul>
                        </li>
                        <li><strong>The Test Set:</strong> Pick a weight you think you can lift for <strong>3 to 5 reps</strong>. Perform the set until your form starts to break down (RPE 9). Do <strong>not</strong> go to absolute muscular failure.</li>
                        <li><strong>Calculate:</strong> Take that weight and rep count, put it into our <Link href="/">1RM Calculator</Link>, and let the math give you your projected max.</li>
                    </ol>

                    <div className="bg-red-900/20 border-l-4 border-red-500 p-6 my-8">
                        <h3 className="text-red-400 mt-0">⚠️ Safety First</h3>
                        <ul className="mb-0">
                            <li><strong>Always use spotters</strong> for Bench Press and Squat.</li>
                            <li><strong>Use safety pins</strong> in the rack set to an appropriate height.</li>
                            <li>If your form breaks (back rounding, uneven pressing), the rep <strong>does not count</strong>.</li>
                        </ul>
                    </div>

                    <h2>Simple Beginner Strength Routine</h2>
                    <p>
                        Once you have your estimated 1RM, use this 3-day full-body split to build a solid foundation.
                    </p>

                    <div className="not-prose bg-gray-900/40 border border-gray-800 rounded-2xl p-6 my-8">
                        <h3 className="text-xl font-bold text-white mb-4">The "Linear Foundation" Plan</h3>
                        <p className="text-gray-400 text-sm mb-6">Focus: Mastering technique while slowly increasing weight.</p>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <h4 className="text-teal-400 font-bold mb-2">Workout A</h4>
                                <ul className="text-sm space-y-2 text-gray-300">
                                    <li>squat: 3x5 @ 70% 1RM</li>
                                    <li>Bench Press: 3x5 @ 70% 1RM</li>
                                    <li>Rows: 3x8 (RPE 8)</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-teal-400 font-bold mb-2">Workout B</h4>
                                <ul className="text-sm space-y-2 text-gray-300">
                                    <li>Deadlift: 3x5 @ 70% 1RM</li>
                                    <li>Overhead Press: 3x5 @ 70% 1RM</li>
                                    <li>Pull-ups: 3xAMRAP</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-teal-400 font-bold mb-2">Progression</h4>
                                <p className="text-xs text-gray-500">
                                    Every week, add 2.5kg (5lbs) to the bar. Recalculate your 1RM every 4-6 weeks.
                                </p>
                            </div>
                        </div>
                    </div>

                    <h2>Frequently Asked Questions</h2>
                    <details className="group bg-gray-900/30 p-4 rounded-lg border border-gray-800 cursor-pointer mb-4">
                        <summary className="font-bold text-white list-none flex justify-between items-center group-hover:text-blue-400 transition-colors">
                            What if I fail a rep?
                            <span className="text-blue-500 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="mt-4 text-gray-400 text-sm">
                            It happens. If you have safeties set, lower the bar gently onto them. If benching, have your spotter help. Rest 5 minutes, lower the weight by 5-10%, and try again or call it a day.
                        </p>
                    </details>

                    <hr className="border-gray-800 my-12" />

                    <div className="bg-gray-900 rounded-lg p-4 text-xs text-gray-600 border border-gray-800 mt-8">
                        <strong>About the Author:</strong> The 1RM Calculator Team provides evidence-based training tools. Content reviewed by certified coaches.
                    </div>

                    <Disclaimer />
                </article>
            </div>
        </main>
    );
}
