
let submitButton = document.querySelector('input[type="submit"]');
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    let productCustomisation = document.querySelector('input[name="Customisation"]:checked').value;
    let digitalFeatures = document.querySelector('input[name="Digital features"]:checked').value;
    let dataDrivenServices = document.querySelector('input[name="Data-driven services"]:checked').value;
    let dataUsage = document.querySelector('input[name="Data usage"]:checked').value;
    let revenueShare = document.querySelector('input[name="Revenue share"]:checked').value;

    let data = {
        "productCustomisation": productCustomisation,
        "digitalFeatures": digitalFeatures,
        "dataDrivenServices": dataDrivenServices,
        "dataUsage": dataUsage,
        "revenueShare": revenueShare
    };
    localStorage.setItem("formData", JSON.stringify(data));
    window.open(page5.html, _blank);
});

// function saveData() {
//   localStorage.setItem("product-customisation", document.querySelector('input[name="Customisation"]:checked').value);
//   localStorage.setItem("digital-features", document.querySelector('input[name="Digital features"]:checked').value);
//   localStorage.setItem("data-driven", document.querySelector('input[name="Data-driven services"]:checked').value);
//   localStorage.setItem("data-usage", document.querySelector('input[name="Data usage"]:checked').value);
//   localStorage.setItem("revenue-share", document.querySelector('input[name="Revenue share"]:checked').value);
// }


// function saveData() {
// const form1 = document.querySelector("#product-customisation");
// const form2 = document.querySelector("#Digital-features");
// const form3 = document.querySelector("#Data-driven");
// const form4 = document.querySelector("#data-usage");
// const form5 = document.querySelector("#share-of-revenue");

//   form1.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const selectedAnswer = form1.querySelector("input[name='answer']:checked").value;
//     localStorage.setItem("product-customisation", selectedAnswer);
//     console.log(localStorage.getItem("answer"));

//   });

//   form2.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const selectedAnswer = form2.querySelector("input[name='answer']:checked").value;
//     localStorage.setItem("Digital-features", selectedAnswer);
//     console.log(localStorage.getItem("answer"));

//   });

//   form3.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const selectedAnswer = form3.querySelector("input[name='answer']:checked").value;
//     localStorage.setItem("Data-driven", selectedAnswer);
//     console.log(localStorage.getItem("answer"));

//   });

//   form4.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const selectedAnswer = form4.querySelector("input[name='answer']:checked").value;
//     localStorage.setItem("data-usage", selectedAnswer);
//     console.log(localStorage.getItem("answer"));

//   });

//   form5.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const selectedAnswer = form5.querySelector("input[name='answer']:checked").value;
//     localStorage.setItem("share-of-revenue", selectedAnswer);
//     console.log(localStorage.getItem("answer"));

//   });
// }