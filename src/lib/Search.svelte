<script>
    import {term} from '../stores/crypto'
    let value = '';

    $: term.set(value.toLowerCase())

</script>

<div>
    <input placeholder="جستجو" bind:value >

</div>



<style>
    div {
        width:100%;
        display: flex;
        justify-content: space-evenly;
    }

    input {
        height: 3rem;
        width: 400px;
        border: 3px solid #999;
        outline: none;
        border-radius: .5rem;
        padding-right: 1rem;
        font-family: inherit;
        margin-inline: auto;
        margin-bottom: 2.5rem;
        margin-top: .5rem;
        font-size: 1.1rem;
    }
    input:focus {
        border: 3px solid blue;

    }

    :global(body.dark-mode) input{
        background-color: rgb(39, 42, 44);
        border: 3px solid #444;
        color: inherit;
    }
</style>