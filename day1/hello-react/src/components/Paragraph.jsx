// function Paragraph(props) {
//   return <p style={{ color: props.color }}>{props.text}</p>;
// }

// function Paragraph(props) {
//   const { color, text } = props;

//   return <p style={{ color: color }}>{text}</p>;
// }

import { bool, number, string } from 'prop-types';

function Paragraph({ text, color, numberOfLines, isHidden }) {
  return (
    <div>
      Number of Lines: {numberOfLines}
      <br />
      <br />
      {!isHidden ? <p style={{ color }}>{text}</p> : null}
    </div>
  );
}

Paragraph.propTypes = {
  text: string.isRequired,
  color: string,
  numberOfLines: number,
  isHidden: bool,
};

Paragraph.defaultProps = {
  text: 'Varsayılan içerik',
  numberOfLines: 5,
  isHidden: false,
};

export default Paragraph;
