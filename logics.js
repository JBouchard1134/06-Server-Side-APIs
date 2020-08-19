$(document).ready(function () {     
        $.ajax({
          url: `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={fbd3dd657fc0f764e4c9e87b9648fa2c}`,
          method: "GET",
        }).then(function (response) {
          console.log(response);
        });
});