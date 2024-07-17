export default function TocCollapse() {
  return (
    <>
      <input type="checkbox" id="toc-toggle"></input>
      <label htmlFor="toc-toggle" className="toc-label">
        <span>Table of Contents</span>
      </label>
    </>
  );
}
