<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


echo time();

session_start(); 
$session_life = time() - $_SESSION["timeout"];
$inactive = 0; 

var_dump($inactive, $session_life > $inactive);
if($session_life > $inactive){  
   session_destroy(); 
   echo 'Destroyed';
}

var_dump( $_SESSION["timeout"],$session_life );
$_session['timeout']= time();