<script>
    import { convert } from "$lib/handle-markdown.js";
    import { page } from "$app/stores";
    import { base } from "$app/paths";
    $: path = $page.params.path.split("/");
    $: md = base+"/"+path[path.length-1];
    $: markdowns = convert(md);
  </script>
  
  <section>
    {#await markdowns then text}
      {@html text}
    {/await}
  </section>
  