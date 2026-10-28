'use client';

import { useSplash } from '@/components/splash/splash-provider';
import ThemePicker from '@/components/theme/theme-picker';
import { useTheme } from '@/components/theme/theme-provider';

export default function ThemeDock() {
    const { theme, setTheme } = useTheme();
    const { replay } = useSplash();
    return <ThemePicker theme={theme} setTheme={setTheme}  />;
}