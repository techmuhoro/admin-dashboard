'use client';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ModeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleMode = () => setDarkMode(prev => !prev);

    return (
        <div className="cursor-pointer" onClick={toggleMode}>
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </div>
    );
}
