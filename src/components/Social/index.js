import React from 'react';

import Wrapper from './Wrapper';
import SocialLink from './SocialLink';

function Social({ twitter, youtube, email, rss, android, itunes, soundcloud, russian }) {
  return (
    <Wrapper>
        <SocialLink href={itunes} target="_blank">
            iTunes
        </SocialLink>
        <SocialLink href={youtube} target="_blank">
          YouTube
        </SocialLink>
        <SocialLink href={rss} target="_blank">
            RSS
        </SocialLink>
        <SocialLink href={twitter} target="_blank">
            Twitter
        </SocialLink>
        <SocialLink href={email}>
            E-mail
        </SocialLink>
        <SocialLink href={android} target="_blank">
            Subscribe on Android
        </SocialLink>
        <SocialLink href={soundcloud} target="_blank">
            SoundCloud
        </SocialLink>
        <SocialLink href={russian} target="_blank">
            Russian version
        </SocialLink>
    </Wrapper>
  );
}

export default Social;
