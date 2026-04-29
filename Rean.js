function goPage(page) {

    if (page === "vowel") {
        alert("ទំព័រ ស្រៈ");
    } else if (page === "consonant") {
        alert("ទំព័រ ព្យញ្ជនៈ");
    } else if (page === "number") {
        alert("អក្សរខ្មែរ និង អង់គ្លេស");
    } else if (page === "about") {
        alert("ព័ត៌មានអំពីកម្មវិធី Read Khmer");
    }

} // អនុគមន៍សម្រាប់បើក Pop-up និងចាក់វីដេអូ
function openModal(videoId) {
    var modal = document.getElementById("videoModal");
    var player = document.getElementById("youtubePlayer");

    // បង្កើត URL របស់ YouTube Embed
    var videoUrl = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";

    // ដាក់ URL ចូលទៅក្នុង iframe
    player.src = videoUrl;

    // បង្ហាញ Pop-up
    modal.style.display = "flex";
}

// អនុគមន៍សម្រាប់បិទ Pop-up
function closeModal() {
    var modal = document.getElementById("videoModal");
    var player = document.getElementById("youtubePlayer");

    // លាក់ Pop-up
    modal.style.display = "none";

    // ឈប់ចាក់វីដេអូ ដោយលុប URL ចេញពី iframe
    player.src = "";
}

// បិទ Pop-up នៅពេលចុចចំផ្ទៃខាងក្រៅប្រអប់វីដេអូ
window.onclick = function(event) {
    var modal = document.getElementById("videoModal");
    if (event.target == modal) {
        closeModal();
    }
}