
import "./ColorPicker.css";

// const styles = {
//   option: {
//     display: "inline-block",
//     width: 40,
//     height: 40,
//     margin: 4,
//   },
// };

// const ColorPicker = ({ options }) => {
//   return (
//     <div>
//       <h2>Color Picker</h2>
//       <div>
//         {options.map(({ label, color }) => (
//           <span
//             key={label}
//             style={{ ...styles.option, backgroundColor: color }}
//           >
//             {color}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

const ColorPicker = ({ options }) => {
  return (
    <div className="ColorPicker">
      <h2 className="ColorPicker__title ">Color Picker</h2>
      <div>
        {options.map(({ label, color }) => (
          <span
            key={label}
            className="ColorPicker__option"
            style={{ backgroundColor: color }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
