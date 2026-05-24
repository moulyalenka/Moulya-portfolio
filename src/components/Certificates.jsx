import "../styles/Certificates.css";

import internship from "../assets/images/internship.png";

import course from "../assets/images/course.png";


function Certificates({mode}){

return(

<section className="certificates">

{mode==="data" && (

<>

<div className="certificate-header">

<p className="certificate-small">

Certified Learning

</p>

<h2 className="certificate-title">

Learning that
<br/>
left a record.

</h2>

<p className="certificate-sub">

Not every lesson came from projects.

<br/><br/>

Some came from staying curious
long enough to finish what I started.

</p>

</div>



<div className="certificate-grid">


<div className="certificate-card">

<div className="certificate-image">

<img
src={internship}
alt="Internship Certificate"
/>

</div>

<h3>

Data Science Internship

</h3>

<p className="issuer">

SmartED

</p>

<p className="certificate-text">

One of the first experiences
that moved learning
beyond theory.

</p>

<span>

Internship Completion

</span>

</div>



<div className="certificate-card">

<div className="certificate-image">

<img
src={course}
alt="Course Certificate"
/>

</div>

<h3>

Data Science Course Completion

</h3>

<p className="issuer">

SmartED

</p>

<p className="certificate-text">

Finished with more questions
than I started with —
which felt like progress.

</p>

<span>

Course Completion

</span>

</div>

</div>

</>

)}

</section>

)

}

export default Certificates;