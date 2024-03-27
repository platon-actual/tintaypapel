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
                    <ul>
                    <img src=${book.volumeInfo.imageLinks.smallThumbnail}>
                        <li><b>Nombre: </b> ${book.volumeInfo.title}</li>
                        <li><b>Autor/es: </b> ${book.volumeInfo.authors}</li>
                        // agregar boton para ver
                        // <a href=${book.volumeInfo.canonicalVolumeLink}><b>Ver este libro</b></a>
                    </ul>
                </div>
            `;
        });
        //mostrar los resultados en el documento
        document.getElementById('output').innerHTML = output;
    });
}