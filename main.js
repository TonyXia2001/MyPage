fetch('./aboutme.txt')
    .then(response => response.text())
    .then((data) => {
        console.log(data)
    })
