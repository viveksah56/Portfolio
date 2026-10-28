import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import CurrentYear from '@/components/current-year';
import JsonLd from '@/components/json-ld';
<<<<<<< HEAD
import { Icon } from '@/components/icon';

describe('CurrentYear', () => {
    it('renders the current year', () => {
        const { container } = render(<CurrentYear fallback={2026} />);
        // Assert on the rendered text content directly so typecheck does not
        // depend on the jest-dom matcher type augmentation being installed.
        expect(container.textContent).toContain(String(new Date().getFullYear()));
=======
import {Icon} from '@/components/icon';

describe('CurrentYear', () => {
    it('renders the current year', () => {
        render(<CurrentYear fallback={2026} />);
        const currentYear = new Date().getFullYear();
        
>>>>>>> 9b796a8 (Changes in vite configuratiosn)
    });
});

describe('JsonLd', () => {
    it('emits escaped JSON-LD script content', () => {
        render(<JsonLd data={{ '@type': 'Person', name: 'A<b' }} />);
        const script = document.querySelector('script[type="application/ld+json"]');
        expect(script).not.toBeNull();
        expect(script?.textContent).toContain('\\u003c');
    });
});

describe('Icon', () => {
    it('renders an accessible hidden svg for each icon name', () => {
        for (const name of ['arrow', 'github', 'linkedin', 'mail', 'menu', 'close', 'lock'] as const) {
            const { container } = render(<Icon name={name} />);
            const svg = container.querySelector('svg');
            expect(svg).not.toBeNull();
            expect(svg?.getAttribute('aria-hidden')).toBe('true');
        }
    });
});
