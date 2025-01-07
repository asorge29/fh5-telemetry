<script lang="ts">
  import {parseTelemetry} from "./parseTelemetry"
  let data: Object;

  const ws = new WebSocket("ws://localhost:8080");
  ws.binaryType = "arraybuffer"

  ws.onopen = () => {
    console.log("WebSocket connected");
  };

  ws.onclose = () => {
    console.log("WebSocket disconnected")
  }

  ws.onmessage = (event) => {
    data = parseTelemetry(event.data)
  };
</script>

<pre>{JSON.stringify(data, null, 2)}</pre>
