<!DOCTYPE html>
<html Dir = "ltr" lang="en">
	<head>
<meta https-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta https-equiv="content-script-type" content="text/javascript">
<meta https-equiv="content-style-type" content="text/css">
<meta https-equiv="content-language" content="en">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="author" content="Paul Thomas">	
<meta name="description" content="I'm Paul Thomas, a junior webdeveloper /creative programmer with good knowledge.">
<meta name="keywords" content="Paul Thomas, Programmer, Web developer,Startup, Interactive CV, Resume, CV,Algorithms, OOP">
<meta name="robots" content="index, follow">
	<title>Paul Thomas - B.Tech Computer Science Student - Interactive Resume</title>
	<style>
h1{font-family:Roboto;color:white;font-size:35px;text-align:center;style:"font-size:10vw"}
h2{font-family:Roboto;color: #22e590;font-size:50px;text-align:center;style:"font-size:10vw"}
h3{font-family:Roboto;color:black;font-size:30px;text-align:center;style:"font-size:10vw"}
h4{font-family:Roboto;color: #22e590; font-size:30px;text-align:left; margin-left:20%;style:"font-size:10vw"}
h6{font-family:Roboto;color:white; font-size:30px;text-align:center;style:"font-size:10vw"}
h7{font-family:Roboto;color:white;font-size:25px;text-align:center;style:"font-size:10vw"}
a5{font-family:Roboto;color:#818181;font-size:15px;style:"font-size:10vw"}
a6{font-family:Roboto;color:#818188;font-size:15px;style:"font-size:10vw"}
p{font-family:Candara;font-size:18px;text-align:justify;margin-left:20%;margin-right:20%;style:"font-size:10vw"}
k{font-family:Candara;color:#22e590;font-size:15px;text-align:center;margin-left:20%;style:"font-size:10vw"}
nav{font-family:Candara;color:black;font-size:25px;style:"font-size:10vw"}
body{font-family:"Lato",Candara;}
.sidenav{height:100%;width:0;position:fixed;z-index:;top:0;left:0;background-color:#ffffff;overflow-x:hidden;transition:0.9s;padding-top:60px;text-align:center;}
.sidenav a{  padding:8px 8px 8px 32px;text-decoration:none;font-size:25px;color:#000000;display:block;transition:0.3s;}
.sidenav a:hover{color:#f1f1f1;}
.sidenav .closebtn{position:absolute;top:0;right:25px;font-size:36px;margin-left:50px;}
@media screen and(max-height:450px){.sidenav{ padding-top:15px;}
.sidenav a{ font-size:18px;}}
	</style>
	<script language="javascript">
function openNav() {document.getElementById("mySidenav").style.width="28%";}
function closeNav() {document.getElementById("mySidenav").style.width="0%";}
	</script>
	</head>
<body background="bgcolor="#f3Eee0"">
<div id="mySidenav" class="sidenav">
<a  href="Paul's Personal Website.html" class="closebtn" onClick="closenav()"> &times; </a>
<a href="#">&#127968 Home</a>
<a href="#Profile">Profile</a>
<a href="#Experiences">Experiences</a>
<a href="#Abilities">Abilities</a>
<a href="#Achievements">Achievements</a>
<a href="#Projects">Projects</a>
<a href="#Favorites">Favorites</a>
<a href="#Contact">Contact</a>
<a href="#">&#9432 About</a>
</div>

<div id="Paul" style="background:#22e590; width:100%; "> 
<br><br><br><br>
<br><br><br><br>
	<center>
	<h1>Paul Thomas</h1>
<hr width="50%"  color="white" >
<br><br>
	<h7>Interactive Resume</h7>
<br><br><br><br>
<br><br><br>
	<h7>Read More<br>&#8964<br>&#8964</h7>
<br><br><br><br>
	</center>
</div> 

<div id="Profile" style="width:100%; background:#fffafa;">
<span style="font-size:30px; cursor:pointer" onClick="openNav()" >
<nav>&#9776; Menu</nav>
</span>
<hr>
<br><br>				
	<a name="Profile"><h2>Profile</h2></a>
<p><b> I'm a Computer Science Student </b></p>
<br><br><br><br>
<hr width="60%" color="grey" >

	<h4>About me</h4>
	<center>	
<p>
       I am a Computer Science Student. 
       I am a junior programmer with good knowledge of  C++ lanuguages.
       I love structure and order and I also stand for quality. 
       I love spending time on fixing little details and optimizing web apps.
       Also I like working in a team, you'll learn faster and much more.
	
</p>	
<a5>As the saying goes: 'two heads are better than one'.</a5>
<br><br><br><br>
<hr width="60%"  color="grey" >	
<br><br>	
	
<img src="Untitled-1.png" alt="Paul " style="max-width:50%;height:auto;"  >
	</center>
	<h4>Details</h4>
<p>
<strong>Name:</strong>
<br><br>Paul Thomas<br><br>
<strong>Age:</strong>
<br><br>18 years (On 2020)<br><br>
<strong>Location:</strong>
<br><br>
<a href="#" >'Cochin Area,kerala,India </a>
<br><br><br><br>
</p>
</div>		

<div id="Experiences" style="width:100%; background:#F3EFE0;">
<a name="Experiences"><br><br><h2>Experiences</h2></a>
	<center>
<a5><q>Given the choice between the experience of pain and nothing, I would choose pain.</q></a5>
<br><br>
<a6>- Unknown</a6>
	</center>
<br><br><br><br>
<hr width="60%"  color="grey" >
	<h4>Educations</h4>
<p><b>ASIET </b></p>
<p class="Experience-period">	Aug 2020 - Aug 2024
<br><br> Course - B.Tech - Computer Science)<br><br>
</p>
<k>'Kalady</k>	
	
<p><b>Brahmanadodayam HSS</b></p>
<p class="Experience-period">	June 2018- Mar  2020
<br><br> Course - Higher secondary (+1 & +2 - Computer Science)<br><br>
Subjects: Mathematics, Chemistry, Physics, English, Computer Science and Hindi
</p>
<k>'Kalady</k>
<br><br><br><br>
<p><b>Depaul Highschool</b></p>			
<p>Sept 2006-Mar 2018</p>
<p>Course - High School 
(LKG - 10<sup>th</sup> Standard)</p><br>
<k>'Angamaly</k>
<br><br><br>
</p>
	<center>
	<h4>Careers</h4>	
<a5> <q> It's not what you achieve, it's what you overcome...</q></a5><br>
<a6>- Unknown</a6>
<br><br><br>
	</center>
</div>

<div style="width:100%; background:#fffafa;">
<br><br>
<a name="Abilities"><h2>Abilities</h2></a>
	<center>
<a5><q> Ability may get you to the top, but it takes character to keep you there. </q></a5>
<br><br>
<a6>- Unknown</a6>
<br><br><br><br>
	</center>
<hr width="60%"  color="grey" >
<br>
	<h4>Skills</h4>
<p>Leadership</p><k>&#x02605&#x02605&#x02605&#x02605&#x02605</k>
<p>TeamWork</p><k>&#x02605&#x02605&#x02605&#x02605&#x02605</k>
<p>Creativity</p><k>&#x02605&#x02605&#x02605&#x02605&#x02605</k>
<p>Time Management</p><k>&#x02605&#x02605&#x02605&#x02605&#x02605</k>
<p>Decision Making</p><k>&#x02605&#x02605&#x02605&#x02605&#x02605</k>
<p>Coordinating Skill</p><k>&#x02605&#x02605&#x02605&#x02605&#x02605</k>
<p>Malayalam Typing</p><k>&#x02605&#x02605&#x02605&#x02605&#x02605</k>
<p>Communication</p><k>&#x02605&#x02605&#x02606&#x02606&#x02606</k>
<p>HTML5</p><k>&#x02605&#x02605&#x02605&#x02605&#x02605 </k>
<p>C++</p><k>&#x02605&#x02605&#x02605&#x02606&#x02606</k>
<p>Python</p><k>&#x02605&#x02605&#x02606&#x02606&#x02606</k>
<p>CSS</p><k>&#x02605&#x02605&#x02606&#x02606&#x02606</k>
<p>PHP</p><k>&#x02605&#x02605&#x02606&#x02606&#x02606</k>
<p>JavaScript</p><k>&#x02605&#x02605&#x02606&#x02606&#x02606</k>
<p>Java</p><k>&#x02605&#x02605&#x02606&#x02606&#x02606</k>
<p>MySQL</p><k>&#x02605&#x02605&#x02606&#x02606&#x02606</k>
<br><br>
	<hr width="60%"  color="grey" >
	<h4> Language</h4>     
<p>Malayalam (Mother Tongue)</p><k>&#x02605&#x02605&#x02605&#x02605&#x02605<br></k>
<p>English (Daily Use)</p><k> &#x02605&#x02605&#x02605&#x02605&#x02606<br></k>
<p>Hindi (survivable)</p><k>&#x02605&#x02605&#x02605&#x02606&#x02606<br></k>
<p>Tamil (survivable)</p><k>&#x02605&#x02605&#x02605&#x02606&#x02606<br></k>
<p>Spanish (On My Way)</p><k>&#x02605&#x02605&#x02606&#x02606&#x02606<br></k>
<p>Syriac (On My Way)</p><k>&#x02605&#x02606&#x02606&#x02606&#x02606 <br></k>
<br><br>
<hr width="60%"  color="grey" >
<br>
	<h4>Tools</h4>
<p>Ubuntu 18.04</p><k>&#x02605&#x02605&#x02605&#x02605&#x02605</k>
<p>Ubuntu 16.04</p><k>&#x02605&#x02605&#x02605&#x02605&#x02605</k>
<p>Ubuntu 11.04</p><k>&#x02605&#x02605&#x02605&#x02605&#x02605</k>
<p>Windows</p><k>&#x02605&#x02605&#x02605&#x02605&#x02605</k>
<p>Geany</p><k>&#x02605&#x02605&#x02605&#x02605&#x02606</k>
<p>Dev++</p><k>&#x02605&#x02605&#x02605&#x02605&#x02606</k>
<p>Turbo C++  </p><k>&#x02605&#x02605&#x02605&#x02605&#x02606</k>
<p>CorelDraw</p><k>&#x02605&#x02605&#x02605&#x02605&#x02605</k>
<p> Internet Explorer</p><k>&#x02605&#x02605&#x02605&#x02605&#x02605 </k>
<p> Firefox</p><k>&#x02605&#x02605&#x02605&#x02605&#x02605 </k>
<p>Ms Office</p><k>&#x02605&#x02605&#x02605&#x02605&#x02605</k>
<p>Libre Office</p><k>&#x02605&#x02605&#x02605&#x02605&#x02605</k>
<p>Open Office </p><k>&#x02605&#x02605&#x02605&#x02605&#x02605</k>
<p> Notepad</p><k>&#x02605&#x02605&#x02605&#x02605&#x02605</k>
<p>Adobe Pagemaker</p><k>&#x02605&#x02605&#x02605&#x02605&#x02605</k>
<p> Adobe Photoshop</p><k>&#x02605&#x02605&#x02605&#x02605&#x02605</k>
<br><br><br><br>
</div>

<div style="width:100% ; background:#F3EFE0;">
<a name="Achievements"><br><br><h2>Achievements</h2></a>
	<center>
<a5><q> Happiness is that state of consciousness which proceeds from the achievement of one's values. </q></a5>
<br><br>
<a6>- Unknown</a6>
	</center>
<br><br><br><br>
	<h4>Certificates</h4>

<br><br><center><a5>Loading...</a5></center> <br><br>
</div>

<div style="width:100%; background:White;">
<br><br>
<a name="Projects"><h2>Projects</h2></a>
	<center>
<a5><q>Those who plan do better than those who do not plan, even though they rarely stick to their plan.</q></a5>
<br><br>
<a6>– Winston Churchill.</a6>
	</center>
<br><br><br><center><a5>Loading...</a5></center> <br><br><br>
</div>

<div style="width:100% ; background:#F3EFE0;">
<a name="Favorites"><br><br><h2>Favorites</h2></a>
<p>
Symbol : The Bull<br><br>
Animal : The Bull<br><br>
Planet : Venus<br><br>
Flower : Lilly on the vally <br><br>
Color : Green <br><br>
Number : One <br><br>
Day : Friday <br><br>
Sport : Badminton<br><br>
Personality : Dr. A.P.J. Abdul Kalam<br><br>
Actor : Dwayne Johnson (the rock)<br><br>
Singer : Justin Bieber<br><br>
Film series : Fast Saga <br><br>
Film : Furious 7 <br><br>
Song : See You Again <br><br>
Stone : Emerald<br><br><br><br>
<p>
</div>

<div style="width:100%; background:#434242;">
<br><br>
<a name="Contact"><h1>Contact </h1></a>
	<center>
<a5><q> It's very, very dangerous to lose contact with living nature. </q></a5>
<br><br>
<a6>- Unknown</a6>
	</center>
<br><br>
<hr width="60%"  color="grey" >
 <p>
<b>Follow</b><br><br>
Mobile : <a target="_blank " href="+919207402979">&#9742 +919207402979</a><br><br>
E-mail : <a target="_blank " href ="mailto:paulthomas.site@gmail.com">&#9993 paulthomas.site@gmail.com</a><br><br>
Instagram : <a target="_blank " href="https://www.instagram.com/paul_thomas_20002/"> paul_thomas_20002</a><br><br>
LinkedIn : <a target="_blank " href="https://www.linkedin.com/in/paul-thomas-0996611ab/">Paul Thomas</a><br><br>
Github : <a target="_blank " href="https://github.com/PaulThomas20002">PaulThomas20002</a><br><br>
Facebook : <a target="_blank " href="https://www.facebook.com/profile.php?id=100052783148429">Paul Thomas</a><br><br>
Hackerrank : <a target="_blank " href="https://www.hackerrank.com/paulthomas20002">Paulthomas20002</a><br><br>
</p>
<hr width="60%"  color="#818181" >
<br><br>
<br><br>
<hr>
</div>
</body>
</html> 
