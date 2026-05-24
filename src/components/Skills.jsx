import "/home/user/Moulya-portfolio/src/styles/Skills.css";

function Skills({ mode }) {

return(

<section className="skills">

<div className="skills-header">

<p className="skills-small">
Toolbox
</p>

<h2 className="skills-title">

Tools that changed
<br/>
how I think.

</h2>

<p className="skills-sub">

Not just tools I learned —
tools that changed how I approach problems.

</p>

</div>



{mode==="data" && (

<div className="skills-grid">

<div className="skill-card">
<h3>Python</h3>
<p>
Where ideas slowly became things I could actually build.
</p>
</div>


<div className="skill-card">
<h3>SQL</h3>
<p>
Taught me that a better question always returns a better answer.
</p>
</div>


<div className="skill-card">
<h3>Power BI</h3>
<p>
Where analysis became communication.
</p>
</div>


<div className="skill-card">
<h3>Excel</h3>
<p>
The first tool that made data feel connected to something real.
</p>
</div>


<div className="skill-card">
<h3>Machine Learning</h3>
<p>
Learning to trust a model — and knowing exactly when not to.
</p>
</div>


<div className="skill-card">
<h3>Statistics</h3>
<p>
The language underneath every claim data tries to make.
</p>
</div>


<div className="skill-card">
<h3>Pandas</h3>
<p>
Where messy data slowly turned into structure.
</p>
</div>


<div className="skill-card">
<h3>Scikit-learn</h3>
<p>
Turned model-building from theory into something I could evaluate honestly.
</p>
</div>

</div>

)}



{mode==="tech" && (

<div className="skills-grid">

<div className="skill-card tech">
<h3>C Programming</h3>
<p>
Taught me what computers actually do beneath every abstraction.
</p>
</div>


<div className="skill-card tech">
<h3>Data Structures</h3>
<p>
Learning that efficiency is really a way of thinking.
</p>
</div>


<div className="skill-card tech">
<h3>React</h3>
<p>
Building interfaces changed how I think about people using them.
</p>
</div>


<div className="skill-card tech">
<h3>HTML + CSS</h3>
<p>
The foundation everything visible is quietly built on.
</p>
</div>


<div className="skill-card tech">
<h3>Operating Systems</h3>
<p>
Made me respect every layer of complexity I usually take for granted.
</p>
</div>


<div className="skill-card tech">
<h3>Digital Logic Design</h3>
<p>
Where computation stops being magic and starts making sense.
</p>
</div>


<div className="skill-card tech">
<h3>Git + GitHub</h3>
<p>
Taught me that good work deserves a record of how it got there.
</p>
</div>


<div className="skill-card tech">
<h3>Still Learning...</h3>
<p>
The most honest line in this entire portfolio.
</p>
</div>

</div>

)}

</section>

)

}

export default Skills;