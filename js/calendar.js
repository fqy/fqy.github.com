/* 日历制作 */
function calendar()
{
	var today = new Date();        //获取系统今天这个对象
	var week = today.getDay();       //获取today是星期几
	var day = today.getDate();       //获取today是几号
	var month = today.getMonth() + 1;       //获取today所在月份是几月
	var year = today.getFullYear();         //获取today所在年份是哪一年，返回四位数字
	var m = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);       //数组，存储一年每个月份的天数
	if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) m[1] = 29;   //判断今年是否为闰年，并确定是否更改2月的天数
	var day_number = m[month-1];                //这个月的天数
	// 0到6分别是周日到周六
	var first_day = (week + (7 - (day - 1) % 7)) % 7;    //1号是星期几
	var last_day = (week + (day_number - day) % 7) % 7;    //最后一天是星期几
	var week_num = (day_number - (7 - first_day) - (last_day + 1)) / 7;     //除去第一周和最后一周有多少周
	var d = 1;     //累计第几天并写在日历
	var r = 1;     //用于计算当前表格行数，0行为记录周几，所以从1开始
	var c;     //用于计算当前表格此行的第几个元素
	var i;     //用于计数
	var cal = document.getElementById("calendar");    //获取用于写日历的table
	//write日历
	//write第一周
	for(c = first_day; c < 7; c ++)
	{
		cal.rows[r].cells[c].innerHTML = d;
		d ++;
	}
	r++;
	//write除去第一周和最后一周的中间几周
	for(i = 0; i < week_num; i ++)
	{
		for(c = 0; c < 7; c ++)
		{
			cal.rows[r].cells[c].innerHTML = d;
			d ++;
		}
		r++;
	}
	//write最后一周
	for(c = 0; c < last_day + 1; c ++)
	{
		cal.rows[r].cells[c].innerHTML = d;
		d ++;
	}
}