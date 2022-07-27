const Test = ({ mouseOverEvent, mouseOutEvent, src }) => {
  return (
    <img onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} src={src} />
  );
};

export default Test;