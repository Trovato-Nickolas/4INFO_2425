<script>
    import Counter from "$lib/components/Counter.svelte";
    import DoubleCounter from "$lib/components/DoubleCounter.svelte";
    let contatore = 0
    let numeri = [1,2,3,4,5,6,7]
</script>

<h1>Pagina COunter !!</h1>

<Counter/>

<DoubleCounter bind:counter={contatore}/>

{#if contatore%5}
   <h2 class="rosso">Il Valore del contatore vale : {contatore} </h2>
{:else}
   <h2 class="verde">Il Valore del contatore vale : {contatore} </h2>
{/if}

<ul>
     {#each numeri as numero,indice}
        <li>numeri[{indice}]:{numero}</li>
     {/each}
</ul>

<style>
    .rosso{color: red;}
    .verde{color: green;}
</style>