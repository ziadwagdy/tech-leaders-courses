import "./App.css";

function App() {
  fetch(
    "https://react-getting-started-ea64e-default-rtdb.firebaseio.com/meetups.json"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });

  return <div></div>;
}

export default App;
