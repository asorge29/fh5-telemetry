<script lang="ts">
  let props = $props();
</script>

{#if props.data}
    <div class="tires">
        <div class="tire" id="fl">
            Temp: {Math.round(props.data.tireTempFrontLeft)}
            <br>
            Slip: {props.data.tireCombinedSlipFrontLeft.toFixed(2)}
        </div>
        <div class="tire" id="fr">
            Temp: {Math.round(props.data.tireTempFrontRight)}
            <br>
            Slip: {props.data.tireCombinedSlipFrontRight.toFixed(2)}
        </div>
        <div class="tire" id="rl">
            Temp: {Math.round(props.data.tireTempRearLeft)}
            <br>
            Slip: {props.data.tireCombinedSlipRearLeft.toFixed(2)}
        </div>
        <div class="tire" id="rr">
            Temp: {Math.round(props.data.tireTempRearRight)}
            <br>
            Slip: {props.data.tireCombinedSlipRearRight.toFixed(2)}
        </div>
    </div>
{/if}

<style>
    .tires {
        display: flex;
        flex-wrap: wrap;
        width: 500px;
        height: 500px;
        align-content: space-between;
        justify-content: space-between;
    }

    .tire {
        border: 4px solid white;
        height: 200px;
        width: 200px;
        border-radius: 999px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>