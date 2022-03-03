import { render } from "solid-js/web";

function App() {
  return <p>Solid Parcel Starter</p>;
}

const root = document.getElementById("root");

if (root) {
  render(() => <App />, root);
}
