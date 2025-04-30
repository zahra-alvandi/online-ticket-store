// const provincesSelect = document.querySelector(".provinces-select");
// const citiesSelect = document.querySelector(".cities-select");

// const cities = {
//     تهران: ["تهران", "شهریار", "کرج"],
//     تبریز: ["تبریز", "جلغا", "اهر"],
//     فارس: ["مشهد", "گناباد", "تربت جام"],
// };

// const provinces = Object.keys(cities);

// let newOption;
// provinces.forEach(function (province) {
//     newOption = document.createElement("option");
//     newOption.className = "px-4";
//     newOption.value = province;
//     newOption.innerHTML = province;

//     provincesSelect.append(newOption);
// });

// provincesSelect.addEventListener("change", function () {
//     const province = provincesSelect.value;

//     let provinceCities = cities[province];

//     citiesSelect.innerHTML = "";
//     let newCityOption;
//     provinceCities.forEach(function (city) {
//         newCityOption = document.createElement("option");
//         newCityOption.className = "px-4";
//         newCityOption.value = city;
//         newCityOption.innerHTML = city;

//         citiesSelect.append(newCityOption);
//     });
// });

const provincesSelect = document.querySelector(".provinces-select");
const citiesSelect = document.querySelector(".cities-select");

const cities = {
    تهران: ["تهران", "شهریار", "کرج"],
    تبریز: ["تبریز", "جلغا", "اهر"],
    فارس: ["مشهد", "گناباد", "تربت جام"],
};

const provinces = Object.keys(cities);

let newOption;
provinces.forEach(function (province) {
    newOption = document.createElement("option");
    newOption.className = "px-4";
    newOption.value = province;
    newOption.innerHTML = province;

    provincesSelect.append(newOption);
});

provincesSelect.addEventListener("change", function () {
    const province = provincesSelect.value;

    let provinceCities = cities[province];

    citiesSelect.innerHTML = "";
    let newCityOption;
    provinceCities.forEach(function (city) {
        newCityOption = document.createElement("option");
        newCityOption.className = "px-4";
        newCityOption.value = city;
        newCityOption.innerHTML = city;

        citiesSelect.append(newCityOption);
    });
});
