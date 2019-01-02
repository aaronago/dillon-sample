import React from 'react';
import { Button, CenteredContent } from './blocks';

const ErrorPage = ({ handleClick, title }) => (
  <CenteredContent>
    <h2>{title}</h2>
    <Button onClick={handleClick}>Try Again</Button>
  </CenteredContent>
);
ErrorPage.defaultProps = {
  title: 'Whoops! There was a problem loading your movies'
};
export default ErrorPage;
