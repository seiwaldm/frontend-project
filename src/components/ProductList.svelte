<script>
	import { onMount } from 'svelte';

	let products = [];

	onMount(async () => {
		const response = await fetch('/data.json');
		if (response.ok) {
			products = await response.json();
		} else {
			console.error('Fehler beim Laden der Datei');
		}
	});
</script>

<h2>Unsere Produkte</h2>

<ul>
	{#each products as product}
		<li>
			<h3>{product.name}</h3>
			<p>Preis: {product.price}€</p>
			<button>Zum Warenkorb hinzufügen</button>
		</li>
	{/each}
</ul>
