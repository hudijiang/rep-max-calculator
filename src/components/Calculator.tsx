'use client';

import React, { useState } from 'react';

type Unit = 'kg' | 'lbs';
type Formula = 'epley' | 'brzycki';

interface OneRepMaxResult {
  oneRepMax: number;
  percentages: { percentage: number; weight: number }[];
}

interface CalculatorProps {
  title?: string;
}

const Calculator: React.FC<CalculatorProps> = ({ title = '1RM Calculator' }) => {
  const [weight, setWeight] = useState<number | ''>('');
  const [reps, setReps] = useState<number | ''>('');
  const [unit, setUnit] = useState<Unit>('kg');
  const [formula, setFormula] = useState<Formula>('epley');

  const [result, setResult] = useState<OneRepMaxResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Constants
  const MAX_WEIGHT_KG = 600;
  const MAX_WEIGHT_LBS = 1300;
  const MAX_REPS = 30;

  const handleCalculate = () => {
    setError(null);
    setCopied(false);

    // 1. Basic Validation
    if (weight === '' || reps === '') {
      setError('Please enter both weight and reps.');
      return;
    }

    const w = Number(weight);
    const r = Number(reps);

    if (w <= 0 || r <= 0) {
      setError('Weight and reps must be greater than zero.');
      return;
    }

    // 2. Logic Validation
    const maxW = unit === 'kg' ? MAX_WEIGHT_KG : MAX_WEIGHT_LBS;
    if (w > maxW) {
      setError(`Whoa there, Hercules! Weight limit is ${maxW}${unit}.`);
      return;
    }

    if (r > MAX_REPS) {
      setError(`Max reps limited to ${MAX_REPS} for 1RM accuracy.`);
      return;
    }

    // 3. Calculation
    let oneRm = 0;
    if (formula === 'epley') {
      oneRm = w * (1 + r / 30);
    } else if (formula === 'brzycki') {
      oneRm = w / (1.0278 - 0.0278 * r);
    }

    oneRm = Math.round(oneRm * 10) / 10;

    const percentages = [95, 90, 85, 80, 75, 70, 65, 60, 55, 50].map((p) => ({
      percentage: p,
      weight: Math.round((oneRm * (p / 100)) * 10) / 10,
    }));

    setResult({ oneRepMax: oneRm, percentages });
  };

  const handleCopy = () => {
    if (!result) return;

    const lines = [
      `🏋️ My 1RM Prediction: ${result.oneRepMax} ${unit}`,
      `Formula: ${formula === 'epley' ? 'Epley' : 'Brzycki'}`,
      '',
      'Training Logic:',
      ...result.percentages.slice(0, 5).map(row => `${row.percentage}%: ${row.weight} ${unit}`),
      '',
      'Calculated via OneRepMaxCalculator.org'
    ];

    navigator.clipboard.writeText(lines.join('\n')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 animate-pulse"></div>

      <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 p-6 sm:p-8 rounded-2xl shadow-2xl transition-all duration-500 ease-in-out">
        <h2 className="text-3xl font-bold mb-8 text-center text-white tracking-tight">{title}</h2>

        <div className="space-y-6">
          {/* Unit Switcher */}
          <div className="p-1 bg-gray-900/50 rounded-lg flex border border-white/5">
            <button
              onClick={() => { setUnit('kg'); setResult(null); }}
              className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all duration-300 ${unit === 'kg'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-gray-400 hover:text-white'
                }`}
            >
              KG
            </button>
            <button
              onClick={() => { setUnit('lbs'); setResult(null); }}
              className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all duration-300 ${unit === 'lbs'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-gray-400 hover:text-white'
                }`}
            >
              LBS
            </button>
          </div>

          {/* Input Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div className="group">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Weight ({unit})
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => {
                    setWeight(e.target.value === '' ? '' : Number(e.target.value));
                    setError(null);
                  }}
                  onKeyDown={(e) => e.key === 'Enter' && handleCalculate()}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all font-mono text-lg"
                  placeholder="100"
                  aria-label="Weight in selected unit"
                />
              </div>
            </div>
            <div className="group">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Reps
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={reps}
                  onChange={(e) => {
                    setReps(e.target.value === '' ? '' : Number(e.target.value));
                    setError(null);
                  }}
                  onKeyDown={(e) => e.key === 'Enter' && handleCalculate()}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all font-mono text-lg"
                  placeholder="5"
                  aria-label="Number of Repetitions"
                />
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-red-400 text-sm text-center font-medium bg-red-900/10 border border-red-900/30 p-2 rounded-lg animate-fade-in">
              {error}
            </div>
          )}

          {/* Formula Selection */}
          <div role="radiogroup" aria-labelledby="formula-label">
            <label id="formula-label" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Calculation Formula
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                role="radio"
                aria-checked={formula === 'epley'}
                onClick={() => { setFormula('epley'); }}
                className={`relative px-4 py-3 rounded-xl border text-left transition-all duration-200 group ${formula === 'epley'
                  ? 'border-blue-500/50 bg-blue-500/10'
                  : 'border-gray-800 bg-gray-900/30 hover:bg-gray-800'
                  }`}
              >
                <div className={`text-sm font-semibold mb-1 ${formula === 'epley' ? 'text-blue-400' : 'text-gray-300 group-hover:text-white'}`}>Epley</div>
                <div className="text-[10px] text-gray-500">Standard / accurate</div>
                {formula === 'epley' && <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>}
              </button>

              <button
                role="radio"
                aria-checked={formula === 'brzycki'}
                onClick={() => { setFormula('brzycki'); }}
                className={`relative px-4 py-3 rounded-xl border text-left transition-all duration-200 group ${formula === 'brzycki'
                  ? 'border-blue-500/50 bg-blue-500/10'
                  : 'border-gray-800 bg-gray-900/30 hover:bg-gray-800'
                  }`}
              >
                <div className={`text-sm font-semibold mb-1 ${formula === 'brzycki' ? 'text-blue-400' : 'text-gray-300 group-hover:text-white'}`}>Brzycki</div>
                <div className="text-[10px] text-gray-500">For variable reps</div>
                {formula === 'brzycki' && <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>}
              </button>
            </div>
          </div>

          {/* Calculate Button */}
          <button
            onClick={handleCalculate}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-900/20 active:scale-[0.98] transition-all duration-200 text-lg group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="relative flex items-center justify-center gap-2">
              Calculate 1RM
              <svg className="w-5 h-5 text-blue-200 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
          </button>
        </div>

        {/* Results Display */}
        {result && (
          <div className="mt-8 animate-fade-in space-y-6 border-t border-gray-800 pt-8" aria-live="polite">
            <div className="relative group cursor-default">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-lg opacity-20 group-hover:opacity-40 blur transition-opacity"></div>
              <div className="relative text-center">
                <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em] mb-2">Estimated 1RM ({formula === 'epley' ? 'Epley' : 'Brzycki'})</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-gray-200 tracking-tighter filter drop-shadow-sm">
                    {result.oneRepMax}
                  </span>
                  <span className="text-2xl text-blue-500 font-bold">{unit}</span>
                </div>
              </div>
            </div>

            {/* Compact Percentage Table */}
            <div
              className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
              role="table"
              aria-label="1RM Percentage Table"
            >
              <div className="grid grid-cols-3 bg-gray-800/50 border-b border-gray-800" role="rowheader">
                <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase text-center" role="columnheader">Intensity</div>
                <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase text-center" role="columnheader">Weight</div>
                <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase text-center" role="columnheader">Reps</div>
              </div>
              <div className="">
                {result.percentages.map((row) => (
                  <div key={row.percentage} className="grid grid-cols-3 border-b border-gray-800/50 last:border-0 hover:bg-gray-800/30 transition-colors" role="row">
                    <div className="px-4 py-3 text-sm font-medium text-blue-400 text-center" role="cell">{row.percentage}%</div>
                    <div className="px-4 py-3 text-sm font-bold text-white text-center" role="cell">{row.weight}</div>
                    <div className="px-4 py-3 text-sm text-gray-500 text-center" role="cell">
                      {row.percentage === 100 ? '1' :
                        row.percentage >= 95 ? '2' :
                          row.percentage >= 90 ? '4' :
                            row.percentage >= 85 ? '6' :
                              row.percentage >= 80 ? '8' :
                                row.percentage >= 75 ? '10' :
                                  row.percentage >= 70 ? '12' :
                                    row.percentage >= 65 ? '15' :
                                      row.percentage >= 60 ? '20' :
                                        row.percentage >= 55 ? '25' :
                                          '30+'}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Copy Result Button */}
            <button
              onClick={handleCopy}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-700 bg-gray-900/50 text-gray-300 text-sm font-medium hover:bg-gray-800 hover:text-white hover:border-gray-600 transition-all"
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span className="text-green-500">Copied results!</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                  Copy Table & Stats
                </>
              )}
            </button>

          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
