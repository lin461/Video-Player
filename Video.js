import React from 'react';

export class Video extends React.Component {
  render() {
    const src = this.props.src;
    return (
      <div>
        <video src={src} controls autostart autoplay />
      </div>
    );
  }
}
