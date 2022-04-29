<script lang="ts">
  import Form from "./components/Form.svelte";

  let catDau: number = 0;

  const calculate = (event: number, location: number, relation: number) => {
    let tempCatDau: number = event * location * relation;
    //Round to nearest number by rule
    if (tempCatDau < 1000) {
      catDau = roundToNearest(tempCatDau, 50);
    } else {
      catDau = roundToNearest(tempCatDau, 100);
    }
  };

  const roundToNearest = (number: number, nearest: number) => {
    return Math.round(number / nearest) * nearest;
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
      <p id="pers">/pers</p>
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
    box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.4);
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
    flex-direction: column;
    align-items: flex-end;
  }
  #cat-dau {
    font-size: 3em;
    margin-block-start: 0.5em;
    margin-block-end: 0;
    line-height: 1em;
  }
  #pers {
    font-size: 1.5em;
    margin-block-start: 0.2em;
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
