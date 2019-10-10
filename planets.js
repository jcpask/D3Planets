var planetPromise = d3.json("planets.json")
    planetPromise.then(
    function(data)
        {
            A1(data)
            A2(data)
            B3(data)
            B4(data)
        } )

//A1
var Names=["one","two","three"]
var A1 = function(data)
{
    d3.select("#A1").append("p").text(Names);
}

//A2
var A2=function(data)
    {
    var pDiv=d3.select("#A2")        
    .selectAll("div")
    .data(Names)
    .enter()
    .append("div")
    .text(function(d)
         {
        return d 
        return data
    })
        }
   
//B1
var planetPromise=d3.json("planets.json")
    planetPromise.then(
    function(data)
        {
            console.log(planetPromise)
        })

//B3
var B3=function(data)
    {
        var p2=d3.select("#B3")   
        .selectAll("div")
        .data("planetPromise")
        //I think the .data input is wrong, but I'm not sure how to get the actual pictures in there
        .enter()
        .append("img")
        .attr("src", function(d)
              //Not sure about the "src" either
             {
            return d
        })
    }

//B4
d3.select("#B4").append("p").text("Names of Planets");
d3.select("#B4").append("ol")
var B4=function(data)
    {
    var pDiv=d3.select("#B4")        
    .selectAll("li")
    .data("planetPromise")
    //This is obviously wrong, but I'm not sure how to get the info I need from within the converted json file
    .enter()
    .append("li")
    .text(function(d)
         {
        return d 
    })
        }


















