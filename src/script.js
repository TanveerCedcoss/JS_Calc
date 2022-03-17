$(document).ready(function(){
    console.log('inside');
    $('.small, .small1, .small2, .zero').click(function(){
        $value = $(this).text();
        if($value=='AC')
        {
            location.reload();
        }
        if($value=='=')
        {
            console.log("equal");
            $result = operations($number, $number2, $action);
            $("input").val($result);
            delete $action;

            return;
        }
        if (typeof($number)=='undefined')
        {
            $number='';
        }
        $num = parseInt($value);
        if(typeof($result)=='undefined')
        {
            console.log("working");
            if(isNaN($num))
            {
                if (typeof($action)!= 'undefined')
                {
                    console.log("num2="+$number2);
                    console.log("goto function");
                    $result = operations($number, $number2, $action);
                    $action= $value;
                    $number='';
                    $("input").val($result);
                }
                else
                {
                    $("input").val('');
                    $action= $value;
                    $number2= $number;
                    $number='';
                    console.log("checking");
                }
            }
            else
            {
                $number += $num;
                $("input").val($number);
            }
        }
        else 
        {
            console.log($number, $number2, $action, $result);
            if(isNaN($num))
            {
                $("input").val('');
                $result = operations($number, $result, $action);
                console.log("result");
                $action= $value;
                $number='';
                $("input").val($result);
            }
            else
            {
                $number += $num;
                $("input").val($number);
            }
           
        }


    });




    function operations($number, $number2, $action)
    {
        console.log("num1="+$number, "num2="+$number2, "action="+$action);
        switch($action)
        {
            case 'x': $result = parseInt($number) * parseInt($number2);
            console.log($result);
            return $result;
            break;
            case '÷': $result = parseInt($number2) / parseInt($number);
            console.log($result);
            return $result;
            break;
            case '+': $result = parseInt($number) + parseInt($number2);
            console.log($result);
            return $result;;
            break;
            case '-': $result = parseInt($number2) - parseInt($number);
            console.log($result);
            return $result;
            break;
            case '%': $result = parseInt($number2) % parseInt($number);
            console.log($result);
            return $result;
            break;
        }
    }
});