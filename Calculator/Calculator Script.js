$.fn.calculator = function () {
    var $this = this,
		$parentNode = $this;

    var expression = "";
    var notNumbers = ["+", "-", "/", "*", "%", ".", "±", "="];
    
    jQuery(".regularButton").add(".widerButton").add(".higherButton").click(function () {
        var $target = $(this);

        if ($target.text() !== "C" && $target.text() !== "=" && $target.text() !== "±") {
            if ($.inArray($target.text(), notNumbers) !== -1 && $.inArray(expression.slice(-1), notNumbers) !== -1) {
                alert("Not allowed!");
            }

            else if (expression.length === 0 && $.inArray($target.text(), notNumbers) !== -1 && $target.text() !== "-") {
                alert("Not allowed!");
            }

            else {
                expression += $target.text();
            }
        }

        else if ($target.text() === "C") {
            expression = "";
        }

        else if ($target.text() === "±") {
            if (expression.length === 0) {
                alert("Not allowed!");
            }

            else if (!$.isNumeric(expression)) {
                alert("Not allowed!");
            }

            else if (expression.slice(0, 1) === "-") {
                expression = expression.substring(1);
            }

            else {
                expression = "-" + expression;
            }
        }

        else {
            var result = eval(expression).toString();
            expression = result;
        }

        $(".result").val(expression);
    });
}
