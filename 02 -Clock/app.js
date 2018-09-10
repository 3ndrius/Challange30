
sHand = document.querySelector('.seconds-hand');
mHand = document.querySelector('.minutes-hand');
hHand = document.querySelector('.hours-hand');
function setDate() {
   const now = new Date();
   const seconds = now.getSeconds(); 
   const audio = document.querySelector('audio');
   audio.play();
    secondHand= ((seconds / 60) * 360  + 90);
    sHand.style.transform = `rotate(${secondHand}deg)`;
    const minutes = now.getMinutes(); 
    minutesHand = ((minutes/ 60) *360 +90);
    mHand.style.transform = `rotate(${minutesHand}deg)`;
    const hours = now.getHours();
    hoursHand = ((hours/12) * 360 + 90);
    hHand.style.transform = `rotate(${hoursHand}deg)`;
}
setInterval(setDate, 1000);

