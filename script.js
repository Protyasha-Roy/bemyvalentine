document.getElementById('noButton').addEventListener('mouseenter', function() {
    const buttonRect = this.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const newX = Math.random() * (viewportWidth - buttonRect.width);
    const newY = Math.random() * (viewportHeight - buttonRect.height);
    this.style.transform = 'translate(' + newX + 'px, ' + newY + 'px)';
  });
  document.getElementById('noButton').addEventListener('click', function() {
    const buttonRect = this.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const newX = Math.random() * (viewportWidth - buttonRect.width);
    const newY = Math.random() * (viewportHeight - buttonRect.height);
    this.style.transform = 'translate(' + newX + 'px, ' + newY + 'px)';
  });
  document.getElementById('yesButton').addEventListener('click', function() {
    const container = document.querySelector('.container');
    container.innerHTML = '<img src="cheering.gif" alt="Funny GIF">';
  });
  