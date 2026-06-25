import { useState } from "react";
import { 
  Sparkles, 
  Layout, 
  SquareTerminal, 
  Rocket, 
  DollarSign, 
  Copy, 
  Lock, 
  Palette, 
  Zap, 
  Heart 
} from 'lucide-react';

function App() {
  const [prompt, setPrompt] = useState("");
  const [ui, setUi] = useState("");

  const generateUI = async () => {
    if (!prompt) {
      alert("Please enter something");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      setUi(data.ui);

    } catch (error) {
      console.error(error);
      alert("Something went wrong. Check backend.");
    }
  };

  const copyToClipboard = () => {
    if (!ui) return;
    navigator.clipboard.writeText(ui);
    alert("Code copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-[#07091e] bg-gradient-to-b from-[#0a0d2d] to-[#050614] text-gray-200 px-4 py-12 flex flex-col items-center justify-between" style={{ fontFamily: "'Inter', sans-serif" }}>
      
      {/* --- HEADER SECTION --- */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 flex items-center justify-center gap-3">
          <Sparkles className="text-blue-400 w-8 h-8 fill-blue-400 animate-pulse" />
          AI UI Generator
        </h1>
        <p className="text-gray-400 mt-3 text-lg">
          Describe your idea and let AI create a beautiful UI for you
        </p>
      </div>

      {/* --- GENERATOR INPUT CARD --- */}
      <div className="w-full max-w-5xl bg-[#101435]/60 border border-[#1e255a] rounded-2xl p-6 mb-8 backdrop-blur-md shadow-2xl">
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-4">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span>Describe your UI</span>
        </div>
        
        <div className="relative flex items-center">
          <input 
            type="text" 
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Example: Modern login page for a fitness app" 
            className="w-full bg-[#090b21] border border-[#1e255a] focus:border-purple-500 rounded-xl py-4 pl-5 pr-12 text-gray-200 placeholder-gray-500 outline-none transition-all"
          />
          <Sparkles className="absolute right-4 text-gray-500 w-5 h-5 cursor-pointer" />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-gray-500 block w-full sm:w-auto mb-1 sm:mb-0">Try these ideas:</span>
            <button onClick={() => setPrompt('Login Page')} className="flex items-center gap-1.5 bg-[#161b46] hover:bg-[#1e255e] border border-[#252d6f] px-3 py-1.5 rounded-lg text-xs font-medium text-gray-300 transition-all">
              <Lock className="w-3.5 h-3.5" /> Login Page
            </button>
            <button onClick={() => setPrompt('Dashboard')} className="flex items-center gap-1.5 bg-[#161b46] hover:bg-[#1e255e] border border-[#252d6f] px-3 py-1.5 rounded-lg text-xs font-medium text-gray-300 transition-all">
              <Layout className="w-3.5 h-3.5" /> Dashboard
            </button>
            <button onClick={() => setPrompt('Landing Page')} className="flex items-center gap-1.5 bg-[#161b46] hover:bg-[#1e255e] border border-[#252d6f] px-3 py-1.5 rounded-lg text-xs font-medium text-gray-300 transition-all">
              <Rocket className="w-3.5 h-3.5" /> Landing Page
            </button>
            <button onClick={() => setPrompt('Pricing Page')} className="flex items-center gap-1.5 bg-[#161b46] hover:bg-[#1e255e] border border-[#252d6f] px-3 py-1.5 rounded-lg text-xs font-medium text-gray-300 transition-all">
              <DollarSign className="w-3.5 h-3.5" /> Pricing Page
            </button>
          </div>

          <button onClick={generateUI} className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-indigo-600/20 text-white font-medium px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all text-sm whitespace-nowrap">
            <Sparkles className="w-4 h-4 fill-white" />
            Generate UI
          </button>
        </div>
      </div>

      {/* --- OUTPUT DISPLAY GRID --- */}
      <div className="w-full max-w-5xl bg-[#0d102e]/80 border border-[#171d4a] rounded-2xl p-6 mb-8 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-300">
            <SquareTerminal className="w-4 h-4 text-blue-400" />
            <span>Generated UI</span>
          </div>
          <button onClick={copyToClipboard} className="flex items-center gap-1.5 bg-[#11163e] hover:bg-[#1a205a] border border-[#1f2768] text-xs font-medium px-3 py-1.5 rounded-lg text-gray-400 hover:text-white transition-all">
            <Copy className="w-3.5 h-3.5" /> Copy Code
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Visual Preview Side */}
          <div className="bg-[#07091e] border border-[#191f54] rounded-xl p-8 flex items-center justify-center min-h-[420px] shadow-inner overflow-auto">
            {ui ? (
              <div className="w-full h-full" dangerouslySetInnerHTML={{ __html: ui }} />
            ) : (
              <p className="text-sm text-gray-500 italic">Your generated preview will appear here</p>
            )}
          </div>

          {/* HTML Raw Code View Side */}
          <div className="bg-[#06081c] border border-[#171d4e] rounded-xl p-4 font-mono text-xs overflow-auto flex flex-col justify-between min-h-[420px]">
            <div className="space-y-1">
              <div className="text-gray-500 text-[10px] uppercase font-sans tracking-wider font-semibold mb-2">HTML</div>
              {ui ? (
                <pre className="text-gray-300 leading-relaxed whitespace-pre-wrap">{ui}</pre>
              ) : (
                <p className="text-gray-600 italic font-sans">&lt;!-- Code ready to generate... --&gt;</p>
              )}
            </div>
            {ui && (
              <div className="text-gray-600 mt-4 pt-2 border-t border-[#131942]/50 italic">
                &lt;!-- End of generated code --&gt;
              </div>
            )}
          </div>

        </div>
      </div>

      {/* --- FOOTER FEATURES BAR --- */}
      <div className="w-full max-w-5xl bg-[#0a0d2c]/50 border border-[#161b47] rounded-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left mb-8 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center shrink-0 border border-blue-500/20 text-blue-400">
            <Zap className="w-5 h-5 fill-blue-400/20" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-white">AI Powered</h4>
            <p className="text-xs text-gray-400 mt-0.5">Advanced AI creates stunning UIs</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 border-y md:border-y-0 md:border-x border-[#1a2157]/40 py-4 md:py-0 md:px-6">
          <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center shrink-0 border border-yellow-500/20 text-yellow-400">
            <Palette className="w-5 h-5 fill-yellow-400/20" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-white">Beautiful Designs</h4>
            <p className="text-xs text-gray-400 mt-0.5">Modern, responsive and user-friendly</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 md:pl-2">
          <div className="w-12 h-12 bg-pink-600/10 rounded-xl flex items-center justify-center shrink-0 border border-pink-500/20 text-pink-400">
            <Rocket className="w-5 h-5 fill-pink-400/20" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-white">Instant Results</h4>
            <p className="text-xs text-gray-400 mt-0.5">Generate UI in seconds, not hours</p>
          </div>
        </div>
      </div>

      {/* --- BOTTOM SIGNATURE --- */}
      <div className="text-xs text-gray-500 flex items-center gap-1">
        Made with passion by <span className="text-blue-400 font-medium flex items-center gap-1 hover:underline cursor-pointer">you <Heart className="w-3 h-3 text-pink-500 fill-pink-500" /></span>
      </div>

    </div>
  );
}

export default App;