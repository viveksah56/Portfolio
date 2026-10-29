'use client';

import ThemePicker from '@/components/theme/theme-picker';
import { useTheme } from '@/components/theme/theme-provider';

export default function ThemeDock() {
    const { theme, setTheme } = useTheme();
    return <ThemePicker theme={theme} setTheme={setTheme} />;
}