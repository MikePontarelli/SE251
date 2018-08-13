
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

$(document).ready(function(){
		
        var d 	= new Date();
        var mth = d.getMonth()+1;
        var yr 	= d.getFullYear();

        $("#month").val(mth);
        $("#year").val(yr);
        showCalendar (mth, yr);

        $("#month,#year").change(function(e) {
            showCalendar ($("#month").val(), $("#year").val());
        });
});


function daysInMonth(anyDateInMonth) {
    return new Date(anyDateInMonth.getYear(), anyDateInMonth.getMonth()+1, 0).getDate();
}


function showCalendar (mth, yr) {
		
		
    var firstDayOfMonth = mth + "/1/" + yr;
    var d = new Date( firstDayOfMonth );
    var numberOfDaysInMonth = daysInMonth(d);
    var firstDayOfWeek = d.getDay();

    /* this is where you'll generate the grid, for now I will just show first day of week */
  
	


  var str = "";
    //str += "<li>Number of days in the month: " + numberOfDaysInMonth + "</li>";
   // str += "<li>First day of the week: " + firstDayOfWeek + " (" + daysOfTheWeek[firstDayOfWeek] + ")</li>";

    //str += "</ul>";
    str += "<div class = 'row'>"
	for(ndx = 0; ndx < (numberOfDaysInMonth + firstDayOfWeek); ndx++) 
	{
	if ( ndx % 7 == 0)
	{if (ndx!= 0 ) {str += "<div class = 'day'>" + (ndx - firstDayOfWeek) + "</div>";}
		str+= "</div> <div class = 'row'>"
		
}
	else if((ndx - firstDayOfWeek) < 1) {str += "<div class = 'day'>" + " " + "</div>";}
	else if (ndx < (numberOfDaysInMonth + firstDayOfWeek)) 
		{str += "<div class = 'day'>" + (ndx - firstDayOfWeek) + "</div>";}
		
		
	
	}
		str += "<div class = 'day' >" + (ndx - firstDayOfWeek) + "</div>"
    $("#results").html(str);
     
  
    
}
$(document).ready(function(){

	$(".day").click (function(e) {	

		if ($(this).css ("background-color") == "rgb(255,0,0)") {
			$(this).css ("background-color", "green");
		}
		else {
		$(this).css ("background-color", "red");
		};
		
		});	
		$("#yes").click (function(e){
			$(".day").css ("background-color","green");
		
		
		});
	
		$("#no").click (function(e){
			$(".day").css ("background-color","red");
		
		console.log ($(this).css ("background-color"))});	
	
});





