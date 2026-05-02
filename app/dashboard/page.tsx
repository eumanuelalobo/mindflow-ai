"use client";

import { useState } from 'react';

export default function Dashboard() {
  const [topic, setTopic] = useState('');
  const [explanation, setExplanation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleExplain = async () => {
    if (!topic) return alert("Digite o que você quer aprender!");
    
    setLoading(true);
    setExplanation('');
    
    try {
      // Fazendo a chamada para o seu backend Django
      const res = await fetch('http://127.0.0.1:8000/api/mentor/explain', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          // Aqui vai o JWT que você configurou para autenticação
          'Authorization': `Bearer ${localStorage.getItem('token')}` 
        },
        body: JSON.stringify({ topic }),
      });

      if (!res.ok) throw new Error("Erro na resposta do servidor");

      const data = await res.json();
      setExplanation(data.explanation); // Alinhado com o campo do seu StudyNote
    } catch (error) {
      console.error(error);
      alert("Erro ao falar com o Mentor. O Django está rodando?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-200">
      {/* Sidebar Simples de Histórico */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 p-6 hidden md:block">
        <h2 className="text-blue-400 font-bold mb-6 tracking-widest uppercase text-xs">Histórico</h2>
        <div className="text-slate-500 text-sm italic">
          Suas últimas consultas aparecerão aqui...
        </div>
      </aside>

      {/* Área Principal do Mentor */}
      <main className="flex-1 p-8 md:p-12">
        <header className="max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl font-bold text-white mb-2">Área de Estudos 🎓</h1>
          <p className="text-slate-400">O que você quer que eu explique hoje sobre ADS?</p>
        </header>

        <div className="max-w-3xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl">
          <div className="space-y-4">
            <textarea 
              className="w-full bg-slate-950 border border-slate-700 p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none h-32"
              placeholder="Ex: Explique como funciona o deploy de uma aplicação Python em Docker..."
              onChange={(e) => setTopic(e.target.value)}
            />
            
            <button 
              onClick={handleExplain}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <span className="animate-pulse">Consultando o Gemini...</span>
              ) : (
                "Gerar Explicação Técnica"
              )}
            </button>
          </div>

          {/* Resposta do Mentor */}
          {explanation && (
            <div className="mt-10 p-6 bg-slate-950 rounded-xl border-l-4 border-blue-500 animate-in fade-in slide-in-from-bottom-2">
              <h3 className="text-blue-400 font-bold mb-3">Conceito Explicado:</h3>
              <div className="prose prose-invert max-w-none text-slate-300 whitespace-pre-wrap">
                {explanation}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}