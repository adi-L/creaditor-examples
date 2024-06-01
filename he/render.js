const endpoint = "https://api.creaditor.ai/v1/render/newsletter/build";
const components = [
  // Add your components here
];

const body = {
  components,
};

fetch(endpoint, {
  method: 'POST', // Specify the HTTP method as POST
  headers: {
    'Content-Type': 'application/json', // Indicate the content type
    // Add any additional headers here if needed
  },
  body: JSON.stringify(body) // Convert the body object to a JSON string
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.text(); // Parse the JSON from the response
  })
  .then(data => {
    console.log('Success:', data); // Handle the response data
  })
  .catch(error => {
    console.error('Error:', error); // Handle any errors
  });
