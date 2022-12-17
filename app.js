const video = document.querySelector("#video");
const button = document.querySelector("#button");

//Prompt user to select media stream, pass to video element, then play
const selectMediaStream = async () => {
  try {
    // prompts and waits for user to select a screen to stream via await
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    //passes the mediaStream into the video's srcObject
    video.srcObject = mediaStream;
    //when the video has loaded its meta data, calls a function that plays it
    video.onloadedmetadata = () => {
      video.play();
    };
  } catch (err) {
    console.error(err);
  }
};

button.addEventListener("click", async () => {
  //Disable button
  button.disabled = true;
  //start picture in picture in vdieo without clicking yourself and wait for that to happen
  await video.requestPictureInPicture();
  //reset button
  button.disabled = true;
});

selectMediaStream();
