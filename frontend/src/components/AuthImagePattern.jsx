import React from 'react'

const AuthImagePattern = ({ title, subtitle }) => {
    return (
        <div className="hidden lg:flex items-center justify-center bg-base-200 p-12 h-screen">
            <div className="max-w-80 text-center mt-14">
                <div className="grid grid-cols-3 gap-3 mb-8">
                    {[...Array(9)].map((_, i) => (
                        <div key={i} className={`aspect-square size-25 rounded-2xl bg-slate-500/40 ${i % 2 === 0 ? "animate-pulse" : ""}`}/>
                    ))}
                </div>
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <p className="text-base-content/60">{subtitle}</p>
            </div>
        </div>
    );
};

export default AuthImagePattern;