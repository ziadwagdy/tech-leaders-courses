// the fetch method returns a promise
// using then, and catch to handle the returned promise
const meetups = [];

function loadData() {
  fetch(
    "https://react-getting-started-ea64e-default-rtdb.firebaseio.com/meetups.json"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key],
        };
        meetups.push(meetup);
      }
      createContent(meetups);
    });
}

document.querySelector("button").addEventListener("click", loadData);

function createElemetns(title, description) {
  const content = document.querySelector(".content");
  const p1 = document.createElement("p");
  p1.innerText = title;
  content.append(p1);
  const p2 = document.createElement("p");
  p2.innerText = description;
  content.append(p2);
}
function createContent(meetups) {
  meetups.forEach((meetup) => {
    createElemetns(meetup.title, meetup.address);
  });
}
