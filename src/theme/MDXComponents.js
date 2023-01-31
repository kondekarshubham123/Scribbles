import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Tabs from '@theme/Tabs';
import SolutionAuthor from '@site/src/components/SolutionAuthor';
import TabItem from '@theme/TabItem';


export default {
    // Re-use the default mapping
    ...MDXComponents,
    // custom
    SolutionAuthor,
    Tabs,
    TabItem,
};