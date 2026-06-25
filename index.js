const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/generate", (req, res) => {
  const { prompt } = req.body;
  let ui = "";

  // LOGIN PAGE (MODERN)
  if (prompt.toLowerCase().includes("login")) {
    ui = `
      <div style="
        background: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e');
        background-size: cover;
        height: 400px;
        display:flex;
        justify-content:center;
        align-items:center;
      ">
        <div style="
          background: rgba(255,255,255,0.9);
          padding:30px;
          border-radius:10px;
          text-align:center;
        ">
          <h2 style="color:BLACK;">Welcome Back</h2>
          <input placeholder="Email" style="padding:10px; margin:10px; width:200px"/><br/>
          <input type="password" placeholder="Password" style="padding:10px; margin:10px; width:200px"/><br/>
          <button style="padding:10px 20px; background:#4facfe; color:white; border:none;">
            Login
          </button>
        </div>
      </div>
    `;
  }

  
  // LANDING PAGE (TRAVEL & ADVENTURE EXPLORER STYLE)
  // LANDING PAGE (CORRECTED TAILWIND DESIGN)
  else if (prompt.toLowerCase().includes("landing")) {
    ui = `
      <div class="w-full max-w-2xl mx-auto font-sans text-gray-100 flex flex-col gap-6 p-2">
        
        
        <div class="relative w-full h-72 rounded-xl overflow-hidden shadow-xl border border-[#1e255a]">
          <img 
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80" 
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 flex flex-col items-center justify-center text-center p-4">
            <h2 class="text-xl md:text-2xl font-black text-amber-400 tracking-wider uppercase mb-1 drop-shadow-md">
              EXPLORE THE WORLD!!!!! 🌏
            </h2>
            <p class="text-xs md:text-sm font-medium text-gray-200 mb-5 drop-shadow-sm">
              Discover amazing places with us
            </p>
            <button class="bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-slate-900 font-extrabold text-xs px-6 py-2.5 rounded-lg shadow-md transition-all active:scale-95">
              Get Started
            </button>
          </div>
        </div>

        
        <div class="grid grid-cols-3 gap-3">
          
          
          <div class="flex flex-col gap-1.5">
            <div class="w-full h-24 rounded-lg overflow-hidden border border-[#1e255a]">
              <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=300&q=80" class="w-full h-full object-cover" />
            </div>
            <span class="text-[11px] font-semibold text-gray-400 tracking-wide px-1">Adventure</span>
          </div>

          
          <div class="flex flex-col gap-1.5">
            <div class="w-full h-24 rounded-lg overflow-hidden border border-[#1e255a]">
              <img src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=300&q=80" class="w-full h-full object-cover" />
            </div>
            <span class="text-[11px] font-semibold text-gray-400 tracking-wide px-1">Beaches</span>
          </div>

          
          <div class="flex flex-col gap-1.5">
            <div class="w-full h-24 rounded-lg overflow-hidden border border-[#1e255a]">
              <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=300&q=80" class="w-full h-full object-cover" />
            </div>
            <span class="text-[11px] font-semibold text-gray-400 tracking-wide px-1">Mountains</span>
          </div>

        </div>

      </div>
    `;
  }
  // DASHBOARD (PREMIUM ANALYTICS & OPERATIONS HUB)
  else if (prompt.toLowerCase().includes("dashboard")) {
    ui = `
      <div class="w-full max-w-4xl mx-auto p-4 md:p-6 bg-[#0c0e29] border border-[#1e255a] rounded-2xl shadow-2xl font-sans text-gray-100">
        
        
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#1e255a]">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl overflow-hidden border border-purple-500/30 shadow-md">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" class="w-full h-full object-cover" alt="User Profile" />
            </div>
            <div>
              <h2 class="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                Welcome back, Sarah <span class="animate-pulse text-base">✨</span>
              </h2>
              <p class="text-xs text-gray-400">Enterprise Workspace Operations Hub</p>
            </div>
          </div>
          <div class="flex items-center gap-2 self-start sm:self-center">
            <span class="text-xs text-gray-400 bg-[#141943] px-3 py-1.5 rounded-xl border border-[#222a6b]">
              <i class="fa-solid fa-rotate-right text-purple-400 mr-1.5 animate-spin-slow"></i> Sync Live
            </span>
          </div>
        </div>

        
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          
          {/* Card 1: Revenue Overview */}
          <div class="bg-[#11153b] border border-[#1f2765] rounded-xl p-4 relative overflow-hidden group">
            <div class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Gross Income</span>
              <i class="fa-solid fa-chart-line text-blue-400 text-xs"></i>
            </div>
            <div class="text-2xl font-black text-white tracking-tight">$24,850</div>
            <div class="text-[11px] text-emerald-400 font-medium mt-1 flex items-center gap-1">
              <i class="fa-solid fa-arrow-trend-up"></i> +14.2% <span class="text-gray-500">vs last month</span>
            </div>
          </div>

          {/* Card 2: System Load Performance */}
          <div class="bg-[#11153b] border border-[#1f2765] rounded-xl p-4 relative overflow-hidden group">
            <div class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-pink-500 to-purple-500"></div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Server Capacity</span>
              <i class="fa-solid fa-microchip text-pink-400 text-xs"></i>
            </div>
            <div class="text-2xl font-black text-white tracking-tight">64.8%</div>
            {/* Custom Mini Progress Bar Graphics */}
            <div class="w-full bg-slate-900 h-1.5 rounded-full mt-2 overflow-hidden border border-white/5">
              <div class="bg-gradient-to-r from-pink-500 to-purple-500 h-full rounded-full" style="width: 65%;"></div>
            </div>
          </div>

          {/* Card 3: Team Active Tasks */}
          <div class="bg-[#11153b] border border-[#1f2765] rounded-xl p-4 relative overflow-hidden group">
            <div class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-400 to-teal-500"></div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Active Tasks</span>
              <i class="fa-solid fa-list-check text-emerald-400 text-xs"></i>
            </div>
            <div class="text-2xl font-black text-white tracking-tight">18 / 24</div>
            <div class="text-[11px] text-gray-400 font-medium mt-1 flex items-center gap-1">
              <span class="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-ping"></span> 3 completing now
            </div>
          </div>

        </div>

        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Chart Mock / Visual Graphs Panel (Takes 2 columns) */}
          <div class="md:col-span-2 bg-[#090b21] border border-[#1a2050] rounded-xl p-4 flex flex-col justify-between min-h-[180px]">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-bold uppercase text-gray-300 tracking-wide">Network Data Ingestion Flow</span>
              <span class="text-[10px] text-purple-400 font-semibold bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">Live Stream</span>
            </div>
            
            
            <div class="flex items-end justify-between h-24 gap-1.5 pt-2 border-b border-[#1e255a]/60 px-2">
              <div class="bg-blue-500/30 hover:bg-blue-500 w-full rounded-t" style="height: 40%"></div>
              <div class="bg-blue-500/30 hover:bg-blue-500 w-full rounded-t" style="height: 55%"></div>
              <div class="bg-purple-500/50 hover:bg-purple-500 w-full rounded-t" style="height: 75%"></div>
              <div class="bg-purple-500/50 hover:bg-purple-500 w-full rounded-t" style="height: 60%"></div>
              <div class="bg-blue-500/30 hover:bg-blue-500 w-full rounded-t" style="height: 45%"></div>
              <div class="bg-pink-500/60 hover:bg-pink-500 w-full rounded-t" style="height: 90%"></div>
              <div class="bg-purple-500/80 hover:bg-purple-500 w-full rounded-t" style="height: 100%"></div>
            </div>
            
            <div class="flex justify-between text-[10px] text-gray-500 mt-2 px-1 font-mono">
              <span>09:00 AM</span>
              <span>10:00 AM</span>
              <span>11:00 AM</span>
            </div>
          </div>

          
          
          <div class="bg-[#090b21] border border-[#1a2050] rounded-xl p-4 flex flex-col md:col-span-3">
            <span class="text-xs font-bold uppercase text-gray-300 tracking-wide mb-3 block">Activity Queue</span>
            
            <div class="flex flex-row flex-wrap items-center gap-6 overflow-x-auto py-1">
              
              <div class="flex items-center gap-2.5 text-xs bg-[#11153b] border border-[#1f2765] px-3 py-2 rounded-xl min-w-[200px]">
                <div class="w-7 h-7 rounded-full overflow-hidden border border-purple-500/20 shrink-0">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" class="w-full h-full object-cover" />
                </div>
                <div class="truncate">
                  <span class="font-semibold text-white block truncate">Marcus Miller</span>
                  <span class="text-[10px] text-gray-400 block truncate">Pushed to Master branch</span>
                </div>
              </div>

              <div class="flex items-center gap-2.5 text-xs bg-[#11153b] border border-[#1f2765] px-3 py-2 rounded-xl min-w-[200px]">
                <div class="w-7 h-7 rounded-full overflow-hidden border border-pink-500/20 shrink-0">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" class="w-full h-full object-cover" />
                </div>
                <div class="truncate">
                  <span class="font-semibold text-white block truncate">Elena Rostova</span>
                  <span class="text-[10px] text-gray-400 block truncate">Generated invoice</span>
                </div>
              </div>

              <div class="flex items-center gap-2.5 text-xs bg-[#11153b] border border-[#1f2765] px-3 py-2 rounded-xl min-w-[200px]">
                <div class="w-7 h-7 rounded-full overflow-hidden border border-blue-500/20 shrink-0">
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" class="w-full h-full object-cover" />
                </div>
                <div class="truncate">
                  <span class="font-semibold text-white block truncate">Alex Chen</span>
                  <span class="text-[10px] text-gray-400 block truncate">Cleared CDN Cache</span>
                </div>
              </div>

            </div>
          </div>
    `;
  }
  // PRICING PAGE 
  // SHOPPING STOREFRONT LAYOUT (DRESSES, COSMETICS, FOOTWEAR)
  // SHOPPING STOREFRONT LAYOUT (CLEAN WHITE RETAIL STYLE)
  else if (prompt.toLowerCase().includes("pricing") || prompt.toLowerCase().includes("shop")) {
    ui = `
      <div class="w-full max-w-4xl mx-auto font-sans text-gray-800 flex flex-col gap-6 p-2 bg-slate-50 rounded-2xl">
        
        
        <div class="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 flex items-center justify-between shadow-sm">
          <div class="flex items-center gap-1.5">
            <span class="text-sm font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-700">
              VOGUE
            </span>
          </div>
          
          <nav class="flex items-center gap-4 md:gap-6 text-xs font-bold text-slate-600">
            <span class="text-purple-600 border-b-2 border-purple-600 pb-0.5 cursor-pointer">Dresses</span>
            <span class="hover:text-purple-600 transition-colors cursor-pointer">Footwear</span>
            <span class="hover:text-purple-600 transition-colors cursor-pointer">Makeup</span>
            <span class="hover:text-purple-600 transition-colors cursor-pointer">Skincare</span>
          </nav>
          <div class="text-slate-700 hover:text-purple-600 font-bold cursor-pointer text-xs flex items-center gap-1">
            <i class="fa-solid fa-bag-shopping text-purple-600"></i> (0)
          </div>
        </div>

        
        <div class="relative w-full h-44 rounded-xl overflow-hidden shadow-sm border border-slate-200">
          <img 
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=80" 
            class="w-full h-full object-cover object-center"
          />
          
          <div class="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent flex flex-col justify-center p-6">
            <span class="text-[9px] font-extrabold uppercase tracking-widest text-pink-600 mb-1">Summer Collection 2026</span>
            <h2 class="text-xl md:text-2xl font-black text-slate-900 tracking-tight max-w-xs leading-tight mb-3">
              UP TO 40% OFF THE TRENDING CATALOG
            </h2>
            <button class="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-[10px] px-5 py-2.5 rounded-lg self-start shadow-md hover:shadow-lg transition-all">
              Claim Offer
            </button>
          </div>
        </div>

        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          
          
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between group hover:border-purple-300 transition-all">
            <div class="relative h-44 bg-slate-100 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=400&q=80" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
              <span class="absolute top-2 left-2 bg-purple-600 text-[9px] font-bold px-2 py-0.5 rounded text-white shadow-sm">New</span>
            </div>
            <div class="p-3">
              <span class="text-[9px] text-purple-600 uppercase font-bold tracking-wider">Dresses</span>
              <h3 class="text-xs font-bold text-slate-800 tracking-tight truncate mt-0.5">Satin Evening Gown</h3>
              <div class="flex items-center justify-between mt-3 pt-2 border-t border-slate-100">
                <span class="text-sm font-black text-slate-900">2500</span>
                <button class="w-8 h-8 bg-slate-900 hover:bg-purple-600 text-white rounded-lg flex items-center justify-center text-xs shadow-sm transition-colors">
                  <i class="fa-solid fa-plus text-[10px]"></i>
                </button>
              </div>
            </div>
          </div>

          
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between group hover:border-purple-300 transition-all">
            <div class="relative h-44 bg-slate-100 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=400&q=80" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div class="p-3">
              <span class="text-[9px] text-purple-600 uppercase font-bold tracking-wider">Footwear</span>
              <h3 class="text-xs font-bold text-slate-800 tracking-tight truncate mt-0.5">Suede Blossom Heels</h3>
              <div class="flex items-center justify-between mt-3 pt-2 border-t border-slate-100">
                <span class="text-sm font-black text-slate-900">3000</span>
                <button class="w-8 h-8 bg-slate-900 hover:bg-purple-600 text-white rounded-lg flex items-center justify-center text-xs shadow-sm transition-colors">
                  <i class="fa-solid fa-plus text-[10px]"></i>
                </button>
              </div>
            </div>
          </div>

          
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between group hover:border-purple-300 transition-all">
            <div class="relative h-44 bg-slate-100 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=400&q=80" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
              <span class="absolute top-2 left-2 bg-pink-500 text-[9px] font-bold px-2 py-0.5 rounded text-white shadow-sm">Sale</span>
            </div>
            <div class="p-3">
              <span class="text-[9px] text-pink-600 uppercase font-bold tracking-wider">Makeup</span>
              <h3 class="text-xs font-bold text-slate-800 tracking-tight truncate mt-0.5">Matte Velvet Lipstick</h3>
              <div class="flex items-center justify-between mt-3 pt-2 border-t border-slate-100">
                <div>
                  <span class="text-[10px] text-slate-400 line-through block">$34.00</span>
                  <span class="text-sm font-black text-slate-900">2400</span>
                </div>
                <button class="w-8 h-8 bg-slate-900 hover:bg-purple-600 text-white rounded-lg flex items-center justify-center text-xs shadow-sm transition-colors">
                  <i class="fa-solid fa-plus text-[10px]"></i>
                </button>
              </div>
            </div>
          </div>

          
          
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between group hover:border-purple-300 transition-all">
            <div class="relative h-44 bg-slate-100 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div class="p-3">
              <span class="text-[9px] text-purple-600 uppercase font-bold tracking-wider">Skincare</span>
              <h3 class="text-xs font-bold text-slate-800 tracking-tight truncate mt-0.5">Hydrating Glow Serum</h3>
              <div class="flex items-center justify-between mt-3 pt-2 border-t border-slate-100">
                <span class="text-sm font-black text-slate-900">550</span>
                <button class="w-8 h-8 bg-slate-900 hover:bg-purple-600 text-white rounded-lg flex items-center justify-center text-xs shadow-sm transition-colors">
                  <i class="fa-solid fa-plus text-[10px]"></i>
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    `;
  }

  // HEALTHCARE & WELLNESS CATALOG PAGE

  else if (prompt.toLowerCase().includes("health") || prompt.toLowerCase().includes("wellness")) {
    ui = `
      <div class="w-full max-w-5xl mx-auto font-sans text-slate-800 flex flex-col gap-6 p-4 bg-white rounded-2xl border border-slate-200/80 shadow-xl">
        
        
        <div class="w-full bg-slate-50 border border-slate-200/60 rounded-xl px-5 py-3.5 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></div>
            <span class="text-sm font-black tracking-wider text-slate-900 uppercase">VITALIS</span>
          </div>
          <nav class="flex items-center gap-6 text-xs font-bold text-slate-500">
            <span class="text-emerald-600 cursor-pointer hover:text-emerald-700 transition-colors">Vitals Hub</span>
            <span class="hover:text-emerald-600 cursor-pointer transition-colors">Nutrition Logs</span>
            <span class="hover:text-emerald-600 cursor-pointer transition-colors">Mindfulness</span>
          </nav>
          <div class="text-xs font-bold text-slate-400 bg-white px-3 py-1 rounded-lg border border-slate-200/80 shadow-xs">
            Patient ID: #2026-X9
          </div>
        </div>

        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div class="bg-emerald-50/40 border border-emerald-100 rounded-xl p-3 flex flex-col justify-between">
            <span class="text-[10px] uppercase font-bold tracking-wider text-emerald-700">Heart Rate</span>
            <div class="flex items-baseline gap-1 mt-1">
              <span class="text-xl font-black text-slate-900">72</span>
              <span class="text-[10px] font-semibold text-slate-400">BPM</span>
            </div>
            <span class="text-[9px] text-emerald-600 font-medium mt-1">❤️ Resting (Optimal)</span>
          </div>
          
          <div class="bg-blue-50/40 border border-blue-100 rounded-xl p-3 flex flex-col justify-between">
            <span class="text-[10px] uppercase font-bold tracking-wider text-blue-700">Sleep Duration</span>
            <div class="flex items-baseline gap-1 mt-1">
              <span class="text-xl font-black text-slate-900">7.8</span>
              <span class="text-[10px] font-semibold text-slate-400">Hours</span>
            </div>
            <span class="text-[9px] text-blue-600 font-medium mt-1">🌙 84% REM Efficiency</span>
          </div>

          <div class="bg-purple-50/40 border border-purple-100 rounded-xl p-3 flex flex-col justify-between">
            <span class="text-[10px] uppercase font-bold tracking-wider text-purple-700">Active Energy</span>
            <div class="flex items-baseline gap-1 mt-1">
              <span class="text-xl font-black text-slate-900">420</span>
              <span class="text-[10px] font-semibold text-slate-400">KCAL</span>
            </div>
            <span class="text-[9px] text-purple-600 font-medium mt-1">🔥 65% of daily metric</span>
          </div>

          <div class="bg-amber-50/40 border border-amber-100 rounded-xl p-3 flex flex-col justify-between">
            <span class="text-[10px] uppercase font-bold tracking-wider text-amber-700">Hydration Index</span>
            <div class="flex items-baseline gap-1 mt-1">
              <span class="text-xl font-black text-slate-900">1.8</span>
              <span class="text-[10px] font-semibold text-slate-400">Liters</span>
            </div>
            <span class="text-[9px] text-amber-600 font-medium mt-1">💧 2 glasses remaining</span>
          </div>
        </div>

        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          
          <div class="bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-xs flex flex-col justify-between group">
            <div class="h-36 bg-slate-50 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=400&q=80" class="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-300" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              <span class="absolute bottom-2 left-2 bg-emerald-600 text-[9px] font-bold px-2 py-0.5 rounded text-white shadow-sm">Dietary Fiber</span>
            </div>
            <div class="p-3.5">
              <h3 class="text-xs font-black text-slate-900">Organic Vegetables & Greens</h3>
              <p class="text-[11px] text-slate-500 mt-1 leading-relaxed">Logged tracking for complex micronutrient optimization and cellular alkalization repair indexes.</p>
              
              <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div class="w-2/3 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div class="bg-emerald-500 h-full rounded-full" style="width: 75%;"></div>
                </div>
                <span class="text-[10px] font-bold text-slate-700">350g / 450g</span>
              </div>
            </div>
          </div>

          
          <div class="bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-xs flex flex-col justify-between group">
            <div class="h-36 bg-slate-50 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?auto=format&fit=crop&w=400&q=80" class="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-300" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              <span class="absolute bottom-2 left-2 bg-blue-600 text-[9px] font-bold px-2 py-0.5 rounded text-white shadow-sm">Antioxidants</span>
            </div>
            <div class="p-3.5">
              <h3 class="text-xs font-black text-slate-900">Fresh Whole Fruits & Berries</h3>
              <p class="text-[11px] text-slate-500 mt-1 leading-relaxed">Natural fructose and active enzyme logging assigned to regulate mid-afternoon energy levels.</p>
              
              <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div class="w-2/3 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div class="bg-blue-500 h-full rounded-full" style="width: 100%;"></div>
                </div>
                <span class="text-[10px] font-bold text-emerald-600 flex items-center gap-1">✓ Completed</span>
              </div>
            </div>
          </div>

          
          <div class="bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-xs flex flex-col justify-between group">
            <div class="h-36 bg-slate-50 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1693812879904-b8161644ce5a?q=80&w=651&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              <span class="absolute bottom-2 left-2 bg-amber-600 text-[9px] font-bold px-2 py-0.5 rounded text-white shadow-sm">Omega-3 lipids</span>
            </div>
            <div class="p-3.5">
              <h3 class="text-xs font-black text-slate-900">Raw Premium Nuts & Seeds</h3>
              <p class="text-[11px] text-slate-500 mt-1 leading-relaxed">Essential fatty acids logged for neuro-protection layers and long-form sustained focus control.</p>
              
              <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div class="w-2/3 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div class="bg-amber-500 h-full rounded-full" style="width: 40%;"></div>
                </div>
                <span class="text-[10px] font-bold text-slate-700">15g / 35g</span>
              </div>
            </div>
          </div>

        </div>

        
        <div class="relative w-full h-40 rounded-xl overflow-hidden border border-slate-200/80 shadow-xs group">
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80" 
            class="w-full h-full object-cover object-center"
          />
          <div class="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent flex flex-col justify-center p-5">
            <span class="text-[9px] font-extrabold uppercase tracking-widest text-emerald-600 mb-0.5">Neurological Wellness</span>
            <h2 class="text-base font-black text-slate-900 tracking-tight mb-1">
              Guided Vagus Nerve Meditation & Yoga
            </h2>
            <p class="text-[11px] text-slate-600 max-w-sm mb-3">Controlled deep breathing telemetry sequences designed to directly lower resting heart cortisol metrics.</p>
            <button class="bg-slate-900 hover:bg-emerald-600 text-white font-bold text-[10px] px-4 py-2 rounded-lg transition-colors self-start shadow-xs">
              Open Interactive Session (12 min)
            </button>
          </div>
        </div>

      </div>
    `;
  }
  // DEFAULT
  else {
    ui = `
      <div style="padding:20px;">
        <h2>${prompt}</h2>
        <p>✨ Try prompts like "login", "landing", "dashboard"</p>
      </div>
    `;
  }

  res.json({ ui });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});