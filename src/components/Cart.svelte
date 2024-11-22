<script>
	import { cart, removeFromCart, clearCart } from '../lib/stores/cart';
</script>

<h2>Warenkorb</h2>

{#if $cart.length > 0}
	<ul>
		{#each $cart as item}
			<li>
				<h3>{item.name}</h3>
				<p>Anzahl: {item.quantity}</p>
				<p>Preis: {item.price * item.quantity}€</p>
				<button on:click={() => removeFromCart(item.id)}>Entfernen</button>
			</li>
		{/each}
	</ul>
	<button on:click={clearCart}>Warenkorb leeren</button>
{:else}
	<p>Dein Warenkorb ist leer.</p>
{/if}
