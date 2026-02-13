
function TimelineSection({ workTimeline }) {
  if (!workTimeline || workTimeline.length === 0) return null;

  return (
    <div className="timeline">
      <h3>Work Experience</h3>

      {workTimeline.map((job, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <h4>{job.role}</h4>
            <p className="company">{job.company}</p>
            <p className="duration">
              {job.startDate} - {job.endDate}
            </p>
            <p className="description">{job.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TimelineSection;
