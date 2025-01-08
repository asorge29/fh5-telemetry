<script lang="ts">
  let props = $props();

</script>
{#if props.data}
    <div>
        <div id="dial">
            <div id="center"></div>
            <div id="pointer" style="transform: translateX(-50%) rotate({Math.round(props.data.engineCurrentRpm)/Math.round(props.data.engineMaxRpm)*270-135}deg)"></div>
            <div id="gear"><span>{props.data.gear === 0 ? "R" : props.data.gear}</span></div>
            {#each new Array(Math.floor(props.data.engineMaxRpm/1000)) as item, index}
                <div class="tick" style="transform: translate(-50%, -50%) rotate({index * 270/Math.floor(props.data.engineMaxRpm/1000)-135}deg)"></div>
            {/each}
        </div>
    </div>
{/if}

<style>
    #dial {
        width: 300px;
        height: 300px;
        border-radius: 999px;
        border: 5px solid #ff672f;
        position: relative;
        background-color: rgb(32, 32, 32);
        background-image: linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black), linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black), linear-gradient(to bottom, rgb(8, 8, 8), rgb(32, 32, 32));
        background-size: 10px 10px, 10px 10px, 10px 5px;
        background-position: 0px 0px, 5px 5px, 0px 0px;
    }

    #center {
        width: 20%;
        height: 20%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #000;
        border-radius: 50%;
    }

    #pointer {
        height: 45%;
        width: 4px;
        background: #ff672f;
        position: absolute;
        left: 50%;
        bottom: 50%;
        transform: translateX(-50%) rotate(-135deg);
        transform-origin: 50% 100%;
        -webkit-box-shadow:0px 0px 10px 2px #ff672f;
        -moz-box-shadow: 0px 0px 10px 2px #ff672f;
        box-shadow: 0px 0px 10px 2px #ff672f;
    }

    #gear {
        position: absolute;
        left: 50%;
        bottom: 10%;
        height: 20%;
        width: 20%;
        transform: translateX(-50%);
        border: 2px solid #fff;
        padding: 8px;
        font-size: 28px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }
    .tick {
        position: absolute;
        left: 50%;
        top: 5%;
        transform: translate(-50%, -50%);
        transform-origin: 50% 500%;
        width: 4px;
        height: 10%;
        background: #ff672f;
        -webkit-box-shadow:0px 0px 10px 2px #ff672f;
        -moz-box-shadow: 0px 0px 10px 2px #ff672f;
        box-shadow: 0px 0px 10px 2px #ff672f;
    }
</style>