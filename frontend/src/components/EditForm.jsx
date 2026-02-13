function EditForm({ formData, handleChange, handleSave, cancelEdit }) {
  return (
    <>
      <input
        type="text"
        name="name"
        value={formData.name || ""}
        onChange={handleChange}
        placeholder="Name"
      />

      <textarea
        name="bio"
        value={formData.bio || ""}
        onChange={handleChange}
        placeholder="Bio"
      />

      <button className="save-btn" onClick={handleSave}>
        Save
      </button>

      <button className="cancel-btn" onClick={cancelEdit}>
        Cancel
      </button>
    </>
  );
}

export default EditForm;
