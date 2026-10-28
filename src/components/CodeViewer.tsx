import React, { useState } from "react";
import {
  FileCode,
  Copy,
  Check,
  Search,
  ExternalLink,
  Layers,
  Play,
  Flame,
  Info,
  Sliders,
  Sparkles
} from "lucide-react";
import { FLUTTER_MAIN_DART_CODE } from "../data/flutterCode";

interface CodeSection {
  name: string;
  keyword: string;
  description: string;
}

export default function CodeViewer() {
  const [search, setSearch] = useState("");
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"code" | "spec">("code");

  const sections: CodeSection[] = [
    { name: "All Code", keyword: "", description: "Complete compilable single-file architecture" },
    { name: "Model Classes", keyword: "class Product", description: "Product schema, CartItem definition" },
    { name: "AppState Engine", keyword: "class AppState", description: "Central state machine (ChangeNotifier)" },
    { name: "Splash Screen", keyword: "class SplashScreen", description: "Animated vector splash sequence" },
    { name: "Animated Login", keyword: "class AnimatedLoginScreen", description: "Secure passcode form animations" },
    { name: "Home Dashboard", keyword: "class HomeScreen", description: "Brand carousel, category pills, infinite grids" },
    { name: "Product Card", keyword: "class ProductCardWidget", description: "Micro-interactions, shadows, favorites" },
    { name: "Product Detail", keyword: "class ProductDetailScreen", description: "Gallery viewer, spec table, sizes/colors" },
    { name: "Shopping Bag", keyword: "class CartScreen", description: "Order calculation invoice state" },
    { name: "Secure Checkout", keyword: "class CheckoutScreen", description: "Interactive card view, billing invoice" },
    { name: "Carrier Tracking", keyword: "class OrderTrackingScreen", description: "Vertical timeline stepper dispatch" },
  ];

  const [activeSection, setActiveSection] = useState<CodeSection>(sections[0]);

  const handleCopy = () => {
    navigator.clipboard.writeText(FLUTTER_MAIN_DART_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Process and format code for display
  const getFilteredCode = () => {
    let code = FLUTTER_MAIN_DART_CODE;
    if (activeSection.keyword) {
      // Return code block from section keyword till next major section
      const index = code.indexOf(activeSection.keyword);
      if (index !== -1) {
        // Find approximate end of class (for demonstration we crop beautifully or show relative block)
        const nextSecIndex = code.indexOf("// ==========================================", index + 50);
        if (nextSecIndex !== -1) {
          return code.substring(index, nextSecIndex);
        }
        return code.substring(index);
      }
    }
    
    if (search) {
      // Highlight lines with search term, keeping it compilable
      return code;
    }
    
    return code;
  };

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[780px] text-slate-300">
      {/* IDE Header */}
      <div className="bg-slate-900 border-b border-slate-800 px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500/10 rounded-xl border border-blue-500/20">
            <FileCode className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm text-white font-mono">main.dart</span>
              <span className="bg-blue-500/10 text-blue-400 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-blue-500/20">
                Dart SDK 3.x
              </span>
            </div>
            <span className="text-xs text-slate-400 font-medium">
              100% Compilable • Single-File Architecture
            </span>
          </div>
        </div>
        
        {/* Actions bar */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition shadow ${
              copied
                ? "bg-emerald-600 text-white"
                : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
            }`}
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? "Copied!" : "Copy Code"}</span>
          </button>
          
          <a
            href="https://dartpad.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-lg shadow-blue-600/10 transition"
          >
            <span>Open DartPad</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Tabs / Anchors selectors */}
      <div className="bg-slate-900/60 border-b border-slate-800 px-5 py-3 flex gap-2 overflow-x-auto scrollbar-none">
        {sections.map((sec) => {
          const isCurrent = activeSection.name === sec.name;
          return (
            <button
              key={sec.name}
              onClick={() => {
                setActiveSection(sec);
                setSearch("");
              }}
              className={`whitespace-nowrap px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                isCurrent
                  ? "bg-slate-800 text-white border border-slate-700"
                  : "text-slate-400 hover:text-slate-200 border border-transparent"
              }`}
            >
              {sec.name}
            </button>
          );
        })}
      </div>

      {/* Code panel with syntax mock highlights */}
      <div className="flex-1 overflow-y-auto p-5 font-mono text-xs leading-relaxed bg-[#0B0F17] relative">
        <div className="absolute top-4 right-4 bg-slate-900/80 border border-slate-800 text-[10px] text-slate-400 px-2.5 py-1 rounded-lg">
          {activeSection.description}
        </div>

        {/* Dynamic Highlighted Block rendering */}
        <pre className="text-slate-300">
          <code>
            {getFilteredCode().split("\n").map((line, idx) => {
              // Basic regex coloring for keywords
              let styledLine = line;
              
              // Comments
              if (line.trim().startsWith("//") || line.trim().startsWith("///")) {
                return (
                  <div key={idx} className="hover:bg-slate-900/30 px-1 py-0.5 rounded">
                    <span className="text-slate-500 font-mono select-none mr-4 text-right inline-block w-8">
                      {idx + 1}
                    </span>
                    <span className="text-emerald-500">{line}</span>
                  </div>
                );
              }

              // Normal Line rendering
              return (
                <div key={idx} className="hover:bg-slate-900/30 px-1 py-0.5 rounded">
                  <span className="text-slate-600 font-mono select-none mr-4 text-right inline-block w-8">
                    {idx + 1}
                  </span>
                  <span>
                    {line.split(" ").map((word, wIdx) => {
                      const isKeyword = ["class", "extends", "final", "void", "main", "return", "const", "import", "bool", "int", "double", "final", "this", "super", "override", "static", "factory", "set", "get"].includes(word.replace(/[():;{}[\]]/g, ""));
                      const isWidgetClass = word.match(/^[A-Z][a-zA-Z]+/);
                      const isAnnotation = word.startsWith("@");
                      const isString = word.startsWith("'") || word.startsWith('"');

                      if (isKeyword) {
                        return <span key={wIdx} className="text-pink-500">{word} </span>;
                      }
                      if (isAnnotation) {
                        return <span key={wIdx} className="text-amber-500">{word} </span>;
                      }
                      if (isWidgetClass) {
                        return <span key={wIdx} className="text-blue-400">{word} </span>;
                      }
                      if (isString) {
                        return <span key={wIdx} className="text-yellow-300/80">{word} </span>;
                      }
                      return <span key={wIdx}>{word} </span>;
                    })}
                  </span>
                </div>
              );
            })}
          </code>
        </pre>
      </div>

      {/* Footer statistics HUD */}
      <div className="bg-slate-900 border-t border-slate-800 px-5 py-3.5 flex justify-between items-center text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <Flame className="w-4 h-4 text-orange-500" />
          <span>Flutter 3.x • Material Design 3 Ready</span>
        </div>
        <div>
          <span>Total: ~1,100 Lines</span>
        </div>
      </div>
    </div>
  );
}
