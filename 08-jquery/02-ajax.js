// const url = "https://anapioficeandfire.com/api/books/";

// const app = document.querySelector('#books');
// app.style.paddingLeft = 0;
// const loading = document.querySelector('#loading');

// const addBookToDOM = (item) => {
//   console.log(item);
//   let element = document.createElement('div');
//   let title = document.createElement('h4');
//   let author = document.createElement('p');
//   let published = document.createElement('p');
//   let pages = document.createElement('p');

//   element.style.display = 'flex';
//   element.style.flexDirection = 'column';
//   element.style.alignItems = 'center';
//   element.style.marginTop = '20px';

//   title.textContent = item.name;
//   author.textContent = `by ${item.authors[0]}`;
//   published.textContent = item.released.substr(0, 4);
//   pages.textContent = `${item.numberOfPages} pages`;

//   element.append(title);
//   element.append(author);
//   element.append(published);
//   element.append(pages);

//   app.append(element);
// };

// const fetchData = (url) => {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       data.forEach((item) => {
//         addBookToDOM(item);
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//       let li = document.createElement('li');
//       li.textContent = `An error occured. Please try again.`;
//       app.append(li);
//     })
//     .finally(() => {
//       app.removeChild(loading);
//     });
// };

// const $app = $("#books");
// const $loading = $("#loading");

// function addBookToDOM(item) {
//   console.log(item);

//   const $element = $("<div></div>").css({
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     marginBottom: "20px",
//   });

//   const $title = $("<h4></h4>").text(item.name);
//   const $author = $("<p></p>").text(`by ${item.authors[0]}`);
//   const $published = $("<p></p>").text(item.released.substr(0, 4));
//   const $pages = $("<p></p>").text(`${item.numberOfPages} pages`);

//   $element.append($title, $author, $published, $pages);
//   $app.append($element);
// }
// function fetchData(url) {
//   $.getJSON(url)
//     .done((data) => {
//       data.forEach(addBookToDOM);
//     })
//     .fail((jqXHR, textStatus, errorThrown) => {
//       console.error("AJAX error:", textStatus, errorThrown);
//       const $error = $("<li></li>").text(
//         "An error occurred. Please try again."
//       );
//       $app.append($error);
//     })
//     .always(() => {
//       $loading.remove();
//     });
// }

// fetchData(url);

$(document).ready(() => {
  const url = "https://anapioficeandfire.com/api/books/";

  const addBookToDOM = (item) => {
    console.log(item.name);

    $("#books").append(
      $("<div>")
        .css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        })
        .append($("<h3>").text(item.name))
        .append($("<p>").text(item.authors[0]))
        .append($("<p>").text(item.released.substr(0, 4)))
        .append($("<p>").text(`${item.numberOfPages} pages`))
    );
  };

  const fetchData = (url) => {
    $.ajax({
      type: "GET",
      url: url,
      success: (data) => {
        data.forEach((item) => {
          addBookToDOM(item);
        });
      },
      error: (error) => {
        console.error(error);
        $("#books").append(
          $("<div>").text(`An error occured. Please try again.`)
        );
      },

      complete: () => {
        $("#loading").remove();
      },
    });
  };

  fetchData(url);
});
