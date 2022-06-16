
$(document).ready(function(){
    let number1, number2, operator
    $(".button").click(
        function(){
            let value =  $(this).val()
            let oldValue =  $('#print').val()
            let newValue = oldValue +value
            //$('#print').val('')
            //number1 = oldValue
            if (value == 'x' || value =='+') {
                number1 = oldValue
                //operator = 'x'
                $('#print').val('');
                //number2 *= oldValue
                //number2 *= number1
            } else if (value == '=') {
                number2 = oldValue
                $('#print').val('')
                let result = parseInt(number1) * parseInt(number2)
                //parseInt(number1) *= parseInt(number2)
                //let result = number1 * number2
                
                $('#print').val(result);

            } else if (value == 'AC') {
                $('#print').val('');

            } 
             else {
                $('#print').val(newValue);
            }
        }
    );
},
);
//function my(number1, number2){



    

    
