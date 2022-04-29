<script lang="ts">
  export let name: string;
  export let label: string;
  export let bindedValue: number;
  export let options: Array<{ type: string; value: number }>;
</script>

<div>
  <label for={name}>{label}</label>
  <select {name} id={name} bind:value={bindedValue}>
    {#each options as option}
      <option value={option.value}>{option.type}</option>
    {/each}
  </select>
</div>

<style>
  label {
    font-size: 1.2em;
  }
  select {
    font-family: Saira, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    font-size: 1.1em;
    padding: 5px 10px;
    margin-left: 5px;
    border-radius: 10px;
    background-color: white;
    border: 1px solid #c3c3c3;

    /*Add new arrow and delete old one for consistency accross browsers*/
    background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: 5px;
    appearance: none;
    padding-right: 2em;
  }
</style>
