<script lang="ts">
  import Form from "./components/Form.svelte";

  let catDau: number = 0;

  const calculate = (event: number, location: number, relation: number) => {
    catDau = event * location * relation;
  };
</script>

<main>
  <div id="column-1">
    <h1 id="title">Cât dau?</h1>
    <Form {calculate} />
  </div>
  <div id="column-2">
    {#if catDau}
      <p id="cat-dau">{Math.round(catDau)} lei</p>
    {/if}
  </div>
</main>

<style>
  main {
    width: 680px;
    height: 480px;
    padding: 40px;
    display: flex;
    justify-content: space-between;
    color: #333;
    border-radius: 30px;
    box-sizing: border-box;
    background-color: white;
  }
  main > div {
    flex-grow: 1;
  }
  #title {
    font-size: 2.5em;
    margin-block-start: 0.5em;
  }
  #column-2 {
    display: flex;
    justify-content: flex-end;
  }
  #cat-dau {
    font-size: 3em;
    margin-block-start: 0.5em;
    line-height: 1em;
  }
  @media screen and (max-width: 680px) {
    main {
      width: 100vw;
      font-size: 10px;
    }
  }
  @media screen and (max-height: 480px) {
    main {
      height: 100vh;
      font-size: 10px;
    }
  }
</style>
