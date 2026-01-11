
import React, { useState } from 'react';
import { Sparkles, Loader2, Send } from 'lucide-react';
import { GoogleGenAI, Type } from "@google/genai";

const AIInsights: React.FC = () => {
  const [restaurantName, setRestaurantName] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const generateIdeas = async () => {
    if (!restaurantName || !cuisine) return;
    
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Act as a senior marketing strategist for restaurants. 
      Generate 3 creative marketing slogans and 2 promotional ideas for a restaurant called "${restaurantName}" which serves "${cuisine}" cuisine. 
      Keep the ideas practical, exciting, and geared towards boosting mobile app orders. 
      Format as a clean JSON list with "type" (slogan or promotion) and "text" fields.`;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                type: { type: Type.STRING },
                text: { type: Type.STRING }
              },
              required: ["type", "text"]
            }
          }
        }
      });

      /* Access text property directly from GenerateContentResponse as per SDK documentation */
      const generatedText = response.text;
      setResult(generatedText || null);
    } catch (error) {
      console.error("AI Generation Error:", error);
      setResult(JSON.stringify([
        { type: "Error", text: "Something went wrong with the AI engine. Please try again." }
      ]));
    } finally {
      setLoading(false);
    }
  };

  const parsedResult = result ? JSON.parse(result) : [];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gray-950 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-600/20 blur-[100px] pointer-events-none"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Sparkles size={16} />
                AI Powered Marketing
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Smart Growth <span className="text-[#FF5722]">Assistant</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10">
                Not sure how to market your brand? Let our AI assistant generate personalized slogans and promotion ideas tailored to your restaurant's unique vibe.
              </p>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Restaurant Name" 
                    className="w-full bg-gray-900 border border-gray-800 rounded-2xl py-4 px-6 text-white focus:border-orange-500 outline-none transition-all"
                    value={restaurantName}
                    onChange={(e) => setRestaurantName(e.target.value)}
                  />
                  <input 
                    type="text" 
                    placeholder="Cuisine Type" 
                    className="w-full bg-gray-900 border border-gray-800 rounded-2xl py-4 px-6 text-white focus:border-orange-500 outline-none transition-all"
                    value={cuisine}
                    onChange={(e) => setCuisine(e.target.value)}
                  />
                </div>
                <button 
                  onClick={generateIdeas}
                  disabled={loading || !restaurantName || !cuisine}
                  className="w-full bg-[#FF5722] hover:bg-[#E64A19] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-orange-500/20"
                >
                  {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={20} />}
                  {loading ? 'Generating brilliance...' : 'Generate Marketing Ideas'}
                </button>
              </div>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-[2.5rem] p-8 min-h-[400px] flex flex-col backdrop-blur-sm">
              <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Strategy Dashboard
              </h3>
              
              {result ? (
                <div className="space-y-4 overflow-y-auto max-h-[400px] pr-2 custom-scrollbar">
                  {parsedResult.map((item: any, i: number) => (
                    <div key={i} className="bg-gray-800/80 border border-gray-700 p-5 rounded-2xl hover:border-orange-500/30 transition-all">
                      <span className="text-[10px] font-black uppercase tracking-widest text-orange-400 block mb-2">{item.type}</span>
                      <p className="text-gray-200 leading-relaxed font-medium">{item.text}</p>
                    </div>
                  ))}
                  <button className="text-orange-400 font-bold text-sm mt-4 hover:underline" onClick={() => setResult(null)}>
                    Clear and try another
                  </button>
                </div>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-10">
                  <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mb-6 text-gray-600">
                    <Send size={32} />
                  </div>
                  <p className="text-gray-500 font-medium">
                    Enter your restaurant details to see personalized growth ideas generated by Gemini AI.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIInsights;