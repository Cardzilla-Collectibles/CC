function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }
  
  function showCard(cardName) {
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popupTitle');
    
    popupTitle.textContent = cardName;
    popup.classList.remove('hidden');
    
    // Add animation class
    popup.classList.add('animate-popup');
  }
  
  function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.add('hidden');
  }
  
  // Event listeners
  document.getElementById('closePopup').addEventListener('click', closePopup);
  
  // Close popup when clicking outside
  document.getElementById('popup').addEventListener('click', function(e) {
    if (e.target === this) {
      closePopup();
    }
  });
  
  // Add social icons to footer
  document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('footer');
    const socialIcons = document.createElement('div');
    socialIcons.className = 'social-icons';
    socialIcons.innerHTML = `
      <a href="#"><i class="fab fa-facebook"></i></a>
      <a href="#"><i class="fab fa-twitter"></i></a>
      <a href="#"><i class="fab fa-instagram"></i></a>
      <a href="#"><i class="fab fa-discord"></i></a>
      <a href="#"><i class="fab fa-youtube"></i></a>
    `;
    footer.insertBefore(socialIcons, footer.firstChild);
  });
