<script>
  import { markfile } from "$lib/handle-markdown.js";
  import {base} from "$app/paths" 
  const markdown = markfile(base+"/README.md")
</script>

<section class="flex items-center justify-center">
  <div class="max-w-3xl">
    <div>
      {#await markdown then text}
        {@html text}
      {/await}
    </div>
  </div>
</section>