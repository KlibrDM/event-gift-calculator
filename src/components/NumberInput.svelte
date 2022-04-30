<script lang="ts">
  export let name: string;
  export let label: string;
  export let bindedValue: number;
</script>

<div>
  <label for={name}>{label}</label>
  <input
    type="number"
    min="1"
    max="1000"
    {name}
    id={name}
    bind:value={bindedValue}
  />
</div>

<style>
  label {
    font-size: 1.2em;
  }
  input {
    font-family: Saira, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    font-size: 1.1em;
    padding: 5px 10px;
    margin-left: 5px;
    border-radius: 10px;
    background-color: white;
    border: 1px solid #c3c3c3;
  }
  @media screen and (max-width: 450px) {
    label {
      display: block;
    }
    input {
      margin-left: 0;
    }
  }
</style>
