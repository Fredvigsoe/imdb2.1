let MovieList1
let MovieRating
let MovieDuration
let MovieYear
fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
    .then((response) => response.json())
    .then((MovieData) => {
        MovieList1 = MovieData.title
        const ul = document.createElement("ul");
        document.body.appendChild(ul)
        console.log(MovieData)
        const ShowMoviesButton = document.getElementById('ShowMoviesButton')
        const NewerMoviesButton = document.getElementById('ShowNewerButton')
        const ClassicMoviesButton = document.getElementById('ShowClassicButton')
        const HighRatedMoviesButton = document.getElementById('ShowHighRatedButton')
        ShowMoviesButton.addEventListener('click', ()=> {
            ul.innerHTML = " "
            Render(MovieData)
        })
        NewerMoviesButton.addEventListener('click', ()=> {
            ul.innerHTML = " "
            RenderNewer(MovieData)
        })
        ClassicMoviesButton.addEventListener('click', ()=> {
            ul.innerHTML = " "
            RenderClassics(MovieData)
        });
        HighRatedMoviesButton.addEventListener('click', ()=> {
            ul.innerHTML = " "
            RenderRated(MovieData)
        });
        function Render(MovieData) {
            for (let i = 0; i < MovieData.length; i++) {
                const li = document.createElement("li")
                MovieList = MovieData[i].title;
                MovieRating = MovieData[i].rating
                MovieDuration = (MovieData[i].running_times / 60)
                MovieYear = MovieData[i].year
                li.innerHTML = "Movie Title: " + MovieList + "<br> " + "Released: " + MovieYear + "<br> " + "Running time: " + MovieDuration + " Min" + "<br> " + "Rating: " + MovieRating
                ul.appendChild(li)
            }
        }
        function RenderNewer(MovieData) {
            for (let i = 0; i < MovieData.length; i++) {
                if (MovieData[i].year >= 2014) {
                const li = document.createElement("li")
                MovieList = MovieData[i].title;
                MovieRating = MovieData[i].rating
                MovieDuration = (MovieData[i].running_times / 60)
                MovieYear = MovieData[i].year
                li.innerHTML = "Movie Title: " + MovieList + "<br> " + "Released: " + MovieYear + "<br> " + "Running time: " + MovieDuration + " Min" + "<br> " + "Rating: " + MovieRating
                ul.appendChild(li)
                }
        }
        }
        function RenderClassics(MovieData) {
            for (let i = 0; i < MovieData.length; i++) {
                if (MovieData[i].year <= 1999 ) {
                    const li = document.createElement("li")
                    MovieList = MovieData[i].title;
                    MovieRating = MovieData[i].rating
                    MovieDuration = (MovieData[i].running_times / 60)
                    MovieYear = MovieData[i].year
                    li.innerHTML = "Movie Title: " + MovieList + "<br> " + "Released: " + MovieYear + "<br> " + "Running time: " + MovieDuration + " Min" + "<br> " + "Rating: " + MovieRating
                    ul.appendChild(li)
                }
            }
        }
        function RenderRated(MovieData) {
            for (let i = 0; i < MovieData.length; i++) {
                if (MovieData[i].rating >= 8) {
                    const li = document.createElement("li")
                    MovieList = MovieData[i].title;
                    MovieRating = MovieData[i].rating
                    MovieDuration = (MovieData[i].running_times / 60)
                    MovieYear = MovieData[i].year
                    li.innerHTML = "Movie Title: " + MovieList + "<br> " + "Released: " + MovieYear + "<br> " + "Running time: " + MovieDuration + " Min" + "<br> " + "Rating: " + MovieRating
                    ul.appendChild(li)
                }
            }
        }


        const SearchBar = document.getElementById('search')

        SearchBar.addEventListener('keyup', (e) => {
            ul.innerHTML = ' '
            const searchString = e.target.value;

            const filteredMovies = MovieData.filter((MovieData) => {
                return (
                    MovieData.title.includes(searchString)
                )
                FilterMovie(MovieList)
            })
            function FilterMovie(MovieList) {
                const li = document.createElement("li")
                for (let i = 0; i < MovieList.title.includes(searchString); i++){
                li.innerHTML = "Movie Title: " + MovieList.title.includes(searchString) + "<br> " + "Released: " + MovieYear + "<br> " + "Running time: " + MovieDuration + " Min" + "<br> " + "Rating: " + MovieRating
                ul.appendChild(li)

                }
            }
            console.log(filteredMovies)
            Render(filteredMovies)
        })
    });