<script lang="ts">
  let props = $props();
</script>

{#if props.data}
    <div id="speedometer">
        {Math.round(props.data.speed)} mph
    </div>
{/if}

<style>
    #speedometer {
        font-size: 192px;
    }
</style>