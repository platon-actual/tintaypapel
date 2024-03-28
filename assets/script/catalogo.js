document.getElementById('btn_search').addEventListener('click', searchBooks);

function searchBooks() {
    query = document.getElementById('query_text').value;
    alert(query);
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    .then((res) => res.json())
    .then((data)=> {
        // procesar el resultado de la búsqueda
        let output = '';
        data.items.forEach(book => {
            output += `
                <div class='results-box'>
                    <img src=${book.volumeInfo.imageLinks.smallThumbnail}> <br>
                    <b>Nombre: </b> ${book.volumeInfo.title} <br>
                    <b>Autor/es: </b> ${book.volumeInfo.authors} <br>
                    <a href=${book.volumeInfo.canonicalVolumeLink}><b>Ver este libro</b></a>
                </div>
            `;
        });
        //mostrar los resultados en el documento
        document.getElementById('output').innerHTML = output;
    })
    .catch((error) => console.log(error));
}