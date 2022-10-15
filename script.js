console.log("JavaScript is ready to run");

const videosContainer = document.getElementById("videosContainer");
const videoIdInput = document.getElementById('videoId');
let youTubeVideosId = [];



const loadVideos = () => {
	youTubeVideosId = JSON.parse(localStorage.getItem('youTubeVideosIds')) || []

};

const displayVideos = () => {
  const videosHTMLString = youTubeVideosId
    .map(
      (id) => `
			<li onclick='clickVideo(event,'${id}')'> 
			<img class='thumbnail' src='https://i3.ytimg.com/vi/${id}/sddefault.jpg' alt='yotube thmb ${id}' >
			<button class="delete-btn" >&times;</button>
			</li>
			`
    )
    .join("");
  videosContainer.innerHTML = videosHTMLString;
};

const saveVideo = (e) => {
	e.preventDefault();
	const videoId = videoIdInput.value;
	youTubeVideosId.unshift(videoId);
	videoIdInput.value = '';
	localStorage.setItem('youTubeVideosIds',  JSON.stringify(youTubeVideosId))
	displayVideos();
}
loadVideos();
displayVideos();
