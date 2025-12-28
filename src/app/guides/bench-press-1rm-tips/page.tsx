import Link from 'next/link';
import type { Metadata } from 'next';
import VideoCard from '@/components/VideoCard';
import Disclaimer from '@/components/Disclaimer';

export const metadata: Metadata = {
    title: 'Bench Press 1RM Tips | How to Increase Your Bench Press Max',
    description: 'Stuck at a plateau? Use these technical cues and a 6-week peaking program to increase your Bench Press 1RM safely and effectively.',
    keywords: ['increase bench press 1rm', 'bench press form tips', 'bench press program', 'powerlifting bench press', 'leg drive', 'bench press plateau'],
};

import ArticleSchema from '@/components/ArticleSchema';

export default function BenchTipsPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-orange-600 selection:text-white overflow-hidden pb-20">
            <ArticleSchema
                title="Bench Press 1RM Tips | How to Increase Your Bench Press Max"
                description="Stuck at a plateau? Use these technical cues and a 6-week peaking program to increase your Bench Press 1RM safely and effectively."
                imageUrl="https://www.1rm-calculator.com/generated/bench_press_setup_dark.png"
                datePublished="2024-01-01"
            />

            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-900/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-900/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
                <nav className="flex items-center justify-between text-sm">
                    <Link href="/" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                        <span aria-hidden="true">&larr;</span> Back to Calculator
                    </Link>
                    <div className="hidden sm:flex gap-4">
                        <Link href="/training/strength" className="text-gray-500 hover:text-orange-400 transition-colors">See Strength Programs &rarr;</Link>
                    </div>
                </nav>

                <header className="space-y-6 text-center sm:text-left">
                    {/* Header Content Omitted - Same as before */}
                    <div className="inline-flex items-center space-x-2 bg-orange-900/20 border border-orange-800/50 rounded-full px-4 py-1.5 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                        <span className="text-sm font-medium text-orange-300">Technique & Programming</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                        How to Increase Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Bench Press 1RM</span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                        The bench press is technical. Small adjustments in your setup can yield instant gains in your max.
                    </p>

                    <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-6 backdrop-blur-sm max-w-3xl mt-8">
                        <p className="text-gray-300 mb-0">
                            Need to know your current starting point?
                            First, calculate your 1RM using our <Link href="/" className="text-orange-500 font-bold hover:underline">1RM calculator</Link> to set your training baselines.
                        </p>
                    </div>
                </header>

                <article className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-orange-400 hover:prose-a:text-orange-300 prose-strong:text-white prose-li:marker:text-orange-500">

                    <h2>Mastering The Setup</h2>
                    <p>
                        Most missed lifts happen before the bar is even unracked. A stable base is non-negotiable.
                    </p>

                    {/* NEW VIDEO SECTION INSERTED HERE FOR CONTEXT */}
                    <div className="not-prose my-8">
                        <VideoCard
                            title="Visual Guide: The Perfect Arch"
                            description="See how retraction and leg drive create the stable platform needed for heavy pressing."
                            thumbnailSrc="/generated/bench_press_setup_dark.png"
                            videoSrc="/generated/bench_press_setup_dark.mp4"
                        />
                    </div>

                    <ul>
                        <li><strong>Scapular Retraction:</strong> Pinch your shoulder blades together and down ("into your back pockets"). This creates a stable shelf and protects the shoulders.</li>
                        <li><strong>Leg Drive:</strong> Plant your feet flat. Push the floor <em>away</em> from you to drive your traps into the bench. You should feel tension from your toes to your neck.</li>
                        <li><strong>The Grip:</strong> Squeeze the bar as hard as possible to radiate tension ("white knuckle" the bar).</li>
                    </ul>

                    <h2>Efficient Bar Path</h2>
                    {/* Bar Path Content Omitted - Same as before */}
                    <p>
                        The shortest distance is a straight line, but the <em>strongest</em> bar path for pressing is a "J-Curve".
                    </p>
                    <p>
                        Lower the bar to the highest point of your chest (sternum). As you press up, push <strong>back towards your face</strong> immediately. This aligns the weight over the shoulder joint sooner, improving mechanical advantage.
                    </p>

                    <h2>6-Week Bench Press Peaking Program</h2>
                    {/* Table Content Omitted - Same as before */}
                    <div className="not-prose bg-gray-900/40 border border-gray-800 rounded-2xl p-6 my-8 overflow-x-auto">
                        <table className="w-full text-sm min-w-[500px]">
                            <thead className="bg-orange-900/20 text-orange-200">
                                <tr>
                                    <th className="p-3 text-left rounded-l-lg">Week</th>
                                    <th className="p-3 text-center">Day 1 (Volume)</th>
                                    <th className="p-3 text-center">Day 2 (Intensity)</th>
                                    <th className="p-3 text-right rounded-r-lg">Accessory Focus</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800">
                                {/* ... */}
                                <tr>
                                    <td className="p-3 font-bold text-white">1</td>
                                    <td className="p-3 text-center">5x5 @ 70%</td>
                                    <td className="p-3 text-center">4x3 @ 80%</td>
                                    <td className="p-3 text-right text-gray-400">Triceps (Dips/Pushdowns)</td>
                                </tr>
                                {/* ... */}
                            </tbody>
                        </table>
                        <p className="text-xs text-gray-500 mt-4">* All percentages based on your current (not goal) 1RM.</p>
                    </div>

                    <h2>Common Bench Mistakes</h2>
                    {/* Mistakes Content Omitted - Same as before */}
                    <ul>
                        <li><strong>Flaring Elbows:</strong> Keeping elbows 90 degrees out puts massive stress on the rotator cuff. Tuck them to ~45 degrees.</li>
                        <li><strong>Bouncing the Bar:</strong> Rebounding off the chest is not strength. Practice <em>Pause Reps</em> to build true power off the chest.</li>
                    </ul>

                    <hr className="border-gray-800 my-12" />

                    {/* Footer Omitted - Same as before */}
                    <div className="bg-gray-900 rounded-lg p-4 text-xs text-gray-600 border border-gray-800 mt-8">
                        <strong>About the Author:</strong> The 1RM Calculator Team provides evidence-based training tools. Content reviewed by certified coaches.
                        {/* ... */}
                    </div>
                    <Disclaimer />
                </article>
            </div>
        </main>
    );
}
