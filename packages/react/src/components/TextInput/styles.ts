import { styled } from "../../styles";

export const Input = styled("input", {
  fontFamily: "$default",
  fontWeight: "$regular",
  color: "$gray100",
  background: "$dark100",
  borderRadius: "$xs",
  padding: "0 $3",
  fontSize: "$sm",
  boxSizing: "border-box",
  width: "288px",
  height: "44px",
  border: "none",
  display: "flex",
  alignItems: "baseline",
  outline: "0",

  "&:has(input:disabled)": {
    opacity: 0.5,
    cursor: "not-allowed",
  },
});
