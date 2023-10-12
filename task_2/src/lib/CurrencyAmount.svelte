<script>
	export let amount;
    export let onChange;
    export let flagDirection;
</script>

<input bind:value={amount} on:change={() => onChange(flagDirection)} />