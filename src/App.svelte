<script>

  import Search from './lib/Search.svelte';
  import Crypto from './lib/Crypto.svelte';
import Header from './lib/Header.svelte';


</script>


<main>
  <Header />
  <Search />

  <Crypto />

</main>

<style>


@font-face {
    font-family: vazir;
    font-style: normal;
    font-weight: normal;
    font-display: swap;
    src: url("./vazir.woff2") format("woff2");
  }

  :global(body) {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Vazir";
  background-color: #fff;
	color: #111;
	transition: background-color 1.5s;
  direction: rtl;
  width: 100%;
  height: 100%;
  }

  :global(body.dark-mode) {
		background-color: #131516;
		color: #eee;
	}

  main {
    margin-inline: auto;
    max-width: 1000px;
  }
</style>