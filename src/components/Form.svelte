<script lang="ts">
  import { events, locations, relations } from "../config";
  import Select from "./Select.svelte";

  export let calculate: Function;

  //Binded to select, initialized with the first values
  let eventValue: number = events[0].value;
  let locationValue: number = locations[0].value;
  let relationValue: number = relations[0].value;
</script>

<form
  on:submit|preventDefault={() => {
    calculate(eventValue, locationValue, relationValue);
  }}
>
  <Select
    name="event"
    label="Eveniment:"
    bind:bindedValue={eventValue}
    options={events}
  />
  <Select
    name="location"
    label="Locație"
    bind:bindedValue={locationValue}
    options={locations}
  />
  <Select
    name="relation"
    label="Relație:"
    bind:bindedValue={relationValue}
    options={relations}
  />
  <button type="submit">Calculează</button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  button {
    width: 160px;
    padding: 10px 0px;
    font-size: 1.2em;
    border: 0;
    border-radius: 10px;
    background-color: white;
    transition: 0.3s;
    cursor: pointer;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.4);
  }
  button:hover {
    background-color: #f5f5f5;
    transform: scale(1.05);
  }
</style>
