<?php


/*
John and Mary want to travel between a few towns A, B, C ... 
Mary has on a sheet of paper a list of distances between these towns. ls = [50, 55, 57, 58, 60]. 
John is tired of driving and he says to Mary that he doesn't want to drive more than 
t = 174 miles and he will visit only 3 towns.

Which distances, hence which towns, they will choose so that the sum of the distances is
 the biggest possible to please Mary and John?

Example:

With list ls and 3 towns to visit they can make a choice between: 
[50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],
[55,57,58],[55,57,60],[55,58,60],[57,58,60].

The sums of distances are then: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.

The biggest possible sum taking a limit of 174 into account is then 173 and the distances of the 3 corresponding towns is [55, 58, 60].

The function chooseBestSum (or choose_best_sum or ... depending on the language) will take as parameters t (maximum sum of distances, integer >= 0), k (number of towns to visit, k >= 1) and ls (list of distances, all distances are positive or null integers and this list has at least one element). The function returns the "best" sum ie the biggest possible sum of k distances less than or equal to the given limit t, if that sum exists, or otherwise nil, null, None, Nothing, depending on the language. With C++, C, Rust, Swift, Go, Kotlin return -1.

Examples:

ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163

xs = [50] choose_best_sum(163, 3, xs) -> nil (or null or ... or -1 (C++, C, Rust, Swift, Go)

ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228
*/

function chooseBestSum($t, $k, $ls) {
    //combination 
    $a =1;
    $b =1;
    $c= 1;


    for ($i=1; $i <= count($ls); $i++) {         
        $a = $a * $i;        
    }

    //print $a . PHP_EOL;

    for ($i=1; $i <= (count($ls) -$k); $i++) { 
        $b = $b * $i;
    }

    //print $b . PHP_EOL;


    for ($i=1; $i <= $k; $i++) {         
        $c = $c * $i;
    }

    //print $c . PHP_EOL;

    $x = $a / ($b * $c);

    //print $x . PHP_EOL;

    for ($i=0; $i < $x ; $i++) { 
        $parent = [];
        for ($j=0; $j < count($ls); $j++) { 
            
            
            if(count($parent) < $k){
                if(($j+$i) < count($ls)){
                    $parent[] = $ls[$i + $j];
                    //print $i + $j ;
                }
                
                if(($j+$i) >= count($ls)){                    
                    if ( ($j+$i) - count($ls) < count($ls) ){
                        $parent[] = $ls[($j+$i) - count($ls)];
                        
                        //print ($j+$i) . "($j+$i)";
                        //print (($j+$i) - count($ls)) ;
                    } else {
                        $index = ($j+$i) - count($ls);
                        

                        while ( $index >= count($ls) ) {                        
                            $index = $index - count($ls);
                        }

                        //$parent[] = $ls[(($j+$i) - count($ls)) - 1];
                        $parent[] = $ls[$index];
                        
                    }
                    
                    
                }
            }

        }
       //print_r($parent);
       //print PHP_EOL;
        $groups[] = $parent;
    }



    $ta = 0;
    $tf = 0;


    print_r($groups);
    //exit;
    for ($i=0; $i < count($groups); $i++) { 
        for ($j=0; $j < count($groups[$i]); $j++) { 
            $ta += $groups[$i][$j];
            
        }
        
        if($tf == 0){
            $tf = $ta;
        } elseif($tf < $ta && $tf <= $t ){
            $tf = $ta;
        }

        


    }
    
    print $tf;
    return $tf;

}


$ts = [50, 55, 57, 58, 60];
chooseBestSum(163, 3, $ts);
        
//chooseBestSum(1, 3, [1,2,3,4]);