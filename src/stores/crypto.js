import {derived, writable} from "svelte/store";


const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'

export const data = writable([])
export const loading = writable(false)
export const error = writable(false)

export const term =  writable('')

export const get = async () => {
    loading.set(true)

    try {
        const res = await( await fetch(url)).json()

        data.set(res)
    }
    catch(e) {
        error.set(true)
    }
    loading.set(false)

}

export const filterd = derived(
    [data,term],
    ([$data,$term]) => $data.filter(item => item.name.toLowerCase().includes($term))
  )