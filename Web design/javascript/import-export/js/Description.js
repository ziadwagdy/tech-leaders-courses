function Description(name = "") {
    let p = document.createElement("p");
    p.innerHTML = name;
    document.body.appendChild(p);
}

export default Description; 