import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: " new world of Svelte",
  },
});

export default app;
