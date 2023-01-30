<script>
  import { markfile } from "$lib/handle-markdown.js";
  import { page } from "$app/stores";
  import { base } from "$app/paths";
  $: path = $page.params.path.split("/");
  $: md = base + "/" + path[path.length - 1];
  $: markdown = markfile(md);
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
