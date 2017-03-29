<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

$(document).ready(function() {
	function getQuote(){
		
		var quotes = ["Whatever I feel like I wanna do, gosh!", "Napoleon, don’t be jealous ’cause I’ve been chatting online with babes all day. Besides, we both know that I’m training to become a cage fighter.", "Knock it off, Napoleon! Make yourself a dang quesadilla!", "It’s pretty much my favorite animal. It’s like a lion and a tiger mixed… bred for its skills in magic.", "Yes… yes… yes!", "You think anybody wants a roundhouse kick to the face while I’m wearing these bad boys? Forget about it.", "Really? It took me like three hours to finish the shading on your upper lip. It’s probably the best drawing I’ve ever done.", "Sure the world wide web is great, but you, you make me ‘salvivate.’", "Give me some of your tots!", "Nunchuck skills… bowhunting skills… computer hacking skills… Girls only want boyfriends who have great skills!"];
		var author = ["-Napoleon Dynamite", "-Kip Dynamite", "-Grandma", "-Napoleon Dynamite", "-Napoleon Dynamite", "-Rex Kwon Do", "-Napoleon Dynamite", "-Kip Dynamite", "-Class bully", "-Napoleon Dynamite"];
		
		var randomNum = Math.floor((Math.random() * quotes.length));
		var randomQuote = quotes[randomNum];
		var randomAuthor = author[randomNum];
		
		$(".quote").text(randomQuote);
		$(".author").text(randomAuthor);
	};
	
	$(".btn").on("click", function() {
		getQuote();
	});
});
