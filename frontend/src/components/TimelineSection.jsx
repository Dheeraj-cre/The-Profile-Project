import "./TimelineSection.css";

function TimelineSection({ workTimeline }) {
  if (!workTimeline || workTimeline.length === 0) return null;

  return (
    <div className="timeline-section">

      <h3 className="timeline-section__title">
        Work Experience
      </h3>

      <div className="timeline-section__list">
        {workTimeline.map((job, index) => (
          <div key={index} className="timeline-section__item">

            <div className="timeline-section__dot"></div>

            <div className="timeline-section__content">
              <h4 className="timeline-section__role">
                {job.role}
              </h4>

              <p className="timeline-section__company">
                {job.company}
              </p>

              <p className="timeline-section__duration">
                {job.startDate} – {job.endDate}
              </p>

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

export default TimelineSection;
