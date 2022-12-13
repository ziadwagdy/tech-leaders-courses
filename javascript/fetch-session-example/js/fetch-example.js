// promise -> fetch API.
// using fetch() returns a promise
// then()
// then()
// catch()
// finally()

// 1- get the meetups using fetch() -> GET request
const meetups = [];
fetch(
  "https://react-getting-started-ea64e-default-rtdb.firebaseio.com/meetups.json"
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (const key in data) {
      // create a meetup
      const meetup = {
        id: key,
        ...data[key],
      };
      meetups.push(meetup);
    }
    // create content
    createContent(meetups);
  })
  .catch((error) => {
    console.log(error.message);
  });

function createContent(meetups) {
  meetups.forEach((meetup) => {
    createCard(meetup);
  });
}

function createCard(meetup) {
  const meetups = document.querySelector(".meetups");
  const image = document.createElement("img");
  image.src = meetup.image;

  const title = document.createElement("h3");
  title.className = "title";
  title.innerText = meetup.title;

  const desc = document.createElement("p");
  desc.className = "description";
  desc.innerText = meetup.description;

  const cardDiv = document.createElement("div");
  cardDiv.className = "meetup";
  cardDiv.appendChild(title);
  cardDiv.appendChild(desc);
  cardDiv.appendChild(image);
  meetups.appendChild(cardDiv);
}
