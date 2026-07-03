import { ImageResponse } from "next/og";
import styles from "./icon.module.scss";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 21,
        background: "#569787",
        width: "100%",
        height: "100%",
        display: "flex",
        borderRadius: "32px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      🪕
    </div>,
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    },
  );
}
