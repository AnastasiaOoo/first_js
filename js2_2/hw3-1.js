function makeGETRequest(url, callback) {
    var xhr;
  
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) { 
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    const promise = new Promise((resolve, reject) =>{
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                resolve(xhr.responseText);
            } else{
                reject("Error");
            }
        }
    });
    promise
        .then(data => callback(data))
        .catch(error => {
            console.log(error)
        })
    xhr.open('GET', url, true);
    xhr.send();
  }
  
  