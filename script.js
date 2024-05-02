$(document).ready(()=>{
    let tableEle=$("<table>");
    let theadEle=$("<thead>");
    let tbodyEle=$("<tbody>");

    $.ajax({
        url:"https://jsonplaceholder.typicode.com/users",
        type:"GET",
        success: function(response){
            let jsondata=response;
            // console.log(jsondata);
            if(jsondata){
                let tr=$("<tr>");

                let th1=$("<th>").html("Name");
                tr.append(th1);

                let th2=$("<th>").html("Username");
                tr.append(th2);

                let th3=$("<th>").html("Email");
                tr.append(th3);

                let th4=$("<th>").html("Phone Number");
                tr.append(th4);

                theadEle.append(tr);
            }

            if(jsondata){
                $.each(jsondata,function(index,data){
                    let tr=$("<tr>");

                    let th1=$("<td>").html(data.name);
                    tr.append(th1);

                    let th2=$("<td>").html(data.username);
                    tr.append(th2);

                    let th3=$("<td>").html(data.email);
                    tr.append(th3);

                    let th4=$("<td>").html(data.phone);
                    tr.append(th4);

                    tbodyEle.append(tr);
                });
            }

            tableEle.append(theadEle);
            tableEle.append(tbodyEle);

            $("#result").append(tableEle);
        },
        error: function(err){
            console.log(err);
        }
    });



    $("#form").submit((e)=>{
        e.preventDefault(); 
        
        if($("#name").val()===""){
            alert("Name cannot be empty");
            return;
        }

        if ($("#username").val() === "") {
            alert("Username cannot be empty");
            return;
        }

        if ($("#email").val() === "") {
            alert("Email cannot be empty");
            return;
        }

        if ($("#phone").val() === "") {
            alert("Phone cannot be empty");
            return;
        }

        if (isNaN($("#phone").val()) && $("#phone").val().length != 10) {
            alert("Phone must be a valid number");
            return;
        }

        let tr=$("<tr>");

        let td1=$("<td>").html($("#name").val());
        let td2=$("<td>").html($("#username").val());
        let td3=$("<td>").html($("#email").val());
        let td4=$("<td>").html($("#phone").val());

        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);

        tbodyEle.append(tr);
    })
})