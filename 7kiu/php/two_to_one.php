<?php

function longest($a,$b){

    $a = str_split($a);

    $b = str_split($b);

    $c = range('a', 'z');

    print_r($a);
    print_r($b);
    print_r($c);
      
    foreach($c as $str){
        if(in_array($str, $a) || in_array($str, $b)){
            $d[] = $str;
        }
    }

    return implode($d);

}

$a = "abcdef";
$b = "zfeg";
print_r(longest($a,$b));