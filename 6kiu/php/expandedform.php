<?php
/**
 * 
 * Write Number in Expanded Form
 * You will be given a number and you will need to return it as a string in Expanded Form. For example:
 *
 * expanded_form(12); // Should return "10 + 2"
 * expanded_form(42); // Should return "40 + 2"
 * expanded_form(70304); // Should return "70000 + 300 + 4"
 * NOTE: All numbers will be whole numbers greater than 0.
 *  
 */
function expanded_form(int $n): string {

$houses = str_split((string)$n);  
$exponencial = count($houses);
$houseExp = $exponencial;
$string = '';
for($i = 0; $i < $exponencial; $i++){  
  $valuehouse = (int)$houses[$i];
  if($valuehouse > 0){
    $value =  $valuehouse * pow(10,$houseExp -1);   
    if(($exponencial - 1) > $i && $houses[$exponencial - 1]  != 0){
      $string .= (string)$value . " + ";
    }else{
      $string .= (string)$value;
    }
  }  
  $houseExp--;
}
return $string;  
}