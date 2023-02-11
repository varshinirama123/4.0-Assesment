
let submitButton = document.querySelector('input[type="submit"]');
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    let productCustomisation = document.querySelector('input[name="Customisation"]:checked').value;
    let digitalFeatures = document.querySelector('input[name="Digital features"]:checked').value;
    let dataDrivenServices = document.querySelector('input[name="Data-driven services"]:checked').value;
    let dataUsage = document.querySelector('input[name="Data usage"]:checked').value;
    let revenueShare = document.querySelector('input[name="Revenue share"]:checked').value;

    let Automation = document.querySelector('input[name="Automation"]:checked').value;
    let M2M = document.querySelector('input[name="M2M"]:checked').value;
    let readiness = document.querySelector('input[name="readiness"]:checked').value;
    let Autonomous = document.querySelector('input[name="Autonomous"]:checked').value;
    let Self_optimising = document.querySelector('input[name="Self_optimising"]:checked').value;
    let Modelling = document.querySelector('input[name="Modelling"]:checked').value;
    let Collection = document.querySelector('input[name="Collection"]:checked').value;
    let Op_data_usage = document.querySelector('input[name="Op_data_usage"]:checked').value;
    let Solution_usage = document.querySelector('input[name="Solution_usage"]:checked').value;
    let IT = document.querySelector('input[name="IT"]:checked').value;

    let Degree = document.querySelector('input[name="Degree"]:checked').value;
    let Measurement = document.querySelector('input[name="Measurement"]:checked').value;
    let Investments = document.querySelector('input[name="Investments"]:checked').value;
    let People_capabilities = document.querySelector('input[name="People_capabilities"]:checked').value;
    let Collaboration = document.querySelector('input[name="Collaboration"]:checked').value;
    let Leadership = document.querySelector('input[name="Leadership"]:checked').value;
    let Finance = document.querySelector('input[name="Finance"]:checked').value;
    
    let Data_management = document.querySelector('input[name="Data_management"]:checked').value;
    let Integration = document.querySelector('input[name="Integration"]:checked').value;
    let Chain_visibility = document.querySelector('input[name="Chain_visibility"]:checked').value;
    let Chain_flexibility = document.querySelector('input[name="Chain_flexibility"]:checked').value;
    let Lead_times = document.querySelector('input[name="Lead_times"]:checked').value;

    let Business_model = document.querySelector('input[name="Business_model"]:checked').value;
    let Data_driven = document.querySelector('input[name="Data_driven"]:checked').value;
    let Tracking = document.querySelector('input[name="Tracking"]:checked').value;
    let Automated_scheduling = document.querySelector('input[name="Automated_scheduling"]:checked').value;
    let Marketing_channels = document.querySelector('input[name="Marketing_channels"]:checked').value;
    let Business = document.querySelector('input[name="Business"]:checked').value;

    let Contracting_models = document.querySelector('input[name="Contracting_models"]:checked').value;
    let Risk = document.querySelector('input[name="Risk"]:checked').value;
    let Data_protection = document.querySelector('input[name="Data_protection"]:checked').value;
    let Intellectual_property = document.querySelector('input[name="Intellectual_property"]:checked').value;


    let data = {
        "productCustomisation": productCustomisation,
        "digitalFeatures": digitalFeatures,
        "dataDrivenServices": dataDrivenServices,
        "dataUsage": dataUsage,
        "revenueShare": revenueShare,

        "Automation": Automation,
        "M2M": M2M,
        "readiness": readiness,
        "Autonomous": Autonomous,
        "Self_optimising": Self_optimising,
        "Modelling": Modelling,
        "Collection": Collection,
        "Op_data_usage": Op_data_usage,
        "Solution_usage": Solution_usage,
        "IT": IT,

        "Degree": Degree,
        "Measurement": Measurement,
        "Investments": Investments,
        "People_capabilities": People_capabilities,
        "Collaboration": Collaboration,
        "Leadership": Leadership,
        "Finance": Finance,

        "Data_management": Data_management,
        "Integration": Integration,
        "Chain_visibility": Chain_visibility,
        "Chain_flexibility": Chain_flexibility,
        "Lead_times": Lead_times,

        "Business_model": Business_model,
        "Data_driven": Data_driven,
        "Tracking": Tracking,
        "Automated_scheduling": Automated_scheduling,
        "Marketing_channels": Marketing_channels,
        "Business": Business,

        "Contracting_models": Contracting_models,
        "Risk": Risk,
        "Data_protection": Data_protection,
        "Intellectual_property": Intellectual_property

    };
    localStorage.setItem("formData", JSON.stringify(data));
    // window.location.replace(page5.html);
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