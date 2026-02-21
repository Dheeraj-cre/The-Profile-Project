// Import the CSS file for styling this component
import "./TimelineSection.css";

// Functional React component that receives workTimeline as a prop
function TimelineSection({ workTimeline }) {

  // If workTimeline is empty or undefined, render nothing
  if (!workTimeline || workTimeline.length === 0) return null;

  return (
    // Main wrapper container for the timeline section
    <div className="timeline-section">

      {/* Section Title */}
      <h3 className="timeline-section__title">
        Work Experience
      </h3>

      {/* Container for all timeline items */}
      <div className="timeline-section__list">

        {/* Loop through each job object in workTimeline array */}
        {workTimeline.map((job, index) => (

          // Individual timeline item (each job entry)
          <div key={index} className="timeline-section__item">

            {/* Timeline dot indicator (visual marker on timeline line) */}
            <div className="timeline-section__dot"></div>

            {/* Content container for job details */}
            <div className="timeline-section__content">

              {/* Job Role / Position Title */}
              <h4 className="timeline-section__role">
                {job.role}
              </h4>

              {/* Company Name */}
              <p className="timeline-section__company">
                {job.company}
              </p>

              {/* Job Duration (Start Date - End Date) */}
              <p className="timeline-section__duration">
                {job.startDate} – {job.endDate}
              </p>

              {/* Job Description */}
              <p className="timeline-section__description">
                {job.description}
              </p>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

// Export component so it can be used in other files
export default TimelineSection;
