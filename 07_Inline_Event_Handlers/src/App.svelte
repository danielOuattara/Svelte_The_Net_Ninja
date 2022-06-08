<script>
  let people = [
    { id: 1, name: "Daniel", beltColor: "white", age: 38 },
    { id: 2, name: "Julie", beltColor: "Green", age: 36 },
    { id: 3, name: "Gaïa", beltColor: "blue", age: 4 },
    { id: 4, name: "Amaya", beltColor: "red", age: 1.5 },
  ];
</script>

<main>
  <!-- ------------------------------------------------------- -->

  <div>
    <h4>People</h4>
    <ul>
      {#each people as { name, age, beltColor, id }, i (id)}
        <li>{name}- {age} - {beltColor}</li>
        <button
          on:click={() =>
            (people = people.filter((person) => person.id !== id))}
          >delete</button
        >
      {:else}
        <p>No one in the list</p>
      {/each}
    </ul>
  </div>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
