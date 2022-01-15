<script>
   export let name;
   export let  handler;

   function handlThemeMode() {
        handler()
        console.log(name);
   }
</script>



    <img on:click={handlThemeMode} src="images/{name}.svg" alt="theme mode">





    <style>
        img {
            color: white;
            border: none;
            border-radius: .5rem;
            padding: 0.5rem;
            text-transform: uppercase;
            cursor: pointer;
            background-color: rgba(153, 153, 153, .3);
            box-shadow: 0 .5rem 1rem (0,0,0,0.1);

        }
        :global(body.dark-mode) img {
            filter: invert(98%) sepia(38%) saturate(85%) hue-rotate(06deg) brightness(83%) contrast(100%);
            background-color: rgba(82, 88, 92, 0.3);
        }
        /* :global(body:fullscreen) {
        background-color: inherit;
        color: inherit;
        width: 100%;
        height: 100%;
        } */
    </style>