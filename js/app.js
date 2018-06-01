var displayValParziale = "";
var displayValTotale = 0;

$(function () {
	calcolatore();
});

function calcolatore() {
	$("button:not(#btnLinkedin)").click(function () {
		var btnPressed = $(this).val();
		var totale = $("#totale").html();
		var btnSenzaDisplay = ["c", "/", "x", "-", "+", "=", "."];

		displayValParziale += btnPressed;
		$("#parziale").html(displayValParziale);

		for (var x = 0; x < btnSenzaDisplay.length; x++) {
			if (btnPressed == btnSenzaDisplay[x]) {
				switch (btnPressed) {
					case "c":
						$("#totale").html(displayValTotale);
						$("#parziale").html("");
						displayValParziale = "";
						break;
					case "=":
						var split = displayValParziale.slice(0, -1);
						$("#totale").html(eval(split));
						$("#parziale").html(eval(split));
						displayValParziale = eval(split);
						break;
				}
			}
		}
	});
}
