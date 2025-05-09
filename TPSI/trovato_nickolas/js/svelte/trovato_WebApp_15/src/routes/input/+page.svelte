<script>
    let nome , cognome , eta;
    let confermato = false;
</script>

<h1>
    Input Page
</h1>

<ul>
    <li>Nome <input type="text" bind:value={nome}></li>
    <li>Cognome <input type="text" bind:value={cognome} ></li>
    <li>Eta <input type="text" bind:value={eta}></li>
</ul> 
<br>
<p>Confermato <input type="checkbox" bind:checked={confermato}></p>
<br>

<p>Io Sono {nome} {cognome} e ho {eta} anni</p>

<button disabled = {!confermato}>Invia</button>

