import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { AspectRatio } from "../../components/ui/aspect-ratio";

export const VideoSection = ({ title = "Behind the Oven", videoUrl, caption }) => {
  return (
    <section id="behind-the-oven" className="py-20 bg-cream/60 reveal">
      <div className="max-w-7xl mx-auto px-4">
        <Card className="overflow-hidden border bg-white/70 backdrop-blur-xl">
          <CardHeader>
            <CardTitle style={{fontFamily:"Poppins, sans-serif"}}>{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <AspectRatio ratio={16/9} className="rounded-xl overflow-hidden border">
              <iframe
                src={videoUrl}
                title="Behind the Oven"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </AspectRatio>
            {caption && <p className="text-muted mt-3">{caption}</p>}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
