import Spline from '@splinetool/react-spline';
import React from 'react';
import { useRef } from 'react';
import type { Application, SPEObject } from '@splinetool/runtime';
import Spline from '../src/Spline';
import anime from 'animejs';



export default function SplineAnim() {
  const cube = useRef<SPEObject>();
  return (
    <Spline scene="https://prod.spline.design/bye75lAbNC7WpUfn/scene.splinecode" 
    onLoad={(spline: Application) => {
      cube.current = spline.findObjectByName('Cube');
    }}/>
  );
}
