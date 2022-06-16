var ratingValue;

function Rating(v) {
    ratingValue = v;
}

function SubmitRating() {
    localStorage.setItem("Rate", ratingValue);
    document.open("./Thank-you.html", '_self', 'noopener=false');
}

function Load(v) {
    var Rating = localStorage.getItem("Rate");
    console.log(Rating);
    var element = document.getElementById("rating");
    element.innerHTML = `You are Selected ${Rating} of 5`;
}