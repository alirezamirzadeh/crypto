 <script>
import { onMount } from 'svelte';
import {get,filterd,loading,error} from '../stores/crypto'
import CryptoInformation from './CryptoInformation.svelte';
import Error from './Error.svelte';
import Loading from './Loading.svelte';

onMount(() => get())
</script>


<section>

    {#if $loading}
        <Loading />
    {:else if $error}
        <Error />
    {:else}
        {#each $filterd as data (data.id)}
            <CryptoInformation {data}/>
        {/each}
    {/if}
</section> 

