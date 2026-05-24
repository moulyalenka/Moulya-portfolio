import "../styles/About.css";

import "/../styles/About.css";

function About({ mode }) {

return (

<section className={`about ${mode}`}>

<div className="about-container">

<p className="about-small">

The story so far

</p>


<h2 className="about-title">

{mode==="data" ? (

<>

Some people know exactly
<br/>

where they're going.

<br/><br/>

I know exactly
<br/>

how I think.

</>

):(

<>

Building things taught me
<br/>

that curiosity matters

as much as code.

</>

)}

</h2>


<div className="about-content">

<p className="about-paragraph">

{mode==="data" ? (

<>

I started with spreadsheets —
learning how raw agricultural data
could reveal something real
about how markets move.

That was enough to keep me going.

<br/><br/>

One project led to another.

Each problem led me somewhere
more interesting than the last.

<br/><br/>

SQL taught me to ask sharper questions.

Python taught me to sit with uncertainty
until the model made sense.

</>

):(

<>

Data taught me how to understand things.

Technology taught me I could build them.

<br/><br/>

I've always been more comfortable
with questions than answers —
which is probably why Computer Science
felt right.

It's a field that rewards people
who want to know why something works
before they try to make it work better.

</>

)}

</p>



<p className="about-paragraph">

{mode==="data" ? (

<>

Every project I've worked on
has been a small education in itself.

<br/><br/>

I'm a second-year CS student.

I don't have a fixed destination yet —
and I think that's honest,
not a weakness.

<br/><br/>

What I'm building is a foundation
flexible enough to go wherever
the problem is most interesting.

</>

):(

<>

My Tech side isn't separate
from my Data side.

It's the other half
of the same instinct.

<br/><br/>

When I'm not finding patterns
in a dataset,

I'm thinking about systems —
how pieces connect,
where things break,
what could be cleaner
or more logical.

<br/><br/>

I'm still early.

But I'm building with intention —
and I think that matters more
than having everything figured out.

</>

)}

</p>

</div>

</div>

</section>

)

}

export default About;