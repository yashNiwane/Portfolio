

// plus button
var plus = document.getElementById('plus');

function plusToggle() {
   plus.classList.toggle('plus--active');
}

plus.addEventListener('click', plusToggle);

// Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


// scroll animation
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const plusLinks = document.querySelectorAll(".plus__link");

    window.onscroll = () => {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute("id");
            }
        });

        plusLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    };
});



// download cv
function downloadCV() {
    const cvUrl = "Assets/files/Grey Clean CV Resume Photo.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Yash_Niwane.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}






document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Collect form data
        const formData = new FormData(form);

        // Replace 'YOUR_FORMSPREE_ENDPOINT' with your actual Formspree endpoint
        const endpoint = 'https://formspree.io/f/meqyeqkk';

        // Send POST request to Formspree
        fetch(endpoint, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            // Check if the submission was successful
            if (data.ok) {
                alert('Form submitted successfully!');
                // You can redirect or perform additional actions here
            } else {
                alert('Form submission failed. Please try again later.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An unexpected error occurred. Please try again later.');
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Array of icon URLs for languages
    const languageIcons = [
      "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png",
      "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
      "https://i0.wp.com/theicom.org/wp-content/uploads/2016/03/js-logo.png?ssl=1",
      "https://w7.pngwing.com/pngs/46/626/png-transparent-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template-blue.png",
      "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
    ];

    // Array of icon URLs for frameworks
    const frameworkIcons = [
      "https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/768px-flask_full_color_logo.svg.png?20160527092314",
      "https://e7.pngegg.com/pngimages/779/111/png-clipart-flask-python-web-framework-web-application-tutorial-others-miscellaneous-monochrome.png",
      "https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png",
      "https://cdn.iconscout.com/icon/free/png-256/django-1-282754.png",
    ];

    // Array of icon URLs for libraries
    const libraryIcons = [
      "https://cdn.iconscout.com/icon/free/png-256/jquery-10-1175155.png",
      "https://cdn.iconscout.com/icon/free/png-256/bootstrap-226077.png",
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*_6ooq0R60ba3UT5c-QVemA.png",
      "https://static.javatpoint.com/tutorial/ionic/images/ionic-logo.png",
      
    ];

    // Array of icon URLs for other technologies
    const otherIcons = [
      "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png",
      "https://cabinetm-beta.s3.amazonaws.com/0000017b-a34b-3144-e8cc-b62a7f533bb9.jpg",
      "https://cdn.worldvectorlogo.com/logos/postman.svg",
      "https://static-00.iconduck.com/assets.00/slack-icon-512x512-c00fe1yg.png",
            "data:image/png;base64,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",
      "https://5.imimg.com/data5/QK/LZ/QM/GLADMIN-13634783/selection-228-500x500.png",
    ];

    // Get the card containers
    const cardLanguages = document.getElementById("cardLanguages");
    const cardFrameworks = document.getElementById("cardFrameworks");
    const cardLibraries = document.getElementById("cardLibraries");
    const cardOther = document.getElementById("cardOther");

    // Predefined positions for each icon
    const positions = [
      { left: 50, top: 50 },
      { left: 150, top: 50 },
      { left: 250, top: 50 },
      { left: 50, top: 150 },
      { left: 150, top: 150 },
    ];

    // Append icons for languages to the card with fixed positions
    languageIcons.forEach((iconUrl, index) => {
      const icon = document.createElement("img");
      icon.className = "icon";
      icon.src = iconUrl;
      icon.alt = "Programming Logo";

      // Set fixed position
      icon.style.left = `${positions[index].left}px`;
      icon.style.top = `${positions[index].top}px`;

      cardLanguages.appendChild(icon);
    });

    // Append icons for frameworks to the card with fixed positions
    frameworkIcons.forEach((iconUrl, index) => {
      const icon = document.createElement("img");
      icon.className = "icon";
      icon.src = iconUrl;
      icon.alt = "Framework Logo";

      // Set fixed position
      icon.style.left = `${positions[index].left}px`;
      icon.style.top = `${positions[index].top}px`;

      cardFrameworks.appendChild(icon);
    });

    // Append icons for libraries to the card with fixed positions
    libraryIcons.forEach((iconUrl, index) => {
      const icon = document.createElement("img");
      icon.className = "icon";
      icon.src = iconUrl;
      icon.alt = "Library Logo";

      // Set fixed position
      icon.style.left = `${positions[index].left}px`;
      icon.style.top = `${positions[index].top}px`;

      cardLibraries.appendChild(icon);
    });

    // Append icons for other technologies to the card with fixed positions
    otherIcons.forEach((iconUrl, index) => {
      const icon = document.createElement("img");
      icon.className = "icon";
      icon.src = iconUrl;
      icon.alt = "Other Technology Logo";

      // Set fixed position
      icon.style.left = `${positions[index].left}px`;
      icon.style.top = `${positions[index].top}px`;

      cardOther.appendChild(icon);
    });
  });