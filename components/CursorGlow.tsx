'use client';

import { useEffect, useState } from 'react';

export default function CursorGlow() {
    const [pos, setPos] = useState({ x: -100, y: -100 });

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setPos({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener('mousemove', move);

        return () => window.removeEventListener('mousemove', move);
    }, []);

    return (
        <div
            className="pointer-events-none fixed z-[9999] h-32 w-32 rounded-full bg-blue-500/20 blur-3xl transition-transform duration-75"
            style={{
                left: pos.x - 64,
                top: pos.y - 64,
            }}
        />
    );
}