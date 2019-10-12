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
var B3=function(planets)
    {
        var p2=d3.select("#B3")   
        .selectAll("div")
        .data(planets)
        .enter()
        .append("img")
        .attr("src", function(planet)
             {
            return planet.img;
        })
    }

//B4

var B4=function(planets)
    {
    d3.select("#B4").append("p").text("Names of Planets");
        var pDiv=d3.select("#B4").append("ol")
    .selectAll("li")
    .data(planets)
    .enter()
    .append("li")
    .text(function(planet)
         {
        return planet.name
    })
        }


















