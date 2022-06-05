<script>
  export let name;
  export let nextLibrary;
  let library = "Svelte";
  let teacher = "The Net Ninja";
  let beltColor = "green";
  let newColor = "";
  const handleBeltColor = () => {
    beltColor = "Black";
  };
  const handleColorChange = (event) => {
    newColor = event.target.value;
  };
</script>

<main>
  <h1>Hello {name}!</h1>
  <h2>Welcome to {library} Tutorial from {teacher}</h2>
  <p>
    <!-- {teacher} is <span class="black">{beltColor}</span> -->
    {teacher} is <span class={beltColor === "green" ? "other-belt" : "black-belt"}>belt</span> belt
  </p>
  <button on:click={handleBeltColor}>Change Color</button>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte
    apps.
  </p>
  <p>
    The next library is <span class="nextLibrary"
      ><a href="https://laravel.com/">{nextLibrary}</a></span
    >
  </p>
  <hr />

  <form>
    <!-- bindings -->
    <!-- <label for=""
      >Choose a color: <input
        type="text"
        placeholder="enter a color"
        on:input={handleColorChange}
        value={newColor}
      />
    </label> -->

    <!-- 2-ways bindings -->
    <label for=""
      >Choose a color: <input type="text" placeholder="enter a color" bind:value={newColor} />
    </label>
  </form>
  <p class={newColor.length > 2 ? "visible" : "invisible"} style="color: {newColor}">
    Your color is {newColor}
  </p>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  .other-belt {
    background-color: #10f200;
    color: #10f200;
    font-size: 20px;
    width: 20px;
    height: 4px;
  }

  .black-belt {
    background-color: #000000;
    color: #000000;
    font-size: 20px;
    width: 20px;
    height: 4px;
  }

  .nextLibrary {
    font-size: 20px;
    text-decoration: underline;
  }

  .invisible {
    visibility: hidden;
  }

  .visible {
    visibility: visible;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
