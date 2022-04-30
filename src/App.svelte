<script lang="ts">
  import Form from "./components/Form.svelte";

  let catDau: number = 0;
  let catDauTotal: number = 0;
  let numberPeople: number = 1;

  const calculate = (
    event: number,
    location: number,
    relation: number,
    people: number
  ) => {
    let tempCatDau: number = event * location * relation;
    //Round to nearest number by rule
    if (tempCatDau < 1000) {
      catDau = roundToNearest(tempCatDau, 50);
    } else {
      catDau = roundToNearest(tempCatDau, 100);
    }
    numberPeople = people;
    catDauTotal = catDau * people;
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
      <p id="cat-dau-total">{Math.round(catDauTotal)} lei</p>
      {#if numberPeople > 1}
        <p id="total">Total</p>
        <p id="cat-dau">{Math.round(catDau)} lei</p>
        <p id="pers">/pers</p>
      {/if}
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
  #cat-dau,
  #cat-dau-total {
    margin-block-start: 0.5em;
    margin-block-end: 0;
    line-height: 1em;
    text-align: end;
  }
  #cat-dau-total {
    font-size: 3em;
  }
  #cat-dau {
    font-size: 2.4em;
  }
  #pers,
  #total {
    font-size: 1.5em;
    margin-block-start: 0.2em;
    margin-block-end: 0.4em;
  }
  @media screen and (max-width: 740px) {
    main {
      width: 90vw;
      font-size: 11px;
    }
  }
  @media screen and (max-height: 540px) {
    main {
      height: 90vh;
      overflow: auto;
      font-size: 11px;
    }
  }
</style>
