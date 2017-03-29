<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

$(document).ready(funtion() {

  function getQoute() {
    var quotes - ["Hello, world!", "Hello, you!", "Blah, Blah"];
    var author - ["-Author1", "-Author2", "-Author3"];

    var randomNum = Math.floor((Math.random() * quotes.length));
    var randomQuote = quotes[randomNum];
    var randomAuthor = author[randomNum];

    $(".quote").text(randomQuote);
    $(".author").text(randomAuthor);

  }

  $(".btn").on("click", function() {
    getQuote();
  });
});
