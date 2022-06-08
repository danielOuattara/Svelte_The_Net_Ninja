<script>
  let firstName = "Daniel";
  let lastName = "Ouattara";
  let beltColor = "black";

  // reactive value
  $: fullName = `${firstName} ${lastName}`;

  // reactive statement
  $: console.log(beltColor);
  $: {
    console.log(beltColor);
    console.log(fullName, beltColor)
  }

  const handleClick = () => {
    beltColor = "Orange";
  };

  const handleInput = (e) => {
    e.preventDefault();
    beltColor = e.target.value;
  };
</script>

<main>
  <p>{fullName} {beltColor} belt</p>
  <input type="text" bind:value={firstName} />
  <input type="text" bind:value={lastName} />
  <input type="text" bind:value={beltColor} />
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
