'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    ChannelIO?: {
      q?: any[];
      c?: (args: any) => void;
      (command: 'boot', options: any): void;
      (command: 'shutdown'): void;
    };
    ChannelIOInitialized?: boolean;
  }
}

export default function ChannelTalk() {
  useEffect(() => {
    const loadChannelTalk = () => {
      (function() {
        var w = window;
        if (w.ChannelIO) return;

        const ch: any = function() {
          ch.q.push(arguments);
        };
        ch.q = [];
        ch.c = function(args: any) {
          ch.q.push(args);
        };
        w.ChannelIO = ch;
        
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
        s.charset = 'UTF-8';
        var x = document.getElementsByTagName('script')[0];
        if (x.parentNode) {
          x.parentNode.insertBefore(s, x);
        }
      })();

      window.ChannelIO?.('boot', {
        "pluginKey": "c38f2d0e-dede-46f4-a9ce-e914e6dc043e"
      });
    };

    loadChannelTalk();

    return () => {
      window.ChannelIO?.('shutdown');
    };
  }, []);

  return null;
}