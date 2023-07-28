function analysisSubmit() {
    const websiteURL = document.getElementById('search').elements['address'].value;
    const urlPattern = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/\S*)?$/;
    if (urlPattern.test(websiteURL)) {
        alert('Your URL is successfully submitted.');
        window.location.href = '/analysis.html';
        document.getElementById('search').reset();
        return false;
    } else {
        alert('Invalid URL. Please enter a valid website URL.');
        return false;
    }
}

const analysisData = () => {

    const { value: name } = document.getElementById("name");
    const { value: number } = document.getElementById("number");
    const { value: email } = document.getElementById("email");
    const { value: smm } = document.getElementById("smm");
    const { value: website } = document.getElementById("websites");
    const { value: message } = document.getElementById("message");

    console.log(`Name: ${name}`);
    console.log(`Contact No: ${number}`);
    console.log(`Email: ${email}`);
    console.log(`Social Media Handle Link: ${smm}`);
    console.log(`Website: ${website}`);
    console.log(`Message: ${message}`);


    alert("Your data is successfully submitted!");

    
    document.getElementById("analysisform").reset();

    
    return false;
};

const firebaseConfig = {
  apiKey: "AIzaSyDm6Iwdakaqap_p0gsWzM17_t3hPWu9m1A",
  authDomain: "digiwork-1c46b.firebaseapp.com",
  databaseURL: "https://digiwork-1c46b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "digiwork-1c46b",
  storageBucket: "digiwork-1c46b.appspot.com",
  messagingSenderId: "580115971656",
  appId: "1:580115971656:web:c595065b0954e8a803e27d",
  measurementId: "G-EB3TXJJ1PJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the Firestore database
const db = firebase.firestore();

// Get a reference to the contact form
const contactForm = document.getElementById('contactForm');

// Listen for the form submission
contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const contact = formData.get('contact');
    const email = formData.get('email');
    const message = formData.get('message');

    // Save the form data to Firestore
    db.collection('contact-submissions').add({
        name: name,
        contact: contact,
        email: email,
        message: message
    })
    .then(() => {
        // Form submission successful
        alert('Thank you for your submission!');
        contactForm.reset();
    })
    .catch((error) => {
        // Form submission failed
        console.error('Error submitting form:', error);
        alert('There was an error submitting the form. Please try again.');
    });
});
