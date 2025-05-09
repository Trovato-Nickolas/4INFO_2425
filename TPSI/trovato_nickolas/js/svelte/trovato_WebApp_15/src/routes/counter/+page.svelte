<script>
    import Counter from "$lib/components/Counter.svelte";
    import DoubleCounter from "$lib/components/DoubleCounter.svelte";

    import { createEventDispatcher } from "svelte";
    let contatore = 0
    let numeri = [1,2,3,4,5,6,7]
    let sottolineato = true
    let doppio;
    $: doppio = contatore * 2;

    function gestisci_evento(evento){
      alert(`${evento.detail.tipo} -- ${evento.detail.valore}`)
    }

</script>

<Counter bind:counter={contatore} on:contatore={gestisci_evento}/>

<DoubleCounter bind:counter={contatore}/>

{#if contatore%5}
   <h2 class="rosso">Il Valore del contatore vale : {contatore} </h2>
{:else}
   <h2 class="verde">Il Valore del contatore vale : {contatore} </h2>
{/if}

<h2 class:sottolineato>Il Valore del contatore vale :  sottolineato : {contatore} </h2>

<ul>
     {#each numeri as numero,indice}
        <li>numeri[{indice}]:{numero}</li>
     {/each}
</ul>

<style>
    .rosso{color: red;}
    .verde{color: green;}
</style>