document.addEventListener('DOMContentLoaded', function() {
    // Navigation link click event listener
    document.querySelectorAll('nav ul li a').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
        });
    });

    // Show initial section
    showSection('about');

    // Function to show a section
    function showSection(sectionId) {
        document.querySelectorAll('.content-section').forEach(function(section) {
            section.style.display = 'none';
        });
        document.getElementById(sectionId).style.display = 'block';
    }

    // Event listener for form submission
    const form = document.getElementById('newConnectionForm');
    if (form) {
        form.addEventListener('submit', async function(event) {
            event.preventDefault();

            // Get form data
            const formData = new FormData(form);
            const formObject = {};
            formData.forEach((value, key) => formObject[key] = value);
            
            try {
                // Send form data to server
                const response = await fetch('/submit_form', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formObject)
                });

                if (response.ok) {
                    alert('New connection form submitted successfully');
                    form.reset();
                } else {
                    alert('Failed to submit form. Please try again.');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('An error occurred. Please try again.');
            }
        });
    }

});

toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

menu buttion 

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }