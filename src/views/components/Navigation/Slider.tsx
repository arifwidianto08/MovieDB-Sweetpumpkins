import React from "react";
import InputRange from "react-input-range";

import "react-input-range/lib/css/index.css";
import "../../../assets/style/Slider.css";

const Slider = (props: any) => {
  const onChange = (range: any) => {
    props.onChange({
      type: props.data.label,
      value: range
    });
  };
  const { label, min, max, step, value } = props.data;
  return (
    <div className="slider">
      <label>{label}</label>
      <InputRange
        minValue={min}
        maxValue={max}
        step={step}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Slider;
