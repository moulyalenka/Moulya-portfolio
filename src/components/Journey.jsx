import "../styles/Journey.css";

function Journey({ mode }) {

const dataJourney=[

{
id:"1",
class:"card1",
title:"Agricultural Commodity Analysis",
text:"My first real project connecting data with seasons, markets and real-world meaning."
},

{
id:"2",
class:"card2",
title:"SQL — Asking Better Questions",
text:"SQL taught me that good analysis starts before writing the query."
},

{
id:"3",
class:"card3",
title:"Power BI & Dashboards",
text:"Data became visual. Insights became stories."
},

{
id:"4",
class:"card4",
title:"Data Science with Python",
text:"Started working with preprocessing, visualisation and exploration."
},

{
id:"5",
class:"card5",
title:"ML + Dashboards",
text:"Projects stopped feeling separate and started becoming systems."
},

{
id:"6",
class:"card6",
title:"Certificates + Growth",
text:"Course completion, internship and stronger foundations."
},

{
id:"7",
class:"card7",
title:"Still Building. Still Learning.",
text:"The road keeps going."
}

];


const techJourney=[

{
id:"1",
class:"card1",
title:"C Programming",
text:"Where computers stopped feeling magical. I started understanding what happens beneath code."
},

{
id:"2",
class:"card2",
title:"Data Structures",
text:"Arrays, stacks and trees weren't just topics. They changed how I think."
},

{
id:"3",
class:"card3",
title:"SQL",
text:"Even in tech, SQL became part of my thinking. Better questions. Better systems."
},

{
id:"4",
class:"card4",
title:"Python",
text:"Less time fighting syntax. More time building ideas."
},

{
id:"5",
class:"card5",
title:"Coming Soon",
text:"New systems. New projects. New problems."
},

{
id:"6",
class:"card6",
title:"Coming Soon",
text:"Still exploring. Still building."
},

{
id:"7",
class:"card7",
title:"Still Building. Still Learning.",
text:"The road keeps going."
}

];

const journey=
mode==="tech"
?techJourney
:dataJourney;


return(

<section className="journey">

<div className="journey-heading">

<p>
MY JOURNEY
</p>

<h1>

Every turn taught me something.

<span>

Every destination changed how I think.

</span>

</h1>

</div>


<div className="road-container">

<div className="road-path"></div>

<div className="pin p1"></div>
<div className="pin p2"></div>
<div className="pin p3"></div>
<div className="pin p4"></div>
<div className="pin p5"></div>
<div className="pin p6"></div>
<div className="pin p7"></div>


{journey.map((item)=>(

<div
key={item.id}
className={`journey-card ${item.class}`}
>

<div className="number">

{item.id}

</div>

<h3>

{item.title}

</h3>

<p>

{item.text}

</p>

</div>

))}

</div>

</section>

)

}

export default Journey;