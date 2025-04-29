"use client"
import React, { useEffect, useRef } from 'react';

const InstagramEmbed = ({ url }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Cargar el script de Instagram solo una vez
    if (!window.instgrm) {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.onload = () => window.instgrm.Embeds.process();
      document.body.appendChild(script);
    } else {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <div ref={containerRef}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ background: '#FFF', border: 0, margin: 0, padding: 0 }}
      ></blockquote>
    </div>
  );
};

export default InstagramEmbed;
