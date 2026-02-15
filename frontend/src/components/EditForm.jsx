import "./EditForm.css"
function EditForm({ formData, handleChange, handleSave, cancelEdit }) {
  const handleSkillChange = (e) => {
    const skillsArray = e.target.value.split(",").map((s) => s.trim());

    handleChange({
      target: {
        name: "skills",
        value: skillsArray,
      },
    });
  };

  const handleTimelineChange = (index, field, value) => {
    const updatedTimeline = [...formData.workTimeline];
    updatedTimeline[index][field] = value;

    handleChange({
      target: {
        name: "workTimeline",
        value: updatedTimeline,
      },
    });
  };

  return (
    <div className="edit-container">

      {/* Basic Info */}
      <table className="edit-table">
        <tbody>
          <tr>
            <td>Name</td>
            <td>
              <input
                type="text"
                name="name"
                value={formData.name || ""}
                onChange={handleChange}
              />
            </td>
          </tr>

          <tr>
            <td>Bio</td>
            <td>
              <textarea
                name="bio"
                value={formData.bio || ""}
                onChange={handleChange}
              />
            </td>
          </tr>

          <tr>
            <td>Skills</td>
            <td>
              <textarea
                value={formData.skills?.join(", ") || ""}
                onChange={handleSkillChange}
                placeholder="React, Node.js, MongoDB"
              />
            </td>
          </tr>
        </tbody>
      </table>

      {/* Work Experience Table */}
      <h3 className="section-title">Work Experience</h3>

      <table className="timeline-table">
        <thead>
          <tr>
            <th>Role</th>
            <th>Company</th>
            <th>Start</th>
            <th>End</th>
            <th>Description</th>
          </tr>
        </thead>

        <tbody>
          {formData.workTimeline?.map((job, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={job.role}
                  onChange={(e) =>
                    handleTimelineChange(index, "role", e.target.value)
                  }
                />
              </td>

              <td>
                <input
                  type="text"
                  value={job.company}
                  onChange={(e) =>
                    handleTimelineChange(index, "company", e.target.value)
                  }
                />
              </td>

              <td>
                <input
                  type="text"
                  value={job.startDate}
                  onChange={(e) =>
                    handleTimelineChange(index, "startDate", e.target.value)
                  }
                />
              </td>

              <td>
                <input
                  type="text"
                  value={job.endDate}
                  onChange={(e) =>
                    handleTimelineChange(index, "endDate", e.target.value)
                  }
                />
              </td>

              <td>
                <textarea
                  value={job.description}
                  onChange={(e) =>
                    handleTimelineChange(index, "description", e.target.value)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Buttons */}
      <div className="button-group">
        <button className="save-btn" onClick={handleSave}>
          Save
        </button>

        <button className="cancel-btn" onClick={cancelEdit}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default EditForm;
