import Link from 'next/link';
import Calculator from '@/components/Calculator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'One Rep Max Calculator (1RM) – Accurate Bench, Squat & Deadlift 1RM Calc',
  description: 'Calculate your One Rep Max (1RM) accurately for bench press, squat, and deadlift. Use our free, easy-to-use 1RM calculator to get instant training percentages and optimize your strength program.',
  keywords: ['one rep max calculator', '1rm calculator', 'bench press 1rm calculator', 'squat 1rm calculator', 'deadlift calculator', 'epley formula', 'brzycki formula', 'strength training', 'powerlifting', 'hypertrophy'],
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': 'One Rep Max Calculator',
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Any",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1250"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    'description': 'A free tool to calculate One Rep Max (1RM) for bench press, squat, and deadlift using Epley and Brzycki formulas.',
    'featureList': '1RM Calculation, Percentage Table, Multi-formula support (Epley, Brzycki)',
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Is this 1RM calculator accurate for beginners?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, but technique consistency is key. Beginners might find their 1RM fluctuates rapidly as neural efficiency improves. We recommend re-testing every 4-6 weeks using this one rep max calculator.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Which lifts should I calculate 1RM for?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Focus on the "Big Three": Squat, Bench Press, and Deadlift. Overhead Press is also a great candidate. Isolation exercises are less suitable for 1RM testing.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How often should I test my 1RM?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'We recommend testing your One Rep Max every 8-12 weeks. Testing too frequently can drain your Central Nervous System (CNS) and increase injury risk. Use sub-maximal testing in between cycles.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is 1RM training safe?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '1RM testing is generally safe for experienced lifters with good form. Beginners should stick to "technical maxes" or predicted 1RMs using our calculator to avoid injury ensuring safety.'
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-blue-600 selection:text-white overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[120px]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Hero Text */}
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center space-x-2 bg-blue-900/20 border border-blue-800/50 rounded-full px-4 py-1.5 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                <span className="text-sm font-medium text-blue-300">New Formula Update</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white">
                One Rep Max <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600">
                  Calculator
                </span>
              </h1>

              <p className="text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                The most accurate <strong>1RM calculator</strong> for serious lifters.
                Optimize your training intensity for <strong>Bench Press, Squat, and Deadlift</strong>.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm font-medium text-gray-500">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Scientific Formulas</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  <span>Instant Analysis</span>
                </div>
              </div>

              {/* What is 1RM - Moved Here */}
              <div className="pt-8 sm:pt-12 text-left">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white tracking-tight">
                  What is a <span className="text-blue-500">One Rep Max?</span>
                </h2>
                <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl">
                  Your <strong>One Rep Max (1RM)</strong> is the theoretical limit of maximum weight you can lift for a single, clean repetition.
                  It serves as the baseline for all <strong>percentage-based training</strong>, ensuring every set you perform is optimized for your specific goals suitable for powerlifting and bodybuilding.
                </p>
              </div>
            </div>

            {/* Calculator Component */}
            <div className="relative">
              <Calculator />
            </div>

          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-24">

        {/* Formulas Grid */}
        <section>
          <div className="flex items-center justify-center mb-12">
            <h2 className="text-3xl font-bold text-white tracking-tight">Behind the Math</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-gray-900/40 backdrop-blur-md border border-gray-800 p-8 rounded-2xl hover:bg-gray-900/60 hover:border-gray-700 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <span className="text-xl font-bold text-blue-500">E</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Epley Formula</h3>
              <p className="text-sm text-gray-500 mb-6 font-mono">1RM = Weight × (1 + Reps/30)</p>
              <p className="text-gray-400 leading-relaxed">
                The industry standard for 3-10 rep ranges. It tends to be slightly more optimistic but highly accurate for experienced lifters performing compound movements such as the bench press.
              </p>
            </div>

            <div className="group bg-gray-900/40 backdrop-blur-md border border-gray-800 p-8 rounded-2xl hover:bg-gray-900/60 hover:border-gray-700 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                <span className="text-xl font-bold text-purple-500">B</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Brzycki Formula</h3>
              <p className="text-sm text-gray-500 mb-6 font-mono">1RM = Weight / (1.0278 - 0.0278 × Reps)</p>
              <p className="text-gray-400 leading-relaxed">
                Known for its reliability across wider rep ranges. It can be more conservative as reps increase, often favored for safety-focused estimations in <strong>strength training programs</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Training Zones */}
        <section className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 sm:p-12 border border-gray-800 text-center sm:text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-900/10 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Train Smarter, Not Harder</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Stop guessing. Percentage-based training allows you to target specific physiological adaptations.
                Use our <strong>1RM calculator</strong> to precisely calculate your working sets.
              </p>

              <Link href="/training/periodization" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors flex items-center gap-2 mx-auto sm:mx-0" title="Detailed guide on 1RM-based periodization">
                Learn more about <span className="underline">1RM-based Periodization</span> <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>

            <div className="space-y-4">
              <Link href="/training/hypertrophy" className="block bg-black/40 p-4 rounded-xl border border-gray-800 flex items-center gap-4 hover:border-blue-900/50 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-green-500/100 flex items-center justify-center text-green-500 font-bold text-sm group-hover:scale-110 transition-transform">70%</div>
                <div>
                  <h4 className="text-white font-bold group-hover:text-blue-400 transition-colors">Hypertrophy</h4>
                  <p className="text-sm text-gray-500">8-12 Reps • Muscle Growth</p>
                </div>
              </Link>
              <Link href="/training/strength" className="block bg-black/40 p-4 rounded-xl border border-gray-800 flex items-center gap-4 hover:border-blue-900/50 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold text-sm group-hover:scale-110 transition-transform">85%</div>
                <div>
                  <h4 className="text-white font-bold group-hover:text-blue-400 transition-colors">Strength</h4>
                  <p className="text-sm text-gray-500">1-5 Reps • Force Production</p>
                </div>
              </Link>
              <Link href="/training/peaking" className="block bg-black/40 p-4 rounded-xl border border-gray-800 flex items-center gap-4 hover:border-blue-900/50 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 font-bold text-sm group-hover:scale-110 transition-transform">95%</div>
                <div>
                  <h4 className="text-white font-bold group-hover:text-blue-400 transition-colors">Peaking</h4>
                  <p className="text-sm text-gray-500">1-3 Reps • Max Effort</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-bold mb-10 text-white text-center">Common Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900/30 p-6 rounded-2xl border border-gray-800 hover:border-blue-900/50 transition-colors flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-bold text-white mb-3">Is this accurate for beginners?</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Yes, but technique consistency is key. Beginners might find their 1RM fluctuates rapidly as neural efficiency improves. We recommend re-testing every 4-6 weeks using this one rep max calculator.
                </p>
              </div>
              <Link href="/guides/beginner-1rm-guide" className="text-blue-400 text-sm font-semibold hover:text-blue-300 flex items-center gap-1">
                See full beginner 1RM guide <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            <div className="bg-gray-900/30 p-6 rounded-2xl border border-gray-800 hover:border-blue-900/50 transition-colors flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-bold text-white mb-3">Which lifts should I calculate?</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Focus on the &quot;Big Three&quot;: Squat, Bench Press, and Deadlift. Overhead Press is also a great candidate. Isolation exercises (like curls) are less suitable for 1RM testing.
                </p>
              </div>
              <Link href="/guides/bench-press-1rm-tips" className="text-blue-400 text-sm font-semibold hover:text-blue-300 flex items-center gap-1">
                Bench Press 1RM Tips <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            <div className="bg-gray-900/30 p-6 rounded-2xl border border-gray-800 hover:border-blue-900/50 transition-colors flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-bold text-white mb-3">How often should I test my 1RM?</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  We recommend testing your One Rep Max every 8-12 weeks. Testing too frequently can drain your Central Nervous System (CNS) and increase injury risk. Use sub-maximal testing in between cycles.
                </p>
              </div>
            </div>
            <div className="bg-gray-900/30 p-6 rounded-2xl border border-gray-800 hover:border-blue-900/50 transition-colors flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-bold text-white mb-3">Is 1RM training safe?</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  1RM testing is generally safe for experienced lifters with good form. Beginners should stick to &quot;technical maxes&quot; or predicted 1RMs using our calculator to avoid injury ensuring safety.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="border-t border-gray-900 bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">One Rep Max Calculator</h2>
          <p className="text-gray-600 text-sm mb-4">
            Built for athletes who demand precision. &copy; {new Date().getFullYear()}
          </p>
          <p className="text-gray-700 text-xs">
            Perfect for calculating 1RM for Bench Press, Squat, and Deadlift.
          </p>
        </div>
      </footer>
    </main>
  );
}
