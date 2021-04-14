// Function to allow for changing pages while still keeping the website a single-page application
// This function is called when the user clicks one of the links on the navbar
function change_view(id) {
    document.getElementById("page_content").innerHTML=document.getElementById(id+"_desc").innerHTML;
    document.getElementById("index").className="is-hidden"; //Hide home page so it doesn't appear below current page
}