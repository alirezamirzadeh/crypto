import {writable} from 'svelte/store'

export let icon = writable('max')

export function useFullscrren () {

    if (!document.fullscreenElement) {

        document.documentElement.requestFullscreen();
        icon.set('min')

    } else if (document.exitFullscreen) {

        icon.set('max')
        document.exitFullscreen();
   
    }
}

