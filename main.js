// Set the copyright year automatically
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("year").textContent = new Date().getFullYear();
    
    // Start spawning clouds infinitely
    setInterval(spawnCloud, 2000); // Spawn a new cloud every 2 seconds
  });
  
  const screenshots = document.getElementsByClassName("screenshot");
  var open;
  var current;
  
  function scale(i) {
      var ss = screenshots[i];
      if (open != 1) {
          if (i == 0) {
              ss.style.transform = "translate(calc(100% + 10px), 0) scale(3.25)";
              open = 1;
              current = 0;
          } else if (i == 1) {
              ss.style.transform = "scale(3.25)";
              open = 1;
              current = 1;
          } else if (i == 2) {
              ss.style.transform = "translate(calc(-100% - 10px), 0) scale(3.25)";
              open = 1;
              current = 2;
          }
      } else if (open == 1 && current == i) {
          ss.style.transform = "";
          open = 0;
          current = null;
      }
      console.log(i);
  }
  
  // Function to spawn a new cloud element
  function spawnCloud() {
    const cloudsContainer = document.querySelector('.clouds');
    const cloud = document.createElement('img');
    cloud.src = 'cloud.png';
    cloud.alt = 'Cloud';
    cloud.className = 'cloud';
    
    // Randomize vertical position (e.g., between 0px and 150px)
    const topPos = Math.random() * 150;
    cloud.style.top = topPos + 'px';
    
    // Start off-screen left
    cloud.style.left = '-200px';
    
    // Randomize animation duration (e.g., between 15 and 30 seconds)
    const duration = 45 + Math.random() * 15;
    cloud.style.animationDuration = duration + 's';
    
    cloud.style.zIndex = Math.floor(Math.random() * 6);
    
    cloudsContainer.appendChild(cloud);
    
    // Remove the cloud after its animation completes to prevent DOM clutter
    setTimeout(() => {
      cloud.remove();
    }, duration * 1000);
  }
  