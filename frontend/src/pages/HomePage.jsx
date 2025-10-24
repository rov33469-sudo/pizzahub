import React, { useEffect, useMemo, useRef, useState } from "react";
import { BRAND, IMAGES, CATEGORIES, MENU, GROWTH, REVIEWS, TODAY_SPECIAL, MUSIC, ASSETS } from "../mock/mock";
import { Button } from "../components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "../components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Switch } from "../components/ui/switch";
import { Badge } from "../components/ui/badge";
import { toast, Toaster } from "sonner";
import { Instagram, Phone, MapPin, Star, Download, Music, X } from "lucide-react";

// Utility: simple count-up animation
const useCountUp = (target, duration = 1000) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.max(16, duration / 60);
    const increment = target / (duration / step);
    const id = setInterval(() => {
      start += increment;
      if (start >= target) {
        setValue(target);
        clearInterval(id);
      } else setValue(Math.round(start));
    }, step);
    return () => clearInterval(id);
  }, [target, duration]);
  return value;
};

const Header = ({ onOrderClick }) => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl supports-[backdrop-filter]:bg-cream/70 bg-cream/80 border-b border-[--border]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-olive/20 border border-olive/30 flex items-center justify-center">
            <span className="font-semibold text-olive">R</span>
          </div>
          <div>
            <div className="text-lg font-semibold tracking-wide" style={{fontFamily:"Poppins, sans-serif"}}>{BRAND.name}</div>
            <div className="text-xs text-muted">Since {BRAND.since}</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#home" className="hover:text-olive transition-colors">Home</a>
          <a href="#about" className="hover:text-olive transition-colors">About</a>
          <a href="#menu" className="hover:text-olive transition-colors">Menu</a>
          <a href="#growth" className="hover:text-olive transition-colors">Growth</a>
          <a href="#reviews" className="hover:text-olive transition-colors">Reviews</a>
          <a href="#contact" className="hover:text-olive transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <Button onClick={onOrderClick} className="bg-deepred hover:bg-deepred/90 text-white shadow-lg">Order Now</Button>
        </div>
      </div>
    </header>
  );
};

const Hero = ({ parallaxY }) => {
  return (
    <section id="home" className="relative overflow-hidden reveal">
      <div className="absolute inset-0 -z-10 bg-[--wood] bg-cover bg-center opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight" style={{fontFamily:"Poppins, sans-serif"}}>
            {BRAND.tagline}
          </h1>
          <p className="mt-4 text-lg text-muted">
            Hi, I’m Rony, the proud owner and head chef of Rony’s Pizza Hub, serving fresh, handcrafted pizzas since 2015.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#menu"><Button className="bg-olive hover:bg-olive/90 text-white">Explore Menu</Button></a>
            <a href="#about"><Button variant="outline" className="border-deepred text-deepred hover:bg-deepred/10">Explore My Story</Button></a>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <Badge className="bg-cream text-deepred border border-deepred/20">100% Wood-Fired</Badge>
            <Badge className="bg-cream text-olive border border-olive/20">Handmade Dough</Badge>
          </div>
        </div>
        <div className="relative" style={{ transform: `translateY(${parallaxY}px)`, transition: 'transform .08s linear' }}>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/40 bg-white/60 backdrop-blur-2xl">
            <img src={IMAGES.heroFire} alt="Wood-fired pizza oven" className="w-full h-[420px] object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-cream/50 rounded-xl blur-2xl -z-10" />
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-olive/30 rounded-xl blur-2xl -z-10" />
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-20 bg-cream/60 reveal">
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
      <div className="rounded-xl overflow-hidden shadow-xl border bg-white/70 backdrop-blur-xl">
        <img src={IMAGES.heroChef} alt="Chef Rony" className="w-full h-[360px] object-cover" />
      </div>
      <div>
        <h2 className="text-3xl font-bold" style={{fontFamily:"Poppins, sans-serif"}}>About Me</h2>
        <p className="mt-3 text-muted leading-relaxed">
          From a tiny oven in 2015 to a bustling neighborhood favorite, my journey is fueled by the joy of crafting simple, honest food. I believe in slow-fermented dough, San Marzano tomatoes, premium cheeses, and seasonal produce.
        </p>
        <Accordion type="single" collapsible className="mt-6">
          <AccordionItem value="experience">
            <AccordionTrigger>Experience</AccordionTrigger>
            <AccordionContent>
              10+ years perfecting wood-fired techniques and balancing flavor with texture.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="inspiration">
            <AccordionTrigger>Inspiration</AccordionTrigger>
            <AccordionContent>
              Classic Neapolitan pizza with a Mumbai twist—fresh, vibrant, and soulful.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="philosophy">
            <AccordionTrigger>Ingredient Philosophy</AccordionTrigger>
            <AccordionContent>
              Quality ingredients, minimal processing, and maximum flavor.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </section>
);

const MenuGrid = () => {
  const [active, setActive] = useState(CATEGORIES[0].key);
  const items = MENU[active] || [];
  return (
    <section id="menu" className="py-20 reveal">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h2 className="text-3xl font-bold" style={{fontFamily:"Poppins, sans-serif"}}>Menu / Foods I Serve</h2>
          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map(c => (
              <Button key={c.key} variant={active===c.key?"default":"outline"} onClick={()=>setActive(c.key)} className={active===c.key?"bg-deepred text-white hover:bg-deepred/90":"border-olive text-olive hover:bg-olive/10"}>
                {c.label}
              </Button>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {items.map(item => (
            <Card key={item.id} className="group overflow-hidden border hover:shadow-2xl transition-shadow relative">
              <div className="overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between">
                  <span>{item.name}</span>
                  <span className="text-deepred font-semibold">₹{item.price}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted -mt-2">{item.desc}</CardContent>
              <div className="absolute top-3 left-3">
                <Badge className="bg-white/80 backdrop-blur-md text-deepred border border-deepred/20">Chef’s pick</Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const Growth = () => {
  const values = GROWTH.sales.map(s=>s.value);
  const max = Math.max(...values) * 1.2;
  const points = GROWTH.sales.map((s, idx) => {
    const x = (idx / (GROWTH.sales.length - 1)) * 100;
    const y = 100 - (s.value / max) * 100;
    return `${x},${y}`;
  }).join(" ");

  return (
    <section id="growth" className="py-20 bg-cream/60 reveal">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold" style={{fontFamily:"Poppins, sans-serif"}}>My Growth & Sales (2019–2025)</h2>
        <div className="grid lg:grid-cols-3 gap-8 mt-8 items-stretch">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Yearly Sales Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-64">
                <defs>
                  <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="rgba(193, 51, 39, 0.35)" />
                    <stop offset="100%" stopColor="rgba(193, 51, 39, 0.0)" />
                  </linearGradient>
                </defs>
                <polyline fill="none" stroke="var(--deepred)" strokeWidth="1.5" points={points} />
                <polygon fill="url(#grad)" points={`0,100 ${points} 100,100`} />
                {GROWTH.sales.map((s, idx)=>{
                  const x = (idx / (GROWTH.sales.length - 1)) * 100;
                  const y = 100 - (s.value / max) * 100;
                  return <circle key={s.year} cx={x} cy={y} r={1.2} fill="var(--deepred)" />
                })}
              </svg>
              <div className="flex justify-between text-xs text-muted mt-2">
                {GROWTH.sales.map(s=> <span key={s.year}>{s.year}</span>)}
              </div>
            </CardContent>
          </Card>
          <div className="grid grid-cols-2 gap-4">
            {GROWTH.stats.map(stat => (
              <Card key={stat.label} className="bg-white/70 backdrop-blur-xl border">
                <CardContent className="pt-6">
                  <div className="text-3xl font-semibold text-deepred">{useCountUp(stat.value)}{stat.suffix}</div>
                  <div className="text-sm text-muted mt-1">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 reveal">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold" style={{fontFamily:"Poppins, sans-serif"}}>What Customers Say</h2>
        </div>
        <Carousel className="mt-8">
          <CarouselContent>
            {REVIEWS.map((r)=> (
              <CarouselItem key={r.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <img src={r.avatar} alt={r.name} className="w-12 h-12 rounded-full object-cover" />
                      <div>
                        <div className="font-medium">{r.name}</div>
                        <div className="text-xs text-muted flex items-center gap-1">
                          {Array.from({length: Math.round(r.rating)}).map((_,i)=> <Star key={i} className="w-4 h-4 text-olive" fill="currentColor" />)}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-muted">“{r.text}”</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </section>
  );
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const onSubmit = (e) => {
    e.preventDefault();
    const msgs = JSON.parse(localStorage.getItem("contact_msgs") || "[]");
    msgs.push({ ...form, ts: Date.now() });
    localStorage.setItem("contact_msgs", JSON.stringify(msgs));
    toast.success("Message sent! We'll get back shortly (mock)");
    setForm({ name: "", email: "", message: "" });
  };
  return (
    <section id="contact" className="py-20 bg-cream/60 reveal">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold" style={{fontFamily:"Poppins, sans-serif"}}>Get In Touch</h2>
          <p className="mt-3 text-muted">Find us at {BRAND.address}. For quick orders, ping us on WhatsApp.</p>
          <div className="mt-6 flex flex-col gap-3">
            <a href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g,"")}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-olive hover:underline"><Phone className="w-4 h-4"/> WhatsApp</a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-olive hover:underline"><Instagram className="w-4 h-4"/> Instagram</a>
            <a href="https://maps.google.com/?q=XYZ%20Street%20Mumbai" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-olive hover:underline"><MapPin className="w-4 h-4"/> Google Maps</a>
          </div>
          <div className="mt-8 aspect-video rounded-xl overflow-hidden border">
            <iframe title="map" src="https://maps.google.com/maps?q=Andheri%20West%20Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed" className="w-full h-full border-0"></iframe>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Contact Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="grid gap-4">
              <Input placeholder="Name" value={form.name} onChange={e=>setForm({...form, name: e.target.value})} required />
              <Input type="email" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email: e.target.value})} required />
              <Textarea placeholder="Message" value={form.message} onChange={e=>setForm({...form, message: e.target.value})} rows={5} required />
              <div className="flex gap-3">
                <Button type="submit" className="bg-olive hover:bg-olive/90 text-white">Send</Button>
                <a href={ASSETS.MENU_PDF_URL} target="_blank" rel="noreferrer" download="Ronys-Menu.pdf">
                  <Button type="button" variant="outline"><Download className="w-4 h-4 mr-2"/>Download Menu</Button>
                </a>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="border-t">
    <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-sm text-muted">© 2025 Rony’s Pizza Hub. All rights reserved.</div>
      <div className="flex items-center gap-4 text-olive">
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="hover:opacity-80"><Instagram /></a>
        <a href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g,"")}`} target="_blank" rel="noreferrer" className="hover:opacity-80"><Phone /></a>
        <a href="https://maps.google.com/?q=XYZ%20Street%20Mumbai" target="_blank" rel="noreferrer" className="hover:opacity-80"><MapPin /></a>
      </div>
    </div>
  </footer>
);

export default function HomePage() {
  const [openSpecial, setOpenSpecial] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);
  const audioRef = useRef(null);

  // SEO basics
  useEffect(() => {
    document.title = "Rony’s Pizza Hub — Crafting Happiness, One Slice at a Time!";
    const meta = document.querySelector("meta[name='description']");
    if (meta) meta.setAttribute("content", "Wood-fired pizzas in Mumbai since 2015. Handcrafted dough, premium ingredients, cozy vibes.");
  }, []);

  // custom cursor
  useEffect(() => {
    document.body.classList.add("pizza-cursor");
    return () => document.body.classList.remove("pizza-cursor");
  }, []);

  // reveal on scroll + parallax
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'));
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('show'); });
    }, { threshold: 0.12 });
    els.forEach(el=> io.observe(el));

    const onScroll = () => {
      const y = window.scrollY;
      setParallaxY(Math.max(-10, Math.min(30, y * 0.06)));
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, []);

  // Show today's special once
  useEffect(() => {
    const seen = localStorage.getItem("special_seen");
    if (!seen) {
      const t = setTimeout(()=> setOpenSpecial(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  // Music toggle
  useEffect(() => {
    if (!MUSIC.enable) return;
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.4;
    if (musicOn) audio.play().catch(()=>{}); else audio.pause();
  }, [musicOn]);

  const onOrderClick = () => {
    document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'});
  };

  return (
    <div>
      <Toaster richColors position="top-right" />
      {MUSIC.enable && (
        <audio ref={audioRef} src={MUSIC.url} loop />
      )}
      <Header onOrderClick={onOrderClick} />
      <Hero parallaxY={parallaxY} />
      <section className="py-8 reveal">
        <div className="max-w-7xl mx-auto px-4">
          <Card className="bg-gradient-to-r from-cream to-cream/70 border-olive/20">
            <CardContent className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-semibold" style={{fontFamily:"Poppins, sans-serif"}}>Dine-in or Book a Table</h3>
                <p className="text-muted">Reserve your spot for a cozy evening with wood-fired magic.</p>
              </div>
              <div className="flex gap-3">
                <a href="#contact"><Button className="bg-deepred hover:bg-deepred/90 text-white">Book a Table</Button></a>
                <a href="#contact"><Button variant="outline" className="border-olive text-olive hover:bg-olive/10">Order Pizza</Button></a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <About />
      <MenuGrid />
      <Growth />
      <Reviews />
      <Contact />
      <Footer />

      {/* Floating Music Toggle */}
      {MUSIC.enable && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="px-4 py-3 rounded-full shadow-2xl border bg-white/60 backdrop-blur-2xl flex items-center gap-3">
            <Music className="w-4 h-4 text-olive"/>
            <span className="text-sm">Music</span>
            <Switch checked={musicOn} onCheckedChange={setMusicOn} />
          </div>
        </div>
      )}

      {/* Today’s Special Modal */}
      <Dialog open={openSpecial} onOpenChange={(v)=>{ setOpenSpecial(v); if(!v) localStorage.setItem("special_seen","1"); }}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Today’s Special</DialogTitle>
            <DialogDescription>{TODAY_SPECIAL.desc}</DialogDescription>
          </DialogHeader>
          <div className="rounded-xl overflow-hidden">
            <img src={TODAY_SPECIAL.img} alt={TODAY_SPECIAL.name} className="w-full h-48 object-cover" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold">{TODAY_SPECIAL.name}</div>
              <div className="text-deepred font-semibold">₹{TODAY_SPECIAL.price}</div>
            </div>
            <Button onClick={()=>{ toast.success("Added to order (mock)"); setOpenSpecial(false); }} className="bg-olive hover:bg-olive/90 text-white">Add</Button>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={()=> setOpenSpecial(false)}><X className="w-4 h-4 mr-2"/>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
