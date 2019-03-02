$("#form").submit(function(event) {
	event.preventDefault();
	var newFriend = {
		name: $("#name").val(),
		age: $("#age").val(),
		photo: $("#image").val(),
		location: $("#loc").val(),
		scores: []
	}
	for (var i = 1; i <= 10; i++) {
		var question = "#question" + i + " :selected";
		newFriend.scores.push($(question).val());a
	}
	$.post("/api/friends", newFriend).then(function(data) {
		var image = document.createElement("IMG");
		image.setAttribute("src", data.photo);
		image.setAttribute("width", "300");
		swal({
			title: "You have a " + data.matchPercent + "% match!",
			content: image,
			text: data.name,
		});
	});
});