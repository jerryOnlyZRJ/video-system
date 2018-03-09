<?php
$dbhost = 'localhost:3306';  // mysql服务器主机地址
$dbuser = 'root';            // mysql用户名
$dbpass = '';          // mysql用户名密码
$conn = mysqli_connect($dbhost, $dbuser, $dbpass);
if(! $conn )
{
    die('连接失败: ' . mysqli_error($conn));
}
// 设置编码，防止中文乱码
mysqli_query($conn , "set names utf8");
 
$sql = 'SELECT * FROM info';
 
mysqli_select_db( $conn, 'test' );
$query = mysqli_query( $conn, $sql );
if(! $query ){
    die('无法读取数据: ' . mysqli_error($conn));
}
//将查询结果以JSON形式输出
$result = array();
while($rows=mysqli_fetch_array($query)){
	$count=count($rows);//不能在循环语句中，由于每次删除 row数组长度都减小  
	for($i=0;$i<$count;$i++){  
	    unset($rows[$i]);//删除冗余数据  
	}
        array_push($result, $rows);
}
echo json_encode($result);
?>