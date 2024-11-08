{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #f0f0f0;
    color: #333;
  }
  
  header {
    background-color: #4CAF50;
    color: white;
    text-align: center;
    padding: 2rem;
  }
  
  header h1 {
    font-size: 2.5rem;
  }
  
  nav ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
  }
  
  nav ul li {
    margin: 0 15px;
  }
  
  nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
  }
  
  nav ul li a:hover {
    text-decoration: underline;
  }
  
  section {
    padding: 2rem;
    margin: 1rem 0;
    background-color: white;
    border-radius: 8px;
  }
  
  h2 {
    color: #4CAF50;
  }
  
  .pollution-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-top: 1rem;
  }
  
  ul {
    list-style-type: disc;
    padding-left: 2rem;
  }
  
  footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 1rem;
    position: fixed;
    width: 100%;
    bottom: 0;
  }
  
  footer a {
    color: #4CAF50;
    text-decoration: none;
  }
  
  footer a:hover {
    text-decoration: underline;
  }
  5. JavaScript File (script.js)
  If you want to add interactivity (like toggling additional info or other dynamic features), you can use the same script.js file across all pages.
  
  For example, let's add a simple button to toggle some text on the Precautions page:
  
  javascript
  Copy code
  // Example to toggle visibility of additional information
  document.addEventListener("DOMContentLoaded", function() {
    const moreInfoButton = document.getElementById("more-info");
    if (moreInfoButton) {
      moreInfoButton.addEventListener("click", function() {
        const moreInfoText = document.getElementById("more-info-text");
        if (moreInfoText.style.display === "none" || moreInfoText.style.display === "") {
          moreInfoText.style.display = "block";
        } else {
          moreInfoText.style.display = "none";
        }
      });
    }
  });