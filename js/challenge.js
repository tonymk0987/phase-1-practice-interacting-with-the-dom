document.addEventListener('DOMContentLoaded', function() {
    // Timer Increment
    const timer = document.getElementById('counter');
    let count = 0;
    setInterval(function() {
      count++;
      timer.textContent = count;
    }, 1000);

    const plusBtn = document.getElementById('plus');
    const minusBtn = document.getElementById('minus');
    plusBtn.addEventListener('click', function() {
      count++;
      timer.textContent = count;
    });
    minusBtn.addEventListener('click', function() {
      count--;
      timer.textContent = count;
    });
  
    // "Like" Functionality
    const likeBtn = document.getElementById('heart');
    const likesList = document.querySelector('.likes');
    const likes = {};
    likeBtn.addEventListener('click', function() {
      if (!likes[count]) {
        likes[count] = 1;
      } else {
        likes[count]++;
      }
      const li = document.createElement('li');
      li.textContent = `${count} has been liked ${likes[count]} times`;
      likesList.appendChild(li);
    });
});