<?php
function travel($r, $zipcode) {
   
   $r = explode(',', $r);
    $count = 0;
   foreach($r as $value){
    if(empty($zipcode) && empty($value)){
      return ":/";
    }

     if(preg_match("~\b".$zipcode."\b~",$value)){  
     
       $v = explode($zipcode,$value);             
       $addr = $v[0];
       $address = explode(" ",$addr);
       $number = $address[0];
       array_shift($address);       
       $addresses[] = implode(" ", $address);   
       $numbers[] = $number;     
       $count++;
      }    
  }  
  if($count == 0){
  return $zipcode . ":/";
  }
    
    $addresses_trim = array_map('trim',$addresses);
    
    $addresses = implode(',',$addresses_trim);
    $numbers = implode(',',$numbers);
    $result = $zipcode . ":" . $addresses . "/" . $numbers;    
    return $result;   
    
}