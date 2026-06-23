

export default function Plans() {
  return (
    <>
      <div className="dropdown-container">
      </div>

      <div className="input-row">
        <input type="text" id="planInput" placeholder="Or add your own..." />
      </div>

      <button type="button" className="add-btn" onClick={addPlan}>
        ✨ Add to Schedule
      </button>

      <div className="plan-list" id="planList">
      </div>

      <button type="reset" className="clear-all" onClick={clearAll}>
        Clear Board
      </button>
    </>
  );
}

function addPlan() {
}

function clearAll() {
}

