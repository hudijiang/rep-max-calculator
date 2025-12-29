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

  const result = React.useMemo(() => {
    if (weight === '' || reps === '' || weight <= 0 || reps <= 0) {
      return null;
    }

    const w = Number(weight);
    const r = Number(reps);
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

    return { oneRepMax: oneRm, percentages };
  }, [weight, reps, formula]);

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
              onClick={() => setUnit('kg')}
              className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all duration-300 ${unit === 'kg'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-gray-400 hover:text-white'
                }`}
            >
              KG
            </button>
            <button
              onClick={() => setUnit('lbs')}
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
                  onChange={(e) => setWeight(e.target.value === '' ? '' : Number(e.target.value))}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all font-mono text-lg"
                  placeholder="0"
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
                  onChange={(e) => setReps(e.target.value === '' ? '' : Number(e.target.value))}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all font-mono text-lg"
                  placeholder="0"
                  aria-label="Number of Repetitions"
                />
              </div>
            </div>
          </div>

          {/* Formula Selection */}
          <div role="radiogroup" aria-labelledby="formula-label">
            <label id="formula-label" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Calculation Formula
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                role="radio"
                aria-checked={formula === 'epley'}
                onClick={() => setFormula('epley')}
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
                onClick={() => setFormula('brzycki')}
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
        </div>

        {/* Results Display */}
        {/* Results Display */}
        {result && (
          <div className="mt-8 animate-fade-in space-y-6 border-t border-gray-800 pt-8" aria-live="polite">
            <div className="relative group cursor-default">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-lg opacity-20 group-hover:opacity-40 blur transition-opacity"></div>
              <div className="relative text-center">
                <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em] mb-2">Estimated 1RM</p>
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
