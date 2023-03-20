// function Paragraph(props) {
//   return <p style={{ color: props.color }}>{props.text}</p>;
// }

// function Paragraph(props) {
//   const { color, text } = props;

//   return <p style={{ color: color }}>{text}</p>;
// }

function Paragraph({ text, color, numberOfLines, isHidden }) {
  return (
    <div>
      Number of Lines: {numberOfLines + 1}
      <br />
      <br />
      {!isHidden ? <p style={{ color }}>{text}</p> : null}
    </div>
  );
}

export default Paragraph;
