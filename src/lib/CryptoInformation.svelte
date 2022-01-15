<script>
// @ts-nocheck
    export let data;
</script>


<div>
    <img src={data.image} alt="" height="25px">

    <span>{data.name}</span>

    <span>{data.symbol.toUpperCase()}</span>

    <span>{data.current_price.toLocaleString("fa-IR")}دلار</span>

    <span>{data.total_volume.toLocaleString("fa-IR")}دلار</span>

    <span class="{data.price_change_percentage_24h > 0  ? 'green' : 'red'} ltr">{data.price_change_percentage_24h.toFixed(2).toLocaleString("fa-IR")}%</span>
    <span>  Mkt Cap: {data.market_cap.toLocaleString("fa-IR")}دلار</span>


</div>

<style>
    div {
        display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid #d7d7d7;
  width: 100%;
  text-align: right;
    }
    .ltr{
        direction: ltr;
        text-align: right;
    }

    span {
        padding-right: 24px;
        align-items: center;
        min-width: 150px; 
    }

    .green {
        font-weight:600 ;
        color: rgb(114, 255, 114);
    }
    .red {
        font-weight:600 ;
        color: red;
    

    }

</style>