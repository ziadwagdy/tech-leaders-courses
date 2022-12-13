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
    createCard(meetup)
  });
}

function createCard(meetup){
    /*
        <div class="meetup">
            <h3 class="title"></h3>
            <p class="description"></p>
            <img src="" alt="">
        </div>
    */

  const image = document.createElement("img");
  image.src = meetup.image;

  const title = document.createElement("h3");
  title.className = "title";
  title.innerHTML = meetup.title;

  const desc = document.createElement("p");
  desc.className = "description";
  desc.innerHTML = meetup.description;

  const cardDiv = document.createElement("div");
  cardDiv.appendChild(image).appendChild(title).appendChild(desc);
}
