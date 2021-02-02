function shortenURL() {
  let long_url = document.querySelector('#long-url').value.replace(/\s+/g, ''); // remove blank space
  if (long_url === '') {
    Swal.fire('Please try again!', 'Paste the URL in the input box.');
  } else {
    axios.post('/api/url/shorten',{long_url: long_url})
      .then(res=> {
        if(res.status === 200 && res.data.short_url) {
          Swal.fire('The shortened URL',`${res.data.short_url}`).then((result) => {
            if (result.isConfirmed) {
              document.querySelector('#long-url').value = '';
            }
          });
        } else {
          console.log(res.status);
        }
      })
      .catch(err => {
        Swal.fire('Please try again!', 'The URL is invalid.').then((result) => {
          if (result.isConfirmed) {
            document.querySelector('#long-url').value = '';
          }
        });
        console.log(err, err.response);
      });
  }
}