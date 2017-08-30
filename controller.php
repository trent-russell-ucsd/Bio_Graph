<?php 
    //error_reporting(E_ALL); 
    //ini_set('display_errors', 1);
    //$method = $_SERVER['REQUEST_METHOD'];
    //$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));
    //$input = json_decode(file_get_contents('php://input'),true);

    $action = $_POST['function'];

    switch($action) {
        case 'test': echo test_php(); break;
        default: break;
    }

    function test_php(){
require 'vendor/autoload.php'; // include Composer's autoloader

$client = new MongoDB\Client("mongodb://localhost:27017");
$collection = $client->capellabio->collection;

//$result = $collection->find( [ 'name' => 'Hinterland', 'brewery' => 'BrewDog' ] );

$result = $collection->find(['Clinical:Age' => '45']);

$ret = "<div>";
foreach ($result as $entry) {
    $ret.= "<div>".$entry['Sample'].': AGE: '.$entry['Clinical:Age']." : ".$entry['A1BG']."</div>";
}
$ret.= "</div>";
        return $ret;
    }//end test_php()
 
?>
