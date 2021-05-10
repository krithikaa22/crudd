$("#add-user").submit(function(event){
    alert("User added");    
})

$("#update-user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    console.log(unindexed_array);

    var data = {}
    $.map(unindexed_array, function(n,l){
        data[n['name']] = n['value']
    })
    var request = {
        "url": `http://localhost:3000/api/users/${data.id}`,
        "method": "PUT",
        "data": data
    }
    $.ajax(request).done(function(response){
        alert("Data updated");
    })
}) 

if(window.location.pathname == '/')
{
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url": `http://localhost:3000/api/users/${id}`,
            "method": "DELETE"
        }
        if(confirm("do you want to delete this user?"))
        {
            $.ajax(request).done(function(response){
                alert("Data deleted");
                location.reload();
            })
        }
    })
}