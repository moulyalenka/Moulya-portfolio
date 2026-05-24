import "/home/user/Moulya-portfolio/src/styles/Projects.css";
import dashboard from "/home/user/Moulya-portfolio/src/assets/images/dashboard.png";
import roc_curve from "/home/user/Moulya-portfolio/src/assets/images/roc_curve.png";
import metrics from "/home/user/Moulya-portfolio/src/assets/images/metrics.png";
import satisfaction from "/home/user/Moulya-portfolio/src/assets/images/satisfaction.png";
import heatmap from "/home/user/Moulya-portfolio/src/assets/images/heatmap.png";
import prediction from "/home/user/Moulya-portfolio/src/assets/images/model_prediction.png";
import pca_plot from "/home/user/Moulya-portfolio/src/assets/images/pca_plot.png";
import rfm_table from "/home/user/Moulya-portfolio/src/assets/images/rfm_table.png";
import agri_dashboard from "/home/user/Moulya-portfolio/src/assets/images/powerBI.png";
import agri_trend from "/home/user/Moulya-portfolio/src/assets/images/price_trend.png";
import product_ranking from "/home/user/Moulya-portfolio/src/assets/images/Product_Ranking.png";
import repeat_customers from "/home/user/Moulya-portfolio/src/assets/images/Repeat_Vs_Onetime.png";
import report1 from "/home/user/Moulya-portfolio/src/assets/images/powerBI.png";

import report2 from "/home/user/Moulya-portfolio/src/assets/images/dashboard.png";

import report3 from "/home/user/Moulya-portfolio/src/assets/images/report3.png";

function Projects({ mode })  {

return(

<section className="projects">

<div className="projects-header">

<p className="projects-small">
Selected Work
</p>

<h2 className="projects-title">

Projects that taught me
<br/>
how to think.

</h2>

<p className="projects-sub">

Not just things I built —
things that changed how I approach problems.

</p>

</div>

{mode==="data" && (
<div className="projects-grid">

{/* ROW 1 */}

<div className="project-card">

  <div className="project-image">
    <div className="project-preview-grid">

   <img
      src={dashboard}
      alt="Dashboard"
   />

   <img
      src={roc_curve}
      alt="ROC Curve"
   />

   <img
      src={metrics}
      alt="Metrics"
   />

</div>
  </div>

  <h2>
    Loan Default Prediction System
  </h2>
  <br></br>
  <p className="project-hook">
    Not every loan gets repaid.

    <br/><br/>

    The question is whether
    the pattern was always there.
  </p>

  <p className="project-desc">

    Designed and built a loan default
    prediction system — handling the full
    workflow from data to decision.

    <br/><br/>

    Used classification models evaluated
    on F1 and ROC metrics, then translated
    findings into a dashboard built for
    clarity, not just completeness.

  </p>

  <div className="project-tags">

    <span>Python</span>
    <span>SQL</span>
    <span>Scikit-learn</span>
    <span>Classification</span>
    <span>F1</span>
    <span>ROC-AUC</span>
    <span>Dashboards</span>

  </div>

  <div className="project-learn-box">

    <h4>What I Learned</h4>

    <p>
      F1 Score made me think about
      the cost of being wrong in two
      different directions.

      <br/><br/>

      False negatives and false positives
      don't carry equal weight in financial
      prediction — and understanding that
      changed how I evaluated everything.
    </p>

  </div>

  <a
href="https://github.com/moulyalenka/Loan-Default-Prediction-System/tree/main/MoulyaLenka_Loan_Default_Prediction_system"
target="_blank"
rel="noopener noreferrer"
>

<button className="project-btn">

View Project

</button>

</a>

</div>

<div className="project-card">

<div className="project-image">

<div className="project-preview-grid">

<img
src={satisfaction}
alt="Customer Satisfaction"
/>

<img
src={heatmap}
alt="Heatmap"
/>

<img
src={prediction}
alt="Model Prediction"
/>

</div>

</div>


<h2>
Airline Customer Satisfaction Prediction
</h2>

<br></br>

<p className="project-hook">

Satisfaction isn't in the data.

<br/><br/>

It has to be constructed from it —
and that distinction matters.

</p>


<p className="project-desc">

A collaborative ML project exploring
the patterns behind airline customer satisfaction.

<br/><br/>

We handled preprocessing and feature engineering
before building and evaluating classification models —
finishing with visual analysis designed to communicate
what the model actually found,
not just whether it worked.

</p>


<div className="project-tags">

<span>Python</span>

<span>Scikit-learn</span>

<span>Preprocessing</span>

<span>Feature Engineering</span>

<span>Classification</span>

<span>Visualisation</span>

<span>Team Project</span>

</div>


<div className="project-learn-box">

<h4>
What I Learned
</h4>

<p>
Collaboration taught me that
the best analytical decisions
aren't always the fastest ones.
<br></br>

Slowing down to align with someone else
often produced a cleaner result
than moving quickly alone.

</p>

</div>

<a
href="https://github.com/moulyalenka/Airline-Customer-Satisfaction-Prediction/tree/main/Airline_Project"
target="_blank"
rel="noopener noreferrer"
>

<button className="project-btn">

View Project

</button>

</a>

</div>



{/* ROW 2 */}

<div className="project-card">

<div className="project-image">

<div className="project-preview-grid-two">

<img
src={pca_plot}
alt="PCA Plot"
/>

<img
src={rfm_table}
alt="RFM Table"
/>

</div>

</div>


<h2>
Retail Store Customer Clustering
</h2>

<br/>

<p className="project-hook">

Every dataset contains structure
that nobody designed.

<br/><br/>

The work is learning to see it.

</p>


<p className="project-desc">

A segmentation project exploring
hidden structure in retail customer data.

<br/><br/>

Starting from raw preprocessing
and exploratory analysis,

I applied K-Means clustering
to surface natural groupings —
then used PCA to compress
and visualise what the model found
in a way that made the patterns
interpretable, not just mathematical.

</p>


<div className="project-tags">

<span>Python</span>

<span>K-Means</span>

<span>PCA</span>

<span>Seaborn</span>

<span>EDA</span>

<span>Unsupervised</span>

<span>Preprocessing</span>

</div>


<div className="project-learn-box">

<h4>
What I Learned
</h4>

<p>

This project changed how I think
about what a model actually does.
<br/><br/>
Supervised learning finds answers.
<br/><br/>
Unsupervised learning finds
the right questions.
<br/><br/>

That distinction reshaped how
I approach any new dataset now.
</p>

</div>


<a
href="https://github.com/moulyalenka/Retail-Store-Customer-Clustering/tree/main/MoulyaLenka_Retail_Store_Customer_Clustering"
target="_blank"
rel="noopener noreferrer"
>

<button className="project-btn">

View Project

</button>

</a>

</div>


<div className="project-card">

<div className="project-image">

<div className="project-preview-grid-two">

<img
src={agri_dashboard}
alt="Agriculture Dashboard"
/>

<img
src={agri_trend}
alt="Commodity Trend"
/>

</div>

</div>


<h2>
Agricultural Commodity Price & Arrival Analysis
</h2>

<br/>

<p className="project-hook">

Agricultural prices don't move randomly.

<br/><br/>

They move with seasons,
supply chains,
and decisions made far from
any spreadsheet.

</p>


<p className="project-desc">

One of my earliest data projects —
and the one that made data feel consequential.

<br/><br/>

I worked with agricultural commodity
price and arrival data, exploring
seasonal trends and market patterns
through Excel analysis and Power BI dashboards.

<br/><br/>

The numbers were simple.

<br/><br/>

What they pointed to wasn't.

</p>


<div className="project-tags">

<span>Excel</span>

<span>Power BI</span>

<span>Data Cleaning</span>

<span>Trend Analysis</span>

<span>Dashboard Design</span>

<span>Visual Reporting</span>

</div>


<div className="project-learn-box">

<h4>
What I Learned
</h4>

<p>

This project introduced me
to a question I've carried
into every project since:

<br/><br/>

What is this data a record of?

<br/><br/>

Not what does it contain,
but what real-world behaviour
created it.

<br/><br/>

That question changed
how I analyse everything.

</p>

</div>

<a
href="https://drive.google.com/drive/folders/1SsHfDsZ3rPWlPDmVWYWPzrzoVtHk5-O2?usp=drive_link"
target="_blank"
rel="noopener noreferrer"
>

<button className="project-btn">

View Project

</button>

</a>

</div>



{/* ROW 3 */}

<div className="project-card">

<div className="project-image">

<div className="project-preview-grid-two">

<img
src={product_ranking}
alt="Product Ranking"
/>

<img
src={repeat_customers}
alt="Repeat Customers"

/>

</div>

</div>

<h2>
Retail Sales Analysis (SQL)
</h2>

<br/>

<p className="project-hook">

Every business question has a shape.

<br/><br/>

SQL taught me to recognise that shape
before writing a single query.

</p>


<p className="project-desc">

A retail sales project that taught me
more about thinking than querying.

<br/><br/>

Working through customer trends,
product patterns and sales behaviour
in SQL, I learned that every filter
is an assumption and every join
is a decision.

<br/><br/>

The data was retail.

The lesson was universal.

</p>


<div className="project-tags">

<span>SQL</span>

<span>Complex Joins</span>

<span>Aggregation</span>

<span>Filtering</span>

<span>Customer Trends</span>

<span>Product Analysis</span>

<span>Sales Insights</span>

</div>


<div className="project-learn-box">

<h4>
What I Learned
</h4>

<p>

The hardest queries weren't the ones
with the most joins.

<br/><br/>

They were the ones where I had to stop
and ask:

<br/><br/>

"Am I measuring what I think
I'm measuring?"

<br/><br/>

That question follows me into
every analysis I do now.

</p>

</div>


<a
href="https://github.com/moulyalenka/Retail-sales-sql-analysis"
target="_blank"
rel="noopener noreferrer"
>

<button className="project-btn">

View Project

</button>

</a>

</div>


<div className="project-card">

<div className="project-image">

<div className="project-preview-grid">

<img
src={report1}
alt="Dashboard"
/>

<img
src={report2}
alt="Report"
/>

<img
src={report3}
alt="Power BI"
/>

</div>

</div>


<h2>
Reports & Dashboards Showcase
</h2>

<br/>

<p className="project-hook">

Visualisation is not decoration.

<br/><br/>

It is an argument made without words —
and it has to be just as precise.

</p>


<p className="project-desc">

Dashboards and visual reports built
across multiple projects —
agricultural data, retail analysis,
machine learning outputs.

<br/><br/>

Each one approached differently
depending on what the data needed
to say and who needed to read it.

<br/><br/>

The tools stayed consistent.

The thinking behind each layout didn't.

</p>



<div className="project-tags">

<span>Power BI</span>

<span>Dashboard Design</span>

<span>Visual Communication</span>

<span>Report Building</span>

<span>Data Storytelling</span>

</div>


<div className="project-learn-box">

<h4>
What I Learned
</h4>

<p>

Simplicity in data visualisation
is not the absence of complexity.

<br/><br/>

It is complexity that has been resolved —
deliberately, with the reader in mind.

<br/><br/>

That took longer to learn
than any technical skill.

</p>

</div>

<a
href="https://drive.google.com/drive/folders/1gl8KKBqlKwoCmnZ8MH6Ba2Fs0PZbs9-4?usp=drive_link"
target="_blank"
rel="noopener noreferrer"
>

<button className="project-btn">

View Project

</button>

</a>

</div>

</div>
)}


{mode==="tech" && (

<div className="tech-projects-grid">

<div className="tech-card">

<p className="future-no">
Future Build 01
</p>

<h3>
The first system
that felt real
</h3>

<p>

This space is intentionally unfinished.

<br/><br/>

I'm building this chapter now.

</p>

<span>[ Coming Soon ]</span>

</div>



<div className="tech-card">

<p className="future-no">
Future Build 02
</p>

<h3>
Learning through building
</h3>

<p>

Some ideas need time
before they become useful.

</p>

<span>[ Coming Soon ]</span>

</div>



<div className="tech-card">

<p className="future-no">
Future Build 03
</p>

<h3>
Experiments before products
</h3>

<p>

Curiosity usually starts here.

</p>

<span>[ In Progress ]</span>

</div>



<div className="tech-card">

<p className="future-no">
Still Writing...
</p>

<h3>
Still building.
Still exploring.
</h3>

<p>

Not everything valuable
starts complete.

</p>

<span>[ Building ]</span>

</div>

</div>

)}
</section>

)

}

export default Projects;