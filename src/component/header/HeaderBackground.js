import React from 'react';

import useStyles from "../../assets/js/style";
import { Typography, Container } from '@material-ui/core'

function HeaderBackground(props) {
    const classes = useStyles(props);
    return (
      <div className={classes.headerBackground}>
        <div className={classes.backgroundBlackOverlay}>
          <Container maxWidth="sm">
            <Typography
              variant="h4"
              className={classes.headerTitle}
              align="center"
            >
              A Place for Entrepreneurs to Share and Discover New Stories
            </Typography>
          </Container>
        </div>
      </div>
    );

}

export default HeaderBackground
