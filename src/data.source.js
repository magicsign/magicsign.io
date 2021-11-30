import React from 'react';
import logo from './logo.png';

export const Content110DataSource = {
  OverPack: {
    className: 'home-page-wrapper content11-wrapper kwl0sqkn7i8-editor_css',
    playScale: 0.3,
    appear: true,
    always: true,
    replay: true,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children: (<img width="100px" alt="MagicSign" src={logo} />),
        className: 'title-image',
      },
      {
        name: 'title',
        children: (
          <span>
            <p>Magic Sign</p>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        children: (
          <span>
            <span>
              <span>
                <p>Sign documents with your crypto wallet</p>
              </span>
            </span>
          </span>
        ),
        className: 'title-content',
      },
      {
        name: 'content2',
        children: (
          <span>
            <p>Crypto native doc signature for crypto native companies.</p>
          </span>
        ),
        className: 'title-content',
      },
    ],
  },
  button: {
    className: '',
    children: {
      a: {
        className: 'button kwl0u7tpeqb-editor_css',
        href: 'https://discord.gg/d9k8QuyKcz',
        children: (
          <span>
            <p>Join Discord</p>
          </span>
        ),
      },
    },
  },
};
