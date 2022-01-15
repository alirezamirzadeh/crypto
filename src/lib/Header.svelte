<script>
// @ts-nocheck


import Icon from "./Icon.svelte";
import {changeTheme,theme} from '../stores/theme';
import {onMount} from 'svelte';
import {useFullscrren,icon} from '../stores/fullscreen'

    onMount (() => {
        if ($theme === 'dark') {
            changeTheme()
        }
    })

   
</script>
<nav>
    <h1> ارز دیجیتال</h1>
    <div>
        <Icon handler={changeTheme} name={$theme}/>
        <Icon  handler={useFullscrren} name={$icon} />
    </div>

</nav>


<style>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

h1 {
    font-size: 1.4rem;
}
</style>
