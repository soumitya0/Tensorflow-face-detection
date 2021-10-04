import React, { useEffect, useState } from "react";
import Camera from "../Camera/Camera";

const screen = process.env.PUBLIC_URL + "/screen.svg";
const wp = process.env.PUBLIC_URL + "/wp.png";
const thisPc = process.env.PUBLIC_URL + "/thisPcImg.png";
const bin = process.env.PUBLIC_URL + "/recycleBin.png";

const cameraIcon = process.env.PUBLIC_URL + "/gallery.svg";

function SVGScreen() {
  const [powerOn, setPower] = useState(false);
  const [openCamera, setOpenCamera] = useState(false);
  const [renderDesktop, setrenderDesktop] = useState(true);

  const handleScreenOnOf = () => {
    setPower(!powerOn);
  };

  useEffect(() => {
    if (powerOn === true) {
      setOpenCamera(false);
      setrenderDesktop(true);
    }
  }, [powerOn]);

  const handleCamera = () => {
    console.log("CLICK WORKING");
    setrenderDesktop(false);
    setOpenCamera(true);
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <svg
        width="100%"
        height="100%"
        version="1.1"
        viewBox="0 0 1920.0001 1631.7882"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="h"
            x1="6603.9"
            x2="6603.9"
            y1="946.88"
            y2="-1479.8"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-opacity="0" offset="0" />
            <stop stop-color="#fff" stop-opacity=".661" offset="1" />
          </linearGradient>
          <linearGradient
            id="g"
            x1="3145.3"
            x2="3082.1"
            y1="1359.6"
            y2="1461"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" />
            <stop stop-color="#4d4d4d" offset="1" />
          </linearGradient>
          <linearGradient
            id="i"
            x1="1255.4"
            x2="1255.4"
            y1="1523.3"
            y2="2330.3"
            gradientTransform="translate(750,-500)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#666" offset="0" />
            <stop stop-color="#ccc" offset=".38302" />
            <stop stop-color="#b3b3b3" offset=".62399" />
            <stop stop-color="#e6e6e6" offset=".79103" />
            <stop stop-color="#666" offset="1" />
          </linearGradient>
          <linearGradient
            id="j"
            x1="2155.1"
            x2="2155.1"
            y1="1830.3"
            y2="1885.4"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" />
            <stop stop-color="#b3b3b3" offset=".19188" />
            <stop stop-color="#b3b3b3" offset=".92016" />
            <stop stop-color="#1a1a1a" offset="1" />
          </linearGradient>
          <filter
            id="f"
            x="-.084455"
            y="-.74658"
            width="1.1689"
            height="2.4932"
            color-interpolation-filters="sRGB"
          >
            <feGaussianBlur stdDeviation="97.211503" />
          </filter>
        </defs>
        <g transform="translate(-3765.1 -1855)">
          <g
            transform="matrix(.38591 0 0 .38591 2272.1 2464.4)"
            shape-rendering="auto"
          >
            <ellipse
              transform="matrix(1.5407 0 0 .53735 -3437.1 1177.3)"
              cx="6356.2"
              cy="2349.6"
              rx="1381.2"
              ry="156.25"
              color="#000000"
              color-rendering="auto"
              filter="url(#f)"
              image-rendering="auto"
              opacity=".35"
              solid-color="#000000"
              style={{ isolation: "auto", mixBlendMode: "normal" }}
            />
            <g transform="translate(50.747 -79.364)">
              <g transform="translate(4150.4 633.85)">
                <path
                  d="m1668.3 1023.3c-21.173 364.76-50.392 673.41-302 806.95h1577.6c-251.61-133.54-280.83-442.19-302-806.95z"
                  color="#000000"
                  color-rendering="auto"
                  fill="url(#i)"
                  image-rendering="auto"
                  solid-color="#000000"
                  style={{ isolation: "auto", mixBlendMode: "normal" }}
                />
                <rect
                  x="1366.3"
                  y="1830.3"
                  width="1577.6"
                  height="55.113"
                  color="#000000"
                  color-rendering="auto"
                  fill="url(#j)"
                  image-rendering="auto"
                  solid-color="#000000"
                  style={{ isolation: "auto", mixBlendMode: "normal" }}
                />
              </g>
              <rect
                x="4030"
                y="-1499.8"
                width="4551"
                height="3221"
                ry="60"
                color="#000000"
                color-rendering="auto"
                fill="#333"
                image-rendering="auto"
                solid-color="#000000"
                style={{ isolation: "auto", mixBlendMode: "normal" }}
              />
              <rect
                x="4030"
                y="-1479.8"
                width="4551"
                height="3221"
                ry="60"
                color="#000000"
                color-rendering="auto"
                fill="#333"
                image-rendering="auto"
                solid-color="#000000"
                style={{ isolation: "auto", mixBlendMode: "normal" }}
              />
              <rect
                x="4030"
                y="-1479.8"
                width="4551"
                height="3221"
                ry="60"
                color="#000000"
                color-rendering="auto"
                fill="url(#h)"
                image-rendering="auto"
                opacity=".904"
                solid-color="#000000"
                style={{ isolation: "auto", mixBlendMode: "normal" }}
              />
              <path
                d="m4090-1479.8h2215.5l2275.5 2630.5v530.5c0 33.24-26.76 60-60 60h-4431c-33.24 0-60-26.76-60-60v-3101c0-33.24 26.76-60 60-60z"
                color="#000000"
                color-rendering="auto"
                fill="#1a1a1a"
                image-rendering="auto"
                solid-color="#000000"
                style={{ isolation: "auto", mixBlendMode: "normal" }}
              />

              {powerOn ? (
                openCamera ? (
                  <svg width="5cm" height="4cm" version="1.1">
                    <circle x="0" y="0" r="200"></circle>
                    <image
                      href="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                      x="0"
                      y="0"
                      height="200px"
                      width="200px"
                    />
                  </svg>
                ) : renderDesktop ? (
                  <>
                    <image
                      x="4100"
                      y="-1400"
                      width="4400"
                      height="2907"
                      style={{}}
                      href={wp}
                    />
                    <svg
                      viewBox="0 0 500 500"
                      x="4000"
                      y="-1300"
                      style={{ position: "relative" }}
                    >
                      <image
                        href={thisPc}
                        height="100"
                        width="100"
                        style={{ transform: "translateY(50px)" }}
                      />

                      <image
                        href={bin}
                        height="100"
                        width="100"
                        style={{ transform: "translateY(190px)" }}
                      />

                      <image
                        href={cameraIcon}
                        height="100"
                        width="100"
                        style={{
                          transform: "translateY(340px)",
                          cursor: "pointer",
                        }}
                        onClick={handleCamera}
                      />
                    </svg>
                  </>
                ) : null
              ) : null}

              <g
                transform="translate(5302.9 192.5)"
                onClick={handleScreenOnOf}
                style={{ cursor: "pointer" }}
              >
                <circle
                  cx="3113.8"
                  cy="1410.4"
                  r="59.753"
                  color="#000000"
                  color-rendering="auto"
                  fill="url(#g)"
                  image-rendering="auto"
                  solid-color="#000000"
                  style={{ isolation: "auto", mixBlendMode: "normal" }}
                />
                <path
                  d="m3122.5 1358.2-0.8867 7.8477a45.11 45.11 0 0 1 37.299 44.385 45.11 45.11 0 0 1 -45.111 45.111 45.11 45.11 0 0 1 -45.109 -45.111 45.11 45.11 0 0 1 37.293 -44.42l-0.8789-7.7656a52.967 52.967 0 0 0 -44.272 52.186 52.967 52.967 0 0 0 52.967 52.967 52.967 52.967 0 0 0 52.967 -52.967 52.967 52.967 0 0 0 -44.268 -52.232z"
                  color="#000000"
                  color-rendering="auto"
                  fill={powerOn ? "#2affd5" : "red"}
                  image-rendering="auto"
                  solid-color="#000000"
                  style={{ isolation: "auto", mixBlendMode: "normal" }}
                />
                <rect
                  x="3109.9"
                  y="1357.4"
                  width="7.8287"
                  height="53.033"
                  ry="0"
                  color="#000000"
                  color-rendering="auto"
                  fill={powerOn ? "#2affd5" : "red"}
                  image-rendering="auto"
                  solid-color="#000000"
                  style={{ isolation: "auto", mixBlendMode: "normal" }}
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
export default SVGScreen;
