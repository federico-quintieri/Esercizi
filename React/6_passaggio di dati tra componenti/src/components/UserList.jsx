export function UserList({ arrayOggettiLista }) {
  return (
    <>
      <h1>Lista oggetti</h1>
      <ol>
        {arrayOggettiLista.map((currObject) => (
          <li>{currObject.name}</li>
        ))}
      </ol>
    </>
  );
}
