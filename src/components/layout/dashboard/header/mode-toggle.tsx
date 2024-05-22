'use client';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import useStickyState from '@/hooks/useStickyState';

const modes = ['light', 'dark'];
export default function ModeToggle() {
    const [mode, setMode] = useStickyState(modes[0], 'mode');

    useEffect(initailizeMode, [mode, setMode]);

    function initailizeMode() {
        const body = document.getElementById('app_root');
        if (body?.classList.contains('dark')) {
            setMode('dark');
        } else {
            setMode('light');
        }
    }

    function toggleMode() {
        const body = document.getElementById('app_root');
        if (mode === 'dark') {
            console.log('changing to light mode');
            // change to light mode
            body?.classList.remove('dark');
            setMode('light');
        } else {
            // change to dark mode
            body?.classList.add('dark');
            setMode('dark');
        }
    }

    return (
        <div className="cursor-pointer" onClick={toggleMode}>
            {mode === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
        </div>
    );
}
