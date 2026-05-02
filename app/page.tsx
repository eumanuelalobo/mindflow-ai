"use client";
import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-blue-400">MindFlow AI</div>
        <Link href="/dashboard" className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-full font-semibold transition">
          Acessar Plataforma
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-20 px-4">
        <h1 className="text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
          Domine ADS com <br/> Inteligência Artificial
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mb-10">
          O mentor acadêmico que entende suas dúvidas de Backend, Frontend e Infraestrutura. 
          Explicações personalizadas com Gemini 2.5 Flash.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full mt-10">
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
            <h3 className="text-blue-400 font-bold mb-2">Mentor 24/7</h3>
            <p className="text-sm text-slate-500">Tire suas dúvidas técnicas a qualquer hora do dia ou da noite.</p>
          </div>
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
            <h3 className="text-blue-400 font-bold mb-2">Foco em ADS</h3>
            <p className="text-sm text-slate-500">Conteúdo direcionado para Análise e Desenvolvimento de Sistemas.</p>
          </div>
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
            <h3 className="text-blue-400 font-bold mb-2">Offline-First</h3>
            <p className="text-sm text-slate-500">Sincronize seus estudos e revise no app Flutter mesmo sem internet.</p>
          </div>
        </div>
      </section>
    </main>
  );
}