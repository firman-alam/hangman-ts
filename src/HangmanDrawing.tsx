import React from 'react';

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

const HEAD = (
  <div
    style={{
      height: '50px',
      width: '50px',
      borderRadius: '100%',
      border: '10px solid black',
      position: 'absolute',
      top: '50px',
      right: '-30px',
    }}
  />
);

const BODY = (
  <div
    style={{
      height: '100px',
      width: '10px',
      position: 'absolute',
      top: '110px',
      right: '0',
      background: 'black',
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      height: '10px',
      width: '100px',
      position: 'absolute',
      background: 'black',
      top: '150px',
      right: '-100px',
      rotate: '-30deg',
      transformOrigin: 'left bottom',
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      height: '10px',
      width: '100px',
      position: 'absolute',
      background: 'black',
      top: '150px',
      right: '10px',
      rotate: '30deg',
      transformOrigin: 'right bottom',
    }}
  />
);

const RIGHT_FOOT = (
  <div
    style={{
      height: '10px',
      width: '100px',
      position: 'absolute',
      background: 'black',
      top: '200px',
      right: '-100px',
      rotate: '50deg',
      transformOrigin: 'left top',
    }}
  />
);

const LEFT_FOOT = (
  <div
    style={{
      height: '10px',
      width: '100px',
      position: 'absolute',
      background: 'black',
      top: '200px',
      right: '10px',
      rotate: '-50deg',
      transformOrigin: 'right top',
    }}
  />
);

const BODY_PART = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_FOOT, LEFT_FOOT];

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div style={{ position: 'relative' }}>
      {BODY_PART.slice(0, numberOfGuesses)}
      <div
        style={{
          height: '50px',
          width: '10px',
          background: 'black',
          top: 0,
          right: 0,
          position: 'absolute',
        }}
      />
      <div
        style={{
          height: '10px',
          width: '200px',
          background: 'black',
          marginLeft: '120px',
        }}
      />
      <div
        style={{
          height: '400px',
          width: '10px',
          background: 'black',
          marginLeft: '120px',
        }}
      />
      <div style={{ height: '10px', width: '250px', background: 'black' }} />
    </div>
  );
};

export default HangmanDrawing;
