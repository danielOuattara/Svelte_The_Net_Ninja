import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "world",
    nextLibrary: "Laravel",
    teacher: "The Net Ninja"
  },
});

export default app;
