/* 日历制作 */
function calendar()
{
	var today = new Date();
	var week = today.getDay();
	var day = today.getDate();
	var month = today.getMonth() + 1;
	var m = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
	var day_number = m[month-1];                //这个月的天数
	// 0到6分别是周日到周六
	var first_day = (week + (7 - (day - 1) % 7)) % 7;    //1号是星期几
	var last_day = (week + (day_number - day) % 7) % 7;    //最后一天是星期几
	var week_num = (day_number - (7 - first_day) - (last_day + 1)) / 7;     //除去第一周和最后一周有多少周
	var d = 1;     //累计第几天并写在日历
	var i = 0;     //用于计数
	//write日历
	document.write("<table id = 'test'>");
	document.write("<tr>");
	document.write("<th scope = 'col'>Monday</th>");
	document.write("<th scope = 'col'>Tuesday</th>");
	document.write("<th scope = 'col'>Wednesday</th>");
	document.write("<th scope = 'col'>Thursday</th>");
	document.write("<th scope = 'col'>Friday</th>");
	document.write("<th scope = 'col'>Saturday</th>");
	document.write("<th scope = 'col'>Sunday</th>");
	document.write("</tr>");
	//write第一周
	document.write("<tr>");
	for(i = 0; i < first_day; i ++)
	{
		document.write("<td>&nbsp</td>");
	}
	for(i = first_day; i < 7; i ++)
	{
		document.write("<td>" + d + "</td>");
		d ++;
	}
	document.write("</tr>")
	//write除去第一周和最后一周的中间几周
	for(i = 0; i < week_num; i ++)
	{
		document.write("<tr>")
		for(var k = 0; k < 7; k ++)
		{
			document.write("<td>" + d + "</td>");
			d ++;
		}
		document.write("</tr>");
	}
	//write最后一周
	document.write("<tr>");
	for(i = 0; i < last_day + 1; i ++)
	{
		document.write("<td>" + d + "</td>");
		d ++;
	}
	for(i = last_day + 1; i < 7; i ++)
	{
		document.write("<td>&nbsp</td>");
	}
	document.write("</tr>");
	document.write("</table>");	
}