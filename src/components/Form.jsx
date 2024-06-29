import React from "react";

export default function Form() {
  return (
    <form>
      <input
        required
        type="text"
        name="title"
        placeholder="O que há para fazer hoje?"
      />
      <button>Salvar</button>
    </form>
  );
}
