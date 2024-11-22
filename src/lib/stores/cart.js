import { writable } from 'svelte/store';

export const cart = writable([]);

export function addToCart(product) {
	cart.update((items) => {
		const existingItem = items.find((item) => item.id === product.id);
		if (existingItem) {
			return items.map((item) =>
				item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
			);
		}
		return [...items, { ...product, quantity: 1 }];
	});
}

export function removeFromCart(productId) {
	cart.update((items) => items.filter((item) => item.id !== productId));
}

export function clearCart() {
	cart.set([]);
}
