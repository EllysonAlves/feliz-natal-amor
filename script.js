function showSnow() {
    const snowContainer = document.getElementById('snowflakes');
    for (let i = 0; i < 50; i++) {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.style.left = Math.random() * 100 + 'vw';
      snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
      snowflake.style.opacity = Math.random();
      snowflake.innerHTML = '❄️';
      snowContainer.appendChild(snowflake);
  
      // Remove o floco após a animação
      setTimeout(() => snowflake.remove(), 5000);
    }
  }
  