function Question() {
  return (
    <>
      <div className="Question-Page">
        <div className="Qleft-side">
          <div className="Qleft-top">
            <span className="outOf">Question 6 of 10</span>
            <h2>
              Which of these color <br /> contrast ratios defines the <br />
              minimum WCAG 2.1 Level <br />
              AA requirement for normal text?
            </h2>
          </div>
          <div className="slide-bar">
            <div></div>
          </div>
        </div>
        <div className="Qright-side">
          <div className="option">
            <div>
              <div>A</div>
              <span>4.5 : 1</span>
            </div>
            <div>
              <div>B</div>
              <span>3 : 1</span>
            </div>
            <div>
              <div>C</div>
              <span>7 : 1</span>
            </div>
            <div>
              <div>D</div>
              <span>2.5 : 1</span>
            </div>
          </div>
          <button className="next-btn">Submit Answer</button>
        </div>
      </div>
    </>
  );
}

export default Question;
