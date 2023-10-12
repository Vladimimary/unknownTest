<script>
    import CurrencyDropDown from "./CurrencyDropDown.svelte"; 
    import CurrencyAmount from "./CurrencyAmount.svelte";

    let fromAmount = 0,
        toAmount = 0,
        currencyFrom = '',
        currencyTo = '';

    const API_KEY = 'fc50f95134af1f572b8f8695'

    async function convertCurrency(flagDirection) {
        let url = "https://v6.exchangerate-api.com/v6/" + API_KEY + "/latest/" + currencyFrom;

        await fetch(url).then( response => {
            return response.json()
        })
        .then( data => {
            let rate = data.conversion_rates[currencyTo];

        if (flagDirection === 'from')  toAmount = rate * fromAmount;
        else if (flagDirection === 'to')  fromAmount = toAmount / rate;

        })
        .catch(() => alert('Не удалось сконвертировать'));

    }
</script>

<main>
    <div class="conversionDirection">
        <CurrencyDropDown conversionDirectionText= {'From:'} bind:currency={currencyFrom}/>
        <CurrencyDropDown conversionDirectionText= {'To:'} bind:currency={currencyTo}/>

        <CurrencyAmount onChange = {convertCurrency} bind:amount={fromAmount} flagDirection= {'from'}/>
        <CurrencyAmount onChange = {convertCurrency}  bind:amount={toAmount} flagDirection= {'to'}/>
    </div>
    
</main>

<style>
    .conversionDirection {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
</style>