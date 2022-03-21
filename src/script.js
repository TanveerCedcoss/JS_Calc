$(document).ready(function(){
    console.log('inside');
    $('.small, .small1, .small2, .zero').click(function(){
        $value = $(this).text();
        if($value=='AC')
        {
            location.reload();
        }
        if($value=='+/-' || $value=='.')
        {
            alert('Feature coming soon..');
        }
        if($value=='=')
        {
            console.log("equal");
            if(typeof($result)=='undefined')
            {
                $result = operations($number, $number2, $action);
                $("input").val($result);
                delete $action;
            }
            else
            {
                $result = operations($number, $result, $action);
                $("input").val($result);
                delete $action;
            }

            return;
        }
        if (typeof($number)=='undefined')
        {
            $number='';
        }
        $num = parseInt($value);
        if(typeof($result)=='undefined')
        {
            // console.log("working");
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
            if (typeof($action) == 'undefined')
                {
                    console.log("res="+$result);
                    if(isNaN($num))
                    {
                        $("input").val('');
                        $action= $value;
                        $number='';
                        console.log("defining action");
                    }
                    else
                    {
                        delete $result;
                        delete $number;
                        $number = $value;
                        console.log("new calac");
                    }
                }
                else
                {
                    if(isNaN($num))
                    {
                        if($result!='undefined')
                        {
                            $result = operations($number, $result, $action);
                            delete $number;
                            $action= $value;
                            $("input").val($result);
                        }
                    }
                    else
                    {
                        if (typeof($number)=='undefined')
                        {
                            $number='';
                        }
                        $number += $num;
                        $("input").val($number);
                    }
                  
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