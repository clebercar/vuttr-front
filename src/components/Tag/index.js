import React from 'react';

import {
    TagList,
    TagItem
} from './styles';

export default function Tag({ tags }) {
  return (
    <TagList>
        {tags.map((tag, index) => (
          <TagItem key={index}>{tag}</TagItem>
        ))}
    </TagList>
  );
}
