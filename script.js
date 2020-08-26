$(document).ready(function() {
    console.log("ready");

    var apikey = "9e963eb662b8d4f812a96940caa0713c"
    $("#form").submit(function(event) {
        console.log("submit");
        event.preventDefault();

        var city = $("#city_name").val();
        var url = "http://api.openweathermap.org/data/2.5/weather" + "?appid=" + apikey + "&q=" + city;
        console.log(url);

        $.ajax({
            method: 'Get',
            url: url,
            success: function(data) {
                console.log(data);
                $("#name").html(data.name);
                $("#desc").html(data.weather[0].main);
                $("#temp").html(data.main.temp - 273.15);

            },
            error: function(data) {
                console.log(data);
            }
        });
    });
});