import React from 'react'
import Popover from 'react-bootstrap/Popover';

const popover = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">User history</Popover.Header>
        <Popover.Body>
            To see user history you must input correct user <strong>ID</strong>.
        </Popover.Body>
    </Popover>
);

export default popover





{/* <Popover.Header as="h3">User history</Popover.Header>
<Popover.Body>
    To see user history you must input correct user <strong>ID</strong>.
</Popover.Body> */}