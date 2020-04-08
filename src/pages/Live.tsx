import React, { Fragment } from 'react'
import ReactEcharts from 'echarts-for-react'
import 'echarts-gl'


export const Live = () => {
  const getOption = () => {
    return {
      backgroundColor: '#000',
      height: 700,
      globe: {
        baseTexture: `/data/world.topo.bathy.200401.jpg`,
        heightTexture: `/data/world.topo.bathy.200401.jpg`,
        displacementScale: 0.04,
        shading: 'realistic',
        environment: `/data/starfield.jpg`,
        realisticMaterial: {
          roughness: 0.9,
        },
        postEffect: {
          enable: true,
        },
        light: {
          main: {
            intensity: 5,
            shadow: true,
          },
          ambientCubemap: {
            texture: `/data/pisa.hdr`,
            diffuseIntensity: 0.2,
          },
        },
      },
    }
  }

  return (
    <Fragment>
      <ReactEcharts
        option={getOption()}
        style={{ height: '90vh', width: '100vw' }}
      />
    </Fragment>
  )
}
