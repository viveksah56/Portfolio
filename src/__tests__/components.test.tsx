import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import CurrentYear from '@/components/current-year';
import JsonLd from '@/components/json-ld';
import Icon from '@/components/icon';

describe('CurrentYear', () => {
    it('renders the current year', () => {
        render(<CurrentYear fallback={2026} />);
        expect(screen.getByText(String(new Date().getFullYear()))).toBeInTheDocument();
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
