$.response.contentType = "text/html";
var output = "Hello, " + $.session.getUsername() + " <br><br>";
var conn = $.db.getConnection();
var pstmt = conn.prepareStatement( "SELECT CURRENT_USER FROM DUMMY" );
var rs = pstmt.executeQuery();
if (!rs.next()) {
	$.response.setBody( "Failed to retrieve data" );
	$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
}
else { 
	output = output + "This is the response from my SQL. The current user is: " + rs.getString(1);
}
rs.close();
pstmt.close();
conn.close();
$.response.setBody(output);