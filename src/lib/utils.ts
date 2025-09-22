import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combina classes CSS usando clsx e tailwind-merge
 * @param inputs - Classes CSS para combinar
 * @returns String de classes CSS combinadas e otimizadas
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
