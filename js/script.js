const videoElement = document.getElementById("video");
const shareButton = document.createElement("button");
shareButton.textContent = "Share";
shareButton.addEventListener("click", () => {
  navigator.share({
    title: "My Video",
    text: "Check out this video that I found",
    url: videoElement.src,
  });
});

videoElement.parentNode.insertBefore(shareButton, videoElement.nextSibling);