    function convert() {
        var fromtemp = document.getElementById("fromtemp").value;
        var totemp = document.getElementById("totemp").value;

        var inputtemp =parseFloat( document.querySelector("#temp").value);
        var resultunit ='';
        var result;
    
        switch (fromtemp) {
            case 'C': if (totemp === "F") {
                result = (9 / 5 * inputtemp) + 32;
                resultunit = 'F';
                break;
            }
            else if (totemp === 'K') {
                result = inputtemp + 273.15
                resultunit = 'K';
                break;
            } else {
                result = inputtemp;
                resultunit = 'C'
                break;
            }
    
            case 'F': if (totemp === "C") {
                result = inputtemp - 32 * (5/9);
                resultunit = 'C';
                break;
            }
            else if (totemp === 'K') {
                result = (inputtemp- 32) * 5/9 + 273.15
                resultunit = 'K';
                break;
            } else {
                result = inputtemp;
                resultunit = 'F'
                break;
            }
    
            
            case 'K': if (totemp === "C") {
                result = inputtemp + 273.15;
                resultunit = 'C';
                break;
            }
            else if (totemp === 'F') {
                result = (inputtemp - 273.15) * 9/5 + 32;
                resultunit = 'F';
                break;
            } else {
                result = inputtemp;
                resultunit = 'K'
                break;
            }
    
        }
      
      var answer =   document.querySelector("#resultfield").value = result.toFixed(2)+' '+resultunit;

      console.log(answer)
    }
