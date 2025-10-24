import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../components/ui/carousel";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { toast } from "sonner";

export const ChefsChoice = ({ items = [] }) => {
  return (
    <section id="chefs-choice" className="py-20 reveal">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold" style={{fontFamily:"Poppins, sans-serif"}}>Chef’s Choice</h2>
            <p className="text-muted">Signature dishes loved by our regulars.</p>
          </div>
        </div>
        <Carousel className="mt-8">
          <CarouselContent>
            {items.map(item => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="group overflow-hidden border hover:shadow-2xl transition-shadow relative">
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
                    <Badge className="bg-white/80 backdrop-blur-md text-deepred border border-deepred/20">Signature</Badge>
                  </div>
                  <div className="p-4 pt-0">
                    <Button className="bg-olive hover:bg-olive/90 text-white w-full" onClick={()=> toast.success("Added to order (mock)")}>Order</Button>
                  </div>
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
