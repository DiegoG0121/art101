function sortString(inputString) {
    return inputString.split('').sort().join('');
}

$("#submit").click(function(){
    const userName = $("#user-name").val();
    userNameSorted = sortString(userName);
    $("#output").html('<div class="info"><p class="sorted">' + userNameSorted + '</p></div>');
});