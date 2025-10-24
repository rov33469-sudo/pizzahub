import React from "react";
import { Card, CardContent } from "../../components/ui/card";

export const Timeline = ({ items = [] }) => {
  return (
    <section id="timeline" className="py-20 bg-cream/60 reveal">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold" style={{fontFamily:"Poppins, sans-serif"}}>The Journey</h2>
        <p className="text-muted mt-2">A timeline of Rony’s pizza-making story.</p>
        <div className="relative mt-10">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[rgba(0,0,0,0.08)]" />
          <div className="space-y-10">
            {items.map((it, i) => (
              <div key={it.year} className={`grid md:grid-cols-2 gap-6 items-stretch ${i%2?"":"md:[&>*:first-child]:order-2"}`}>
                <div className={`flex ${i%2?"md:justify-start":"md:justify-end"}`}>
                  <Card className="w-full md:w-[90%] bg-white/70 backdrop-blur-xl border">
                    <CardContent className="p-5">
                      <div className="text-sm text-muted">{it.year}</div>
                      <div className="font-semibold mt-1">{it.title}</div>
                      <p className="text-sm text-muted mt-2">{it.text}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="hidden md:flex items-center justify-center relative">
                  <div className="w-24 h-24 rounded-xl overflow-hidden shadow border bg-white">
                    <img src={it.img} alt={it.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-deepred border-2 border-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
