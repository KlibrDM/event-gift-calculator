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
  }
</style>
