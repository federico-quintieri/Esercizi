import { UserList } from "./components/UserList.jsx";

// Componente genitore App
function App() {
  // Array di oggetti
  const arrayOggetti = [
    { id: 1, name: "Mario" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Zio" },
  ];

  return (
    <>
      <UserList arrayOggettiLista={arrayOggetti}></UserList>
    </>
  );
}

export default App;
