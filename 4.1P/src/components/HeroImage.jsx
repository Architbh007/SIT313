import React from 'react';
import { Image } from 'semantic-ui-react';

function HeroImage() {
  return (
    <div style={{ margin: '2rem 0' }}>
      <Image src="https://picsum.photos/id/53/1200/300" alt="Banner" fluid />
    </div>
  );
}

export default HeroImage;
