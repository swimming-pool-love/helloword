<?php
/*
 * @Author: your name
 * @Date: 2022-04-06 00:22:11
 * @LastEditTime: 2022-04-12 23:16:21
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Uncle-Cao的git本地库\计算机设计大赛\dataGet\get.php
 */
require("sql_config.php"); //数据库初始化设置：设置成你们自己本地的数据库信息即可
//声明变量用$
$country = $_GET["country"]; //拿到其$ajax发来的请求之后，读取data中的"country"字段
//$_GET["变量名"]对于传输方式为GET,$_POST["变量名对应传输方式为POST"]
$conn = new mysqli($servername, $username, $password); //创建一次数据库连接
mysqli_query($conn, "set names utf8"); //输出格式为utf-8
mysqli_select_db($conn, $database); //连接至数据库
/**
 * 获取GDP表的内容
 */
$gdp_query = "select year,Gross_domestic_product as GDP from gross_domestic_product where country='"; //按照你要请求的数据，直接写sql语句
$gdp_query .= $country . "'"; //php拼串使用 .=   ，要注意，传来的字段的数据类型，字符串要记得拼上双引号。（你可以不加看他报什么错）
$gdp_query .= " order by year desc"; //根据年份降序排列

$gdp_result = mysqli_query($conn, $gdp_query);
/**
 * 获取该国双边贸易内容
 */
$bta_query = "select year,imports_and_exports,imports,exports from the_bilateral_trade where country='";
$bta_query .= $country . "'";
$bta_query .= " order by year asc";

$bta_result = mysqli_query($conn, $bta_query);


/* */
$GDPResultArray = array(); //定义存放数据的数组
$BTAResultArray = array();
class GDP
{
    //方便起见我设了类，供下面创建对象承接函数
    public $year;
    public $GDP;
}
class BTA
{
    public $year;
    public $sum_import_export; //进出口总和
    public $imports; //进口
    public $exports; //出口
}

while ($gdp_row = mysqli_fetch_array($gdp_result, MYSQLI_ASSOC)) {
    //一行一行的读取匹配的内容
    $GDP = new GDP();
    $GDP->year = $gdp_row['year'];
    $GDP->GDP = $gdp_row['GDP'];
    $GDPResultArray[] = $GDP; //将数据给到数组
}
while ($bta_row = mysqli_fetch_array($bta_result, MYSQLI_ASSOC)) {
    $BTA = new BTA();
    $BTA->year = $bta_row['year'];
    $BTA->sum_import_export = $bta_row["imports_and_exports"];
    $BTA->imports = $bta_row["imports"];
    $BTA->exports = $bta_row["exports"];
    $BTAResultArray[]=$BTA;
}

$GDP = json_encode($GDPResultArray); //转为json格式输出（我们的echarts数据一般都是json格式的
$BTA = json_encode($BTAResultArray);

class result{
    public $GDP;
    public $BTA;
}
$result=new result();

$result->GDP=$GDP;
$result->BTA=$BTA;

echo json_encode($result); //echo返回数据

/**
 * 释放结果集,关闭数据库连接
 */
$bta_result->free();
$gdp_result->free();
$conn->close();
