import React from 'react';

const Disclaimer = () => {
    return (
        <div className="mt-16 bg-red-900/10 border border-red-900/30 rounded-xl p-6 backdrop-blur-sm">
            <h4 className="text-red-400 font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path transform="scale(0.85) translate(2,2)" fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Important Medical Disclaimer
            </h4>
            <p className="text-xs text-gray-500 leading-relaxed">
                The training programs, techniques, and nutritional information provided on this website are for educational and informational purposes only.
                They do <strong>not</strong> constitute medical advice or professional training instruction.
                <br /><br />
                Resistance training involves inherent risks of injury. You should consult with a qualified healthcare professional or physician before starting any new exercise program,
                especially if you have a history of heart disease, high blood pressure, or other medical conditions.
                By using this information, you agree that the authors and website owners are not liable for any injuries, damages, or losses sustained in connection with the use of this content.
                Always listen to your body and stop immediately if you experience pain, dizziness, or shortness of breath.
            </p>
        </div>
    );
};

export default Disclaimer;
