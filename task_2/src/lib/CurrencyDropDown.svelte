<script>
const CURRENCIES = [ 'USD', 'EUR', 'RUB', 'TRY', 'AMD' ];

export let conversionDirectionText;
export let currency;

</script>

<div>
    <h3>{conversionDirectionText}</h3>
    <select bind:value={currency} >
        {#each CURRENCIES as currencyItem }
            <option value={currencyItem}>
                {currencyItem}
            </option>
        {/each}
    </select>
</div>

<style>
    h3 {
    display:inline;
    }
</style>