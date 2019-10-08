var planetPromise=d3.json("planets.json")
    planetPromise.then(
    function(data)
        {
            A1(data)
            A2(data)
            B3(data)
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
    })
        }
   
//A3
var planetPromise=d3.json("planets.json")
    planetPromise.then(
    function(data)
        {
            console.log(planetPromise)
        })

//A4
var B3=function(data)
    {
        var pDiv=d3.select("#B3")
        .selectAll("img")
        .data("planets.json")
        .enter()
        .append("img")
        .attr("src", function(d)
             {
            return d
        })
    }