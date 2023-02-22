fetchapi()

async function fetchapi() {
    const res = await fetch('/api/movies')
    let data = await res.json()
    console.log(data);

    document.querySelector('#sortByRating').addEventListener('click', () => {
        let minRating = document.querySelector('#min-rating').value;
        let maxRating = document.querySelector('#max-rating').value;
        let data2 = data.filter(
            movie => Math.floor(movie.rating * 100) >= minRating && Math.floor(movie.rating * 100) <= maxRating
        );
        renderTable(data2);
    });

    renderTable(data)
    function renderTable(json) {
        document.querySelector('#parent').innerHTML = `
    <table>
        <tr>
            <th>
                Title
            </th>
            <th>
                Year
            </th>
            <th>
                Age Rating
            </th>
            <th>
                Genre
            </th>
            <th>
                Rating
            </th>
        </tr>
        ${json.map(movie => `<tr>
         <td>${movie.title} </td>
          <td>${movie.releaseDate.substring(0, 4)}</td>
           <td>${movie.age} </td>
            <td>${movie.genres} </td>
             <td> ${movie.rating * 100}% </td>`).join('')}
             </tr>
    </table>
    `
    }
}
